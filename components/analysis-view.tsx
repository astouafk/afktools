// // components/analysis-view.tsx
// "use client"

// import * as React from "react"
// import { ArrowLeft, Plus, Filter, Eye, FileText, CheckCircle2, Clock, MoreVertical, Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import { useAnalyses, useDeleteAnalysis } from "@/hooks/use-analyses"
// import { useReports } from "@/hooks/use-reports"
// import { Skeleton } from "@/components/ui/skeleton"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog"
// import { useToast } from "@/hooks/use-toast"

// type AnalysisViewProps = {
//   projectId: string
// }

// const ITEMS_PER_PAGE = 6

// const getTypeColor = (type: string) => {
//   switch (type) {
//     case "Technical": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
//     case "Functional": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
//     case "UI/UX": return "bg-pink-500/10 text-pink-500 border-pink-500/20"
//     case "Performance": return "bg-green-500/10 text-green-500 border-green-500/20"
//     default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
//   }
// }

// const getTypeLabel = (type: string) => {
//   switch (type) {
//     case "Technical": return "Technique"
//     case "Functional": return "Fonctionnelle"
//     case "UI/UX": return "UI/UX"
//     case "Performance": return "Performance"
//     default: return type
//   }
// }

// const getStatusColor = (status: string) => {
//   switch (status) {
//     case "Completed": return "bg-green-500/10 text-green-500 border-green-500/20"
//     case "In Progress": return "bg-amber-500/10 text-amber-500 border-amber-500/20"
//     case "Draft": return "bg-gray-500/10 text-gray-500 border-gray-500/20"
//     default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
//   }
// }

// const getStatusLabel = (status: string) => {
//   switch (status) {
//     case "Completed": return "Terminée"
//     case "In Progress": return "En Cours"
//     case "Draft": return "Brouillon"
//     default: return status
//   }
// }

// export function AnalysisView({ projectId }: AnalysisViewProps) {
//   const router = useRouter()
//   const { toast } = useToast()
//   const { data: analyses = [], isLoading } = useAnalyses(projectId)
//   const { data: reports = [], isLoading: reportsLoading } = useReports(projectId)
//   const deleteAnalysis = useDeleteAnalysis()
  
//   const [filterType, setFilterType] = React.useState<string>("all")
//   const [filterStatus, setFilterStatus] = React.useState<string>("all")
//   const [currentPage, setCurrentPage] = React.useState(1)
//   const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
//   const [analysisToDelete, setAnalysisToDelete] = React.useState<string | null>(null)

//   const filteredAnalyses = analyses.filter((analysis) => {
//     const matchesType = filterType === "all" || analysis.type === filterType
//     const matchesStatus = filterStatus === "all" || analysis.status === filterStatus
//     return matchesType && matchesStatus
//   })

//   const totalPages = Math.ceil(filteredAnalyses.length / ITEMS_PER_PAGE)
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
//   const endIndex = startIndex + ITEMS_PER_PAGE
//   const paginatedAnalyses = filteredAnalyses.slice(startIndex, endIndex)

//   const completedCount = analyses.filter(a => a.status === 'Completed').length
//   const progressPercentage = analyses.length > 0 
//     ? Math.round((completedCount / analyses.length) * 100)
//     : 0

//   // Vérifier si des rapports existent
//   const hasReports = reports.length > 0
//   const canDeleteAnalyses = !hasReports

//   const handleDelete = async () => {
//     if (!analysisToDelete) return
    
//     try {
//       await deleteAnalysis.mutateAsync(analysisToDelete)
//       toast({
//         title: "Analyse supprimée",
//         description: "L'analyse a été supprimée avec succès."
//       })
//       setDeleteDialogOpen(false)
//       setAnalysisToDelete(null)
//     } catch (error: any) {
//       toast({
//         title: "Erreur",
//         description: error.message,
//         variant: "destructive"
//       })
//     }
//   }

