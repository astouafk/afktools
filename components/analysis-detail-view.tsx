// // components/analysis-detail-view.tsx
// "use client"

// import * as React from "react"
// import { ArrowLeft, Edit, CheckCircle2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { useRouter } from "next/navigation"
// import { useAnalysis, useMarkAnalysisCompleted } from "@/hooks/use-analyses"
// import { useReports } from "@/hooks/use-reports"
// import { Skeleton } from "@/components/ui/skeleton"
// import { toast } from "@/hooks/use-toast"
// import Link from "next/link"
// import { ANALYSIS_FIELDS_BY_TYPE } from "@/lib/analysis-fields-config"

// type AnalysisDetailViewProps = {
//   projectId: string
//   analysisId: string
// }

// const getStatusColor = (status: string) => {
//   switch (status) {
//     case "Draft": return "bg-gray-500/10 text-gray-500 border-gray-500/20"
//     case "In Progress": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
//     case "Completed": return "bg-green-500/10 text-green-500 border-green-500/20"
//     default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
//   }
// }

// const getTypeColor = (type: string) => {
//   switch (type) {
//     case "Technical": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
//     case "Functional": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
//     case "UI/UX": return "bg-pink-500/10 text-pink-500 border-pink-500/20"
//     case "Performance": return "bg-orange-500/10 text-orange-500 border-orange-500/20"
//     default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
//   }
// }

// const translateStatus = (status: string) => {
//   switch (status) {
//     case "Draft": return "Brouillon"
//     case "In Progress": return "En Cours"
//     case "Completed": return "Terminée"
//     default: return status
//   }
// }

// const translateType = (type: string) => {
//   switch (type) {
//     case "Technical": return "Technique"
//     case "Functional": return "Fonctionnelle"
//     case "UI/UX": return "UI/UX"
//     case "Performance": return "Performance"
//     default: return type
//   }
// }

// export function AnalysisDetailView({ projectId, analysisId }: AnalysisDetailViewProps) {
//   const router = useRouter()
//   const { data: analysis, isLoading, error } = useAnalysis(analysisId)
//   const { mutate: markCompleted, isPending: isMarkingCompleted } = useMarkAnalysisCompleted()
//   const { data: reports = [] } = useReports(projectId)
//   const hasReports = reports.length > 0

//   console.log('[AnalysisDetailView] Analysis data:', analysis)

//   const handleMarkCompleted = () => {
//     markCompleted(
//       { analysisId, projectId },
//       {
//         onSuccess: () => {
//           toast({
//             title: "Analyse terminée",
//             description: "L'analyse a été marquée comme terminée"
//           })
//         },
//         onError: (error) => {
//           toast({
//             title: "Erreur",
//             description: error.message,
//             variant: "destructive"
//           })
//         }
//       }
//     )
//   }

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
//         <div className="space-y-4">
//           <Skeleton className="h-32" />
//           <Skeleton className="h-64" />
//           <Skeleton className="h-64" />
//         </div>
//       </div>
//     )
//   }

//   if (error || !analysis) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <div className="text-center space-y-4">
//           <p className="text-muted-foreground">Analyse introuvable</p>
//           <Button asChild>
//             <Link href={`/project/${projectId}/analysis`}>Retour aux analyses</Link>
//           </Button>
//         </div>
//       </div>
//     )
//   }

//   const content = typeof analysis.content === 'string' 
//     ? JSON.parse(analysis.content) 
//     : analysis.content as Record<string, string>
  
//   console.log('[AnalysisDetailView] Content:', content)
//   console.log('[AnalysisDetailView] Analysis type:', analysis.type)
  
