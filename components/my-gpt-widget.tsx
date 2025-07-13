"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, Brain } from "lucide-react"

interface Message {
  sender: "user" | "bot"
  text: string
  timestamp: Date
}

export default function MyGPTWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage: Message = {
        sender: "user",
        text: input.trim(),
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      setInput("")
      setIsTyping(true)

      // Simulate bot response
      setTimeout(() => {
        const botMessage: Message = {
          sender: "bot",
          text: "Vielen Dank für Ihre Frage! Als Demo-Chatbot kann ich diese Frage leider nicht beantworten. Bitte beachten Sie, dass keine personenbezogenen Daten gespeichert werden.",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      }, 1000)
    }
  }

  const handleExampleQuestion = (question: string) => {
    const userMessage: Message = {
      sender: "user",
      text: question,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    setTimeout(() => {
      const botMessage: Message = {
        sender: "bot",
        text: "Vielen Dank für Ihre Frage! Als Demo-Chatbot kann ich diese Frage leider nicht beantworten. Bitte beachten Sie, dass keine personenbezogenen Daten gespeichert werden.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 bg-kivisai-deep-dark-blue text-kivisai-pure-white p-4 rounded-full shadow-lg hover:bg-kivisai-clear-turquoise transition-colors z-50 focus:outline-none focus:ring-2 focus:ring-kivisai-pure-white focus:ring-offset-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Chatbot schließen" : "Chatbot öffnen"}
        aria-expanded={isOpen}
        aria-controls="chatbot-widget"
      >
        {isOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <MessageSquare className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div
          id="chatbot-widget"
          className="fixed bottom-20 right-6 w-80 h-[400px] bg-kivisai-pure-white rounded-lg shadow-xl flex flex-col z-50 border border-kivisai-light-cool-gray"
          role="dialog"
          aria-labelledby="chatbot-title"
          aria-describedby="chatbot-description"
        >
          <div className="bg-kivisai-deep-dark-blue text-kivisai-pure-white p-4 rounded-t-lg flex items-center justify-between">
            <h3 id="chatbot-title" className="font-semibold text-lg">
              KIVISAI MyGPT
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-kivisai-pure-white hover:text-kivisai-light-cool-gray focus:outline-none focus:ring-2 focus:ring-kivisai-pure-white rounded-sm"
              aria-label="Chatbot schließen"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div
            className="flex-1 p-4 overflow-y-auto text-sm space-y-3"
            role="log"
            aria-live="polite"
            aria-label="Chat-Verlauf"
          >
            <p id="chatbot-description" className="sr-only">
              Demo-Chatbot für KIVISAI. Es werden keine personenbezogenen Daten gespeichert.
            </p>

            {messages.length === 0 ? (
              <div className="text-center text-kivisai-moss-green">
                <Brain className="w-10 h-10 mx-auto mb-2 text-kivisai-deep-dark-blue" aria-hidden="true" />
                <p className="mb-4">Stellen Sie mir eine Frage zu KIVISAI!</p>
                <p className="text-xs text-kivisai-moss-green/80 mb-4">
                  Hinweis: Dies ist ein Demo-Chatbot. Es werden keine personenbezogenen Daten gespeichert.
                </p>
                <div className="space-y-2" role="group" aria-label="Beispielfragen">
                  <button
                    onClick={() => handleExampleQuestion("Wie funktioniert der ENABLE-Sprint?")}
                    className="block w-full text-left p-2 bg-kivisai-light-cool-gray rounded-md hover:bg-kivisai-light-cool-gray/80 transition-colors text-kivisai-moss-green focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise"
                  >
                    „Wie funktioniert der ENABLE-Sprint?"
                  </button>
                  <button
                    onClick={() => handleExampleQuestion("Was kostet die Potenzialanalyse?")}
                    className="block w-full text-left p-2 bg-kivisai-light-cool-gray rounded-md hover:bg-kivisai-light-cool-gray/80 transition-colors text-kivisai-moss-green focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise"
                  >
                    „Was kostet die Potenzialanalyse?"
                  </button>
                  <button
                    onClick={() => handleExampleQuestion("Ist EVALKIT auch für Einzelunternehmer nutzbar?")}
                    className="block w-full text-left p-2 bg-kivisai-light-cool-gray rounded-md hover:bg-kivisai-light-cool-gray/80 transition-colors text-kivisai-moss-green focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise"
                  >
                    „Ist EVALKIT auch für Einzelunternehmer nutzbar?"
                  </button>
                </div>
              </div>
            ) : (
              <>
                {messages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`p-2 rounded-lg max-w-[80%] ${
                        msg.sender === "user"
                          ? "bg-kivisai-deep-dark-blue text-kivisai-pure-white"
                          : "bg-kivisai-light-cool-gray text-kivisai-moss-green"
                      }`}
                      role={msg.sender === "user" ? "log" : "status"}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-kivisai-light-cool-gray text-kivisai-moss-green p-2 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-kivisai-moss-green rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-kivisai-moss-green rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-kivisai-moss-green rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          <div className="p-4 border-t border-kivisai-light-cool-gray flex">
            <label htmlFor="chat-input" className="sr-only">
              Nachricht eingeben
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ihre Frage..."
              className="flex-1 p-2 border border-kivisai-light-cool-gray rounded-l-md focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise text-kivisai-moss-green"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={isTyping || !input.trim()}
              className="bg-kivisai-vibrant-light-green text-kivisai-moss-green p-2 rounded-r-md hover:bg-kivisai-vibrant-light-green/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-kivisai-clear-turquoise"
              aria-label="Nachricht senden"
            >
              <Send className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
