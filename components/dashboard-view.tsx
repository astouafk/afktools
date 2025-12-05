// //components/dashboard-view.tsx
// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { FolderKanban, CheckCircle2, AlertTriangle, Users, FileText, Plus } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { Progress } from "@/components/ui/progress"

// const stats = [
//   {
//     title: "Projets Ouverts",
//     value: "8",
//     icon: FolderKanban,
//     change: "+2 ce mois",
//     bgColor: "bg-blue-500",
//   },
//   {
//     title: "Projets Terminés",
//     value: "24",
//     icon: CheckCircle2,
//     change: "+4 ce mois",
//     bgColor: "bg-emerald-500",
//   },
//   {
//     title: "Blocages non Résolus",
//     value: "3",
//     icon: AlertTriangle,
//     change: "-1 le weekend passé",
//     bgColor: "bg-rose-500",
//   },
//   {
//     title: "Membres Actifs",
//     value: "12",
//     icon: Users,
//     change: "Intact",
//     bgColor: "bg-purple-500",
//   },
// ]

// const ongoingProjects = [
//   {
//     id: 1,
//     name: "E-commerce Platform Redesign",
//     company: "TechCorp Inc.",
//     status: "Open",
//     progress: 75,
//     lastReport: "2024-01-15",
//     type: "web",
//     iconBg: "bg-blue-500/10",
//     iconColor: "text-blue-500",
//   },
//   {
//     id: 2,
//     name: "Mobile Banking App",
//     company: "FinanceHub",
//     status: "Open",
//     progress: 45,
//     lastReport: "2024-01-14",
//     type: "mobile",
//     iconBg: "bg-purple-500/10",
//     iconColor: "text-purple-500",
//   },
//   {
//     id: 3,
//     name: "Corporate Website",
//     company: "StartupXYZ",
//     status: "Open",
//     progress: 90,
//     lastReport: "2024-01-13",
//     type: "web",
//     iconBg: "bg-emerald-500/10",
//     iconColor: "text-emerald-500",
//   },
// ]

// const unresolvedBlockers = [
//   {
//     id: 1,
//     project: "E-commerce Platform Redesign",
//     description: "Retards d'intégration de l'API du fournisseur tiers",
//     impact: "Grand",
//     daysOpen: "5 days open",
//   },
//   {
//     id: 2,
//     project: "Mobile Banking App",
//     description: "L'approbation du projet est en attente auprès des parties prenantes.",
//     impact: "Moyen",
//     daysOpen: "3 days open",
//   },
//   {
//     id: 3,
//     project: "Corporate Website",
//     description: "Problèmes de migration de contenu",
//     impact: "Petit",
//     daysOpen: "2 days open",
//   },
// ]

// const quickActions = [
//   {
//     title: "Nouveau Projet",
//     description: "Démarrer un nouveau projet et analyser les besoins",
//     icon: Plus,
//     href: "/projects",
//     bgColor: "bg-blue-500",
//   },
//   {
//     title: "Rapport Hebdomadaire",
//     description: "Documenter mes progres de la semaine",
//     icon: FileText,
//     href: "/reports",
//     bgColor: "bg-emerald-500",
//   },
//   {
//     title: "Management d'Équipe",
//     description: "Gérer les membres de mon équipe",
//     icon: Users,
//     href: "/team",
//     bgColor: "bg-purple-500",
//   },
// ]

