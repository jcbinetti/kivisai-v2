"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Mail, Phone, MapPin, Building, Info } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ContactForm } from '@/components/common/contact-form'
import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-br from-kivisai-deep-dark-blue to-kivisai-clear-turquoise text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Kontakt</h1>
          <p className="text-xl mt-4 text-white/90">Wir freuen uns darauf, von Ihnen zu hören.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-kivisai-deep-dark-blue">Schreiben Sie uns eine Nachricht</h2>
            <ContactForm />
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-6 text-kivisai-deep-dark-blue">Direktkontakt</h2>
              <div className="space-y-4 text-lg">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-kivisai-clear-turquoise" />
                  <a href="mailto:team@kivisai.com" className="text-gray-700 hover:text-kivisai-deep-dark-blue">team@kivisai.com</a>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-kivisai-clear-turquoise mt-1" />
                  <div className="text-gray-700">
                    KIVISAI<br />
                    CONVIS Consult & Marketing GmbH<br />
                    Auerbachstrasse 10 - 14193 Berlin
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6 text-kivisai-deep-dark-blue">Termin online buchen</h2>
            <div className="rounded-lg shadow-lg border border-gray-200 bg-white overflow-hidden">
              <iframe
                src="https://cal.com/jcbinetti/30min?embed=true"
                width="100%"
                height="780"
                frameBorder="0"
                className="cal-iframe"
                style={{ borderRadius: 0, border: 'none', background: 'white' }}
                title="KIVISAI Termin buchen"
                allow="camera; microphone; fullscreen; display-capture"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
