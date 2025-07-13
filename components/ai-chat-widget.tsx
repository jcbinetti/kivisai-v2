"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react"
import { useAnalytics } from "@/lib/analytics"

interface ChatMessage {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: number
  suggestedActions?: string[]
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId] = useState(() => Math.random().toString(36).substr(2, 9))
  const [suggestions, setSuggestions] = useState<string[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Add welcome message
      const welcomeMessage: ChatMessage = {
        id: "welcome",
        role: "assistant",
        content: "Hallo! Ich bin Ihr KI-Assistent von KIVISAI. Wie kann ich Ihnen bei Ihrer KI-Transformation helfen?",
        timestamp: Date.now(),
        suggestedActions: [
          "Was kostet strategisches Coaching?",
          "Wie lange dauert ein KI-Projekt?",
          "Ich möchte eine Demo vereinbaren",
        ],
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (input.length > 3) {
      const timer = setTimeout(async () => {
        try {
          const response = await fetch(`/api/ai-chat?sessionId=${sessionId}&input=${encodeURIComponent(input)}`)
          const data = await response.json()
          setSuggestions(data.suggestions || [])
        } catch (error) {
          console.error("Failed to get suggestions:", error)
        }
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setSuggestions([])
    }
  }, [input, sessionId])

  const sendMessage = async (messageText?: string) => {
    const text = messageText || input.trim()
    if (!text || isLoading) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setSuggestions([])

    // Track chat interaction
    trackEvent({
      action: "chat_message_sent",
      category: "ai_chat",
      label: "user_message",
      value: text.length,
    })

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          message: text,
          context: {
            currentPage: window.location.pathname,
            userAgent: navigator.userAgent,
            referrer: document.referrer,
          },
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      const data = await response.json()
      const assistantMessage: ChatMessage = {
        id: data.message.id,
        role: "assistant",
        content: data.message.content,
        timestamp: data.message.timestamp,
        suggestedActions: data.message.metadata?.suggestedActions,
      }

      setMessages((prev) => [...prev, assistantMessage])

      // Track assistant response
      trackEvent({
        action: "chat_response_received",
        category: "ai_chat",
        label: "assistant_response",
        customParameters: {
          intent: data.message.metadata?.intent,
          confidence: data.message.metadata?.confidence,
          lead_score: data.message.metadata?.leadScore,
        },
      })
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage: ChatMessage = {
        id: Date.now().toString(),
        role: "assistant",
        content: "Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      trackEvent({
        action: "chat_opened",
        category: "ai_chat",
        label: "widget_interaction",
      })
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setSuggestions([])
    inputRef.current?.focus()
  }

  const handleActionClick = (action: string) => {
    sendMessage(action)
    trackEvent({
      action: "suggested_action_clicked",
      category: "ai_chat",
      label: action,
    })
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/80 text-white shadow-lg"
        aria-label="KI-Chat öffnen"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-96 h-[500px] shadow-2xl border-2 border-kivisai-clear-turquoise">
          <CardHeader className="bg-kivisai-clear-turquoise text-white p-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bot className="w-5 h-5" />
              KIVISAI KI-Assistent
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col h-[400px] p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}>
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-kivisai-clear-turquoise flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div className={`max-w-[80%] ${message.role === "user" ? "order-first" : ""}`}>
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-kivisai-deep-dark-blue text-white ml-auto"
                          : "bg-kivisai-light-cool-gray text-kivisai-deep-dark-blue"
                      }`}
                    >
                      {message.content}
                    </div>

                    {/* Suggested Actions */}
                    {message.role === "assistant" && message.suggestedActions && (
                      <div className="mt-2 space-y-1">
                        {message.suggestedActions.map((action, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleActionClick(action)}
                            className="text-xs h-auto py-1 px-2 w-full text-left justify-start"
                          >
                            {action}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>

                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-kivisai-deep-dark-blue flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-kivisai-clear-turquoise flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-kivisai-light-cool-gray p-3 rounded-lg">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="px-4 py-2 border-t border-gray-200">
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs h-auto py-1 px-2 w-full text-left justify-start text-kivisai-moss-green hover:bg-kivisai-light-cool-gray"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex gap-2">
                <Input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ihre Nachricht..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  size="sm"
                  className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/80"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
