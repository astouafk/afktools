// // components/project-detail-view.tsx
// "use client"

// import * as React from "react"
// import { ArrowLeft, FileText, Calendar, Building, Monitor, Smartphone, Globe, Megaphone, CheckCircle2, AlertCircle, Target } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { Progress } from "@/components/ui/progress"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import Link from "next/link"
// import { useProject, useCompleteAnalysisPhase } from "@/hooks/use-projects"
// import { useAnalyses } from "@/hooks/use-analyses"
// import { Skeleton } from "@/components/ui/skeleton"
// import { useToast } from "@/hooks/use-toast"
// import { ProjectTeamView } from "@/components/project-team-view"



// type ProjectDetailViewProps = {
//   projectId: string
// }

// const getProjectIcon = (type: string) => {
//   switch (type) {
//     case "Web App": return <Monitor className="h-4 w-4" />
//     case "Mobile App": return <Smartphone className="h-4 w-4" />
//     case "Website": return <Globe className="h-4 w-4" />
//     case "Social Media Campaign": return <Megaphone className="h-4 w-4" />
//     default: return <Monitor className="h-4 w-4" />
//   }
// }

// const getTypeColor = (type: string) => {
//   switch (type) {
//     case "Web App": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
//     case "Mobile App": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
//     case "Website": return "bg-green-500/10 text-green-500 border-green-500/20"
//     case "Social Media Campaign": return "bg-pink-500/10 text-pink-500 border-pink-500/20"
//     default: return "bg-blue-500/10 text-blue-500 border-blue-500/20"
//   }
// }

// const translateType = (type: string) => {
//   switch (type) {
//     case "Web App": return "Application Web"
//     case "Mobile App": return "Application Mobile"
//     case "Website": return "Site Web"
//     case "Social Media Campaign": return "Campagne Réseaux Sociaux"
//     default: return type
//   }
// }

// const translateStatus = (status: string) => {
//   return status === "Open" ? "Ouvert" : "Terminé"
// }

// export function ProjectDetailView({ projectId }: ProjectDetailViewProps) {
//   console.log('[ProjectDetailView] Rendering with projectId:', projectId)
  
//   const { toast } = useToast()
//   const { data: project, isLoading, error } = useProject(projectId)
//   const { data: analyses = [] } = useAnalyses(projectId)
//   const completeAnalysisPhase = useCompleteAnalysisPhase()

//   console.log('[ProjectDetailView] Query state:', { 
//     isLoading, 
//     hasError: !!error, 
//     hasProject: !!project,
//     project 
//   })

//   // ✅ Fonction de bouclage
//   const handleCompleteAnalysis = async () => {
//     if (!project) return

//     try {
//       await completeAnalysisPhase.mutateAsync({ projectId: project.id })
//       toast({
//         title: "Phase d'analyse bouclée",
//         description: "Vous pouvez maintenant créer des rapports hebdomadaires."
//       })
//     } catch (error: any) {
//       toast({
//         title: "Erreur",
//         description: error.message,
//         variant: "destructive"
//       })
//     }
//   }

//   if (isLoading) {
//     console.log('[ProjectDetailView] Showing loading state')
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center gap-4">
//           <Skeleton className="h-10 w-10" />
//           <div className="flex-1">
//             <Skeleton className="h-9 w-96 mb-2" />
//             <Skeleton className="h-4 w-full max-w-2xl" />
//           </div>
//         </div>
//         <div className="grid gap-6 md:grid-cols-2">
//           <Skeleton className="h-64" />
//           <Skeleton className="h-64" />
//         </div>
//         <Skeleton className="h-96" />
//       </div>
//     )
//   }

//   if (error) {
//     console.error('[ProjectDetailView] Showing error state:', error)
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <div className="text-center space-y-4">
//           <p className="text-muted-foreground">Erreur lors du chargement du projet</p>
//           <p className="text-sm text-destructive">{error.message}</p>
//           <Button asChild>
//             <Link href="/projects">Retour aux projets</Link>
//           </Button>
//         </div>
//       </div>
//     )
//   }

