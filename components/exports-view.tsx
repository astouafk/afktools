// // components/exports-view.tsx
// "use client"

// import * as React from "react"
// import { Download, FileSpreadsheet, FileText, Calendar, FolderKanban, CheckCircle2, AlertCircle, AlertTriangle } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Label } from "@/components/ui/label"
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
// import { useCompany } from "@/hooks/use-company"


// type ContentType = 'reports' | 'analyses' | 'both' | 'single-report' | 'blockers'
// type PeriodType = 'week' | 'month' | 'quarter' | 'year'

// export function ExportsView() {
//   const { toast } = useToast()
//   const selectedCompanyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  
//   const { data: allReports = [], isLoading: reportsLoading } = useAllReports(selectedCompanyId)
//   const { data: company } = useCompany(selectedCompanyId)
//   const { data: projects = [], isLoading: projectsLoading } = useProjects(selectedCompanyId)
//   const { data: members = [] } = useMembers(selectedCompanyId)
  
//   const [contentType, setContentType] = React.useState<ContentType>('reports')
//   const [selectedProjects, setSelectedProjects] = React.useState<string[]>([])
//   const [selectedReportId, setSelectedReportId] = React.useState<string>('')
//   const [periodFilter, setPeriodFilter] = React.useState<PeriodType>('month')
//   const [includeLogo, setIncludeLogo] = React.useState(true)
//   const [isGeneratingExcel, setIsGeneratingExcel] = React.useState(false)
//   const [isGeneratingPDF, setIsGeneratingPDF] = React.useState(false)
//   const [allAnalyses, setAllAnalyses] = React.useState<Analysis[]>([])
//   const [analysesLoading, setAnalysesLoading] = React.useState(false)

//   const isLoading = reportsLoading || projectsLoading || analysesLoading

//   // Charger les analyses
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

//   // Options d'export
//   const exportOptions = [
//     {
//       id: 'reports' as ContentType,
//       title: 'Rapports Hebdomadaires',
//       description: 'Tous les rapports de la période sélectionnée',
//       icon: FileText,
//     },
//     {
//       id: 'analyses' as ContentType,
//       title: 'Analyses & Spécifications',
//       description: 'Toutes les analyses des projets',
//       icon: FileText,
//     },
//     {
//       id: 'both' as ContentType,
//       title: 'Export Complet',
//       description: 'Rapports + Analyses consolidés',
//       icon: FolderKanban,
//     },
//     {
//       id: 'single-report' as ContentType,
//       title: '1 Rapport Spécifique',
//       description: 'Exporter un seul rapport hebdomadaire',
//       icon: FileText,
//     },
//     {
//       id: 'blockers' as ContentType,
//       title: 'Rapport Blocages',
//       description: 'Synthèse de tous les blocages actifs',
//       icon: AlertTriangle,
//     },
//   ]

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
//     if (contentType === 'single-report' && selectedReportId) {
//       const report = allReports.find(r => r.id === selectedReportId)
//       return report ? [report] : []
//     }

//     const startDate = getStartDateForPeriod(periodFilter)
    
//     let filtered = allReports.filter(report => {
//       const reportDate = new Date(report.createdAt)
//       return reportDate >= startDate
//     })

//     if (selectedProjects.length > 0) {
//       filtered = filtered.filter(report => selectedProjects.includes(report.projectId))
//     }

//     return filtered
//   }, [allReports, selectedProjects, periodFilter, contentType, selectedReportId])

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

//   const toggleProject = (projectId: string) => {
//     setSelectedProjects(prev => 
//       prev.includes(projectId) 
//         ? prev.filter(id => id !== projectId)
//         : [...prev, projectId]
//     )
//   }

//   const selectAllProjects = () => {
//     setSelectedProjects(projects.map(p => p.id))
//   }

