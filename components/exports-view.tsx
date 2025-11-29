// // components/exports-view.tsx
// "use client"

// import * as React from "react"
// import { Download, FileSpreadsheet, FileText, Calendar, FolderKanban, CheckCircle2, AlertCircle } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"
// import { useAllReports } from "@/hooks/use-reports"
// import { useProjects } from "@/hooks/use-projects"
// import { useMembers } from "@/hooks/use-members"
// import { Skeleton } from "@/components/ui/skeleton"
// import { useToast } from "@/hooks/use-toast"
// import { generateExcelExport } from "@/lib/export-excel"
// import { generatePDFExport } from "@/lib/export-pdf"
// import { getAnalysesByProject } from "@/lib/services/analysis-service"
// import type { Analysis } from "@/lib/services/analysis-service"

// type ContentType = 'reports' | 'analyses' | 'both'
// type PeriodType = 'week' | 'month' | 'quarter' | 'year'

// export function ExportsView() {
//   const { toast } = useToast()
//   const selectedCompanyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  
//   const { data: allReports = [], isLoading: reportsLoading } = useAllReports(selectedCompanyId)
//   const { data: projects = [], isLoading: projectsLoading } = useProjects(selectedCompanyId)
//   const { data: members = [] } = useMembers(selectedCompanyId)
  
//   const [contentType, setContentType] = React.useState<ContentType>('reports')
//   const [selectedProjects, setSelectedProjects] = React.useState<string[]>([])
//   const [periodFilter, setPeriodFilter] = React.useState<PeriodType>('month')
//   const [isGeneratingExcel, setIsGeneratingExcel] = React.useState(false)
//   const [isGeneratingPDF, setIsGeneratingPDF] = React.useState(false)
//   const [allAnalyses, setAllAnalyses] = React.useState<Analysis[]>([])
//   const [analysesLoading, setAnalysesLoading] = React.useState(false)

//   const isLoading = reportsLoading || projectsLoading || analysesLoading

//   // Charger les analyses pour tous les projets
//   React.useEffect(() => {
//     async function loadAnalyses() {
//       if (!selectedCompanyId || projects.length === 0) return
      
//       setAnalysesLoading(true)
//       try {
//         const analysesPromises = projects.map(project => 
//           getAnalysesByProject(project.id, project.companyId)
//         )
//         const analysesArrays = await Promise.all(analysesPromises)
//         const flatAnalyses = analysesArrays.flat()
//         setAllAnalyses(flatAnalyses)
//       } catch (error) {
//         console.error('Error loading analyses:', error)
//       } finally {
//         setAnalysesLoading(false)
//       }
//     }

//     loadAnalyses()
//   }, [projects, selectedCompanyId])

//   // Fonction pour obtenir la date de début selon la période
//   const getStartDateForPeriod = (period: PeriodType) => {
//     const d = new Date()
//     switch (period) {
//       case 'week':
//         d.setDate(d.getDate() - 7)
//         return d
//       case 'month':
//         d.setMonth(d.getMonth() - 1)
//         return d
//       case 'quarter':
//         d.setMonth(d.getMonth() - 3)
//         return d
//       case 'year':
//         d.setFullYear(d.getFullYear() - 1)
//         return d
//     }
//   }

//   // Filtrage des rapports
//   const filteredReports = React.useMemo(() => {
//     const startDate = getStartDateForPeriod(periodFilter)
    
//     let filtered = allReports.filter(report => {
//       const reportDate = new Date(report.createdAt)
//       return reportDate >= startDate
//     })

//     if (selectedProjects.length > 0) {
//       filtered = filtered.filter(report => selectedProjects.includes(report.projectId))
//     }

//     return filtered
//   }, [allReports, selectedProjects, periodFilter])

//   // Filtrage des analyses
//   const filteredAnalyses = React.useMemo(() => {
//     const startDate = getStartDateForPeriod(periodFilter)
    
//     let filtered = allAnalyses.filter(analysis => {
//       const analysisDate = new Date(analysis.createdAt)
//       return analysisDate >= startDate
//     })

//     if (selectedProjects.length > 0) {
//       filtered = filtered.filter(analysis => selectedProjects.includes(analysis.projectId))
//     }

//     return filtered
//   }, [allAnalyses, selectedProjects, periodFilter])

