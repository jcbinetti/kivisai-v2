"use client"

import { useEffect, useRef } from "react"

interface RadarChartProps {
  data: {
    category: string
    userScore: number
    benchmarkScore?: number
    maxScore: number
  }[]
  showBenchmark?: boolean
}

export default function EvalKitRadarChart({ data, showBenchmark = false }: RadarChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !data || data.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Canvas-Größe setzen
    const size = 300
    canvas.width = size
    canvas.height = size

    const centerX = size / 2
    const centerY = size / 2
    const radius = size / 2 - 40

    // Canvas leeren
    ctx.clearRect(0, 0, size, size)

    // Hintergrund-Raster zeichnen
    ctx.strokeStyle = "#E5E7EB"
    ctx.lineWidth = 1

    // Konzentrische Kreise
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath()
      ctx.arc(centerX, centerY, (radius * i) / 5, 0, 2 * Math.PI)
      ctx.stroke()
    }

    // Achsen zeichnen
    const angleStep = (2 * Math.PI) / data.length

    data.forEach((_, index) => {
      const angle = index * angleStep - Math.PI / 2
      const x = centerX + Math.cos(angle) * radius
      const y = centerY + Math.sin(angle) * radius

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.stroke()
    })

    // Benutzer-Daten zeichnen
    ctx.strokeStyle = "#006666"
    ctx.fillStyle = "rgba(0, 102, 102, 0.2)"
    ctx.lineWidth = 2

    ctx.beginPath()
    data.forEach((item, index) => {
      const angle = index * angleStep - Math.PI / 2
      const value = Math.max(0, Math.min(5, item.userScore || 0))
      const distance = (radius * value) / 5
      const x = centerX + Math.cos(angle) * distance
      const y = centerY + Math.sin(angle) * distance

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.closePath()
    ctx.fill()
    ctx.stroke()

    // Benchmark-Daten zeichnen (falls aktiviert)
    if (showBenchmark) {
      ctx.strokeStyle = "#00B4B4"
      ctx.fillStyle = "transparent"
      ctx.setLineDash([5, 5])

      ctx.beginPath()
      data.forEach((item, index) => {
        const angle = index * angleStep - Math.PI / 2
        const value = Math.max(0, Math.min(5, item.benchmarkScore || 0))
        const distance = (radius * value) / 5
        const x = centerX + Math.cos(angle) * distance
        const y = centerY + Math.sin(angle) * distance

        if (index === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      })
      ctx.closePath()
      ctx.stroke()
      ctx.setLineDash([])
    }

    // Labels zeichnen
    ctx.fillStyle = "#1F2937"
    ctx.font = "12px Arial"
    ctx.textAlign = "center"

    data.forEach((item, index) => {
      const angle = index * angleStep - Math.PI / 2
      const labelDistance = radius + 20
      const x = centerX + Math.cos(angle) * labelDistance
      const y = centerY + Math.sin(angle) * labelDistance

      const label = item.category.length > 8 ? item.category.substring(0, 6) + "..." : item.category
      ctx.fillText(label, x, y + 4)
    })

    // Werte-Labels (0-5)
    ctx.fillStyle = "#6B7280"
    ctx.font = "10px Arial"
    for (let i = 1; i <= 5; i++) {
      ctx.fillText(i.toString(), centerX + 5, centerY - (radius * i) / 5 + 3)
    }
  }, [data, showBenchmark])

  if (!data || data.length === 0) {
    return (
      <div className="w-full h-96 bg-white rounded-lg p-4 border flex items-center justify-center">
        <p className="text-gray-500">Keine Daten für die Darstellung verfügbar</p>
      </div>
    )
  }

  return (
    <div className="w-full bg-white rounded-lg p-4 border">
      <div className="flex flex-col items-center">
        <canvas ref={canvasRef} className="max-w-full h-auto" style={{ width: "300px", height: "300px" }} />

        {/* Legende */}
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-kivisai-deep-dark-blue rounded"></div>
            <span>Ihr Ergebnis</span>
          </div>
          {showBenchmark && (
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-kivisai-clear-turquoise" style={{ borderStyle: "dashed" }}></div>
              <span>Branchendurchschnitt</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
