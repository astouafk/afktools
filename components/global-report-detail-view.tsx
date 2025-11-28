// // components/global-report-detail-view.tsx
// "use client"

// import * as React from "react"
// import { ArrowLeft, Edit, Calendar, CheckCircle2, AlertCircle, User, AlertTriangle, FolderKanban, FileText } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { useRouter } from "next/navigation"
// import { useReport } from "@/hooks/use-reports"
// import { useProject } from "@/hooks/use-projects"
// import { useMembers } from "@/hooks/use-members"
// import { useAnalyses } from "@/hooks/use-analyses"
// import { Skeleton } from "@/components/ui/skeleton"
// import Link from "next/link"

// type GlobalReportDetailViewProps = {
//   reportId: string
// }

// const getBlockerLevelColor = (level: string) => {
//   switch (level) {
//     case 'high': return 'bg-red-500/10 text-red-500 border-red-500/20'
//     case 'medium': return 'bg-orange-500/10 text-orange-500 border-orange-500/20'
//     case 'low': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
//     default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
//   }
// }

// const translateBlockerLevel = (level: string) => {
//   switch (level) {
//     case 'high': return 'Élevé'
//     case 'medium': return 'Moyen'
//     case 'low': return 'Bas'
//     default: return level
//   }
// }

// export function GlobalReportDetailView({ reportId }: GlobalReportDetailViewProps) {
//   const router = useRouter()
//   const { data: report, isLoading: reportLoading, error } = useReport(reportId)
//   const { data: project, isLoading: projectLoading } = useProject(report?.projectId || '')
//   const { data: analyses = [] } = useAnalyses(report?.projectId || null)
//   const { data: members = [] } = useMembers(project?.companyId || null)

//   const isLoading = reportLoading || projectLoading

//   if (isLoading) {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center gap-4">
//           <Skeleton className="h-10 w-10" />
//           <div className="flex-1">
//             <Skeleton className="h-9 w-96 mb-2" />
//             <Skeleton className="h-4 w-64" />
//           </div>
//         </div>
//         <div className="grid gap-6 md:grid-cols-3">
//           <Skeleton className="h-32" />
//           <Skeleton className="h-32" />
//           <Skeleton className="h-32" />
//         </div>
//         <Skeleton className="h-64" />
//       </div>
//     )
//   }

//   if (error || !report || !project) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <div className="text-center space-y-4">
//           <p className="text-muted-foreground">Rapport ou projet introuvable</p>
//           <Button asChild>
//             <Link href="/reports">Retour aux rapports</Link>
//           </Button>
//         </div>
//       </div>
//     )
//   }

//   const getMemberName = (memberId?: string) => {
//     if (!memberId) return "Non assignée"
//     const member = members.find(m => m.id === memberId)
//     return member ? member.name : "Membre inconnu"
//   }

//   const totalTasks = report.tasks?.length || 0
//   const completedCount = report.tasks?.filter(t => t.completed).length || 0
//   const completedAnalyses = analyses.filter(a => a.status === 'Completed').length

//   return (
//     <div className="space-y-6 max-w-5xl mx-auto">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => router.back()}
//           >
//             <ArrowLeft className="h-5 w-5" />
//           </Button>
//           <div>
//             <div className="flex items-center gap-3">
//               <h1 className="text-3xl font-semibold tracking-tight text-foreground">
//                 Semaine #{report.weekNumber}
//               </h1>
//               <Badge
//                 variant={report.status === "Published" ? "default" : "secondary"}
//                 className={
//                   report.status === "Published"
//                     ? "bg-green-500/10 text-green-500 border-green-500/20"
//                     : "bg-gray-500/10 text-gray-500 border-gray-500/20"
//                 }
//               >
//                 {report.status === "Published" ? "Publié" : "Brouillon"}
//               </Badge>
//             </div>
//             <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
//               <Calendar className="h-4 w-4" />
//               <span>
//                 {new Date(report.startDate).toLocaleDateString('fr-FR', {
//                   day: 'numeric',
//                   month: 'long'
//                 })}
//                 {' - '}
//                 {new Date(report.endDate).toLocaleDateString('fr-FR', {
//                   day: 'numeric',
//                   month: 'long',
//                   year: 'numeric'
//                 })}
//               </span>
//             </div>
//           </div>
//         </div>
//         {report.status === "Draft" && (
//           <Button asChild>
//             <Link href={`/project/${project.id}/reports/create?reportId=${reportId}`}>
//               <Edit className="mr-2 h-4 w-4" />
//               Continuer l'édition
//             </Link>
//           </Button>
//         )}
//       </div>