//   // Calcul des statistiques
//   const stats = React.useMemo(() => {
//     const totalReports = filteredReports.length
//     const totalTasks = filteredReports.reduce((sum, r) => sum + (r.tasks?.length || 0), 0)
//     const completedTasks = filteredReports.reduce((sum, r) => 
//       sum + (r.tasks?.filter(t => t.completed).length || 0), 0
//     )
//     const totalBlockers = filteredReports.reduce((sum, r) => sum + (r.blockers?.length || 0), 0)
//     const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

//     const totalAnalyses = filteredAnalyses.length
//     const completedAnalyses = filteredAnalyses.filter(a => a.status === 'Completed').length
//     const analysesRate = totalAnalyses > 0 ? Math.round((completedAnalyses / totalAnalyses) * 100) : 0

//     return { 
//       totalReports, 
//       totalTasks, 
//       completedTasks, 
//       totalBlockers, 
//       completionRate,
//       totalAnalyses,
//       completedAnalyses,
//       analysesRate
//     }
//   }, [filteredReports, filteredAnalyses])

//   // Toggle projet
//   const toggleProject = (projectId: string) => {
//     setSelectedProjects(prev => 
//       prev.includes(projectId) 
//         ? prev.filter(id => id !== projectId)
//         : [...prev, projectId]
//     )
//   }

//   // Sélectionner tous les projets
//   const selectAllProjects = () => {
//     setSelectedProjects(projects.map(p => p.id))
//   }

//   // Générer Excel
//   const handleExcelExport = async () => {
//     const hasData = 
//       (contentType === 'reports' && filteredReports.length > 0) ||
//       (contentType === 'analyses' && filteredAnalyses.length > 0) ||
//       (contentType === 'both' && (filteredReports.length > 0 || filteredAnalyses.length > 0))

//     if (!hasData) {
//       toast({
//         title: "Aucune donnée",
//         description: "Aucune donnée ne correspond aux filtres sélectionnés.",
//         variant: "destructive"
//       })
//       return
//     }

//     setIsGeneratingExcel(true)
    
//     try {
//       await generateExcelExport({
//         reports: contentType === 'analyses' ? [] : filteredReports,
//         analyses: contentType === 'reports' ? [] : filteredAnalyses,
//         projects,
//         members,
//         period: periodFilter,
//         companyId: selectedCompanyId!,
//         contentType
//       })
      
//       toast({
//         title: "Export Excel généré",
//         description: "Le fichier a été téléchargé avec succès."
//       })
//     } catch (error: any) {
//       toast({
//         title: "Erreur",
//         description: error.message,
//         variant: "destructive"
//       })
//     } finally {
//       setIsGeneratingExcel(false)
//     }
//   }

//   // Générer PDF
//   const handlePDFExport = async () => {
//     const hasData = 
//       (contentType === 'reports' && filteredReports.length > 0) ||
//       (contentType === 'analyses' && filteredAnalyses.length > 0) ||
//       (contentType === 'both' && (filteredReports.length > 0 || filteredAnalyses.length > 0))

//     if (!hasData) {
//       toast({
//         title: "Aucune donnée",
//         description: "Aucune donnée ne correspond aux filtres sélectionnés.",
//         variant: "destructive"
//       })
//       return
//     }

//     setIsGeneratingPDF(true)
    
//     try {
//       await generatePDFExport({
//         reports: contentType === 'analyses' ? [] : filteredReports,
//         analyses: contentType === 'reports' ? [] : filteredAnalyses,
//         projects,
//         members,
//         period: periodFilter,
//         companyId: selectedCompanyId!,
//         contentType
//       })
      
//       toast({
//         title: "Export PDF généré",
//         description: "Le fichier a été téléchargé avec succès."
//       })
//     } catch (error: any) {
//       toast({
//         title: "Erreur",
//         description: error.message,
//         variant: "destructive"
//       })
//     } finally {
//       setIsGeneratingPDF(false)
//     }
//   }

//   const getPeriodLabel = (period: PeriodType) => {
//     switch (period) {
//       case 'week': return 'Cette semaine'
//       case 'month': return 'Ce mois'
//       case 'quarter': return 'Ce trimestre'
//       case 'year': return 'Cette année'
//     }
//   }

//   if (isLoading) {
//     return (
//       <div className="space-y-6">
//         <Skeleton className="h-12 w-full" />
//         <Skeleton className="h-64 w-full" />
//         <Skeleton className="h-32 w-full" />
//       </div>
//     )
//   }