//   // Générer Excel
//   const handleExcelExport = async () => {
//     const hasData = 
//       (contentType === 'reports' && filteredReports.length > 0) ||
//       (contentType === 'analyses' && filteredAnalyses.length > 0) ||
//       (contentType === 'both' && (filteredReports.length > 0 || filteredAnalyses.length > 0)) ||
//       (contentType === 'single-report' && filteredReports.length > 0) ||
//       (contentType === 'blockers' && filteredReports.some(r => r.blockers && r.blockers.length > 0))

//     if (!hasData) {
//       toast({
//         title: "Aucune donnée",
//         description: "Aucune donnée ne correspond aux critères sélectionnés.",
//         variant: "destructive"
//       })
//       return
//     }

//     setIsGeneratingExcel(true)
    
//     try {
//         await generateExcelExport({
//             reports: contentType === 'analyses' ? [] : filteredReports,
//             analyses: contentType === 'reports' || contentType === 'single-report' || contentType === 'blockers' ? [] : filteredAnalyses,
//             projects,
//             members,
//             period: periodFilter,
//             companyId: selectedCompanyId!,
//             contentType,
//             companyName: company?.name || 'Mon Entreprise', // ✅ AJOUTER
//             companyLogo: company?.logo // ✅ AJOUTER
//           })
      
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
//       (contentType === 'both' && (filteredReports.length > 0 || filteredAnalyses.length > 0)) ||
//       (contentType === 'single-report' && filteredReports.length > 0) ||
//       (contentType === 'blockers' && filteredReports.some(r => r.blockers && r.blockers.length > 0))

//     if (!hasData) {
//       toast({
//         title: "Aucune donnée",
//         description: "Aucune donnée ne correspond aux critères sélectionnés.",
//         variant: "destructive"
//       })
//       return
//     }

//     setIsGeneratingPDF(true)
    
//     try {
//         await generatePDFExport({
//             reports: contentType === 'analyses' ? [] : filteredReports,
//             analyses: contentType === 'reports' || contentType === 'single-report' || contentType === 'blockers' ? [] : filteredAnalyses,
//             projects,
//             members,
//             period: periodFilter,
//             companyId: selectedCompanyId!,
//             contentType,
//             includeLogo,
//             companyName: company?.name || 'Mon Entreprise', // ✅ AJOUTER
//             companyLogo: company?.logo // ✅ AJOUTER
//           })
      
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
//       <div className="flex items-center gap-3">
//         <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
//           <Download className="h-6 w-6 text-primary-foreground" />
//         </div>
//         <div>
//           <h1 className="text-3xl font-semibold tracking-tight text-foreground">
//             Export & Téléchargement
//           </h1>
//           <p className="text-sm text-muted-foreground mt-1">
//             Exportez vos rapports et analyses en Excel ou PDF professionnel
//           </p>
//         </div>
//       </div>

//       {/* Grid 2 colonnes */}
//       <div className="grid gap-6 lg:grid-cols-2">
//         {/* COLONNE GAUCHE : Types d'export */}
//         <div className="space-y-4">
//           <Card>
//             <CardHeader>
//               <CardTitle>Type d'Export</CardTitle>
//               <CardDescription>Choisissez ce que vous souhaitez exporter</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               {exportOptions.map((option) => (
//                 <button
//                   key={option.id}
//                   onClick={() => {
//                     setContentType(option.id)
//                     if (option.id !== 'single-report') {
//                       setSelectedReportId('')
//                     }
//                   }}
//                   className={`w-full rounded-lg border p-4 text-left transition-colors ${
//                     contentType === option.id
//                       ? "border-primary bg-primary/5"
//                       : "border-border hover:bg-muted/50"
//                   }`}
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className={`flex h-10 w-10 items-center justify-center rounded-lg ${
//                         contentType === option.id 
//                           ? "bg-primary text-primary-foreground" 
//                           : "bg-muted text-muted-foreground"
//                       }`}
//                     >
//                       <option.icon className="h-5 w-5" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="font-medium text-foreground">{option.title}</p>
//                       <p className="text-sm text-muted-foreground">{option.description}</p>
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </CardContent>
//           </Card>
//         </div>