//   if (isLoading || reportsLoading) {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <Skeleton className="h-10 w-64" />
//           <Skeleton className="h-10 w-40" />
//         </div>
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
//             <h2 className="text-2xl font-semibold tracking-tight text-foreground">
//               Analyses & Spécifications
//             </h2>
//             <p className="text-sm text-muted-foreground mt-1">
//               Gérez les analyses techniques de votre projet
//             </p>
//           </div>
//         </div>
//         <Button asChild>
//           <Link href={`/project/${projectId}/analysis/create`}>
//             <Plus className="mr-2 h-4 w-4" />
//             Créer une Analyse
//           </Link>
//         </Button>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Résumé</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid gap-4 md:grid-cols-3">
//             <div>
//               <span className="text-sm text-muted-foreground">Analyses créées</span>
//               <p className="text-2xl font-bold">{analyses.length}</p>
//             </div>
//             <div>
//               <span className="text-sm text-muted-foreground">Analyses terminées</span>
//               <p className="text-2xl font-bold text-green-500">{completedCount}</p>
//             </div>
//             <div>
//               <span className="text-sm text-muted-foreground">Progression du projet</span>
//               <p className="text-2xl font-bold">{progressPercentage}%</p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="flex items-center gap-3 bg-muted/30 p-4 rounded-lg">
//         <Filter className="h-4 w-4 text-muted-foreground" />
//         <Select value={filterType} onValueChange={setFilterType}>
//           <SelectTrigger className="w-[200px] bg-background">
//             <SelectValue placeholder="Tous les types" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">Tous les types</SelectItem>
//             <SelectItem value="Technical">Technique</SelectItem>
//             <SelectItem value="Functional">Fonctionnelle</SelectItem>
//             <SelectItem value="UI/UX">UI/UX</SelectItem>
//             <SelectItem value="Performance">Performance</SelectItem>
//           </SelectContent>
//         </Select>
//         <Select value={filterStatus} onValueChange={setFilterStatus}>
//           <SelectTrigger className="w-[200px] bg-background">
//             <SelectValue placeholder="Tous les statuts" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">Tous les statuts</SelectItem>
//             <SelectItem value="Completed">Terminée</SelectItem>
//             <SelectItem value="In Progress">En Cours</SelectItem>
//             <SelectItem value="Draft">Brouillon</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       {filteredAnalyses.length === 0 ? (
//         <div className="flex items-center justify-center min-h-[300px]">
//           <div className="text-center">
//             {analyses.length === 0 ? (
//               <>
//                 <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//                 <p className="text-muted-foreground">Aucune analyse créée pour ce projet</p>
//                 <Button className="mt-4" asChild>
//                   <Link href={`/project/${projectId}/analysis/create`}>
//                     <Plus className="mr-2 h-4 w-4" />
//                     Créer votre première analyse
//                   </Link>
//                 </Button>
//               </>
//             ) : (
//               <>
//                 <p className="text-muted-foreground">Aucune analyse ne correspond aux filtres sélectionnés</p>
//                 <Button 
//                   variant="outline"
//                   onClick={() => {
//                     setFilterType("all")
//                     setFilterStatus("all")
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
//             {paginatedAnalyses.map((analysis) => (
//               <Card key={analysis.id} className="hover:border-primary/50 transition-colors">
//                 <CardContent className="p-6 space-y-4">
//                   <div className="space-y-3">
//                     <h3 className="text-lg font-semibold text-foreground line-clamp-1">
//                       {analysis.title}
//                     </h3>
//                     <div className="flex items-center gap-2 flex-wrap">
//                       <Badge variant="outline" className={getTypeColor(analysis.type)}>
//                         {getTypeLabel(analysis.type)}
//                       </Badge>
//                       <Badge variant="outline" className={getStatusColor(analysis.status)}>
//                         {getStatusLabel(analysis.status)}
//                       </Badge>
//                     </div>
//                   </div>

//                   {analysis.description && (
//                     <p className="text-sm text-muted-foreground line-clamp-2">
//                       {analysis.description}
//                     </p>
//                   )}

//                   <div className="space-y-2 text-sm text-muted-foreground pt-2 border-t">
//                     <div className="flex items-center gap-2">
//                       <Clock className="h-4 w-4" />
//                       <span>
//                         Créée le {new Date(analysis.createdAt).toLocaleDateString('fr-FR', {
//                           day: 'numeric',
//                           month: 'short',
//                           year: 'numeric'
//                         })}
//                       </span>
//                     </div>
//                     {analysis.status === 'Completed' && (
//                       <div className="flex items-center gap-2">
//                         <CheckCircle2 className="h-4 w-4 text-green-500" />
//                         <span className="text-green-500">
//                           Terminée le {new Date(analysis.updatedAt).toLocaleDateString('fr-FR', {
//                             day: 'numeric',
//                             month: 'short'
//                           })}
//                         </span>
//                       </div>
//                     )}
//                   </div>