//   const fields = ANALYSIS_FIELDS_BY_TYPE[analysis.type] || []
//   console.log('[AnalysisDetailView] Fields:', fields)

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
//             <div className="flex items-center gap-3">
//               <h1 className="text-3xl font-semibold tracking-tight text-foreground">
//                 {analysis.title}
//               </h1>
//               <Badge variant="outline" className={getStatusColor(analysis.status)}>
//                 {translateStatus(analysis.status)}
//               </Badge>
//             </div>
//             {analysis.description && (
//               <p className="text-sm text-muted-foreground mt-1">
//                 {analysis.description}
//               </p>
//             )}
//           </div>
//         </div>
//         <div className="flex gap-2">
//           {analysis.status !== "Completed" && (
//             <Button onClick={handleMarkCompleted} disabled={isMarkingCompleted}>
//               <CheckCircle2 className="mr-2 h-4 w-4" />
//               {isMarkingCompleted ? "Traitement..." : "Marquer comme Terminée"}
//             </Button>
//           )}
//           <Button variant="outline" asChild>
//             <Link href={`/project/${projectId}/analysis/${analysisId}/edit`}>
//                 <Edit className="mr-2 h-4 w-4" />
//                 Modifier
//             </Link>
//             </Button>
//         </div>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Informations</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-3">
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-muted-foreground w-32">Type :</span>
//             <Badge variant="outline" className={getTypeColor(analysis.type)}>
//               {translateType(analysis.type)}
//             </Badge>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-muted-foreground w-32">Créée le :</span>
//             <span className="text-sm">
//               {new Date(analysis.createdAt).toLocaleDateString('fr-FR', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit'
//               })}
//             </span>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-muted-foreground w-32">Mise à jour :</span>
//             <span className="text-sm">
//               {new Date(analysis.updatedAt).toLocaleDateString('fr-FR', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit'
//               })}
//             </span>
//           </div>
//         </CardContent>
//       </Card>

//       {fields.length > 0 ? (
//         fields.map((field) => {
//           const value = content[field.name]
//           console.log(`[AnalysisDetailView] Field ${field.name}:`, value)
          
//           if (!value || value.trim() === '') return null
          
//           return (
//             <Card key={field.name}>
//               <CardHeader>
//                 <CardTitle>{field.label.replace(' *', '')}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm whitespace-pre-wrap">{value}</p>
//               </CardContent>
//             </Card>
//           )
//         })
//       ) : (
//         <Card>
//           <CardContent className="p-6">
//             <p className="text-muted-foreground text-center">
//               Aucun contenu d'analyse disponible
//             </p>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   )
// }







// components/analysis-detail-view.tsx
"use client"

import * as React from "react"
import { ArrowLeft, Edit, CheckCircle2, FileText, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"
import { useAnalysis, useMarkAnalysisCompleted } from "@/hooks/use-analyses"
import { useReports } from "@/hooks/use-reports"
import { Skeleton } from "@/components/ui/skeleton"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"
import { ANALYSIS_FIELDS_BY_TYPE } from "@/lib/analysis-fields-config"

type AnalysisDetailViewProps = {
  projectId: string
  analysisId: string
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Draft": return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    case "In Progress": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    case "Completed": return "bg-green-500/10 text-green-500 border-green-500/20"
    default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Technical": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
    case "Functional": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    case "UI/UX": return "bg-pink-500/10 text-pink-500 border-pink-500/20"
    case "Performance": return "bg-orange-500/10 text-orange-500 border-orange-500/20"
    default: return "bg-gray-500/10 text-gray-500 border-gray-500/20"
  }
}

const translateStatus = (status: string) => {
  switch (status) {
    case "Draft": return "Brouillon"
    case "In Progress": return "En Cours"
    case "Completed": return "Terminée"
    default: return status
  }
}

const translateType = (type: string) => {
  switch (type) {
    case "Technical": return "Technique"
    case "Functional": return "Fonctionnelle"
    case "UI/UX": return "UI/UX"
    case "Performance": return "Performance"
    default: return type
  }
}

