"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { EVALKIT_ROLES } from "@/lib/evalkit-data"
import Image from "next/image"
import { HeroSection } from "@/components/common/hero-section"

interface RoleSelectionProps {
  onRoleSelect: (roleId: string) => void
}

const roleImages = {
  mensch: "/images-optimized/4_KIVISAI-NAVI/KIVI_Mensch.webp",
  team: "/images-optimized/4_KIVISAI-NAVI/KIVI_Team.webp",
  organisation: "/images-optimized/4_KIVISAI-NAVI/KIVI_Orga.webp",
  oekosystem: "/images-optimized/4_KIVISAI-NAVI/KIVI_Ökosystem.webp",
}

export default function RoleSelection({ onRoleSelect }: RoleSelectionProps) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId)
  }

  const handleContinue = () => {
    if (selectedRole) {
      onRoleSelect(selectedRole)
    }
  }

  return (
    <>
      <HeroSection
        variant="centered"
        size="lg"
        background="gradient"
        title="EVALKIT: Rolle wählen"
        subtitle="Schritt 1: Perspektive wählen"
        description="Wählen Sie aus, aus welcher Perspektive Sie Ihre KI-Fitness bewerten möchten. Jede Rolle bietet eine individuelle Selbsteinschätzung – für Einzelpersonen, Teams, Organisationen oder Ökosysteme."
      />
      <div className="max-w-4xl mx-auto mt-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-kivisai-deep-dark-blue mb-4">Wählen Sie Ihre Rolle</h2>
          <p className="text-lg text-kivisai-moss-green">Aus welcher Perspektive möchten Sie Ihre KI-Fitness bewerten?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {EVALKIT_ROLES.map((role) => {
            const iconSrc = roleImages[role.id as keyof typeof roleImages]
            const isSelected = selectedRole === role.id

            return (
              <Card
                key={role.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  isSelected
                    ? "ring-2 ring-kivisai-clear-turquoise bg-kivisai-clear-turquoise/5"
                    : "hover:ring-1 hover:ring-kivisai-clear-turquoise/50"
                }`}
                onClick={() => handleRoleSelect(role.id)}
              >
                <CardHeader className="flex flex-col items-center justify-center pb-2">
                  <div className="mb-3 flex flex-col items-center">
                    <div
                      className={`rounded-full shadow-md p-3 mb-2 ${
                        isSelected
                          ? "bg-kivisai-clear-turquoise/90"
                          : "bg-kivisai-light-cool-gray"
                      }`}
                    >
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-white flex items-center justify-center shadow border border-gray-200">
                        <Image
                          src={iconSrc}
                          alt={role.name}
                          width={48}
                          height={48}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-kivisai-deep-dark-blue text-center">{role.name}</CardTitle>
                    <CardDescription className="text-kivisai-moss-green text-center">{role.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-kivisai-moss-green leading-relaxed text-center">{role.thesis}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {selectedRole && (
          <div className="text-center">
            <Button
              onClick={handleContinue}
              size="lg"
              className="bg-kivisai-clear-turquoise hover:bg-kivisai-clear-turquoise/90 text-white px-8 py-3"
            >
              Fragebogen starten
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
