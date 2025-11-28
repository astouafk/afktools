// // components/all-reports-view.tsx
// "use client"

// import * as React from "react"
// import { FileText, Clock, CheckCircle2, Calendar, Search } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import Link from "next/link"
// import { useAllReports } from "@/hooks/use-reports"
// import { useProjects } from "@/hooks/use-projects"
// import { Skeleton } from "@/components/ui/skeleton"

// const ITEMS_PER_PAGE = 6

// export function AllReportsView() {
//   // ✅ CORRECTION - Récupérer companyId UNE SEULE FOIS
//   const selectedCompanyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  
//   const { data: allReports = [], isLoading: reportsLoading } = useAllReports(selectedCompanyId)
//   const [currentPage, setCurrentPage] = React.useState(1)
//   const [searchQuery, setSearchQuery] = React.useState("")
//   const [filterProject, setFilterProject] = React.useState<string>("all")
//   const [filterStatus, setFilterStatus] = React.useState<string>("all")

//   const { data: projects = [] } = useProjects(selectedCompanyId)

//   const getProjectName = (projectId: string) => {
//     const project = projects.find(p => p.id === projectId)
//     return project ? project.name : "Projet inconnu"
//   }

//   const filteredReports = allReports.filter((report) => {
//     const projectName = getProjectName(report.projectId)
//     const matchesSearch = 
//       `Semaine ${report.weekNumber}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       projectName.toLowerCase().includes(searchQuery.toLowerCase())
//     const matchesProject = filterProject === "all" || report.projectId === filterProject
//     const matchesStatus = filterStatus === "all" || report.status === filterStatus
    
//     return matchesSearch && matchesProject && matchesStatus
//   })

//   const uniqueProjects = Array.from(new Set(allReports.map(r => r.projectId)))
//     .map(projectId => ({
//       id: projectId,
//       name: getProjectName(projectId)
//     }))

//   const totalPages = Math.ceil(filteredReports.length / ITEMS_PER_PAGE)
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
//   const endIndex = startIndex + ITEMS_PER_PAGE
//   const paginatedReports = filteredReports.slice(startIndex, endIndex)

