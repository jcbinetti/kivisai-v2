import { AdminNavigation } from "@/components/admin/admin-navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  FolderOpen, 
  FileText, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Users,
  Brain,
  Rocket,
  Target,
  Shield,
  BookOpen,
  GraduationCap,
  Lightbulb
} from "lucide-react"
import Link from "next/link"

// Struktur aller Leistungen-Seiten
const leistungenStructure = {
  main: {
    title: "Leistungen Übersicht",
    path: "/leistungen",
    description: "Hauptseite mit allen Leistungen",
    icon: <FolderOpen className="w-5 h-5" />,
    status: "active"
  },
  services: [
    {
      title: "Coaching & Training",
      path: "/leistungen/coaching-training",
      description: "Persönliches KI-Coaching und Trainings",
      icon: <GraduationCap className="w-5 h-5" />,
      status: "active",
      subpages: [
        {
          title: "Persönliches KI-Coaching",
          path: "/leistungen/coaching-training/persoenliches-ki-coaching",
          description: "Individuelles Coaching für Führungskräfte",
          status: "active"
        }
      ]
    },
    {
      title: "INQA-Coaching",
      path: "/leistungen/inqa-coaching",
      description: "Förderfähiges Coaching für KMU",
      icon: <Shield className="w-5 h-5" />,
      status: "active",
      subpages: [
        {
          title: "Checkliste INQA",
          path: "/leistungen/inqa-coaching/checkliste-inqa",
          description: "Prüfung der Förderfähigkeit",
          status: "active"
        },
        {
          title: "Details",
          path: "/leistungen/inqa-coaching/details",
          description: "Detaillierte Informationen zum INQA-Coaching",
          status: "active"
        }
      ]
    },

    {
      title: "KI-Coaching",
      path: "/leistungen/ki-coaching",
      description: "Individuelles KI-Coaching",
      icon: <Brain className="w-5 h-5" />,
      status: "active",
      subpages: []
    },
    {
      title: "KI-Potenzialanalyse",
      path: "/leistungen/ki-potenzialanalyse",
      description: "Analyse des KI-Potenzials in Ihrem Unternehmen",
      icon: <Target className="w-5 h-5" />,
      status: "active",
      subpages: [
        {
          title: "Details",
          path: "/leistungen/ki-potenzialanalyse/details",
          description: "Detaillierte Informationen zur Potenzialanalyse",
          status: "active"
        }
      ]
    },
    {
      title: "KI-Prototyping",
      path: "/leistungen/ki-prototyping",
      description: "Von der Idee zum funktionierenden Prototypen",
      icon: <Rocket className="w-5 h-5" />,
      status: "active",
      subpages: [
        {
          title: "Ablauf",
          path: "/leistungen/ki-prototyping/ablauf",
          description: "Detaillierter Ablauf des Prototyping-Prozesses",
          status: "active"
        },
        {
          title: "Begleitung",
          path: "/leistungen/ki-prototyping/begleitung",
          description: "Unser Versprechen und Begleitung",
          status: "active"
        },
        {
          title: "Ressourcen",
          path: "/leistungen/ki-prototyping/ressourcen",
          description: "Benötigte Ressourcen und Voraussetzungen",
          status: "active"
        }
      ]
    },
    {
      title: "Prototyping",
      path: "/leistungen/prototyping",
      description: "Allgemeines Prototyping",
      icon: <Lightbulb className="w-5 h-5" />,
      status: "active",
      subpages: []
    },
    {
      title: "Strategie-Coaching",
      path: "/leistungen/strategie-coaching",
      description: "Strategische Beratung und Coaching",
      icon: <BookOpen className="w-5 h-5" />,
      status: "active",
      subpages: []
    }
  ]
}

export default function LeistungenAdminPage() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Aktiv</Badge>
      case "draft":
        return <Badge className="bg-yellow-100 text-yellow-800">Entwurf</Badge>
      case "archived":
        return <Badge className="bg-gray-100 text-gray-800">Archiviert</Badge>
      default:
        return <Badge className="bg-red-100 text-red-800">Fehler</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "draft":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />
      case "archived":
        return <FileText className="w-4 h-4 text-gray-600" />
      default:
        return <AlertCircle className="w-4 h-4 text-red-600" />
    }
  }

  return (
    <AdminNavigation 
      title="Leistungen Übersicht" 
      description="Alle aktiven Leistungen-Seiten und deren Unterseiten"
    >
      <div className="space-y-6">
        {/* Hauptseite */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {leistungenStructure.main.icon}
                <div>
                  <CardTitle className="text-xl">{leistungenStructure.main.title}</CardTitle>
                  <p className="text-sm text-gray-600">{leistungenStructure.main.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusBadge(leistungenStructure.main.status)}
                <Link href={leistungenStructure.main.path} target="_blank">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ansehen
                  </Button>
                </Link>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Services */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-kivisai-deep-dark-blue">
            Alle Leistungen ({leistungenStructure.services.length})
          </h2>
          
          {leistungenStructure.services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {service.icon}
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(service.status)}
                    <Link href={service.path} target="_blank">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ansehen
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardHeader>
              
              {service.subpages && service.subpages.length > 0 && (
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">
                      Unterseiten ({service.subpages.length})
                    </h3>
                    <div className="grid gap-2">
                      {service.subpages.map((subpage, subIndex) => (
                        <div key={subIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(subpage.status)}
                            <div>
                              <p className="font-medium text-sm">{subpage.title}</p>
                              <p className="text-xs text-gray-600">{subpage.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(subpage.status)}
                            <Link href={subpage.path} target="_blank">
                              <Button variant="ghost" size="sm">
                                <ArrowRight className="w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Statistiken */}
        <Card>
          <CardHeader>
            <CardTitle>Statistiken</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {leistungenStructure.services.length}
                </div>
                <div className="text-sm text-gray-600">Hauptleistungen</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {leistungenStructure.services.reduce((acc, service) => acc + (service.subpages?.length || 0), 0)}
                </div>
                <div className="text-sm text-gray-600">Unterseiten</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {leistungenStructure.services.length + leistungenStructure.services.reduce((acc, service) => acc + (service.subpages?.length || 0), 0)}
                </div>
                <div className="text-sm text-gray-600">Gesamt Seiten</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminNavigation>
  )
} 