//                   <div className="flex items-center gap-2 pt-2">
//                     <Button asChild className="flex-1">
//                       <Link href={`/project/${projectId}/analysis/${analysis.id}`}>
//                         <Eye className="mr-2 h-4 w-4" />
//                         Voir Détails
//                       </Link>
//                     </Button>
                    
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button 
//                           variant="ghost" 
//                           size="icon"
//                           disabled={!canDeleteAnalyses}
//                           className={!canDeleteAnalyses ? "opacity-50 cursor-not-allowed" : ""}
//                         >
//                           <MoreVertical className="h-4 w-4" />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent align="end">
//                         <DropdownMenuItem
//                           disabled={!canDeleteAnalyses}
//                           className={canDeleteAnalyses ? "text-destructive" : "opacity-50"}
//                           onClick={() => {
//                             if (canDeleteAnalyses) {
//                               setAnalysisToDelete(analysis.id)
//                               setDeleteDialogOpen(true)
//                             } else {
//                               toast({
//                                 title: "Suppression impossible",
//                                 description: "Impossible de supprimer une analyse si des rapports existent pour ce projet.",
//                                 variant: "destructive"
//                               })
//                             }
//                           }}
//                         >
//                           <Trash2 className="mr-2 h-4 w-4" />
//                           Supprimer
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </div>
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

//       <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Supprimer cette analyse ?</AlertDialogTitle>
//             <AlertDialogDescription>
//               Cette action est irréversible. L'analyse sera définitivement supprimée.
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel>Annuler</AlertDialogCancel>
//             <AlertDialogAction
//               onClick={handleDelete}
//               className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
//             >
//               Supprimer
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   )
// }                         




// components/analysis-view.tsx
"use client"

import * as React from "react"
import { ArrowLeft, Plus, Filter, Eye, FileText, CheckCircle2, Clock, MoreVertical, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAnalyses, useDeleteAnalysis } from "@/hooks/use-analyses"
import { useReports } from "@/hooks/use-reports"
import { useProject } from "@/hooks/use-projects"
import { Skeleton } from "@/components/ui/skeleton"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/hooks/use-toast"

type AnalysisViewProps = {
  projectId: string
}

const ITEMS_PER_PAGE = 6

const getTypeColor = (type: string) => {
  switch (type) {
    case "Technical": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    case "Functional": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
    case "UI/UX": return "bg-pink-500/10 text-pink-500 border-pink-500/20"
    case "Performance": return "bg-green-500/10 text-green-500 border-green-500/20"
    default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
  }
}

const getTypeLabel = (type: string) => {
  switch (type) {
    case "Technical": return "Technique"
    case "Functional": return "Fonctionnelle"
    case "UI/UX": return "UI/UX"
    case "Performance": return "Performance"
    default: return type
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Completed": return "bg-green-500/10 text-green-500 border-green-500/20"
    case "In Progress": return "bg-amber-500/10 text-amber-500 border-amber-500/20"
    case "Draft": return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case "Completed": return "Terminée"
    case "In Progress": return "En Cours"
    case "Draft": return "Brouillon"
    default: return status
  }
}