// export function DashboardView() {
//   return (
//     <div className="space-y-8">
//       <div>
//         <h1 className="text-4xl font-bold tracking-tight text-foreground">Tableau de Bord</h1>
//         <p className="text-muted-foreground mt-1">{"Bienvenue ! Voici un aperçu de vos projets."}</p>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//         {stats.map((stat) => (
//           <Card key={stat.title} className="bg-card border-border">
//             <CardContent className="p-6">
//               <div className="flex items-start justify-between">
//                 <div className="space-y-2">
//                   <p className="text-sm text-muted-foreground">{stat.title}</p>
//                   <p className="text-4xl font-bold text-foreground">{stat.value}</p>
//                   <p className="text-xs text-muted-foreground">{stat.change}</p>
//                 </div>
//                 <div className={`rounded-xl p-3 ${stat.bgColor}`}>
//                   <stat.icon className="h-6 w-6 text-white" />
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <div>
//         <div className="mb-4 flex items-center justify-between">
//           <h2 className="text-2xl font-bold text-foreground">Projets En Cours</h2>
//           <Button asChild variant="link" className="text-primary">
//             <Link href="/projects">
//               Voir Tout <span className="ml-1">→</span>
//             </Link>
//           </Button>
//         </div>
//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {ongoingProjects.map((project) => (
//             <Card key={project.id} className="bg-card border-border">
//               <CardContent className="p-6">
//                 <div className="space-y-4">
//                   <div className="flex items-start justify-between">
//                     <div className={`rounded-lg p-2 ${project.iconBg}`}>
//                       <FolderKanban className={`h-5 w-5 ${project.iconColor}`} />
//                     </div>
//                     <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500">
//                       {project.status}
//                     </span>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-foreground text-base mb-1">{project.name}</h3>
//                     <p className="text-sm text-muted-foreground">{project.company}</p>
//                   </div>
//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-muted-foreground">Progression</span>
//                       <span className="font-semibold text-foreground">{project.progress}%</span>
//                     </div>
//                     <Progress value={project.progress} className="h-2" />
//                   </div>
//                   <div className="flex items-center justify-between pt-2">
//                     <span className="text-xs text-muted-foreground">Dernier Rapport: {project.lastReport}</span>
//                     <Button asChild variant="link" size="sm" className="h-auto p-0 text-primary">
//                       <Link href={`/projects/${project.id}`}>Voir Détails</Link>
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       <div>
//         <div className="mb-4 flex items-center justify-between">
//           <h2 className="text-2xl font-bold text-foreground">Blocages non Levés</h2>
//           <Button asChild variant="link" className="text-primary">
//             <Link href="/reports">
//               Voir Tout <span className="ml-1">→</span>
//             </Link>
//           </Button>
//         </div>
//         <Card className="bg-card border-border">
//           <CardContent className="p-6">
//             <div className="divide-y divide-border">
//               {unresolvedBlockers.map((blocker, index) => (
//                 <div
//                   key={blocker.id}
//                   className={`flex items-start justify-between ${index !== 0 ? "pt-4" : ""} ${index !== unresolvedBlockers.length - 1 ? "pb-4" : ""}`}
//                 >
//                   <div className="flex-1 space-y-1">
//                     <div className="flex items-center gap-2">
//                       <span
//                         className={`rounded-md px-2 py-1 text-xs font-medium ${
//                           blocker.impact === "High"
//                             ? "bg-rose-500/10 text-rose-500"
//                             : blocker.impact === "Medium"
//                               ? "bg-amber-500/10 text-amber-500"
//                               : "bg-blue-500/10 text-blue-500"
//                         }`}
//                       >
//                         {blocker.impact} Impact
//                       </span>
//                       <span className="text-xs text-muted-foreground">{blocker.daysOpen}</span>
//                     </div>
//                     <h4 className="font-semibold text-foreground">{blocker.project}</h4>
//                     <p className="text-sm text-muted-foreground">{blocker.description}</p>
//                   </div>
//                   <Button variant="ghost" size="icon" className="text-muted-foreground">
//                     <span className="text-lg">⋮</span>
//                   </Button>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="grid gap-4 md:grid-cols-3">
//         {quickActions.map((action) => (
//           <Link key={action.title} href={action.href}>
//             <Card className={`${action.bgColor} border-0 transition-transform hover:scale-105 cursor-pointer`}>
//               <CardContent className="p-6">
//                 <div className="space-y-2">
//                   <div className="rounded-lg bg-white/20 p-2 w-fit">
//                     <action.icon className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white">{action.title}</h3>
//                   <p className="text-sm text-white/90">{action.description}</p>
//                 </div>
//               </CardContent>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }



// components/dashboard-view.tsx
"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { 
  LayoutDashboard,
  FolderKanban, 
  FileText, 
  Users, 
  AlertTriangle,
  CheckCircle2,
  Clock,
  Plus,
  ArrowRight,
  Activity,
  BarChart3,
  Zap,
  Download
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useCompany } from "@/hooks/use-company"
import { useProjects } from "@/hooks/use-projects"
import { useMembers } from "@/hooks/use-members"
import { useAllReports } from "@/hooks/use-reports"
import { getAnalysesByProject } from "@/lib/services/analysis-service"
import type { Analysis } from "@/lib/services/analysis-service"

export function DashboardView() {
  const router = useRouter()
  const selectedCompanyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  
  const { data: company } = useCompany(selectedCompanyId)
  const { data: projects = [], isLoading: projectsLoading } = useProjects(selectedCompanyId)
  const { data: members = [], isLoading: membersLoading } = useMembers(selectedCompanyId)
  const { data: allReports = [], isLoading: reportsLoading } = useAllReports(selectedCompanyId)
  
  const [allAnalyses, setAllAnalyses] = React.useState<Analysis[]>([])
  const [analysesLoading, setAnalysesLoading] = React.useState(false)

  // Charger toutes les analyses
  React.useEffect(() => {
    async function loadAnalyses() {
      if (!selectedCompanyId || projects.length === 0) return
      
      setAnalysesLoading(true)
      try {
        const analysesPromises = projects.map(project => 
          getAnalysesByProject(project.id, project.companyId)
        )
        const analysesArrays = await Promise.all(analysesPromises)
        const flatAnalyses = analysesArrays.flat()
        setAllAnalyses(flatAnalyses)
      } catch (error) {
        console.error('Error loading analyses:', error)
      } finally {
        setAnalysesLoading(false)
      }
    }

    loadAnalyses()
  }, [projects, selectedCompanyId])

  const isLoading = projectsLoading || membersLoading || reportsLoading || analysesLoading

  // Calculs statistiques
  const stats = React.useMemo(() => {
    // Projets
    const activeProjects = projects.filter(p => p.status !== 'Completed').length
    const completedProjects = projects.filter(p => p.status === 'Completed').length

    // Rapports (30 derniers jours)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    const recentReports = allReports.filter(r => new Date(r.createdAt) >= thirtyDaysAgo)
    const publishedReports = allReports.filter(r => r.status === 'Published').length

    // Tâches
    const totalTasks = allReports.reduce((sum, r) => sum + (r.tasks?.length || 0), 0)
    const completedTasks = allReports.reduce((sum, r) => 
      sum + (r.tasks?.filter(t => t.completed).length || 0), 0
    )

    // Blocages
    const allBlockers = allReports.flatMap(r => r.blockers || [])
    const criticalBlockers = allBlockers.filter(b => b.level === 'high').length
    const mediumBlockers = allBlockers.filter(b => b.level === 'medium').length

    // Analyses
    const completedAnalyses = allAnalyses.filter(a => a.status === 'Completed').length
    const inProgressAnalyses = allAnalyses.filter(a => a.status === 'In Progress').length

    return {
      activeProjects,
      completedProjects,
      recentReports: recentReports.length,
      publishedReports,
      totalTasks,
      completedTasks,
      criticalBlockers,
      mediumBlockers,
      totalBlockers: allBlockers.length,
      completedAnalyses,
      inProgressAnalyses,
      totalAnalyses: allAnalyses.length,
      totalMembers: members.length,
    }
  }, [projects, allReports, allAnalyses, members])

  // Activité récente
  const recentActivity = React.useMemo(() => {
    const activities: Array<{
      type: 'report' | 'analysis'
      title: string
      subtitle: string
      date: Date
      status?: string
    }> = []

    // Derniers rapports
    allReports.slice(0, 3).forEach(report => {
      const project = projects.find(p => p.id === report.projectId)
      activities.push({
        type: 'report',
        title: `Rapport Semaine #${report.weekNumber}`,
        subtitle: project?.name || 'Projet',
        date: new Date(report.createdAt),
        status: report.status
      })
    })

    // Dernières analyses
    allAnalyses.slice(0, 3).forEach(analysis => {
      const project = projects.find(p => p.id === analysis.projectId)
      activities.push({
        type: 'analysis',
        title: analysis.title,
        subtitle: project?.name || 'Projet',
        date: new Date(analysis.createdAt),
        status: analysis.status
      })
    })

    // Trier par date
    return activities.sort((a, b) => b.date.getTime() - a.date.getTime()).slice(0, 5)
  }, [allReports, allAnalyses, projects])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-full" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
        <Skeleton className="h-64 w-full" />
      </div>
    )
  }

  if (!selectedCompanyId) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <LayoutDashboard className="h-12 w-12 text-muted-foreground mx-auto" />
          <p className="text-muted-foreground">Veuillez sélectionner une entreprise</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
          <LayoutDashboard className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Tableau de Bord
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Vue d'ensemble de {company?.name || 'votre entreprise'}
          </p>
        </div>
      </div>

      {/* Statistiques principales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Projets */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Projets</CardTitle>
            <FolderKanban className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.length}</div>
            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
              <span>{stats.activeProjects} actifs</span>
              <span>•</span>
              <span>{stats.completedProjects} terminés</span>
            </div>
          </CardContent>
        </Card>

        {/* Rapports */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Rapports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.recentReports}</div>
            <div className="flex items-center gap-2 mt-2">
              <CheckCircle2 className="h-3 w-3 text-green-600" />
              <span className="text-xs text-muted-foreground">{stats.publishedReports} publiés ce mois</span>
            </div>
          </CardContent>
        </Card>

        {/* Tâches */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tâches</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedTasks}</div>
            <p className="text-xs text-muted-foreground mt-2">
              sur {stats.totalTasks} au total
            </p>
          </CardContent>
        </Card>

        {/* Blocages */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Blocages</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{stats.criticalBlockers}</div>
            <div className="flex gap-2 mt-2 text-xs">
              <span className="text-orange-600">{stats.mediumBlockers} moyens</span>
              <span>•</span>
              <span className="text-muted-foreground">{stats.totalBlockers} total</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grille 2 colonnes */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Analyses */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Analyses & Spécifications
            </CardTitle>
            <CardDescription>État d'avancement des analyses techniques</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-2xl font-bold">{stats.totalAnalyses}</p>
                <p className="text-xs text-muted-foreground">analyses totales</p>
              </div>
              <div className="text-right space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">{stats.completedAnalyses} terminées</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-muted-foreground">{stats.inProgressAnalyses} en cours</span>
                </div>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => router.push('/analyses')}
            >
              Voir toutes les analyses
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>

        {/* Actions rapides */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Actions Rapides
            </CardTitle>
            <CardDescription>Accès directs aux fonctionnalités principales</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => router.push('/projects')}
            >
              <FolderKanban className="w-4 h-4 mr-2" />
              Gérer les projets
            </Button>

            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => router.push('/reports')}
            >
              <FileText className="w-4 h-4 mr-2" />
              Consulter les rapports
            </Button>

            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => router.push('/analyses')}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Voir les analyses
            </Button>

            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => router.push('/exports')}
            >
              <Download className="w-4 h-4 mr-2" />
              Exporter des données
            </Button>

            <Button 
              variant="outline" 
              className="w-full justify-start"
              onClick={() => router.push('/members')}
            >
              <Users className="w-4 h-4 mr-2" />
              Gérer l'équipe ({stats.totalMembers} membres)
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Activité récente */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Activité Récente
          </CardTitle>
          <CardDescription>Dernières actions effectuées</CardDescription>
        </CardHeader>
        <CardContent>
          {recentActivity.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground text-sm">
              Aucune activité récente
            </div>
          ) : (
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    activity.type === 'report' 
                      ? 'bg-blue-500/10 text-blue-600' 
                      : 'bg-purple-500/10 text-purple-600'
                  }`}>
                    {activity.type === 'report' ? (
                      <FileText className="h-4 w-4" />
                    ) : (
                      <BarChart3 className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.subtitle}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.date.toLocaleDateString('fr-FR', { 
                        day: 'numeric', 
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  {activity.status && (
                    <Badge variant={activity.status === 'Published' || activity.status === 'Completed' ? 'default' : 'secondary'}>
                      {activity.status === 'Published' ? 'Publié' : 
                       activity.status === 'Completed' ? 'Terminé' :
                       activity.status === 'In Progress' ? 'En cours' : activity.status}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