//         {/* COLONNE DROITE : Options + Actions */}
//         <div className="space-y-4">
//           {/* Options */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Options d'Export</CardTitle>
//               <CardDescription>Configurez les paramètres</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {/* Sélection 1 rapport spécifique */}
//               {contentType === 'single-report' ? (
//                 <div className="space-y-2">
//                   <Label>Sélectionner un rapport</Label>
//                   <Select value={selectedReportId} onValueChange={setSelectedReportId}>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Choisir un rapport" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {allReports.map(report => {
//                         const project = projects.find(p => p.id === report.projectId)
//                         return (
//                           <SelectItem key={report.id} value={report.id}>
//                             Semaine #{report.weekNumber} - {project?.name || 'Projet'} - {new Date(report.startDate).toLocaleDateString('fr-FR')}
//                           </SelectItem>
//                         )
//                       })}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               ) : (
//                 <>
//                   {/* Sélection projets */}
//                   <div className="space-y-2">
//                     <Label>Projets</Label>
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <Button variant="outline" className="w-full justify-between">
//                           {selectedProjects.length === 0 
//                             ? "Tous les projets" 
//                             : selectedProjects.length === projects.length
//                             ? "Tous les projets"
//                             : `${selectedProjects.length} projet${selectedProjects.length > 1 ? 's' : ''}`
//                           }
//                           <FolderKanban className="ml-2 h-4 w-4" />
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-[300px] p-4" align="start">
//                         <div className="space-y-3">
//                           <div className="flex items-center justify-between">
//                             <Label className="text-sm font-semibold">Sélectionner les projets</Label>
//                             <div className="flex gap-2">
//                               <Button 
//                                 variant="ghost" 
//                                 size="sm"
//                                 onClick={selectAllProjects}
//                               >
//                                 Tous
//                               </Button>
//                               {selectedProjects.length > 0 && (
//                                 <Button 
//                                   variant="ghost" 
//                                   size="sm"
//                                   onClick={() => setSelectedProjects([])}
//                                 >
//                                   Aucun
//                                 </Button>
//                               )}
//                             </div>
//                           </div>
//                           <div className="max-h-[300px] overflow-y-auto space-y-2">
//                             {projects.map(project => (
//                               <div key={project.id} className="flex items-center space-x-2">
//                                 <Checkbox 
//                                   id={project.id}
//                                   checked={selectedProjects.includes(project.id)}
//                                   onCheckedChange={() => toggleProject(project.id)}
//                                 />
//                                 <Label 
//                                   htmlFor={project.id}
//                                   className="text-sm cursor-pointer flex-1"
//                                 >
//                                   {project.name}
//                                 </Label>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </PopoverContent>
//                     </Popover>
//                   </div>

//                   {/* Période */}
//                   <div className="space-y-2">
//                     <Label>Période</Label>
//                     <Select value={periodFilter} onValueChange={(value: PeriodType) => setPeriodFilter(value)}>
//                       <SelectTrigger>
//                         <SelectValue />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="week">Cette semaine</SelectItem>
//                         <SelectItem value="month">Ce mois</SelectItem>
//                         <SelectItem value="quarter">Ce trimestre</SelectItem>
//                         <SelectItem value="year">Cette année</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </>
//               )}

//               {/* Logo */}
//               <div className="flex items-center gap-2 rounded-lg border border-border p-4">
//                 <Checkbox
//                   id="logo"
//                   checked={includeLogo}
//                   onCheckedChange={(checked) => setIncludeLogo(checked as boolean)}
//                 />
//                 <Label htmlFor="logo" className="cursor-pointer text-sm">
//                   Inclure le logo de l'entreprise dans le PDF
//                 </Label>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Aperçu */}
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <CheckCircle2 className="h-5 w-5" />
//                 Aperçu
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="grid gap-3">
//                 {(contentType === 'reports' || contentType === 'both' || contentType === 'single-report') && (
//                   <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
//                     <span className="text-sm text-muted-foreground">Rapports</span>
//                     <Badge variant="secondary">{stats.totalReports}</Badge>
//                   </div>
//                 )}