//       {/* Informations du projet */}
//       <Card className="bg-primary/5 border-primary/20">
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <FolderKanban className="h-5 w-5" />
//             Informations du Projet
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-3">
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-muted-foreground">Nom du projet</span>
//             <span className="font-semibold">{project.name}</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-muted-foreground">Client</span>
//             <span className="font-medium">{project.client || "Non spécifié"}</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-muted-foreground">Progression globale</span>
//             <span className="font-semibold text-primary">{project.analysisProgress}%</span>
//           </div>
//           <div className="flex items-center justify-between pt-2 border-t">
//             <span className="text-sm text-muted-foreground">Analyses terminées</span>
//             <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
//               <FileText className="h-3 w-3 mr-1" />
//               {completedAnalyses}
//             </Badge>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-sm text-muted-foreground">Rapports publiés</span>
//             <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
//               {project.reportsCount}
//             </Badge>
//           </div>
//           <div className="pt-3">
//             <Button asChild variant="outline" className="w-full">
//               <Link href={`/project/${project.id}`}>
//                 Voir le projet complet
//               </Link>
//             </Button>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="grid gap-6 md:grid-cols-2">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm font-medium">Total Tâches</CardTitle>
//             <AlertCircle className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold">{totalTasks}</div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm font-medium">Tâches Complétées</CardTitle>
//             <CheckCircle2 className="h-4 w-4 text-green-500" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold text-green-500">{completedCount}</div>
//           </CardContent>
//         </Card>
//       </div>

//       {report.summary && (
//         <Card>
//           <CardHeader>
//             <CardTitle>Résumé Hebdomadaire</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-sm whitespace-pre-wrap">{report.summary}</p>
//           </CardContent>
//         </Card>
//       )}

//       {report.tasks && report.tasks.length > 0 && (
//         <Card>
//           <CardHeader>
//             <CardTitle>Tâches de la Semaine</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-3">
//               {report.tasks.map((task) => (
//                 <Card key={task.id} className={task.completed ? "bg-muted/30" : ""}>
//                   <CardContent className="p-4">
//                     <div className="flex items-start gap-3">
//                       <CheckCircle2 
//                         className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
//                           task.completed ? "text-green-500" : "text-muted-foreground"
//                         }`}
//                       />
//                       <div className="flex-1 space-y-2">
//                         <p className={`text-sm ${task.completed ? "line-through text-muted-foreground" : ""}`}>
//                           {task.description}
//                         </p>
//                         {task.assignedTo && (
//                           <div className="flex items-center gap-2 text-xs text-muted-foreground">
//                             <User className="h-3 w-3" />
//                             <span>{getMemberName(task.assignedTo)}</span>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       {report.blockers && report.blockers.length > 0 && (
//         <Card className="border-red-500/50">
//           <CardHeader>
//             <div className="flex items-center gap-2">
//               <AlertTriangle className="h-5 w-5 text-red-500" />
//               <CardTitle className="text-red-500">Blocages & Défis</CardTitle>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {report.blockers.map((blocker, index) => (
//                 <Card key={index} className="border-red-500/30">
//                   <CardContent className="p-4 space-y-3">
//                     <div className="flex items-start gap-2">
//                       <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
//                       <div className="flex-1 space-y-2">
//                         <p className="text-sm font-medium">{blocker.description}</p>
//                         <Badge variant="outline" className={getBlockerLevelColor(blocker.level)}>
//                           {translateBlockerLevel(blocker.level)}
//                         </Badge>
//                         {blocker.mitigation && (
//                           <div className="mt-3 p-3 bg-muted/50 rounded-md">
//                             <p className="text-xs font-semibold text-muted-foreground mb-1">
//                               Action de mitigation :
//                             </p>
//                             <p className="text-sm">{blocker.mitigation}</p>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       {report.nextWeekObjectives && report.nextWeekObjectives.length > 0 && (
//         <Card>
//           <CardHeader>
//             <CardTitle>Objectifs Semaine Prochaine</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ul className="space-y-2">
//               {report.nextWeekObjectives.map((objective, index) => (
//                 <li key={index} className="flex items-start gap-2">
//                   <div className="h-5 w-5 rounded-full border-2 border-primary flex-shrink-0 mt-0.5" />
//                   <span className="text-sm">{objective}</span>
//                 </li>
//               ))}
//             </ul>
//           </CardContent>
//         </Card>
//       )}

//       <Card className="bg-muted/50">
//         <CardContent className="pt-6">
//           <div className="flex items-center justify-between text-sm">
//             <span className="text-muted-foreground">Créé le</span>
//             <span className="font-medium">
//               {new Date(report.createdAt).toLocaleDateString('fr-FR', {
//                 day: 'numeric',
//                 month: 'long',
//                 year: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit'
//               })}
//             </span>
//           </div>
//           {report.updatedAt && (
//             <div className="flex items-center justify-between text-sm mt-2">
//               <span className="text-muted-foreground">Dernière modification</span>
//               <span className="font-medium">
//                 {new Date(report.updatedAt).toLocaleDateString('fr-FR', {
//                   day: 'numeric',
//                   month: 'long',
//                   year: 'numeric',
//                   hour: '2-digit',
//                   minute: '2-digit'
//                 })}
//               </span>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   )
// }








