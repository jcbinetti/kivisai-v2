import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Mail, Phone } from "lucide-react"

export default function TerminDisabledPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-8 text-center">
          <Calendar className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">Terminbuchung vorübergehend nicht verfügbar</h1>
          <p className="text-gray-600 mb-8">
            Unsere Online-Terminbuchung wird gerade überarbeitet. Kontaktieren Sie uns gerne direkt für einen Termin.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">info@kivisai.com</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="font-semibold">+49 (0) 123 456 789</span>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/kontakt"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Zum Kontaktformular
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