//   if (!selectedCompanyId) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <div className="text-center space-y-4">
//           <Download className="h-12 w-12 text-muted-foreground mx-auto" />
//           <p className="text-muted-foreground">Veuillez sélectionner une entreprise</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div>
//         <h1 className="text-3xl font-semibold tracking-tight text-foreground">
//           Exports
//         </h1>
//         <p className="text-sm text-muted-foreground mt-1">
//           Générez des exports Excel ou PDF de vos rapports et analyses
//         </p>
//       </div>

//       {/* Configuration */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Configuration de l'Export</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           {/* Type de contenu */}
//           <div className="space-y-3">
//             <Label>Type de contenu</Label>
//             <RadioGroup value={contentType} onValueChange={(value: ContentType) => setContentType(value)}>
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="reports" id="reports" />
//                 <Label htmlFor="reports" className="cursor-pointer">Rapports hebdomadaires</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="analyses" id="analyses" />
//                 <Label htmlFor="analyses" className="cursor-pointer">Analyses & Spécifications</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <RadioGroupItem value="both" id="both" />
//                 <Label htmlFor="both" className="cursor-pointer">Rapports + Analyses</Label>
//               </div>
//             </RadioGroup>
//           </div>

//           {/* Filtres */}
//           <div className="grid gap-4 md:grid-cols-2">
//             {/* Sélection projets */}
//             <div className="space-y-2">
//               <Label>Projets</Label>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button variant="outline" className="w-full justify-between">
//                     {selectedProjects.length === 0 
//                       ? "Tous les projets" 
//                       : selectedProjects.length === projects.length
//                       ? "Tous les projets"
//                       : `${selectedProjects.length} projet${selectedProjects.length > 1 ? 's' : ''}`
//                     }
//                     <FolderKanban className="ml-2 h-4 w-4" />
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-[300px] p-4" align="start">
//                   <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <Label className="text-sm font-semibold">Sélectionner les projets</Label>
//                       <div className="flex gap-2">
//                         <Button 
//                           variant="ghost" 
//                           size="sm"
//                           onClick={selectAllProjects}
//                         >
//                           Tous
//                         </Button>
//                         {selectedProjects.length > 0 && (
//                           <Button 
//                             variant="ghost" 
//                             size="sm"
//                             onClick={() => setSelectedProjects([])}
//                           >
//                             Aucun
//                           </Button>
//                         )}
//                       </div>
//                     </div>
//                     <div className="max-h-[300px] overflow-y-auto space-y-2">
//                       {projects.map(project => (
//                         <div key={project.id} className="flex items-center space-x-2">
//                           <Checkbox 
//                             id={project.id}
//                             checked={selectedProjects.includes(project.id)}
//                             onCheckedChange={() => toggleProject(project.id)}
//                           />
//                           <Label 
//                             htmlFor={project.id}
//                             className="text-sm cursor-pointer flex-1"
//                           >
//                             {project.name}
//                           </Label>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </PopoverContent>
//               </Popover>
//             </div>

//             {/* Période */}
//             <div className="space-y-2">
//               <Label>Période</Label>
//               <Select value={periodFilter} onValueChange={(value: PeriodType) => setPeriodFilter(value)}>
//                 <SelectTrigger>
//                   <SelectValue />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="week">Cette semaine</SelectItem>
//                   <SelectItem value="month">Ce mois</SelectItem>
//                   <SelectItem value="quarter">Ce trimestre</SelectItem>
//                   <SelectItem value="year">Cette année</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Preview */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <CheckCircle2 className="h-5 w-5" />
//             Aperçu de l'Export
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {/* Résumé */}
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
//                 <FolderKanban className="h-8 w-8 text-primary" />
//                 <div>
//                   <p className="text-sm text-muted-foreground">Projets inclus</p>
//                   <p className="text-2xl font-bold">
//                     {selectedProjects.length === 0 ? projects.length : selectedProjects.length}
//                   </p>
//                 </div>
//               </div>

//               {(contentType === 'reports' || contentType === 'both') && (
//                 <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
//                   <FileText className="h-8 w-8 text-primary" />
//                   <div>
//                     <p className="text-sm text-muted-foreground">Rapports</p>
//                     <p className="text-2xl font-bold">{stats.totalReports}</p>
//                   </div>
//                 </div>
//               )}