//   if (!project) {
//     console.log('[ProjectDetailView] Showing not found state')
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <div className="text-center space-y-4">
//           <p className="text-muted-foreground">Projet introuvable</p>
//           <p className="text-sm text-muted-foreground">ID: {projectId}</p>
//           <Button asChild>
//             <Link href="/projects">Retour aux projets</Link>
//           </Button>
//         </div>
//       </div>
//     )
//   }

//   console.log('[ProjectDetailView] Rendering project details:', project)

//   const completedAnalyses = analyses.filter(a => a.status === 'Completed').length

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center gap-4">
//         <Button asChild variant="ghost" size="icon">
//           <Link href="/projects">
//             <ArrowLeft className="h-4 w-4" />
//           </Link>
//         </Button>
//         <div className="flex-1">
//           <div className="flex items-center gap-3">
//             <h1 className="text-3xl font-semibold tracking-tight text-card-foreground">{project.name}</h1>
//             <Badge variant={project.status === "Open" ? "default" : "secondary"}>
//               {translateStatus(project.status)}
//             </Badge>
//           </div>
//           <p className="text-sm text-muted-foreground mt-1">
//             {project.description || `Projet ${translateType(project.type)} pour ${project.client || "client non spécifié"}`}
//           </p>
//         </div>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2">
//         <Card>
//           <CardHeader>
//             <CardTitle>Informations du Projet</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="space-y-3">
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-muted-foreground w-32">Type :</span>
//                 <Badge variant="outline" className={`${getTypeColor(project.type)} flex items-center gap-1`}>
//                   {getProjectIcon(project.type)}
//                   {translateType(project.type)}
//                 </Badge>
//               </div>
              
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-muted-foreground w-32">Statut :</span>
//                 <Badge
//                   variant={project.status === "Open" ? "default" : "secondary"}
//                   className={
//                     project.status === "Open"
//                       ? "bg-green-500/10 text-green-500 border-green-500/20"
//                       : "bg-muted text-muted-foreground"
//                   }
//                 >
//                   {translateStatus(project.status)}
//                 </Badge>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Building className="h-4 w-4 text-muted-foreground" />
//                 <span className="text-sm text-muted-foreground w-28">Client :</span>
//                 <span className="text-sm font-medium">{project.client || "Aucun client"}</span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4 text-muted-foreground" />
//                 <span className="text-sm text-muted-foreground w-28">Date de début :</span>
//                 <span className="text-sm font-medium">
//                   {new Date(project.startDate).toLocaleDateString('fr-FR', {
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric'
//                   })}
//                 </span>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4 text-muted-foreground" />
//                 <span className="text-sm text-muted-foreground w-28">Créé le :</span>
//                 <span className="text-sm font-medium">
//                   {new Date(project.createdAt).toLocaleDateString('fr-FR', {
//                     year: 'numeric',
//                     month: 'long',
//                     day: 'numeric'
//                   })}
//                 </span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Progression</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <div className="flex items-center justify-between text-sm">
//                 <span className="text-muted-foreground">Avancement Analyse</span>
//                 <span className="font-semibold text-foreground">{project.analysisProgress}%</span>
//               </div>
//               <Progress value={project.analysisProgress} className="h-3" />
//             </div>

//             <div className="pt-4 space-y-3">
//               <div className="flex items-center gap-2">
//                 {project.analysisComplete ? (
//                   <>
//                     <CheckCircle2 className="h-5 w-5 text-green-500" />
//                     <span className="text-sm text-green-500 font-medium">Phase d'Analyse Bouclée</span>
//                   </>
//                 ) : (
//                   <>
//                     <AlertCircle className="h-5 w-5 text-amber-500" />
//                     <span className="text-sm text-amber-500 font-medium">Analyse en Cours</span>
//                   </>
//                 )}
//               </div>