export function AnalysisView({ projectId }: AnalysisViewProps) {
  const router = useRouter()
  const { toast } = useToast()
  
  // ✅ CORRECTION - Récupérer project pour avoir companyId
  const { data: project } = useProject(projectId)
  const { data: analyses = [], isLoading } = useAnalyses(projectId, project?.companyId || null)
  const { data: reports = [], isLoading: reportsLoading } = useReports(projectId, project?.companyId || null)
  const deleteAnalysis = useDeleteAnalysis()
  
  const [filterType, setFilterType] = React.useState<string>("all")
  const [filterStatus, setFilterStatus] = React.useState<string>("all")
  const [currentPage, setCurrentPage] = React.useState(1)
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
  const [analysisToDelete, setAnalysisToDelete] = React.useState<string | null>(null)

  const filteredAnalyses = analyses.filter((analysis) => {
    const matchesType = filterType === "all" || analysis.type === filterType
    const matchesStatus = filterStatus === "all" || analysis.status === filterStatus
    return matchesType && matchesStatus
  })

  const totalPages = Math.ceil(filteredAnalyses.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedAnalyses = filteredAnalyses.slice(startIndex, endIndex)

  const completedCount = analyses.filter(a => a.status === 'Completed').length
  const progressPercentage = analyses.length > 0 
    ? Math.round((completedCount / analyses.length) * 100)
    : 0

  // Vérifier si des rapports existent
  const hasReports = reports.length > 0
  const canDeleteAnalyses = !hasReports

  const handleDelete = async () => {
    if (!analysisToDelete) return
    
    try {
      await deleteAnalysis.mutateAsync(analysisToDelete)
      toast({
        title: "Analyse supprimée",
        description: "L'analyse a été supprimée avec succès."
      })
      setDeleteDialogOpen(false)
      setAnalysisToDelete(null)
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      })
    }
  }

  if (isLoading || reportsLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-40" />
        </div>
        <Skeleton className="h-32" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
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
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Analyses & Spécifications
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Gérez les analyses techniques de votre projet
            </p>
          </div>
        </div>
        <Button asChild>
          <Link href={`/project/${projectId}/analysis/create`}>
            <Plus className="mr-2 h-4 w-4" />
            Créer une Analyse
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Résumé</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <span className="text-sm text-muted-foreground">Analyses créées</span>
              <p className="text-2xl font-bold">{analyses.length}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Analyses terminées</span>
              <p className="text-2xl font-bold text-green-500">{completedCount}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Progression du projet</span>
              <p className="text-2xl font-bold">{progressPercentage}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center gap-3 bg-muted/30 p-4 rounded-lg">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-[200px] bg-background">
            <SelectValue placeholder="Tous les types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les types</SelectItem>
            <SelectItem value="Technical">Technique</SelectItem>
            <SelectItem value="Functional">Fonctionnelle</SelectItem>
            <SelectItem value="UI/UX">UI/UX</SelectItem>
            <SelectItem value="Performance">Performance</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filterStatus} onValueChange={setFilterStatus}>
          <SelectTrigger className="w-[200px] bg-background">
            <SelectValue placeholder="Tous les statuts" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="Completed">Terminée</SelectItem>
            <SelectItem value="In Progress">En Cours</SelectItem>
            <SelectItem value="Draft">Brouillon</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filteredAnalyses.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            {analyses.length === 0 ? (
              <>
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Aucune analyse créée pour ce projet</p>
                <Button className="mt-4" asChild>
                  <Link href={`/project/${projectId}/analysis/create`}>
                    <Plus className="mr-2 h-4 w-4" />
                    Créer votre première analyse
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <p className="text-muted-foreground">Aucune analyse ne correspond aux filtres sélectionnés</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setFilterType("all")
                    setFilterStatus("all")
                  }} 
                  className="mt-4"
                >
                  Réinitialiser les filtres
                </Button>
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedAnalyses.map((analysis) => (
              <Card key={analysis.id} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground line-clamp-1">
                      {analysis.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className={getTypeColor(analysis.type)}>
                        {getTypeLabel(analysis.type)}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(analysis.status)}>
                        {getStatusLabel(analysis.status)}
                      </Badge>
                    </div>
                  </div>

                  {analysis.description && (
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {analysis.description}
                    </p>
                  )}

                  <div className="space-y-2 text-sm text-muted-foreground pt-2 border-t">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>
                        Créée le {new Date(analysis.createdAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    {analysis.status === 'Completed' && (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">
                          Terminée le {new Date(analysis.updatedAt).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'short'
                          })}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Button asChild className="flex-1">
                      <Link href={`/project/${projectId}/analysis/${analysis.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        Voir Détails
                      </Link>
                    </Button>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          disabled={!canDeleteAnalyses}
                          className={!canDeleteAnalyses ? "opacity-50 cursor-not-allowed" : ""}
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          disabled={!canDeleteAnalyses}
                          className={canDeleteAnalyses ? "text-destructive" : "opacity-50"}
                          onClick={() => {
                            if (canDeleteAnalyses) {
                              setAnalysisToDelete(analysis.id)
                              setDeleteDialogOpen(true)
                            } else {
                              toast({
                                title: "Suppression impossible",
                                description: "Impossible de supprimer une analyse si des rapports existent pour ce projet.",
                                variant: "destructive"
                              })
                            }
                          }}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

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
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ))}
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

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer cette analyse ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. L'analyse sera définitivement supprimée.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}