//               {(contentType === 'analyses' || contentType === 'both') && (
//                 <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
//                   <FileText className="h-8 w-8 text-blue-500" />
//                   <div>
//                     <p className="text-sm text-muted-foreground">Analyses</p>
//                     <p className="text-2xl font-bold">{stats.totalAnalyses}</p>
//                   </div>
//                 </div>
//               )}

//               {(contentType === 'reports' || contentType === 'both') && (
//                 <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
//                   <CheckCircle2 className="h-8 w-8 text-green-500" />
//                   <div>
//                     <p className="text-sm text-muted-foreground">Tâches complétées</p>
//                     <p className="text-2xl font-bold">
//                       {stats.completedTasks}/{stats.totalTasks}
//                       <span className="text-sm text-muted-foreground ml-2">
//                         ({stats.completionRate}%)
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {(contentType === 'analyses' || contentType === 'both') && (
//                 <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
//                   <CheckCircle2 className="h-8 w-8 text-green-500" />
//                   <div>
//                     <p className="text-sm text-muted-foreground">Analyses terminées</p>
//                     <p className="text-2xl font-bold">
//                       {stats.completedAnalyses}/{stats.totalAnalyses}
//                       <span className="text-sm text-muted-foreground ml-2">
//                         ({stats.analysesRate}%)
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {(contentType === 'reports' || contentType === 'both') && (
//                 <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg">
//                   <AlertCircle className="h-8 w-8 text-amber-500" />
//                   <div>
//                     <p className="text-sm text-muted-foreground">Blocages</p>
//                     <p className="text-2xl font-bold">{stats.totalBlockers}</p>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Infos supplémentaires */}
//             <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg space-y-2">
//               <div className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4 text-muted-foreground" />
//                 <span className="text-sm">
//                   <span className="font-medium">Période :</span> {getPeriodLabel(periodFilter)}
//                 </span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <FileText className="h-4 w-4 text-muted-foreground" />
//                 <span className="text-sm">
//                   <span className="font-medium">Format :</span> Excel (.xlsx) ou PDF (.pdf)
//                 </span>
//               </div>
//             </div>

//             {/* Message si aucune donnée */}
//             {(contentType === 'reports' && filteredReports.length === 0) ||
//              (contentType === 'analyses' && filteredAnalyses.length === 0) ||
//              (contentType === 'both' && filteredReports.length === 0 && filteredAnalyses.length === 0) ? (
//               <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
//                 <p className="text-sm text-amber-600">
//                   ⚠️ Aucune donnée ne correspond aux filtres sélectionnés. 
//                   Veuillez ajuster vos critères.
//                 </p>
//               </div>
//             ) : null}
//           </div>
//         </CardContent>
//       </Card>

//       {/* Boutons d'export */}
//       <Card>
//         <CardHeader>
//           <CardTitle>Générer l'Export</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid gap-4 md:grid-cols-2">
//             <Button 
//               size="lg"
//               onClick={handleExcelExport}
//               disabled={isGeneratingExcel || (
//                 (contentType === 'reports' && filteredReports.length === 0) ||
//                 (contentType === 'analyses' && filteredAnalyses.length === 0) ||
//                 (contentType === 'both' && filteredReports.length === 0 && filteredAnalyses.length === 0)
//               )}
//               className="h-20"
//             >
//               <FileSpreadsheet className="mr-2 h-5 w-5" />
//               <div className="text-left">
//                 <div className="font-semibold">
//                   {isGeneratingExcel ? "Génération..." : "Télécharger Excel"}
//                 </div>
//                 <div className="text-xs opacity-80">
//                   Données structurées en feuilles
//                 </div>
//               </div>
//             </Button>

//             <Button 
//               size="lg"
//               variant="outline"
//               onClick={handlePDFExport}
//               disabled={isGeneratingPDF || (
//                 (contentType === 'reports' && filteredReports.length === 0) ||
//                 (contentType === 'analyses' && filteredAnalyses.length === 0) ||
//                 (contentType === 'both' && filteredReports.length === 0 && filteredAnalyses.length === 0)
//               )}
//               className="h-20"
//             >
//               <FileText className="mr-2 h-5 w-5" />
//               <div className="text-left">
//                 <div className="font-semibold">
//                   {isGeneratingPDF ? "Génération..." : "Générer PDF"}
//                 </div>
//                 <div className="text-xs opacity-80">
//                   Rapport professionnel formaté
//                 </div>
//               </div>
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }







// components/exports-view.tsx
"use client"

import * as React from "react"
import { Download, FileSpreadsheet, FileText, Calendar, FolderKanban, CheckCircle2, AlertCircle, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useAllReports } from "@/hooks/use-reports"
import { useProjects } from "@/hooks/use-projects"
import { useMembers } from "@/hooks/use-members"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"
import { generateExcelExport } from "@/lib/export-excel"
import { generatePDFExport } from "@/lib/export-pdf"
import { getAnalysesByProject } from "@/lib/services/analysis-service"
import type { Analysis } from "@/lib/services/analysis-service"
import { useCompany } from "@/hooks/use-company"


type ContentType = 'reports' | 'analyses' | 'both' | 'single-report' | 'blockers'
type PeriodType = 'week' | 'month' | 'quarter' | 'year'

export function ExportsView() {
  const { toast } = useToast()
  const selectedCompanyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  
  const { data: allReports = [], isLoading: reportsLoading } = useAllReports(selectedCompanyId)
  const { data: company } = useCompany(selectedCompanyId)
  const { data: projects = [], isLoading: projectsLoading } = useProjects(selectedCompanyId)
  const { data: members = [] } = useMembers(selectedCompanyId)
  
  const [contentType, setContentType] = React.useState<ContentType>('reports')
  const [selectedProjects, setSelectedProjects] = React.useState<string[]>([])
  const [selectedReportId, setSelectedReportId] = React.useState<string>('')
  const [periodFilter, setPeriodFilter] = React.useState<PeriodType>('month')
  const [includeLogo, setIncludeLogo] = React.useState(true)
  const [isGeneratingExcel, setIsGeneratingExcel] = React.useState(false)
  const [isGeneratingPDF, setIsGeneratingPDF] = React.useState(false)
  const [allAnalyses, setAllAnalyses] = React.useState<Analysis[]>([])
  const [analysesLoading, setAnalysesLoading] = React.useState(false)

  const isLoading = reportsLoading || projectsLoading || analysesLoading

  // Charger les analyses
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

  // Options d'export
  const exportOptions = [
    {
      id: 'reports' as ContentType,
      title: 'Rapports Hebdomadaires',
      description: 'Tous les rapports de la période sélectionnée',
      icon: FileText,
    },
    {
      id: 'analyses' as ContentType,
      title: 'Analyses & Spécifications',
      description: 'Toutes les analyses des projets',
      icon: FileText,
    },
    {
      id: 'both' as ContentType,
      title: 'Export Complet',
      description: 'Rapports + Analyses consolidés',
      icon: FolderKanban,
    },
    {
      id: 'single-report' as ContentType,
      title: '1 Rapport Spécifique',
      description: 'Exporter un seul rapport hebdomadaire',
      icon: FileText,
    },
    {
      id: 'blockers' as ContentType,
      title: 'Rapport Blocages',
      description: 'Synthèse de tous les blocages actifs',
      icon: AlertTriangle,
    },
  ]

  const getStartDateForPeriod = (period: PeriodType) => {
    const d = new Date()
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

  // Filtrage des rapports
  const filteredReports = React.useMemo(() => {
    if (contentType === 'single-report' && selectedReportId) {
      const report = allReports.find(r => r.id === selectedReportId)
      return report ? [report] : []
    }

    const startDate = getStartDateForPeriod(periodFilter)
    
    let filtered = allReports.filter(report => {
      const reportDate = new Date(report.createdAt)
      return reportDate >= startDate
    })

    if (selectedProjects.length > 0) {
      filtered = filtered.filter(report => selectedProjects.includes(report.projectId))
    }

    return filtered
  }, [allReports, selectedProjects, periodFilter, contentType, selectedReportId])

  // Filtrage des analyses
  const filteredAnalyses = React.useMemo(() => {
    const startDate = getStartDateForPeriod(periodFilter)
    
    let filtered = allAnalyses.filter(analysis => {
      const analysisDate = new Date(analysis.createdAt)
      return analysisDate >= startDate
    })

    if (selectedProjects.length > 0) {
      filtered = filtered.filter(analysis => selectedProjects.includes(analysis.projectId))
    }

    return filtered
  }, [allAnalyses, selectedProjects, periodFilter])

  // Calcul des statistiques
  const stats = React.useMemo(() => {
    const totalReports = filteredReports.length
    const totalTasks = filteredReports.reduce((sum, r) => sum + (r.tasks?.length || 0), 0)
    const completedTasks = filteredReports.reduce((sum, r) => 
      sum + (r.tasks?.filter(t => t.completed).length || 0), 0
    )
    const totalBlockers = filteredReports.reduce((sum, r) => sum + (r.blockers?.length || 0), 0)
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0

    const totalAnalyses = filteredAnalyses.length
    const completedAnalyses = filteredAnalyses.filter(a => a.status === 'Completed').length
    const analysesRate = totalAnalyses > 0 ? Math.round((completedAnalyses / totalAnalyses) * 100) : 0

    return { 
      totalReports, 
      totalTasks, 
      completedTasks, 
      totalBlockers, 
      completionRate,
      totalAnalyses,
      completedAnalyses,
      analysesRate
    }
  }, [filteredReports, filteredAnalyses])

  const toggleProject = (projectId: string) => {
    setSelectedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    )
  }

  const selectAllProjects = () => {
    setSelectedProjects(projects.map(p => p.id))
  }

  // Générer Excel
  const handleExcelExport = async () => {
    const hasData = 
      (contentType === 'reports' && filteredReports.length > 0) ||
      (contentType === 'analyses' && filteredAnalyses.length > 0) ||
      (contentType === 'both' && (filteredReports.length > 0 || filteredAnalyses.length > 0)) ||
      (contentType === 'single-report' && filteredReports.length > 0) ||
      (contentType === 'blockers' && filteredReports.some(r => r.blockers && r.blockers.length > 0))

    if (!hasData) {
      toast({
        title: "Aucune donnée",
        description: "Aucune donnée ne correspond aux critères sélectionnés.",
        variant: "destructive"
      })
      return
    }

    setIsGeneratingExcel(true)
    
    try {
        await generateExcelExport({
            reports: contentType === 'analyses' ? [] : filteredReports,
            analyses: contentType === 'reports' || contentType === 'single-report' || contentType === 'blockers' ? [] : filteredAnalyses,
            projects,
            members,
            period: periodFilter,
            companyId: selectedCompanyId!,
            contentType,
            companyName: company?.name || 'Mon Entreprise', // ✅ AJOUTER
            companyLogo: company?.logo // ✅ AJOUTER
          })
      
      toast({
        title: "Export Excel généré",
        description: "Le fichier a été téléchargé avec succès."
      })
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      })
    } finally {
      setIsGeneratingExcel(false)
    }
  }

  // Générer PDF
  const handlePDFExport = async () => {
    const hasData = 
      (contentType === 'reports' && filteredReports.length > 0) ||
      (contentType === 'analyses' && filteredAnalyses.length > 0) ||
      (contentType === 'both' && (filteredReports.length > 0 || filteredAnalyses.length > 0)) ||
      (contentType === 'single-report' && filteredReports.length > 0) ||
      (contentType === 'blockers' && filteredReports.some(r => r.blockers && r.blockers.length > 0))

    if (!hasData) {
      toast({
        title: "Aucune donnée",
        description: "Aucune donnée ne correspond aux critères sélectionnés.",
        variant: "destructive"
      })
      return
    }

    setIsGeneratingPDF(true)
    
    try {
        await generatePDFExport({
            reports: contentType === 'analyses' ? [] : filteredReports,
            analyses: contentType === 'reports' || contentType === 'single-report' || contentType === 'blockers' ? [] : filteredAnalyses,
            projects,
            members,
            period: periodFilter,
            companyId: selectedCompanyId!,
            contentType,
            includeLogo,
            companyName: company?.name || 'Mon Entreprise', // ✅ AJOUTER
            companyLogo: company?.logo // ✅ AJOUTER
          })
      
      toast({
        title: "Export PDF généré",
        description: "Le fichier a été téléchargé avec succès."
      })
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      })
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  const getPeriodLabel = (period: PeriodType) => {
    switch (period) {
      case 'week': return 'Cette semaine'
      case 'month': return 'Ce mois'
      case 'quarter': return 'Ce trimestre'
      case 'year': return 'Cette année'
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    )
  }

  if (!selectedCompanyId) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <Download className="h-12 w-12 text-muted-foreground mx-auto" />
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
          <Download className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Export & Téléchargement
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Exportez vos rapports et analyses en Excel ou PDF professionnel
          </p>
        </div>
      </div>

      {/* Grid 2 colonnes */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* COLONNE GAUCHE : Types d'export */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Type d'Export</CardTitle>
              <CardDescription>Choisissez ce que vous souhaitez exporter</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {exportOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setContentType(option.id)
                    if (option.id !== 'single-report') {
                      setSelectedReportId('')
                    }
                  }}
                  className={`w-full rounded-lg border p-4 text-left transition-colors ${
                    contentType === option.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:bg-muted/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        contentType === option.id 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <option.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{option.title}</p>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* COLONNE DROITE : Options + Actions */}
        <div className="space-y-4">
          {/* Options */}
          <Card>
            <CardHeader>
              <CardTitle>Options d'Export</CardTitle>
              <CardDescription>Configurez les paramètres</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Sélection 1 rapport spécifique */}
              {contentType === 'single-report' ? (
                <div className="space-y-2">
                  <Label>Sélectionner un rapport</Label>
                  <Select value={selectedReportId} onValueChange={setSelectedReportId}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choisir un rapport" />
                    </SelectTrigger>
                    <SelectContent>
                      {allReports.map(report => {
                        const project = projects.find(p => p.id === report.projectId)
                        return (
                          <SelectItem key={report.id} value={report.id}>
                            Semaine #{report.weekNumber} - {project?.name || 'Projet'} - {new Date(report.startDate).toLocaleDateString('fr-FR')}
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                </div>
              ) : (
                <>
                  {/* Sélection projets */}
                  <div className="space-y-2">
                    <Label>Projets</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-between">
                          {selectedProjects.length === 0 
                            ? "Tous les projets" 
                            : selectedProjects.length === projects.length
                            ? "Tous les projets"
                            : `${selectedProjects.length} projet${selectedProjects.length > 1 ? 's' : ''}`
                          }
                          <FolderKanban className="ml-2 h-4 w-4" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[300px] p-4" align="start">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <Label className="text-sm font-semibold">Sélectionner les projets</Label>
                            <div className="flex gap-2">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={selectAllProjects}
                              >
                                Tous
                              </Button>
                              {selectedProjects.length > 0 && (
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => setSelectedProjects([])}
                                >
                                  Aucun
                                </Button>
                              )}
                            </div>
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

                  {/* Période */}
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
                </>
              )}

              {/* Logo */}
              <div className="flex items-center gap-2 rounded-lg border border-border p-4">
                <Checkbox
                  id="logo"
                  checked={includeLogo}
                  onCheckedChange={(checked) => setIncludeLogo(checked as boolean)}
                />
                <Label htmlFor="logo" className="cursor-pointer text-sm">
                  Inclure le logo de l'entreprise dans le PDF
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Aperçu */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Aperçu
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {(contentType === 'reports' || contentType === 'both' || contentType === 'single-report') && (
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Rapports</span>
                    <Badge variant="secondary">{stats.totalReports}</Badge>
                  </div>
                )}

                {(contentType === 'analyses' || contentType === 'both') && (
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Analyses</span>
                    <Badge variant="secondary">{stats.totalAnalyses}</Badge>
                  </div>
                )}

                {(contentType === 'reports' || contentType === 'both' || contentType === 'single-report') && (
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Tâches complétées</span>
                    <Badge variant="secondary">{stats.completedTasks}/{stats.totalTasks}</Badge>
                  </div>
                )}

                {(contentType === 'blockers' || contentType === 'reports' || contentType === 'both') && (
                  <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <span className="text-sm text-muted-foreground">Blocages actifs</span>
                    <Badge variant="secondary">{stats.totalBlockers}</Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Boutons Export */}
          <div className="grid gap-3 md:grid-cols-2">
            <Button 
              size="lg"
              onClick={handleExcelExport}
              disabled={isGeneratingExcel}
              className="h-16"
            >
              <FileSpreadsheet className="mr-2 h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold text-sm">
                  {isGeneratingExcel ? "Génération..." : "Excel"}
                </div>
              </div>
            </Button>

            <Button 
              size="lg"
              variant="outline"
              onClick={handlePDFExport}
              disabled={isGeneratingPDF}
              className="h-16"
            >
              <FileText className="mr-2 h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold text-sm">
                  {isGeneratingPDF ? "Génération..." : "PDF"}
                </div>
              </div>
            </Button>
          </div>

          {/* Features */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-sm">Fonctionnalités d'Export</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Format professionnel prêt pour présentation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Graphiques, statistiques et résumés visuels
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Logo et branding de l'entreprise (optionnel)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Données traduites en français
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}