//               <div className="flex items-center justify-between pt-2 border-t">
//                 <span className="text-sm text-muted-foreground">Rapports générés</span>
//                 <span className="text-2xl font-bold text-foreground">{project.reportsCount}</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* ✅ NOUVELLE CARD - Progression des Analyses */}
//       <Card>
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <div>
//               <CardTitle>Progression des Analyses</CardTitle>
//               <p className="text-sm text-muted-foreground mt-1">
//                 Complétez vos analyses pour boucler cette phase
//               </p>
//             </div>
//            {/* ✅ Bouton visible si 100% ET au moins 1 analyse terminée ET PAS déjà bouclé */}
// {project.analysisProgress === 100 && 
//  completedAnalyses > 0 && 
//  completedAnalyses < 4 && 
//  !project.analysisComplete && (
//   <Button 
//     onClick={handleCompleteAnalysis}
//     disabled={completeAnalysisPhase.isPending}
//   >
//     <CheckCircle2 className="mr-2 h-4 w-4" />
//     {completeAnalysisPhase.isPending ? "Bouclage..." : "Boucler les Analyses"}
//   </Button>
// )}
//           </div>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           {/* ✅ Alerte si < 100% */}
//           {project.analysisProgress < 100 && (
//             <Alert>
//               <Target className="h-4 w-4" />
//               <AlertTitle>Analyses en cours</AlertTitle>
//               <AlertDescription>
//                 Marquez toutes vos analyses comme "Terminée" pour atteindre 100% et pouvoir boucler cette phase.
//               </AlertDescription>
//             </Alert>
//           )}

//           {/* ✅ Alerte si 100% mais pas bouclé */}
//           {project.analysisProgress === 100 && !project.analysisComplete && (
//             <Alert className="border-green-500/50 bg-green-500/10">
//               <CheckCircle2 className="h-4 w-4 text-green-500" />
//               <AlertTitle className="text-green-500">Analyses complètes !</AlertTitle>
//               <AlertDescription className="text-green-600">
//                 Toutes vos analyses sont terminées. Cliquez sur "Boucler les Analyses" pour finaliser cette phase.
//               </AlertDescription>
//             </Alert>
//           )}

//           {/* ✅ Confirmation si bouclé */}
//           {project.analysisComplete && (
//             <Alert className="border-green-500/50 bg-green-500/10">
//               <CheckCircle2 className="h-4 w-4 text-green-500" />
//               <AlertTitle className="text-green-500">Phase d'analyse bouclée</AlertTitle>
//               <AlertDescription className="text-green-600">
//                 Vous pouvez maintenant créer des rapports hebdomadaires pour ce projet.
//               </AlertDescription>
//             </Alert>
//           )}