//                 {(contentType === 'analyses' || contentType === 'both') && (
//                   <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
//                     <span className="text-sm text-muted-foreground">Analyses</span>
//                     <Badge variant="secondary">{stats.totalAnalyses}</Badge>
//                   </div>
//                 )}

//                 {(contentType === 'reports' || contentType === 'both' || contentType === 'single-report') && (
//                   <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
//                     <span className="text-sm text-muted-foreground">Tâches complétées</span>
//                     <Badge variant="secondary">{stats.completedTasks}/{stats.totalTasks}</Badge>
//                   </div>
//                 )}

//                 {(contentType === 'blockers' || contentType === 'reports' || contentType === 'both') && (
//                   <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
//                     <span className="text-sm text-muted-foreground">Blocages actifs</span>
//                     <Badge variant="secondary">{stats.totalBlockers}</Badge>
//                   </div>
//                 )}
//               </div>
//             </CardContent>
//           </Card>

//           {/* Boutons Export */}
//           <div className="grid gap-3 md:grid-cols-2">
//             <Button 
//               size="lg"
//               onClick={handleExcelExport}
//               disabled={isGeneratingExcel}
//               className="h-16"
//             >
//               <FileSpreadsheet className="mr-2 h-5 w-5" />
//               <div className="text-left">
//                 <div className="font-semibold text-sm">
//                   {isGeneratingExcel ? "Génération..." : "Excel"}
//                 </div>
//               </div>
//             </Button>

//             <Button 
//               size="lg"
//               variant="outline"
//               onClick={handlePDFExport}
//               disabled={isGeneratingPDF}
//               className="h-16"
//             >
//               <FileText className="mr-2 h-5 w-5" />
//               <div className="text-left">
//                 <div className="font-semibold text-sm">
//                   {isGeneratingPDF ? "Génération..." : "PDF"}
//                 </div>
//               </div>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



// components/exports-view.tsx
"use client"