// components/global-report-detail-view.tsx
"use client"

import * as React from "react"
import { ArrowLeft, Edit, Calendar, CheckCircle2, AlertCircle, User, AlertTriangle, FolderKanban, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useReport } from "@/hooks/use-reports"
import { useProject } from "@/hooks/use-projects"
import { useMembers } from "@/hooks/use-members"
import { useAnalyses } from "@/hooks/use-analyses"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

type GlobalReportDetailViewProps = {
  reportId: string
}

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

export function GlobalReportDetailView({ reportId }: GlobalReportDetailViewProps) {
  const router = useRouter()
  const { data: report, isLoading: reportLoading, error } = useReport(reportId)
  const { data: project, isLoading: projectLoading } = useProject(report?.projectId || '')
  
  // ✅ CORRECTION - Ajouter companyId pour analyses
  const { data: analyses = [] } = useAnalyses(report?.projectId || null, project?.companyId || null)
  const { data: members = [] } = useMembers(project?.companyId || null)

  const isLoading = reportLoading || projectLoading

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10" />
          <div className="flex-1">
            <Skeleton className="h-9 w-96 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
        <Skeleton className="h-64" />
      </div>
    )
  }

  if (error || !report || !project) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Rapport ou projet introuvable</p>
          <Button asChild>
            <Link href="/reports">Retour aux rapports</Link>
          </Button>
        </div>
      </div>
    )
  }

  const getMemberName = (memberId?: string) => {
    if (!memberId) return "Non assignée"
    const member = members.find(m => m.id === memberId)
    return member ? member.name : "Membre inconnu"
  }

  const totalTasks = report.tasks?.length || 0
  const completedCount = report.tasks?.filter(t => t.completed).length || 0
  const completedAnalyses = analyses.filter(a => a.status === 'Completed').length

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                Semaine #{report.weekNumber}
              </h1>
              <Badge
                variant={report.status === "Published" ? "default" : "secondary"}
                className={
                  report.status === "Published"
                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                    : "bg-gray-500/10 text-gray-500 border-gray-500/20"
                }
              >
                {report.status === "Published" ? "Publié" : "Brouillon"}
              </Badge>
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(report.startDate).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long'
                })}
                {' - '}
                {new Date(report.endDate).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>
        {report.status === "Draft" && (
          <Button asChild>
            <Link href={`/project/${project.id}/reports/create?reportId=${reportId}`}>
              <Edit className="mr-2 h-4 w-4" />
              Continuer l'édition
            </Link>
          </Button>
        )}
      </div>

      {/* Informations du projet */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderKanban className="h-5 w-5" />
            Informations du Projet
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Nom du projet</span>
            <span className="font-semibold">{project.name}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Client</span>
            <span className="font-medium">{project.client || "Non spécifié"}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Progression globale</span>
            <span className="font-semibold text-primary">{project.analysisProgress}%</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t">
            <span className="text-sm text-muted-foreground">Analyses terminées</span>
            <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
              <FileText className="h-3 w-3 mr-1" />
              {completedAnalyses}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Rapports publiés</span>
            <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
              {project.reportsCount}
            </Badge>
          </div>
          <div className="pt-3">
            <Button asChild variant="outline" className="w-full">
              <Link href={`/project/${project.id}`}>
                Voir le projet complet
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Tâches</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalTasks}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tâches Complétées</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">{completedCount}</div>
          </CardContent>
        </Card>
      </div>

      {report.summary && (
        <Card>
          <CardHeader>
            <CardTitle>Résumé Hebdomadaire</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm whitespace-pre-wrap">{report.summary}</p>
          </CardContent>
        </Card>
      )}

      {report.tasks && report.tasks.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Tâches de la Semaine</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {report.tasks.map((task) => (
                <Card key={task.id} className={task.completed ? "bg-muted/30" : ""}>
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
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <User className="h-3 w-3" />
                            <span>{getMemberName(task.assignedTo)}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {report.blockers && report.blockers.length > 0 && (
        <Card className="border-red-500/50">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <CardTitle className="text-red-500">Blocages & Défis</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {report.blockers.map((blocker, index) => (
                <Card key={index} className="border-red-500/30">
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
          </CardContent>
        </Card>
      )}

      {report.nextWeekObjectives && report.nextWeekObjectives.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Objectifs Semaine Prochaine</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {report.nextWeekObjectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full border-2 border-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Card className="bg-muted/50">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Créé le</span>
            <span className="font-medium">
              {new Date(report.createdAt).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
          {report.updatedAt && (
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-muted-foreground">Dernière modification</span>
              <span className="font-medium">
                {new Date(report.updatedAt).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}