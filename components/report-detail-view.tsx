// // components/report-detail-view.tsx
// "use client"

// import * as React from "react"
// import { ArrowLeft, Calendar, CheckCircle2, AlertCircle, User, AlertTriangle, Target, FileText } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { useRouter } from "next/navigation"
// import { useReport } from "@/hooks/use-reports"
// import { useProjectMembers } from "@/hooks/use-project-members"
// import { Skeleton } from "@/components/ui/skeleton"
// import Link from "next/link"

// type ReportDetailViewProps = {
//   projectId: string
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

// export function ReportDetailView({ projectId, reportId }: ReportDetailViewProps) {
//   const router = useRouter()
//   const { data: report, isLoading, error } = useReport(reportId)
//   const { data: projectMembersData = [] } = useProjectMembers(report?.projectId || null)

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
//         <div className="grid gap-6 md:grid-cols-2">
//           <Skeleton className="h-32" />
//           <Skeleton className="h-32" />
//         </div>
//         <Skeleton className="h-64" />
//       </div>
//     )
//   }

//   if (error || !report) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <div className="text-center space-y-4">
//           <p className="text-muted-foreground">Rapport introuvable</p>
//           <Button asChild>
//             <Link href={`/project/${projectId}/reports`}>Retour aux rapports</Link>
//           </Button>
//         </div>
//       </div>
//     )
//   }

//   const getMemberName = (memberId?: string) => {
//     if (!memberId) return "Non assignée"
//     const projectMember = projectMembersData.find(pm => pm.memberId === memberId)
//     return projectMember ? projectMember.memberName : "Membre inconnu"
//   }

//   const totalTasks = report.tasks?.length || 0
//   const completedCount = report.tasks?.filter(t => t.completed).length || 0
//   const completionRate = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0

//   return (
//     <div className="space-y-6">
//       {/* Header */}
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
//       </div>

//       {/* Statistiques */}
//       <div className="grid gap-6 md:grid-cols-3">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm font-medium">Total Tâches</CardTitle>
//             <FileText className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold">{totalTasks}</div>
//             <p className="text-xs text-muted-foreground mt-1">
//               Tâches de la semaine
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm font-medium">Tâches Complétées</CardTitle>
//             <CheckCircle2 className="h-4 w-4 text-green-500" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold text-green-500">{completedCount}</div>
//             <p className="text-xs text-muted-foreground mt-1">
//               Taux : {completionRate}%
//             </p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm font-medium">Blocages Signalés</CardTitle>
//             <AlertTriangle className="h-4 w-4 text-amber-500" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold text-amber-500">
//               {report.blockers?.length || 0}
//             </div>
//             <p className="text-xs text-muted-foreground mt-1">
//               Défis identifiés
//             </p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Résumé */}
//       {report.summary && (
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <FileText className="h-5 w-5" />
//               Résumé Hebdomadaire
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-sm whitespace-pre-wrap leading-relaxed">{report.summary}</p>
//           </CardContent>
//         </Card>
//       )}