//           {/* ✅ Statistiques */}
//           <div className="grid grid-cols-2 gap-4 pt-4 border-t">
//             <div>
//               <p className="text-sm text-muted-foreground">Analyses créées</p>
//               <p className="text-2xl font-bold">{analyses.length}</p>
//             </div>
//             <div>
//               <p className="text-sm text-muted-foreground">Analyses terminées</p>
//               <p className="text-2xl font-bold text-green-500">{completedAnalyses}</p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <Tabs defaultValue="analysis" className="w-full">
//         <TabsList className="grid w-full grid-cols-3">
//           <TabsTrigger value="analysis">Analyses & Spécifications</TabsTrigger>
//           <TabsTrigger value="reports">Rapport Hebdomadaire</TabsTrigger>
//           <TabsTrigger value="team">Équipe</TabsTrigger>
//         </TabsList>
//         <TabsContent value="analysis" className="space-y-4 mt-6">
//           <Card className="bg-card">
//             <CardHeader>
//               <CardTitle className="text-card-foreground">Analyses & Spécifications</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-muted-foreground">Cliquer pour voir vos analyses et spécifications sur ce projet</p>
//               <Button className="mt-4" asChild>
//                 <Link href={`/project/${projectId}/analysis`}>Voir Analyses</Link>
//               </Button>
//             </CardContent>
//           </Card>
//         </TabsContent>
//         <TabsContent value="reports" className="space-y-4 mt-6">
//           <Card className="bg-card">
//             <CardHeader>
//               <CardTitle className="text-card-foreground">Rapports Hebdomadaires</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-muted-foreground">
//                 {project.analysisComplete 
//                   ? "Voir tous les rapports hebdomadaires de ce projet."
//                   : "L'analyse doit être bouclée avant de pouvoir générer des rapports."
//                 }
//               </p>
//               <Button 
//                 className="mt-4" 
//                 asChild={project.analysisComplete}
//                 disabled={!project.analysisComplete}
//               >
//                 {project.analysisComplete ? (
//                   <Link href={`/project/${projectId}/reports`}>Voir Rapports</Link>
//                 ) : (
//                   <span>Voir Rapports</span>
//                 )}
//               </Button>
//             </CardContent>
//           </Card>
//         </TabsContent>
//         <TabsContent value="team" className="space-y-4 mt-6">
//   <Card className="bg-card">
//     <CardHeader>
//       <CardTitle className="text-card-foreground">Membres de l'Équipe</CardTitle>
//     </CardHeader>
//     <CardContent>
//       <p className="text-muted-foreground">
//         Voir tous les membres assignés à ce projet.
//       </p>
//       <Button className="mt-4" asChild>
//         <Link href={`/project/${projectId}/team`}>Voir Équipe</Link>
//       </Button>
//     </CardContent>
//   </Card>
// </TabsContent>
//       </Tabs>
//     </div>
//   )
// }




// components/project-detail-view.tsx
"use client"