import * as React from "react"
import { Download, FileSpreadsheet, FileText, Calendar, FolderKanban, CheckCircle2, AlertCircle, AlertTriangle, X, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
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
import emailjs from '@emailjs/browser'
import { generateExcelExport } from "@/lib/export-excel"
import { generatePDFExport } from "@/lib/export-pdf"
import { getAnalysesByProject } from "@/lib/services/analysis-service"
import type { Analysis } from "@/lib/services/analysis-service"
import { useCompany } from "@/hooks/use-company"
import { saveExportToDrive, initGoogleDrive } from "@/lib/services/google-drive-service"


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

  // États pour envoi email
  const [sendByEmail, setSendByEmail] = React.useState(false)
  const [recipientInput, setRecipientInput] = React.useState('')
  const [validatedRecipients, setValidatedRecipients] = React.useState<string[]>([])
  const [isSendingEmail, setIsSendingEmail] = React.useState(false)

  // ✅ NOUVEAUX états pour Google Drive
  const [saveToDrive, setSaveToDrive] = React.useState(true) // Activé par défaut
  const [isUploadingToDrive, setIsUploadingToDrive] = React.useState(false)
  const [driveFileLink, setDriveFileLink] = React.useState<string | null>(null)

  // Configuration EmailJS
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
  const MAX_RECIPIENTS = 10

  const isLoading = reportsLoading || projectsLoading || analysesLoading

  // Initialiser Google Drive au montage du composant
  React.useEffect(() => {
    if (saveToDrive) {
      initGoogleDrive().catch(error => {
        console.error('Failed to init Google Drive:', error)
        toast({
          title: 'Erreur Google Drive',
          description: 'Impossible de se connecter à Google Drive. Vérifiez votre connexion.',
          variant: 'destructive'
        })
      })
    }
  }, [saveToDrive])

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

  // Fonctions email
  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const addRecipients = () => {
    if (!recipientInput.trim()) return

    const emails = recipientInput
      .split(',')
      .map(e => e.trim().toLowerCase())
      .filter(e => e.length > 0)
      .filter(e => isValidEmail(e))
      .filter(e => !validatedRecipients.includes(e))
      .slice(0, MAX_RECIPIENTS - validatedRecipients.length)

    if (emails.length === 0) {
      toast({
        title: 'Email invalide',
        description: 'Veuillez entrer des adresses email valides.',
        variant: 'destructive'
      })
      return
    }

    setValidatedRecipients([...validatedRecipients, ...emails])
    setRecipientInput('')

    toast({
      title: `${emails.length} destinataire(s) ajouté(s)`,
      description: `Total : ${validatedRecipients.length + emails.length}/${MAX_RECIPIENTS}`
    })
  }

  const removeRecipient = (email: string) => {
    setValidatedRecipients(validatedRecipients.filter(e => e !== email))
  }

  const getContentTypeLabel = (type: ContentType): string => {
    switch (type) {
      case 'reports': return 'Rapports Hebdomadaires'
      case 'analyses': return 'Analyses & Spécifications'
      case 'both': return 'Rapports + Analyses'
      case 'single-report': return 'Rapport Hebdomadaire'
      case 'blockers': return 'Rapport Blocages'
      default: return type
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

  const sendEmailWithAttachment = async (fileBlob: Blob, fileType: 'excel' | 'pdf') => {
    setIsSendingEmail(true)

    try {
      // Convertir Blob en Base64
      const reader = new FileReader()
      reader.readAsDataURL(fileBlob)
      
      await new Promise((resolve, reject) => {
        reader.onload = async () => {
          try {
            const base64File = (reader.result as string).split(',')[1]
            const fileName = `export-afktools-${contentType}-${Date.now()}.${fileType === 'excel' ? 'xlsx' : 'pdf'}`

            // Envoyer UN email par destinataire
            for (const recipient of validatedRecipients) {
              await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                  to_email: recipient,
                  company_name: company?.name || 'Mon Entreprise',
                  content_type: getContentTypeLabel(contentType),
                  period: getPeriodLabel(periodFilter),
                  file_type: fileType === 'excel' ? 'Excel' : 'PDF',
                  attachment: base64File,
                  attachment_name: fileName
                },
                EMAILJS_PUBLIC_KEY
              )
            }

            toast({
              title: '✅ Emails envoyés',
              description: `${validatedRecipients.length} email(s) envoyé(s) avec succès.`
            })

            resolve(true)
          } catch (error: any) {
            reject(error)
          }
        }
        reader.onerror = reject
      })

    } catch (error: any) {
      console.error('Error sending email:', error)
      toast({
        title: 'Erreur envoi email',
        description: error.text || 'Impossible d\'envoyer l\'email.',
        variant: 'destructive'
      })
    } finally {
      setIsSendingEmail(false)
    }
  }

  // ✅ Fonction téléchargement local
  const downloadFileLocally = (fileBlob: Blob, fileName: string) => {
    const url = URL.createObjectURL(fileBlob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    a.click()
    URL.revokeObjectURL(url)
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

    // Vérifier destinataires si envoi par email
    if (sendByEmail && validatedRecipients.length === 0) {
      toast({
        title: 'Aucun destinataire',
        description: 'Veuillez ajouter au moins un destinataire.',
        variant: 'destructive'
      })
      return
    }

    setIsGeneratingExcel(true)
    
    try {
      const fileBlob = await generateExcelExport({
        reports: contentType === 'analyses' ? [] : filteredReports,
        analyses: contentType === 'reports' || contentType === 'single-report' || contentType === 'blockers' ? [] : filteredAnalyses,
        projects,
        members,
        period: periodFilter,
        companyId: selectedCompanyId!,
        contentType,
        companyName: company?.name || 'Mon Entreprise',
        companyLogo: company?.logo
      })

      const fileName = `export-afktools-${contentType}-${Date.now()}.xlsx`

      // ✅ SAUVEGARDE DANS GOOGLE DRIVE
      if (saveToDrive) {
        setIsUploadingToDrive(true)
        try {
          const driveFile = await saveExportToDrive(
            fileBlob,
            fileName,
            company?.name || 'Mon Entreprise',
            contentType,
            'excel'
          )

          setDriveFileLink(driveFile.webViewLink)

          toast({
            title: '✅ Sauvegardé dans Drive',
            description: (
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-sm">Le fichier a été sauvegardé dans Google Drive.</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => downloadFileLocally(fileBlob, fileName)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => window.open(driveFile.webViewLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ouvrir dans Drive
                  </Button>
                </div>
              </div>
            ),
            duration: 10000,
          })
        } catch (driveError: any) {
          console.error('Drive upload error:', driveError)
          toast({
            title: 'Erreur sauvegarde Drive',
            description: driveError.message || 'Impossible de sauvegarder dans Drive. Le fichier sera téléchargé localement.',
            variant: 'destructive'
          })
          // Fallback : téléchargement local
          downloadFileLocally(fileBlob, fileName)
        } finally {
          setIsUploadingToDrive(false)
        }
      }

      // Si envoi par email
      if (sendByEmail) {
        await sendEmailWithAttachment(fileBlob, 'excel')
      }

      // Si ni Drive ni email, téléchargement local uniquement
      if (!saveToDrive && !sendByEmail) {
        downloadFileLocally(fileBlob, fileName)
        toast({
          title: "Export Excel généré",
          description: "Le fichier a été téléchargé avec succès."
        })
      }

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

    // Vérifier destinataires si envoi par email
    if (sendByEmail && validatedRecipients.length === 0) {
      toast({
        title: 'Aucun destinataire',
        description: 'Veuillez ajouter au moins un destinataire.',
        variant: 'destructive'
      })
      return
    }

    setIsGeneratingPDF(true)
    
    try {
      const fileBlob = await generatePDFExport({
        reports: contentType === 'analyses' ? [] : filteredReports,
        analyses: contentType === 'reports' || contentType === 'single-report' || contentType === 'blockers' ? [] : filteredAnalyses,
        projects,
        members,
        period: periodFilter,
        companyId: selectedCompanyId!,
        contentType,
        includeLogo,
        companyName: company?.name || 'Mon Entreprise',
        companyLogo: company?.logo
      })

      const fileName = `export-afktools-${contentType}-${Date.now()}.pdf`

      // ✅ SAUVEGARDE DANS GOOGLE DRIVE
      if (saveToDrive) {
        setIsUploadingToDrive(true)
        try {
          const driveFile = await saveExportToDrive(
            fileBlob,
            fileName,
            company?.name || 'Mon Entreprise',
            contentType,
            'pdf'
          )

          setDriveFileLink(driveFile.webViewLink)

          toast({
            title: '✅ Sauvegardé dans Drive',
            description: (
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-sm">Le fichier a été sauvegardé dans Google Drive.</p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => downloadFileLocally(fileBlob, fileName)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => window.open(driveFile.webViewLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ouvrir dans Drive
                  </Button>
                </div>
              </div>
            ),
            duration: 10000,
          })
        } catch (driveError: any) {
          console.error('Drive upload error:', driveError)
          toast({
            title: 'Erreur sauvegarde Drive',
            description: driveError.message || 'Impossible de sauvegarder dans Drive. Le fichier sera téléchargé localement.',
            variant: 'destructive'
          })
          // Fallback : téléchargement local
          downloadFileLocally(fileBlob, fileName)
        } finally {
          setIsUploadingToDrive(false)
        }
      }

      // Si envoi par email
      if (sendByEmail) {
        await sendEmailWithAttachment(fileBlob, 'pdf')
      }

      // Si ni Drive ni email, téléchargement local uniquement
      if (!saveToDrive && !sendByEmail) {
        downloadFileLocally(fileBlob, fileName)
        toast({
          title: "Export PDF généré",
          description: "Le fichier a été téléchargé avec succès."
        })
      }

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

          {/* ✅ NOUVELLE CARD : Google Drive */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderKanban className="h-5 w-5" />
                Sauvegarde Google Drive
              </CardTitle>
              <CardDescription>
                Enregistrer automatiquement dans votre Drive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="save-drive" className="text-sm font-medium">
                    Activer la sauvegarde Drive
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Les fichiers seront organisés par entreprise
                  </p>
                </div>
                <Switch
                  id="save-drive"
                  checked={saveToDrive}
                  onCheckedChange={setSaveToDrive}
                />
              </div>

              {saveToDrive && (
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    📁 Structure : AFKTOOLS → {company?.name || 'Entreprise'} → Rapports/Analyses
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* CARD Email (existante, inchangée) */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Envoi par Email
              </CardTitle>
              <CardDescription>
                Recevoir l'export directement par email
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="send-email" className="text-sm font-medium">
                    Activer l'envoi par email
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Le fichier sera envoyé aux destinataires
                  </p>
                </div>
                <Switch
                  id="send-email"
                  checked={sendByEmail}
                  onCheckedChange={setSendByEmail}
                />
              </div>

              {sendByEmail && (
                <div className="space-y-4 pt-4 border-t">
                  <div className="space-y-2">
                    <Label className="text-sm">
                      Destinataires ({validatedRecipients.length}/{MAX_RECIPIENTS})
                    </Label>
                    
                    <div className="flex gap-2">
                      <Input
                        placeholder="jean@test.com, marie@test.com"
                        value={recipientInput}
                        onChange={(e) => setRecipientInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            addRecipients()
                          }
                        }}
                        disabled={validatedRecipients.length >= MAX_RECIPIENTS}
                        className="flex-1"
                      />
                      <Button
                        type="button"
                        size="sm"
                        onClick={addRecipients}
                        disabled={validatedRecipients.length >= MAX_RECIPIENTS}
                      >
                        Ajouter
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground">
                      💡 Séparez les emails par des virgules. Appuyez sur Entrée pour ajouter.
                    </p>
                  </div>

                  {/* Liste des destinataires validés */}
                  {validatedRecipients.length > 0 && (
                    <div className="space-y-2">
                      <Label className="text-xs text-muted-foreground">Emails validés :</Label>
                      <div className="flex flex-wrap gap-2">
                        {validatedRecipients.map((email) => (
                          <Badge key={email} variant="secondary" className="gap-1.5 pr-1">
                            {email}
                            <button
                              type="button"
                              onClick={() => removeRecipient(email)}
                              className="hover:text-destructive ml-1 rounded-sm hover:bg-destructive/10 p-0.5"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
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
              disabled={isGeneratingExcel || isSendingEmail || isUploadingToDrive}
              className="h-16"
            >
              {isUploadingToDrive ? (
                <>
                  <FolderKanban className="mr-2 h-5 w-5 animate-pulse" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">Sauvegarde Drive...</div>
                  </div>
                </>
              ) : isSendingEmail ? (
                <>
                  <Mail className="mr-2 h-5 w-5 animate-pulse" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">Envoi...</div>
                  </div>
                </>
              ) : isGeneratingExcel ? (
                <>
                  <FileSpreadsheet className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">Génération...</div>
                  </div>
                </>
              ) : (
                <>
                  <FileSpreadsheet className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">Excel</div>
                  </div>
                </>
              )}
            </Button>

            <Button 
              size="lg"
              variant="outline"
              onClick={handlePDFExport}
              disabled={isGeneratingPDF || isSendingEmail || isUploadingToDrive}
              className="h-16"
            >
              {isUploadingToDrive ? (
                <>
                  <FolderKanban className="mr-2 h-5 w-5 animate-pulse" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">Sauvegarde Drive...</div>
                  </div>
                </>
              ) : isSendingEmail ? (
                <>
                  <Mail className="mr-2 h-5 w-5 animate-pulse" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">Envoi...</div>
                  </div>
                </>
              ) : isGeneratingPDF ? (
                <>
                  <FileText className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">Génération...</div>
                  </div>
                </>
              ) : (
                <>
                  <FileText className="mr-2 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-semibold text-sm">PDF</div>
                  </div>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}