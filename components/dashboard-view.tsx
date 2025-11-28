//components/dashboard-view.tsx
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FolderKanban, CheckCircle2, AlertTriangle, Users, FileText, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

const stats = [
  {
    title: "Projets Ouverts",
    value: "8",
    icon: FolderKanban,
    change: "+2 ce mois",
    bgColor: "bg-blue-500",
  },
  {
    title: "Projets Terminés",
    value: "24",
    icon: CheckCircle2,
    change: "+4 ce mois",
    bgColor: "bg-emerald-500",
  },
  {
    title: "Blocages non Résolus",
    value: "3",
    icon: AlertTriangle,
    change: "-1 le weekend passé",
    bgColor: "bg-rose-500",
  },
  {
    title: "Membres Actifs",
    value: "12",
    icon: Users,
    change: "Intact",
    bgColor: "bg-purple-500",
  },
]

const ongoingProjects = [
  {
    id: 1,
    name: "E-commerce Platform Redesign",
    company: "TechCorp Inc.",
    status: "Open",
    progress: 75,
    lastReport: "2024-01-15",
    type: "web",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    name: "Mobile Banking App",
    company: "FinanceHub",
    status: "Open",
    progress: 45,
    lastReport: "2024-01-14",
    type: "mobile",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    id: 3,
    name: "Corporate Website",
    company: "StartupXYZ",
    status: "Open",
    progress: 90,
    lastReport: "2024-01-13",
    type: "web",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
]

const unresolvedBlockers = [
  {
    id: 1,
    project: "E-commerce Platform Redesign",
    description: "Retards d'intégration de l'API du fournisseur tiers",
    impact: "Grand",
    daysOpen: "5 days open",
  },
  {
    id: 2,
    project: "Mobile Banking App",
    description: "L'approbation du projet est en attente auprès des parties prenantes.",
    impact: "Moyen",
    daysOpen: "3 days open",
  },
  {
    id: 3,
    project: "Corporate Website",
    description: "Problèmes de migration de contenu",
    impact: "Petit",
    daysOpen: "2 days open",
  },
]

const quickActions = [
  {
    title: "Nouveau Projet",
    description: "Démarrer un nouveau projet et analyser les besoins",
    icon: Plus,
    href: "/projects",
    bgColor: "bg-blue-500",
  },
  {
    title: "Rapport Hebdomadaire",
    description: "Documenter mes progres de la semaine",
    icon: FileText,
    href: "/reports",
    bgColor: "bg-emerald-500",
  },
  {
    title: "Management d'Équipe",
    description: "Gérer les membres de mon équipe",
    icon: Users,
    href: "/team",
    bgColor: "bg-purple-500",
  },
]

export function DashboardView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Tableau de Bord</h1>
        <p className="text-muted-foreground mt-1">{"Bienvenue ! Voici un aperçu de vos projets."}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </div>
                <div className={`rounded-xl p-3 ${stat.bgColor}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Projets En Cours</h2>
          <Button asChild variant="link" className="text-primary">
            <Link href="/projects">
              Voir Tout <span className="ml-1">→</span>
            </Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ongoingProjects.map((project) => (
            <Card key={project.id} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className={`rounded-lg p-2 ${project.iconBg}`}>
                      <FolderKanban className={`h-5 w-5 ${project.iconColor}`} />
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
                      {project.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-1">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">{project.company}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progression</span>
                      <span className="font-semibold text-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">Dernier Rapport: {project.lastReport}</span>
                    <Button asChild variant="link" size="sm" className="h-auto p-0 text-primary">
                      <Link href={`/projects/${project.id}`}>Voir Détails</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Blocages non Levés</h2>
          <Button asChild variant="link" className="text-primary">
            <Link href="/reports">
              Voir Tout <span className="ml-1">→</span>
            </Link>
          </Button>
        </div>
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="divide-y divide-border">
              {unresolvedBlockers.map((blocker, index) => (
                <div
                  key={blocker.id}
                  className={`flex items-start justify-between ${index !== 0 ? "pt-4" : ""} ${index !== unresolvedBlockers.length - 1 ? "pb-4" : ""}`}
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-md px-2 py-1 text-xs font-medium ${
                          blocker.impact === "High"
                            ? "bg-rose-500/10 text-rose-500"
                            : blocker.impact === "Medium"
                              ? "bg-amber-500/10 text-amber-500"
                              : "bg-blue-500/10 text-blue-500"
                        }`}
                      >
                        {blocker.impact} Impact
                      </span>
                      <span className="text-xs text-muted-foreground">{blocker.daysOpen}</span>
                    </div>
                    <h4 className="font-semibold text-foreground">{blocker.project}</h4>
                    <p className="text-sm text-muted-foreground">{blocker.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground">
                    <span className="text-lg">⋮</span>
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {quickActions.map((action) => (
          <Link key={action.title} href={action.href}>
            <Card className={`${action.bgColor} border-0 transition-transform hover:scale-105 cursor-pointer`}>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="rounded-lg bg-white/20 p-2 w-fit">
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{action.title}</h3>
                  <p className="text-sm text-white/90">{action.description}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