export function AnalysisDetailView({ projectId, analysisId }: AnalysisDetailViewProps) {
  const router = useRouter()
  const { data: analysis, isLoading, error } = useAnalysis(analysisId)
  const { mutate: markCompleted, isPending: isMarkingCompleted } = useMarkAnalysisCompleted()
  const { data: reports = [] } = useReports(projectId)

  console.log('[AnalysisDetailView] Analysis data:', analysis)

  const handleMarkCompleted = () => {
    markCompleted(
      { analysisId, projectId },
      {
        onSuccess: () => {
          toast({
            title: "Analyse terminée",
            description: "L'analyse a été marquée comme terminée"
          })
        },
        onError: (error) => {
          toast({
            title: "Erreur",
            description: error.message,
            variant: "destructive"
          })
        }
      }
    )
  }

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

  if (error || !analysis) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Analyse introuvable</p>
          <Button asChild>
            <Link href={`/project/${projectId}`}>Retour au projet</Link>
          </Button>
        </div>
      </div>
    )
  }

  const content = typeof analysis.content === 'string' 
    ? JSON.parse(analysis.content) 
    : analysis.content as Record<string, string>
  
  console.log('[AnalysisDetailView] Content:', content)
  console.log('[AnalysisDetailView] Analysis type:', analysis.type)
  
  const fields = ANALYSIS_FIELDS_BY_TYPE[analysis.type] || []
  console.log('[AnalysisDetailView] Fields:', fields)

  const totalFields = fields.length
  const filledFields = fields.filter(field => {
    const value = content[field.name]
    return value && value.trim() !== ''
  }).length
  const completionRate = totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0

  // ✅ Séparer les champs courts et longs pour optimiser le layout
  const fieldsWithContent = fields.map(field => ({
    ...field,
    value: content[field.name] || '',
    isFilled: content[field.name] && content[field.name].trim() !== '',
    isShort: (content[field.name] || '').length < 150 // Seuil pour champs courts
  }))

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
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground">
                {analysis.title}
              </h1>
              <Badge variant="outline" className={getTypeColor(analysis.type)}>
                {translateType(analysis.type)}
              </Badge>
              <Badge variant="outline" className={getStatusColor(analysis.status)}>
                {translateStatus(analysis.status)}
              </Badge>
            </div>
            {analysis.description && (
              <p className="text-sm text-muted-foreground mt-2">
                {analysis.description}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          {analysis.status !== "Completed" && (
            <Button onClick={handleMarkCompleted} disabled={isMarkingCompleted}>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              {isMarkingCompleted ? "Traitement..." : "Marquer comme Terminée"}
            </Button>
          )}
          <Button variant="outline" asChild>
            <Link href={`/project/${projectId}/analysis/${analysisId}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Modifier
            </Link>
          </Button>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Sous Analyses</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalFields}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Champs dans l'analyse
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Sous Analyses faites</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">{filledFields}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Taux : {completionRate}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Statut</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {analysis.status === 'Completed' ? '✓' : '...'}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {translateStatus(analysis.status)}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Champs d'analyse */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Détails de l'Analyse
              <Badge variant="secondary" className="ml-2">{filledFields}/{totalFields} remplis</Badge>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          {fields.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>Aucun champ d'analyse disponible</p>
            </div>
          ) : (
            // ✅ Scroll si > 20 champs pour gérer gros volumes
            <div className={`space-y-6 ${fields.length > 20 ? 'max-h-[800px] overflow-y-auto pr-2' : ''}`}>
              {/* ✅ Grid responsive pour champs courts */}
              <div className="grid gap-4 md:grid-cols-2">
                {fieldsWithContent
                  .filter(field => field.isShort && field.isFilled)
                  .map((field) => (
                    <Card key={field.name} className="bg-card">
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-sm text-foreground">
                              {field.label.replace(' *', '')}
                            </h4>
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          </div>
                          <p className="text-sm whitespace-pre-wrap leading-relaxed">
                            {field.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* ✅ Pleine largeur pour champs longs */}
              <div className="space-y-4">
                {fieldsWithContent
                  .filter(field => !field.isShort && field.isFilled)
                  .map((field) => (
                    <Card key={field.name} className="bg-card">
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-sm text-foreground">
                              {field.label.replace(' *', '')}
                            </h4>
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                          </div>
                          <p className="text-sm whitespace-pre-wrap leading-relaxed">
                            {field.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* ✅ Champs non remplis en bas */}
              {fieldsWithContent.some(f => !f.isFilled) && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground">Champs non renseignés</h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {fieldsWithContent
                      .filter(field => !field.isFilled)
                      .map((field) => (
                        <Card key={field.name} className="bg-muted/30">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-sm text-muted-foreground">
                              {field.label.replace(' *', '')}
                            </h4>
                            <p className="text-xs text-muted-foreground italic mt-1">
                              Non renseigné
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Métadonnées */}
      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Créée le</span>
              <span className="text-sm font-medium">
                {new Date(analysis.createdAt).toLocaleDateString('fr-FR', {
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
                {new Date(analysis.updatedAt).toLocaleDateString('fr-FR', {
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