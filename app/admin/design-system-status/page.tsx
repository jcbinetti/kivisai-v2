"use client";

import React from "react"
import { ServiceCardShowcase } from "@/components/design-system/service-card-showcase"
import { DesignSystemStatus } from "@/components/design-system/design-system-status"

export default function DesignSystemStatusPage() {
  return (
    <div className="min-h-screen bg-kivisai-light-cool-gray">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-kivisai-deep-dark-blue mb-8">
          KIVISAI Design-System Status
        </h1>
        
        {/* ServiceCard Showcase */}
        <ServiceCardShowcase />
        
        {/* Design System Status */}
        <DesignSystemStatus />
      </div>
    </div>
  )
} 