//   if (reportsLoading) {
//     return (
//       <div className="space-y-6">
//         <Skeleton className="h-20" />
//         <Skeleton className="h-32" />
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <Skeleton key={i} className="h-48" />
//           ))}
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-3xl font-semibold tracking-tight text-foreground">
//           Tous les Rapports
//         </h1>
//         <p className="text-sm text-muted-foreground mt-1">
//           Vue d'ensemble de tous vos rapports hebdomadaires
//         </p>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Statistiques Globales</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid gap-4 md:grid-cols-4">
//             <div>
//               <span className="text-sm text-muted-foreground">Total rapports</span>
//               <p className="text-2xl font-bold">{allReports.length}</p>
//             </div>
//             <div>
//               <span className="text-sm text-muted-foreground">Publiés</span>
//               <p className="text-2xl font-bold text-green-500">
//                 {allReports.filter(r => r.status === "Published").length}
//               </p>
//             </div>
//             <div>
//               <span className="text-sm text-muted-foreground">Brouillons</span>
//               <p className="text-2xl font-bold text-gray-500">
//                 {allReports.filter(r => r.status === "Draft").length}
//               </p>
//             </div>
//             <div>
//               <span className="text-sm text-muted-foreground">Projets actifs</span>
//               <p className="text-2xl font-bold">{uniqueProjects.length}</p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="flex flex-col gap-4 md:flex-row md:items-center bg-muted/30 p-4 rounded-lg">
//         <div className="relative flex-1">
//           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//           <Input
//             placeholder="Rechercher un rapport ou projet..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="pl-10 bg-background"
//           />
//         </div>
//         <div className="flex gap-3">
//           <Select value={filterProject} onValueChange={setFilterProject}>
//             <SelectTrigger className="w-[200px] bg-background">
//               <SelectValue placeholder="Tous les projets" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">Tous les projets</SelectItem>
//               {uniqueProjects.map((project) => (
//                 <SelectItem key={project.id} value={project.id}>
//                   {project.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//           <Select value={filterStatus} onValueChange={setFilterStatus}>
//             <SelectTrigger className="w-[160px] bg-background">
//               <SelectValue placeholder="Tous les statuts" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">Tous les statuts</SelectItem>
//               <SelectItem value="Published">Publié</SelectItem>
//               <SelectItem value="Draft">Brouillon</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {filteredReports.length === 0 ? (
//         <div className="flex items-center justify-center min-h-[300px]">
//           <div className="text-center">
//             {allReports.length === 0 ? (
//               <p className="text-muted-foreground">Aucun rapport créé</p>
//             ) : (
//               <>
//                 <p className="text-muted-foreground">Aucun rapport ne correspond aux filtres</p>
//                 <Button 
//                   variant="outline"
//                   onClick={() => {
//                     setFilterProject("all")
//                     setFilterStatus("all")
//                     setSearchQuery("")
//                   }} 
//                   className="mt-4"
//                 >
//                   Réinitialiser les filtres
//                 </Button>
//               </>
//             )}
//           </div>
//         </div>
//       ) : (
//         <>
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {paginatedReports.map((report) => (
//               <Card key={report.id} className="hover:border-primary/50 transition-colors">
//                 <CardContent className="p-6 space-y-4">
//                   <div className="space-y-3">
//                     <div className="flex items-start justify-between">
//                       <div>
//                         <h3 className="text-lg font-semibold text-foreground">
//                           Semaine #{report.weekNumber}
//                         </h3>
//                         <p className="text-sm text-muted-foreground mt-1">
//                           {getProjectName(report.projectId)}
//                         </p>
//                       </div>
//                       {report.status === "Published" && (
//                         <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
//                       )}
//                     </div>
                    
//                     <Badge 
//                       variant="outline" 
//                       className={
//                         report.status === "Published"
//                           ? "bg-green-500/10 text-green-500 border-green-500/20"
//                           : "bg-gray-500/10 text-gray-500 border-gray-500/20"
//                       }
//                     >
//                       {report.status === "Published" ? "Publié" : "Brouillon"}
//                     </Badge>
//                   </div>

//                   <div className="space-y-2 text-sm text-muted-foreground">
//                     <div className="flex items-center gap-2">
//                       <Calendar className="h-4 w-4" />
//                       <span>
//                         {new Date(report.startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
//                         {' - '}
//                         {new Date(report.endDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Clock className="h-4 w-4" />
//                       <span>
//                         Créé le {new Date(report.createdAt).toLocaleDateString('fr-FR', {
//                           day: 'numeric',
//                           month: 'short'
//                         })}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between pt-2 border-t text-sm">
//                     <span className="text-muted-foreground">Tâches</span>
//                     <span className="font-medium">
//                       {report.tasks.filter(t => t.completed).length}/{report.tasks.length}
//                     </span>
//                   </div>

//                   <Button 
//                     asChild 
//                     className="w-full"
//                     variant="outline"
//                   >
//                     <Link href={`/reports/${report.id}`}>
//                       <FileText className="mr-2 h-4 w-4" />
//                       {report.status === "Draft" ? "Continuer" : "Voir Détails"}
//                     </Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {totalPages > 1 && (
//             <div className="flex items-center justify-center gap-2 pt-4">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                 disabled={currentPage === 1}
//               >
//                 Précédent
//               </Button>
//               <div className="flex items-center gap-1">
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                   <Button
//                     key={page}
//                     variant={currentPage === page ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setCurrentPage(page)}
//                     className="w-10"
//                   >
//                     {page}
//                   </Button>
//                 ))}
//               </div>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//                 disabled={currentPage === totalPages}
//               >
//                 Suivant
//               </Button>
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   )
// }















// components/all-reports-view.tsx
"use client"

import * as React from "react"
import { FileText, Filter, Search, TrendingUp, TrendingDown, Minus, Calendar, CheckCircle2, AlertCircle, ArrowLeft, User, AlertTriangle, Briefcase, FolderKanban } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useAllReports } from "@/hooks/use-reports"
import { useProjects } from "@/hooks/use-projects"
import { useMembers } from "@/hooks/use-members"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { Report } from "@/lib/services/report-service"

const ITEMS_PER_PAGE = 12

type PeriodType = 'week' | 'month' | 'quarter' | 'year'
type StatusType = 'all' | 'Published' | 'Draft'

const getBlockerLevelColor = (level: string) => {
  switch (level) {
    case 'high': return 'bg-red-500/10 text-red-500 border-red-500/20'
    case 'medium': return 'bg-orange-500/10 text-orange-500 border-orange-500/20'
    case 'low': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
    default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
  }
}

const translateBlockerLevel = (level: string) => {
  switch (level) {
    case 'high': return 'Élevé'
    case 'medium': return 'Moyen'
    case 'low': return 'Bas'
    default: return level
  }
}

export function AllReportsView() {
  const selectedCompanyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  
  const { data: allReports = [], isLoading: reportsLoading } = useAllReports(selectedCompanyId)
  const { data: projects = [], isLoading: projectsLoading } = useProjects(selectedCompanyId)
  const { data: members = [] } = useMembers(selectedCompanyId)
  
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedProjects, setSelectedProjects] = React.useState<string[]>([])
  const [statusFilter, setStatusFilter] = React.useState<StatusType>('all')
  const [periodFilter, setPeriodFilter] = React.useState<PeriodType>('month')
  const [currentPage, setCurrentPage] = React.useState(1)
  const [selectedReport, setSelectedReport] = React.useState<Report | null>(null)

  const isLoading = reportsLoading || projectsLoading

  // Fonction pour obtenir la date de début selon la période
  const getStartDateForPeriod = (period: PeriodType, date = new Date()) => {
    const d = new Date(date)
    
    switch (period) {
      case 'week':
        d.setDate(d.getDate() - 7)
        return d
      case 'month':
        d.setMonth(d.getMonth() - 1)
        return d
      case 'quarter':
        d.setMonth(d.getMonth() - 3)
        return d
      case 'year':
        d.setFullYear(d.getFullYear() - 1)
        return d
    }
  }

  // Fonction pour obtenir la période précédente
  const getPreviousPeriodDates = (period: PeriodType) => {
    const now = new Date()
    const currentStart = getStartDateForPeriod(period)
    
    switch (period) {
      case 'week':
        return {
          start: new Date(currentStart.getTime() - 7 * 24 * 60 * 60 * 1000),
          end: currentStart
        }
      case 'month':
        return {
          start: new Date(currentStart.getTime() - 30 * 24 * 60 * 60 * 1000),
          end: currentStart
        }
      case 'quarter':
        return {
          start: new Date(currentStart.getTime() - 90 * 24 * 60 * 60 * 1000),
          end: currentStart
        }
      case 'year':
        return {
          start: new Date(currentStart.getTime() - 365 * 24 * 60 * 60 * 1000),
          end: currentStart
        }
    }
  }

  // Filtrage des rapports
  const filteredReports = React.useMemo(() => {
    let filtered = allReports

    // Filtre par période
    const startDate = getStartDateForPeriod(periodFilter)
    filtered = filtered.filter(report => {
      const reportDate = new Date(report.createdAt)
      return reportDate >= startDate
    })

    // Filtre par projets sélectionnés
    if (selectedProjects.length > 0) {
      filtered = filtered.filter(report => selectedProjects.includes(report.projectId))
    }

    // Filtre par statut
    if (statusFilter !== 'all') {
      filtered = filtered.filter(report => report.status === statusFilter)
    }

    // Filtre par recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(report => {
        const project = projects.find(p => p.id === report.projectId)
        const projectName = project?.name.toLowerCase() || ''
        const weekNumber = `semaine ${report.weekNumber}`.toLowerCase()
        const summary = report.summary?.toLowerCase() || ''
        
        return (
          projectName.includes(query) ||
          weekNumber.includes(query) ||
          summary.includes(query)
        )
      })
    }

    return filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  }, [allReports, selectedProjects, statusFilter, periodFilter, searchQuery, projects])

  // Calcul des statistiques période courante
  const currentStats = React.useMemo(() => {
    const totalReports = filteredReports.length
    const totalTasks = filteredReports.reduce((sum, r) => sum + (r.tasks?.length || 0), 0)
    const completedTasks = filteredReports.reduce((sum, r) => 
      sum + (r.tasks?.filter(t => t.completed).length || 0), 0
    )
    const totalBlockers = filteredReports.reduce((sum, r) => sum + (r.blockers?.length || 0), 0)
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

    return { totalReports, totalTasks, completedTasks, totalBlockers, completionRate }
  }, [filteredReports])

  // Calcul des statistiques période précédente pour comparaison
  const previousStats = React.useMemo(() => {
    const { start, end } = getPreviousPeriodDates(periodFilter)
    
    const previousReports = allReports.filter(report => {
      const reportDate = new Date(report.createdAt)
      return reportDate >= start && reportDate < end
    })

    const totalReports = previousReports.length
    const totalTasks = previousReports.reduce((sum, r) => sum + (r.tasks?.length || 0), 0)
    const completedTasks = previousReports.reduce((sum, r) => 
      sum + (r.tasks?.filter(t => t.completed).length || 0), 0
    )
    const totalBlockers = previousReports.reduce((sum, r) => sum + (r.blockers?.length || 0), 0)
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

    return { totalReports, totalTasks, completedTasks, totalBlockers, completionRate }
  }, [allReports, periodFilter])

  // Calcul des différences
  const comparisons = React.useMemo(() => {
    return {
      reports: currentStats.totalReports - previousStats.totalReports,
      completionRate: currentStats.completionRate - previousStats.completionRate,
      blockers: currentStats.totalBlockers - previousStats.totalBlockers
    }
  }, [currentStats, previousStats])

  // Pagination
  const totalPages = Math.ceil(filteredReports.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedReports = filteredReports.slice(startIndex, endIndex)

  // Reset page lors du changement de filtres
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery, selectedProjects, statusFilter, periodFilter])

  // Toggle projet dans la sélection
  const toggleProject = (projectId: string) => {
    setSelectedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    )
  }

  const getMemberName = (memberId?: string) => {
    if (!memberId) return "Non assignée"
    const member = members.find(m => m.id === memberId)
    return member ? member.name : "Membre inconnu"
  }

  // Composant indicateur de tendance
  const TrendIndicator = ({ value }: { value: number }) => {
    if (value > 0) {
      return (
        <div className="flex items-center gap-1 text-green-500">
          <TrendingUp className="h-4 w-4" />
          <span className="text-sm font-medium">+{value}</span>
        </div>
      )
    }
    if (value < 0) {
      return (
        <div className="flex items-center gap-1 text-red-500">
          <TrendingDown className="h-4 w-4" />
          <span className="text-sm font-medium">{value}</span>
        </div>
      )
    }
    return (
      <div className="flex items-center gap-1 text-muted-foreground">
        <Minus className="h-4 w-4" />
        <span className="text-sm font-medium">0</span>
      </div>
    )
  }

  const getPeriodLabel = (period: PeriodType) => {
    switch (period) {
      case 'week': return 'Cette semaine'
      case 'month': return 'Ce mois'
      case 'quarter': return 'Ce trimestre'
      case 'year': return 'Cette année'
    }
  }

  const getPreviousPeriodLabel = (period: PeriodType) => {
    switch (period) {
      case 'week': return 'semaine précédente'
      case 'month': return 'mois précédent'
      case 'quarter': return 'trimestre précédent'
      case 'year': return 'année précédente'
    }
  }

  // Si un rapport est sélectionné, afficher le détail
  if (selectedReport) {
    const project = projects.find(p => p.id === selectedReport.projectId)
    const totalTasks = selectedReport.tasks?.length || 0
    const completedCount = selectedReport.tasks?.filter(t => t.completed).length || 0
    const completionRate = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0

    return (
<div className="space-y-6">
{/* Header avec retour */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSelectedReport(null)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                  Semaine #{selectedReport.weekNumber}
                </h1>
                <Badge
                  variant={selectedReport.status === "Published" ? "default" : "secondary"}
                  className={
                    selectedReport.status === "Published"
                      ? "bg-green-500/10 text-green-500 border-green-500/20"
                      : "bg-gray-500/10 text-gray-500 border-gray-500/20"
                  }
                >
                  {selectedReport.status === "Published" ? "Publié" : "Brouillon"}
                </Badge>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(selectedReport.startDate).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long'
                  })}
                  {' - '}
                  {new Date(selectedReport.endDate).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Informations du projet */}
        {project && (
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderKanban className="h-5 w-5" />
                Projet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Nom du projet</span>
                <span className="font-semibold">{project.name}</span>
              </div>
              {project.client && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Client</span>
                  <span className="font-medium">{project.client}</span>
                </div>
              )}
              <div className="pt-3">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/project/${project.id}`}>
                    Voir le projet complet
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Statistiques */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Tâches</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalTasks}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Tâches de la semaine
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Tâches Complétées</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-500">{completedCount}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Taux : {completionRate}%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Blocages Signalés</CardTitle>
              <AlertTriangle className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-amber-500">{selectedReport.blockers?.length || 0}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Défis rencontrés
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Résumé Hebdomadaire */}
        {selectedReport.summary && (
          <Card>
            <CardHeader>
              <CardTitle>Résumé Hebdomadaire</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm whitespace-pre-wrap leading-relaxed">{selectedReport.summary}</p>
            </CardContent>
          </Card>
        )}

        {/* Grid 2 colonnes : Tâches | Blocages */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Tâches */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Tâches de la Semaine
                <Badge variant="secondary" className="ml-2">{totalTasks}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!selectedReport.tasks || selectedReport.tasks.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Aucune tâche pour cette semaine</p>
                </div>
              ) : (
                <div className={`space-y-3 ${selectedReport.tasks.length > 10 ? 'max-h-[500px] overflow-y-auto pr-2' : ''}`}>
                  {selectedReport.tasks.map((task) => (
                    <Card key={task.id} className={task.completed ? "bg-muted/30" : "bg-card"}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 
                            className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                              task.completed ? "text-green-500" : "text-muted-foreground"
                            }`}
                          />
                          <div className="flex-1 space-y-2">
                            <p className={`text-sm ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                              {task.description}
                            </p>
                            {task.assignedTo && (
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">
                                  <User className="h-3 w-3 mr-1" />
                                  {getMemberName(task.assignedTo)}
                                </Badge>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Blocages */}
          <Card className={selectedReport.blockers && selectedReport.blockers.length > 0 ? "border-red-500/50" : ""}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className={`h-5 w-5 ${selectedReport.blockers && selectedReport.blockers.length > 0 ? "text-red-500" : ""}`} />
                Blocages & Défis
                <Badge variant="secondary" className="ml-2">{selectedReport.blockers?.length || 0}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!selectedReport.blockers || selectedReport.blockers.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p>Aucun blocage signalé</p>
                </div>
              ) : (
                <div className={`space-y-4 ${selectedReport.blockers.length > 5 ? 'max-h-[500px] overflow-y-auto pr-2' : ''}`}>
                  {selectedReport.blockers.map((blocker, index) => (
                    <Card key={index} className="border-red-500/30 bg-card">
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <div className="flex-1 space-y-2">
                            <p className="text-sm font-medium">{blocker.description}</p>
                            <Badge variant="outline" className={getBlockerLevelColor(blocker.level)}>
                              {translateBlockerLevel(blocker.level)}
                            </Badge>
                            {blocker.mitigation && (
                              <div className="mt-3 p-3 bg-muted/50 rounded-md">
                                <p className="text-xs font-semibold text-muted-foreground mb-1">
                                  Action de mitigation :
                                </p>
                                <p className="text-sm">{blocker.mitigation}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Objectifs Semaine Prochaine */}
        {selectedReport.nextWeekObjectives && selectedReport.nextWeekObjectives.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Objectifs Semaine Prochaine
                <Badge variant="secondary" className="ml-2">{selectedReport.nextWeekObjectives.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`grid gap-3 md:grid-cols-2 lg:grid-cols-3 ${selectedReport.nextWeekObjectives.length > 20 ? 'max-h-[500px] overflow-y-auto pr-2' : ''}`}>
                {selectedReport.nextWeekObjectives.map((objective, index) => (
                  <Card key={index} className="bg-muted/30">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-sm flex-1">{objective}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Métadonnées */}
        <Card className="bg-muted/30">
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Créé le</span>
                <span className="text-sm font-medium">
                  {new Date(selectedReport.createdAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Dernière modification</span>
                <span className="text-sm font-medium">
                  {new Date(selectedReport.updatedAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Vue liste (défaut)
  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      </div>
    )
  }

  if (!selectedCompanyId) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <FileText className="h-12 w-12 text-muted-foreground mx-auto" />
          <p className="text-muted-foreground">Veuillez sélectionner une entreprise</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Rapports Hebdomadaires
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Vue d'ensemble de tous vos rapports
        </p>
      </div>

      {/* Filtres */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtres
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {/* Filtre Projets */}
            <div className="space-y-2">
              <Label>Projets</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {selectedProjects.length === 0 
                      ? "Tous les projets" 
                      : `${selectedProjects.length} projet${selectedProjects.length > 1 ? 's' : ''}`
                    }
                    <Filter className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-4" align="start">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-semibold">Sélectionner les projets</Label>
                      {selectedProjects.length > 0 && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setSelectedProjects([])}
                        >
                          Réinitialiser
                        </Button>
                      )}
                    </div>
                    <div className="max-h-[300px] overflow-y-auto space-y-2">
                      {projects.map(project => (
                        <div key={project.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={project.id}
                            checked={selectedProjects.includes(project.id)}
                            onCheckedChange={() => toggleProject(project.id)}
                          />
                          <Label 
                            htmlFor={project.id}
                            className="text-sm cursor-pointer flex-1"
                          >
                            {project.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            {/* Filtre Statut */}
            <div className="space-y-2">
              <Label>Statut</Label>
              <Select value={statusFilter} onValueChange={(value: StatusType) => setStatusFilter(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  <SelectItem value="Published">Publié</SelectItem>
                  <SelectItem value="Draft">Brouillon</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Filtre Période */}
            <div className="space-y-2">
              <Label>Période</Label>
              <Select value={periodFilter} onValueChange={(value: PeriodType) => setPeriodFilter(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">Cette semaine</SelectItem>
                  <SelectItem value="month">Ce mois</SelectItem>
                  <SelectItem value="quarter">Ce trimestre</SelectItem>
                  <SelectItem value="year">Cette année</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistiques */}
      <Card>
        <CardHeader>
          <CardTitle>Statistiques - {getPeriodLabel(periodFilter)}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Rapports créés</p>
              <p className="text-3xl font-bold">{currentStats.totalReports}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Tâches complétées</p>
              <p className="text-3xl font-bold">
                {currentStats.completedTasks}/{currentStats.totalTasks}
                <span className="text-lg text-muted-foreground ml-2">({currentStats.completionRate}%)</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Blocages actifs</p>
              <p className="text-3xl font-bold">{currentStats.totalBlockers}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparaison */}
      {previousStats.totalReports > 0 && (
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Comparaison avec {getPreviousPeriodLabel(periodFilter)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Rapports</span>
                <TrendIndicator value={comparisons.reports} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Taux de complétion</span>
                <TrendIndicator value={comparisons.completionRate} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Blocages</span>
                <TrendIndicator value={-comparisons.blockers} />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Rechercher dans les rapports (projet, semaine, contenu)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Liste des rapports */}
      {filteredReports.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              {allReports.length === 0 
                ? "Aucun rapport créé" 
                : "Aucun rapport ne correspond aux filtres"
              }
            </p>
            {allReports.length > 0 && (
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedProjects([])
                  setStatusFilter('all')
                  setPeriodFilter('month')
                }}
                className="mt-4"
              >
                Réinitialiser les filtres
              </Button>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedReports.map((report) => {
              const project = projects.find(p => p.id === report.projectId)
              const totalTasks = report.tasks?.length || 0
              const completedTasks = report.tasks?.filter(t => t.completed).length || 0

              return (
                <Card key={report.id} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-semibold text-lg">Semaine #{report.weekNumber}</h3>
                        {project && (
                          <p className="text-sm text-muted-foreground">{project.name}</p>
                        )}
                      </div>
                      <Badge 
                        variant="outline"
                        className={
                          report.status === "Published"
                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                            : "bg-gray-500/10 text-gray-500 border-gray-500/20"
                        }
                      >
                        {report.status === "Published" ? "Publié" : "Brouillon"}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(report.startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                          {' - '}
                          {new Date(report.endDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-muted-foreground">
                          {completedTasks}/{totalTasks} tâches
                        </span>
                      </div>

                      {report.blockers && report.blockers.length > 0 && (
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                          <span className="text-muted-foreground">
                            {report.blockers.length} blocage{report.blockers.length > 1 ? 's' : ''}
                          </span>
                        </div>
                      )}
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setSelectedReport(report)}
                    >
                      Voir le rapport
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Précédent
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                  let pageNum
                  if (totalPages <= 7) {
                    pageNum = i + 1
                  } else if (currentPage <= 4) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 3) {
                    pageNum = totalPages - 6 + i
                  } else {
                    pageNum = currentPage - 3 + i
                  }
                  
                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className="w-10"
                    >
                      {pageNum}
                    </Button>
                  )
                })}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Suivant
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}