import * as React from "react"
import { ArrowLeft, FileText, Calendar, Building, Monitor, Smartphone, Globe, Megaphone, CheckCircle2, AlertCircle, Target, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { useProject, useCompleteAnalysisPhase } from "@/hooks/use-projects"
import { useAnalyses } from "@/hooks/use-analyses"
import { useProjectMembers } from "@/hooks/use-project-members"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"
import { AssignMembersDialog } from "@/components/assign-members-dialog"

type ProjectDetailViewProps = {
  projectId: string
}

const getProjectIcon = (type: string) => {
  switch (type) {
    case "Web App": return <Monitor className="h-4 w-4" />
    case "Mobile App": return <Smartphone className="h-4 w-4" />
    case "Website": return <Globe className="h-4 w-4" />
    case "Social Media Campaign": return <Megaphone className="h-4 w-4" />
    default: return <Monitor className="h-4 w-4" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Web App": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    case "Mobile App": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
    case "Website": return "bg-green-500/10 text-green-500 border-green-500/20"
    case "Social Media Campaign": return "bg-pink-500/10 text-pink-500 border-pink-500/20"
    default: return "bg-blue-500/10 text-blue-500 border-blue-500/20"
  }
}

const translateType = (type: string) => {
  switch (type) {
    case "Web App": return "Application Web"
    case "Mobile App": return "Application Mobile"
    case "Website": return "Site Web"
    case "Social Media Campaign": return "Campagne Réseaux Sociaux"
    default: return type
  }
}

const translateStatus = (status: string) => {
  return status === "Open" ? "Ouvert" : "Terminé"
}

export function ProjectDetailView({ projectId }: ProjectDetailViewProps) {
  console.log('[ProjectDetailView] Rendering with projectId:', projectId)
  
  const { toast } = useToast()
  const { data: project, isLoading, error } = useProject(projectId)
  const { data: analyses = [] } = useAnalyses(projectId)
  const { data: projectMembers = [] } = useProjectMembers(projectId)
  const completeAnalysisPhase = useCompleteAnalysisPhase()
  
  const [assignMembersDialogOpen, setAssignMembersDialogOpen] = React.useState(false)

  console.log('[ProjectDetailView] Query state:', { 
    isLoading, 
    hasError: !!error, 
    hasProject: !!project,
    project 
  })

  // Fonction de bouclage
  const handleCompleteAnalysis = async () => {
    if (!project) return

    try {
      await completeAnalysisPhase.mutateAsync({ projectId: project.id })
      toast({
        title: "Phase d'analyse bouclée",
        description: "Vous pouvez maintenant créer des rapports hebdomadaires."
      })
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      })
    }
  }

  if (isLoading) {
    console.log('[ProjectDetailView] Showing loading state')
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10" />
          <div className="flex-1">
            <Skeleton className="h-9 w-96 mb-2" />
            <Skeleton className="h-4 w-full max-w-2xl" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="h-64" />
          <Skeleton className="h-64" />
        </div>
        <Skeleton className="h-96" />
      </div>
    )
  }

  if (error) {
    console.error('[ProjectDetailView] Showing error state:', error)
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Erreur lors du chargement du projet</p>
          <p className="text-sm text-destructive">{error.message}</p>
          <Button asChild>
            <Link href="/projects">Retour aux projets</Link>
          </Button>
        </div>
      </div>
    )
  }

  if (!project) {
    console.log('[ProjectDetailView] Showing not found state')
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Projet introuvable</p>
          <p className="text-sm text-muted-foreground">ID: {projectId}</p>
          <Button asChild>
            <Link href="/projects">Retour aux projets</Link>
          </Button>
        </div>
      </div>
    )
  }

  console.log('[ProjectDetailView] Rendering project details:', project)

  const completedAnalyses = analyses.filter(a => a.status === 'Completed').length

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-card-foreground">{project.name}</h1>
            <Badge variant={project.status === "Open" ? "default" : "secondary"}>
              {translateStatus(project.status)}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {project.description || `Projet ${translateType(project.type)} pour ${project.client || "client non spécifié"}`}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Informations du Projet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-32">Type :</span>
                <Badge variant="outline" className={`${getTypeColor(project.type)} flex items-center gap-1`}>
                  {getProjectIcon(project.type)}
                  {translateType(project.type)}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground w-32">Statut :</span>
                <Badge
                  variant={project.status === "Open" ? "default" : "secondary"}
                  className={
                    project.status === "Open"
                      ? "bg-green-500/10 text-green-500 border-green-500/20"
                      : "bg-muted text-muted-foreground"
                  }
                >
                  {translateStatus(project.status)}
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground w-28">Client :</span>
                <span className="text-sm font-medium">{project.client || "Aucun client"}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground w-28">Date de début :</span>
                <span className="text-sm font-medium">
                  {new Date(project.startDate).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground w-28">Créé le :</span>
                <span className="text-sm font-medium">
                  {new Date(project.createdAt).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progression</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Avancement Analyse</span>
                <span className="font-semibold text-foreground">{project.analysisProgress}%</span>
              </div>
              <Progress value={project.analysisProgress} className="h-3" />
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-2">
                {project.analysisComplete ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-green-500 font-medium">Phase d'Analyse Bouclée</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-5 w-5 text-amber-500" />
                    <span className="text-sm text-amber-500 font-medium">Analyse en Cours</span>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between pt-2 border-t">
                <span className="text-sm text-muted-foreground">Rapports générés</span>
                <span className="text-2xl font-bold text-foreground">{project.reportsCount}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Grid 2 colonnes : Progression des Analyses | Gestion d'Équipe */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Card Progression des Analyses */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Progression des Analyses</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Complétez vos analyses pour boucler cette phase
                </p>
              </div>
              {project.analysisProgress === 100 && 
               completedAnalyses > 0 && 
               completedAnalyses < 4 && 
               !project.analysisComplete && (
                <Button 
                  onClick={handleCompleteAnalysis}
                  disabled={completeAnalysisPhase.isPending}
                  size="sm"
                >
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  {completeAnalysisPhase.isPending ? "Bouclage..." : "Boucler"}
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {project.analysisProgress < 100 && (
              <Alert>
                <Target className="h-4 w-4" />
                <AlertTitle>Analyses en cours</AlertTitle>
                <AlertDescription>
                  Marquez toutes vos analyses comme "Terminée" pour atteindre 100%.
                </AlertDescription>
              </Alert>
            )}

            {project.analysisProgress === 100 && !project.analysisComplete && (
              <Alert className="border-green-500/50 bg-green-500/10">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertTitle className="text-green-500">Analyses complètes !</AlertTitle>
                <AlertDescription className="text-green-600">
                  Cliquez sur "Boucler" pour finaliser cette phase.
                </AlertDescription>
              </Alert>
            )}

            {project.analysisComplete && (
              <Alert className="border-green-500/50 bg-green-500/10">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <AlertTitle className="text-green-500">Phase d'analyse bouclée</AlertTitle>
                <AlertDescription className="text-green-600">
                  Vous pouvez créer des rapports hebdomadaires.
                </AlertDescription>
              </Alert>
            )}

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <p className="text-sm text-muted-foreground">Analyses créées</p>
                <p className="text-2xl font-bold">{analyses.length}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Terminées</p>
                <p className="text-2xl font-bold text-green-500">{completedAnalyses}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card Gestion d'Équipe */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Gestion d'Équipe</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Associez des membres à ce projet
                </p>
              </div>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {projectMembers.length}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Users className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">
                  {projectMembers.length === 0
                    ? "Aucun membre assigné"
                    : `${projectMembers.length} membre(s) assigné(s)`
                  }
                </p>
                <p className="text-xs text-muted-foreground">
                  Ajoutez des membres pour collaborer sur ce projet
                </p>
              </div>
            </div>

            <Button 
              onClick={() => setAssignMembersDialogOpen(true)}
              className="w-full"
            >
              <Users className="mr-2 h-4 w-4" />
              Associer des Membres
            </Button>

            {projectMembers.length > 0 && (
              <Button 
                asChild
                variant="outline"
                className="w-full"
              >
                {/* <Link href={`/project/${projectId}/team`}>
                  Voir l'Équipe Complète
                </Link> */}
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="analysis" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="analysis">Analyses & Spécifications</TabsTrigger>
          <TabsTrigger value="reports">Rapport Hebdomadaire</TabsTrigger>
          <TabsTrigger value="team">Équipe</TabsTrigger>
        </TabsList>
        <TabsContent value="analysis" className="space-y-4 mt-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Analyses & Spécifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Cliquer pour voir vos analyses et spécifications sur ce projet</p>
              <Button className="mt-4" asChild>
                <Link href={`/project/${projectId}/analysis`}>Voir Analyses</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4 mt-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Rapports Hebdomadaires</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {project.analysisComplete 
                  ? "Voir tous les rapports hebdomadaires de ce projet."
                  : "L'analyse doit être bouclée avant de pouvoir générer des rapports."
                }
              </p>
              <Button 
                className="mt-4" 
                asChild={project.analysisComplete}
                disabled={!project.analysisComplete}
              >
                {project.analysisComplete ? (
                  <Link href={`/project/${projectId}/reports`}>Voir Rapports</Link>
                ) : (
                  <span>Voir Rapports</span>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="team" className="space-y-4 mt-6">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">Membres de l'Équipe</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Voir tous les membres assignés à ce projet.</p>
              <Button className="mt-4" asChild>
                <Link href={`/project/${projectId}/team`}>Voir Équipe</Link>
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Dialog d'association de membres */}
      {project.companyId && (
        <AssignMembersDialog
          open={assignMembersDialogOpen}
          onOpenChange={setAssignMembersDialogOpen}
          projectId={projectId}
          companyId={project.companyId}
        />
      )}
    </div>
  )
}