//       {/* Tâches & Blocages */}
//       <div className="grid gap-6 lg:grid-cols-2">
//         {/* Tâches */}
//         {report.tasks && report.tasks.length > 0 && (
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <CheckCircle2 className="h-5 w-5" />
//                 Tâches de la Semaine
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 {report.tasks.map((task) => (
//                   <Card key={task.id} className={`${task.completed ? "bg-muted/30" : "bg-card"}`}>
//                     <CardContent className="p-4">
//                       <div className="flex items-start gap-3">
//                         <CheckCircle2 
//                           className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
//                             task.completed ? "text-green-500" : "text-muted-foreground"
//                           }`}
//                         />
//                         <div className="flex-1 space-y-2">
//                           <p className={`text-sm ${task.completed ? "line-through text-muted-foreground" : ""}`}>
//                             {task.description}
//                           </p>
//                           {task.assignedTo && (
//                             <div className="flex items-center gap-2">
//                               <Badge variant="outline" className="text-xs">
//                                 <User className="h-3 w-3 mr-1" />
//                                 {getMemberName(task.assignedTo)}
//                               </Badge>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* Blocages */}
//         {report.blockers && report.blockers.length > 0 && (
//           <Card className="border-red-500/50">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-red-500">
//                 <AlertTriangle className="h-5 w-5" />
//                 Blocages & Défis
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 {report.blockers.map((blocker, index) => (
//                   <Card key={index} className="border-red-500/30">
//                     <CardContent className="p-4 space-y-3">
//                       <div className="flex items-start gap-2">
//                         <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
//                         <div className="flex-1 space-y-2">
//                           <p className="text-sm font-medium">{blocker.description}</p>
//                           <Badge variant="outline" className={getBlockerLevelColor(blocker.level)}>
//                             {translateBlockerLevel(blocker.level)}
//                           </Badge>
//                           {blocker.mitigation && (
//                             <div className="mt-3 p-3 bg-muted/50 rounded-md">
//                               <p className="text-xs font-semibold text-muted-foreground mb-1">
//                                 Action de mitigation :
//                               </p>
//                               <p className="text-sm">{blocker.mitigation}</p>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         )}
//       </div>

//       {/* Objectifs Semaine Prochaine */}
//       {report.nextWeekObjectives && report.nextWeekObjectives.length > 0 && (
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Target className="h-5 w-5" />
//               Objectifs Semaine Prochaine
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid gap-3 md:grid-cols-2">
//               {report.nextWeekObjectives.map((objective, index) => (
//                 <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-muted/30">
//                   <div className="h-6 w-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <span className="text-xs font-semibold">{index + 1}</span>
//                   </div>
//                   <span className="text-sm flex-1">{objective}</span>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       {/* Métadonnées */}
//       <Card className="bg-muted/30">
//         <CardContent className="pt-6">
//           <div className="grid gap-4 md:grid-cols-2">
//             <div className="flex items-center justify-between">
//               <span className="text-sm text-muted-foreground">Créé le</span>
//               <span className="text-sm font-medium">
//                 {new Date(report.createdAt).toLocaleDateString('fr-FR', {
//                   day: 'numeric',
//                   month: 'long',
//                   year: 'numeric',
//                   hour: '2-digit',
//                   minute: '2-digit'
//                 })}
//               </span>
//             </div>
//             {report.updatedAt && (
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-muted-foreground">Dernière modification</span>
//                 <span className="text-sm font-medium">
//                   {new Date(report.updatedAt).toLocaleDateString('fr-FR', {
//                     day: 'numeric',
//                     month: 'long',
//                     year: 'numeric',
//                     hour: '2-digit',
//                     minute: '2-digit'
//                   })}
//                 </span>
//               </div>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }





// components/report-detail-view.tsx
"use client"

import * as React from "react"
import { ArrowLeft, Calendar, CheckCircle2, AlertCircle, User, AlertTriangle, Target, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useReport } from "@/hooks/use-reports"
import { useProjectMembers } from "@/hooks/use-project-members"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

type ReportDetailViewProps = {
  projectId: string
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

export function ReportDetailView({ projectId, reportId }: ReportDetailViewProps) {
  const router = useRouter()
  const { data: report, isLoading, error } = useReport(reportId)
  const { data: projectMembersData = [] } = useProjectMembers(report?.projectId || null)

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

  if (error || !report) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Rapport introuvable</p>
          <Button asChild>
            <Link href={`/project/${projectId}/reports`}>Retour aux rapports</Link>
          </Button>
        </div>
      </div>
    )
  }

  const getMemberName = (memberId?: string) => {
    if (!memberId) return "Non assignée"
    const projectMember = projectMembersData.find(pm => pm.memberId === memberId)
    return projectMember ? projectMember.memberName : "Membre inconnu"
  }

  const totalTasks = report.tasks?.length || 0
  const completedCount = report.tasks?.filter(t => t.completed).length || 0
  const completionRate = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0

  return (
    <div className="space-y-6">
      {/* Header */}
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
      </div>

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
            <div className="text-3xl font-bold text-amber-500">
              {report.blockers?.length || 0}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Défis identifiés
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Résumé */}
      {report.summary && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Résumé Hebdomadaire
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm whitespace-pre-wrap leading-relaxed">{report.summary}</p>
          </CardContent>
        </Card>
      )}

      {/* Tâches & Blocages */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Tâches */}
        {report.tasks && report.tasks.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Tâches de la Semaine
                <Badge variant="secondary" className="ml-auto">{report.tasks.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`space-y-3 ${report.tasks.length > 10 ? 'max-h-[500px] overflow-y-auto pr-2' : ''}`}>
                {report.tasks.map((task) => (
                  <Card key={task.id} className={`${task.completed ? "bg-muted/30" : "bg-card"}`}>
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
            </CardContent>
          </Card>
        )}

        {/* Blocages */}
        {report.blockers && report.blockers.length > 0 && (
          <Card className="border-red-500/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-500">
                <AlertTriangle className="h-5 w-5" />
                Blocages & Défis
                <Badge variant="secondary" className="ml-auto">{report.blockers.length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`space-y-3 ${report.blockers.length > 5 ? 'max-h-[500px] overflow-y-auto pr-2' : ''}`}>
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
      </div>

      {/* Objectifs Semaine Prochaine */}
      {report.nextWeekObjectives && report.nextWeekObjectives.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Objectifs Semaine Prochaine
              <Badge variant="secondary" className="ml-auto">{report.nextWeekObjectives.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`${report.nextWeekObjectives.length > 20 ? 'max-h-[500px] overflow-y-auto pr-2' : ''}`}>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {report.nextWeekObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-muted/30">
                    <div className="h-6 w-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold">{index + 1}</span>
                    </div>
                    <span className="text-sm flex-1">{objective}</span>
                  </div>
                ))}
              </div>
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
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Dernière modification</span>
                <span className="text-sm font-medium">
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
          </div>
        </CardContent>
      </Card>
    </div>
  )
}