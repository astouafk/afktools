// // components/create-report-dialog.tsx
// "use client"

// import * as React from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { useProjects } from "@/hooks/use-projects"
// import { useMembers } from "@/hooks/use-members"
// import { useProjectMembers } from "@/hooks/use-project-members"
// import { useCreateReport } from "@/hooks/use-reports"
// import { useToast } from "@/hooks/use-toast"
// import { getAnalysesByProject } from "@/lib/services/analysis-service"
// import { cn } from "@/lib/utils"
// import type { Analysis } from "@/lib/services/analysis-service"
// import type { Task, Blocker } from "@/lib/services/report-service"

// // Composants de formulaire
// import { ReportProjectSelector } from "@/components/report-form/ReportProjectSelector"
// import { ReportBasicInfoForm } from "@/components/report-form/ReportBasicInfoForm"
// import { ReportSummaryForm } from "@/components/report-form/ReportSummaryForm"
// import { ReportTasksForm } from "@/components/report-form/ReportTasksForm"
// import { ReportBlockersForm } from "@/components/report-form/ReportBlockersForm"
// import { ReportObjectivesForm } from "@/components/report-form/ReportObjectivesForm"

// const TOTAL_STEPS = 5
// const MAX_TASKS = 100
// const MAX_BLOCKERS = 100
// const MAX_OBJECTIVES = 100

// interface CreateReportDialogProps {
//   open: boolean
//   onOpenChange: (open: boolean) => void
//   companyId: string
// }

// interface FormData {
//   weekNumber: number
//   startDate: string
//   endDate: string
//   summary: string
//   tasks: Task[]
//   blockers: Blocker[]
//   nextWeekObjectives: string[]
// }

// const initialFormData: FormData = {
//   weekNumber: 0,
//   startDate: '',
//   endDate: '',
//   summary: '',
//   tasks: [],
//   blockers: [],
//   nextWeekObjectives: []
// }

// export function CreateReportDialog({ open, onOpenChange, companyId }: CreateReportDialogProps) {
//   const router = useRouter()
//   const { toast } = useToast()
  
//   const { data: projects = [] } = useProjects(companyId)
//   const { data: members = [] } = useMembers(companyId)
//   const createReport = useCreateReport()
  
//   const [currentStep, setCurrentStep] = React.useState(0)
//   const [selectedProjectId, setSelectedProjectId] = React.useState<string | null>(null)
//   const [formData, setFormData] = React.useState<FormData>(initialFormData)
//   const [allAnalyses, setAllAnalyses] = React.useState<Analysis[]>([])
//   const [analysesLoading, setAnalysesLoading] = React.useState(false)
//   const [isSubmitting, setIsSubmitting] = React.useState(false)
  
//   // Charger les membres du projet sélectionné
//   const { data: projectMembers = [] } = useProjectMembers(selectedProjectId)
  
//   // Charger toutes les analyses quand le dialog s'ouvre
//   React.useEffect(() => {
//     async function loadAllAnalyses() {
//       if (!open || projects.length === 0) return
      
//       setAnalysesLoading(true)
//       try {
//         const analysesPromises = projects.map(p => 
//           getAnalysesByProject(p.id, p.companyId)
//         )
//         const analysesArrays = await Promise.all(analysesPromises)
//         setAllAnalyses(analysesArrays.flat())
//       } catch (error) {
//         console.error('Error loading analyses:', error)
//       } finally {
//         setAnalysesLoading(false)
//       }
//     }
    
//     loadAllAnalyses()
//   }, [open, projects])
  
//   // Reset à la fermeture
//   React.useEffect(() => {
//     if (!open) {
//       setCurrentStep(0)
//       setSelectedProjectId(null)
//       setFormData(initialFormData)
//     }
//   }, [open])
  
//   const selectedProject = React.useMemo(() => 
//     projects.find(p => p.id === selectedProjectId),
//     [projects, selectedProjectId]
//   )
  
//   const getStepTitle = () => {
//     switch (currentStep) {
//       case 0: return "Sélection du projet"
//       case 1: return "Informations de base"
//       case 2: return "Résumé hebdomadaire"
//       case 3: return "Tâches de la semaine"
//       case 4: return "Blocages & défis"
//       case 5: return "Objectifs semaine prochaine"
//       default: return ""
//     }
//   }
  
//   const canGoNext = () => {
//     switch (currentStep) {
//       case 0: return !!selectedProjectId
//       case 1: return formData.weekNumber > 0 && formData.startDate && formData.endDate
//       case 2: return true
//       case 3: return true
//       case 4: return true
//       case 5: return true
//       default: return false
//     }
//   }
  
//   const handleNext = async () => {
//     // Étape 1 : Validation des dates
//     if (currentStep === 1) {
//       const start = new Date(formData.startDate)
//       const end = new Date(formData.endDate)
//       const today = new Date()
//       today.setHours(0, 0, 0, 0)
      
//       // Vérifier que la date de fin n'est pas antérieure à la date de début
//       if (end < start) {
//         toast({
//           title: "Dates invalides",
//           description: "La date de fin ne peut pas être antérieure à la date de début.",
//           variant: "destructive"
//         })
//         return
//       }
      
//       // Vérifier durée maximum de 7 jours
//       const diffDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
//       if (diffDays > 7) {
//         toast({
//           title: "Durée invalide",
//           description: "La période ne peut pas dépasser 7 jours pour un rapport hebdomadaire.",
//           variant: "destructive"
//         })
//         return
//       }
      
//       // Vérifier que les dates ne sont pas dans le futur
//       if (end > today) {
//         toast({
//           title: "Date future invalide",
//           description: "La date de fin ne peut pas être dans le futur.",
//           variant: "destructive"
//         })
//         return
//       }
//     }
    
//     if (currentStep < TOTAL_STEPS - 1) {
//       setCurrentStep(prev => prev + 1)
//     }
//   }
  
//   const handlePrevious = () => {
//     if (currentStep > 0) {
//       setCurrentStep(prev => prev - 1)
//     }
//   }
  
//   const handlePublish = async () => {
//     if (!selectedProject) {
//       toast({
//         title: "Erreur",
//         description: "Aucun projet sélectionné",
//         variant: "destructive"
//       })
//       return
//     }
    
//     setIsSubmitting(true)
    
//     try {
//       await createReport.mutateAsync({
//         projectId: selectedProject.id,
//         companyId: selectedProject.companyId,
//         weekNumber: formData.weekNumber,
//         startDate: formData.startDate,
//         endDate: formData.endDate,
//         currentStep: TOTAL_STEPS - 1,
//         summary: formData.summary,
//         tasks: formData.tasks.filter(t => t.description.trim()),
//         blockers: formData.blockers.filter(b => b.description.trim()),
//         nextWeekObjectives: formData.nextWeekObjectives.filter(o => o.trim())
//       })
      
//       toast({
//         title: "Rapport créé avec succès",
//         description: "Votre rapport hebdomadaire a été créé et publié.",
//       })
      
//       onOpenChange(false)
//     } catch (error: any) {
//       toast({
//         title: "Erreur",
//         description: error.message,
//         variant: "destructive"
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }
  
//   const renderStep = () => {
//     if (analysesLoading) {
//       return (
//         <div className="flex items-center justify-center py-12">
//           <div className="text-center space-y-3">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
//             <p className="text-sm text-muted-foreground">Chargement des projets...</p>
//           </div>
//         </div>
//       )
//     }
    
//     switch (currentStep) {
//       case 0:
//         return (
//           <ReportProjectSelector
//             projects={projects}
//             analyses={allAnalyses}
//             selectedProjectId={selectedProjectId}
//             onSelect={setSelectedProjectId}
//           />
//         )
      
//       case 1:
//         return (
//           <ReportBasicInfoForm
//             weekNumber={formData.weekNumber}
//             startDate={formData.startDate}
//             endDate={formData.endDate}
//             onChange={(data) => setFormData(prev => ({ ...prev, ...data }))}
//           />
//         )
      
//       case 2:
//         return (
//           <ReportSummaryForm
//             summary={formData.summary}
//             onChange={(summary) => setFormData(prev => ({ ...prev, summary }))}
//           />
//         )
      
//       case 3:
//         return (
//           <ReportTasksForm
//             tasks={formData.tasks}
//             onChange={(tasks) => setFormData(prev => ({ ...prev, tasks }))}
//             projectMembers={projectMembers}
//             maxTasks={MAX_TASKS}
//           />
//         )
      
//       case 4:
//         return (
//           <ReportBlockersForm
//             blockers={formData.blockers}
//             onChange={(blockers) => setFormData(prev => ({ ...prev, blockers }))}
//             maxBlockers={MAX_BLOCKERS}
//           />
//         )
      
//       case 5:
//         return (
//           <ReportObjectivesForm
//             objectives={formData.nextWeekObjectives}
//             onChange={(objectives) => setFormData(prev => ({ ...prev, nextWeekObjectives: objectives }))}
//             maxObjectives={MAX_OBJECTIVES}
//           />
//         )
      
//       default:
//         return null
//     }
//   }
  
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="max-w-5xl max-h-[90vh] flex flex-col">
//         <DialogHeader>
//           <DialogTitle>Créer un Rapport Hebdomadaire</DialogTitle>
//           <DialogDescription>
//             Étape {currentStep + 1}/{TOTAL_STEPS} : {getStepTitle()}
//           </DialogDescription>
          
//           {/* Progress bar */}
//           <div className="flex gap-1 mt-4">
//             {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
//               <div 
//                 key={i}
//                 className={cn(
//                   "h-1 flex-1 rounded transition-all",
//                   i <= currentStep ? "bg-primary" : "bg-muted"
//                 )}
//               />
//             ))}
//           </div>
//         </DialogHeader>
        
//         {/* Content scrollable */}
//         <div className="flex-1 overflow-y-auto py-4">
//           {renderStep()}
//         </div>
        
//         <DialogFooter className="border-t pt-4">
//           <div className="flex items-center justify-between w-full">
//             <div>
//               {currentStep > 0 && (
//                 <Button 
//                   variant="outline" 
//                   onClick={handlePrevious}
//                   disabled={isSubmitting}
//                 >
//                   Précédent
//                 </Button>
//               )}
//             </div>
            
//             <div className="flex items-center gap-2">
//               <Button 
//                 variant="ghost" 
//                 onClick={() => onOpenChange(false)}
//                 disabled={isSubmitting}
//               >
//                 Annuler
//               </Button>
              
//               {currentStep < TOTAL_STEPS - 1 ? (
//                 <Button 
//                   onClick={handleNext}
//                   disabled={!canGoNext() || isSubmitting}
//                 >
//                   Suivant
//                 </Button>
//               ) : (
//                 <Button 
//                   onClick={handlePublish}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Publication..." : "Publier le Rapport"}
//                 </Button>
//               )}
//             </div>
//           </div>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }






// components/create-report-dialog.tsx
"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useProjects } from "@/hooks/use-projects"
import { useMembers } from "@/hooks/use-members"
import { useProjectMembers } from "@/hooks/use-project-members"
import { useCreateReport, useUpdateReport } from "@/hooks/use-reports"
import { useToast } from "@/hooks/use-toast"
import { getAnalysesByProject } from "@/lib/services/analysis-service"
import { cn } from "@/lib/utils"
import type { Analysis } from "@/lib/services/analysis-service"
import type { Task, Blocker } from "@/lib/services/report-service"

// Composants de formulaire
import { ReportProjectSelector } from "@/components/report-form/ReportProjectSelector"
import { ReportBasicInfoForm } from "@/components/report-form/ReportBasicInfoForm"
import { ReportSummaryForm } from "@/components/report-form/ReportSummaryForm"
import { ReportTasksForm } from "@/components/report-form/ReportTasksForm"
import { ReportBlockersForm } from "@/components/report-form/ReportBlockersForm"
import { ReportObjectivesForm } from "@/components/report-form/ReportObjectivesForm"

const TOTAL_STEPS = 5  // ✅ CORRIGÉ - 5 étapes au lieu de 6
const MAX_TASKS = 100
const MAX_BLOCKERS = 100
const MAX_OBJECTIVES = 100

interface CreateReportDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  companyId: string
}

interface FormData {
  weekNumber: number
  startDate: string
  endDate: string
  summary: string
  tasks: Task[]
  blockers: Blocker[]
  nextWeekObjectives: string[]
}

const initialFormData: FormData = {
  weekNumber: 0,
  startDate: '',
  endDate: '',
  summary: '',
  tasks: [],
  blockers: [],
  nextWeekObjectives: []
}

export function CreateReportDialog({ open, onOpenChange, companyId }: CreateReportDialogProps) {
  const router = useRouter()
  const { toast } = useToast()
  
  const { data: projects = [] } = useProjects(companyId)
  const { data: members = [] } = useMembers(companyId)
  const createReport = useCreateReport()
  const updateReport = useUpdateReport()  // ✅ AJOUTÉ pour publier après création
  
  const [projectSelected, setProjectSelected] = React.useState(false)  // ✅ AJOUTÉ
  const [currentStep, setCurrentStep] = React.useState(0)  // 0-4 (5 étapes)
  const [selectedProjectId, setSelectedProjectId] = React.useState<string | null>(null)
  const [formData, setFormData] = React.useState<FormData>(initialFormData)
  const [allAnalyses, setAllAnalyses] = React.useState<Analysis[]>([])
  const [analysesLoading, setAnalysesLoading] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [createdReportId, setCreatedReportId] = React.useState<string | null>(null)  // ✅ AJOUTÉ
  
  // Charger les membres du projet sélectionné
  const { data: projectMembers = [] } = useProjectMembers(selectedProjectId)
  
  // Charger toutes les analyses quand le dialog s'ouvre
  React.useEffect(() => {
    async function loadAllAnalyses() {
      if (!open || projects.length === 0) return
      
      setAnalysesLoading(true)
      try {
        const analysesPromises = projects.map(p => 
          getAnalysesByProject(p.id, p.companyId)
        )
        const analysesArrays = await Promise.all(analysesPromises)
        setAllAnalyses(analysesArrays.flat())
      } catch (error) {
        console.error('Error loading analyses:', error)
      } finally {
        setAnalysesLoading(false)
      }
    }
    
    loadAllAnalyses()
  }, [open, projects])
  
  // Reset à la fermeture
  React.useEffect(() => {
    if (!open) {
      setProjectSelected(false)
      setCurrentStep(0)
      setSelectedProjectId(null)
      setFormData(initialFormData)
      setCreatedReportId(null)
    }
  }, [open])
  
  const selectedProject = React.useMemo(() => 
    projects.find(p => p.id === selectedProjectId),
    [projects, selectedProjectId]
  )
  
  const getStepTitle = () => {
    switch (currentStep) {
      case 0: return "Informations de base"
      case 1: return "Résumé hebdomadaire"
      case 2: return "Tâches de la semaine"
      case 3: return "Blocages & défis"
      case 4: return "Objectifs semaine prochaine"
      default: return ""
    }
  }
  
  const canGoNext = () => {
    switch (currentStep) {
      case 0: return formData.weekNumber > 0 && formData.startDate && formData.endDate
      case 1: return true
      case 2: return true
      case 3: return true
      case 4: return true
      default: return false
    }
  }
  
  // ✅ NOUVEAU - Gestion du passage de la sélection projet aux étapes
  const handleProjectConfirm = async () => {
    if (!selectedProjectId || !selectedProject) {
      toast({
        title: "Aucun projet sélectionné",
        description: "Veuillez sélectionner un projet pour continuer.",
        variant: "destructive"
      })
      return
    }
    
    setProjectSelected(true)
  }
  
  const handleNext = async () => {
    // Étape 0 : Validation des dates
    if (currentStep === 0) {
      const start = new Date(formData.startDate)
      const end = new Date(formData.endDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      
      if (end < start) {
        toast({
          title: "Dates invalides",
          description: "La date de fin ne peut pas être antérieure à la date de début.",
          variant: "destructive"
        })
        return
      }
      
      const diffDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
      if (diffDays > 7) {
        toast({
          title: "Durée invalide",
          description: "La période ne peut pas dépasser 7 jours pour un rapport hebdomadaire.",
          variant: "destructive"
        })
        return
      }
      
      if (end > today) {
        toast({
          title: "Date future invalide",
          description: "La date de fin ne peut pas être dans le futur.",
          variant: "destructive"
        })
        return
      }
      
      // ✅ Créer le rapport en brouillon à l'étape 0
      if (!createdReportId && selectedProject) {
        setIsSubmitting(true)
        try {
          const reportId = await createReport.mutateAsync({
            projectId: selectedProject.id,
            companyId: selectedProject.companyId,
            weekNumber: formData.weekNumber,
            startDate: formData.startDate,
            endDate: formData.endDate,
            currentStep: 0,
            summary: '',
            tasks: [],
            blockers: [],
            nextWeekObjectives: []
          })
          setCreatedReportId(reportId)
        } catch (error: any) {
          toast({
            title: "Erreur",
            description: error.message,
            variant: "destructive"
          })
          setIsSubmitting(false)
          return
        } finally {
          setIsSubmitting(false)
        }
      }
    }
    
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }
  
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    } else if (projectSelected) {
      setProjectSelected(false)
    }
  }
  
  // ✅ CORRIGÉ - Publier le rapport au lieu de le créer
  const handlePublish = async () => {
    if (!selectedProject || !createdReportId) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // ✅ CORRIGÉ - Mettre à jour le rapport existant avec status: 'Published'
      await updateReport.mutateAsync({
        reportId: createdReportId,
        projectId: selectedProject.id,
        data: {
          status: 'Published',  // ✅ AJOUTÉ
          currentStep: TOTAL_STEPS - 1,
          summary: formData.summary,
          tasks: formData.tasks.filter(t => t.description.trim()),
          blockers: formData.blockers.filter(b => b.description.trim()),
          nextWeekObjectives: formData.nextWeekObjectives.filter(o => o.trim())
        }
      })
      
      toast({
        title: "Rapport créé avec succès",
        description: "Votre rapport hebdomadaire a été créé et publié.",
      })
      
      onOpenChange(false)
      
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const renderStep = () => {
    if (analysesLoading) {
      return (
        <div className="flex items-center justify-center py-12">
          <div className="text-center space-y-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto" />
            <p className="text-sm text-muted-foreground">Chargement des projets...</p>
          </div>
        </div>
      )
    }
    
    // ✅ MODIFIÉ - Afficher la sélection projet si pas encore sélectionné
    if (!projectSelected) {
      return (
        <ReportProjectSelector
          projects={projects}
          analyses={allAnalyses}
          selectedProjectId={selectedProjectId}
          onSelect={setSelectedProjectId}
        />
      )
    }
    
    // ✅ MODIFIÉ - Étapes du formulaire (0-4)
    switch (currentStep) {
      case 0:
        return (
          <ReportBasicInfoForm
            weekNumber={formData.weekNumber}
            startDate={formData.startDate}
            endDate={formData.endDate}
            onChange={(data) => setFormData(prev => ({ ...prev, ...data }))}
          />
        )
      
      case 1:
        return (
          <ReportSummaryForm
            summary={formData.summary}
            onChange={(summary) => setFormData(prev => ({ ...prev, summary }))}
          />
        )
      
      case 2:
        return (
          <ReportTasksForm
            tasks={formData.tasks}
            onChange={(tasks) => setFormData(prev => ({ ...prev, tasks }))}
            projectMembers={projectMembers}
            maxTasks={MAX_TASKS}
          />
        )
      
      case 3:
        return (
          <ReportBlockersForm
            blockers={formData.blockers}
            onChange={(blockers) => setFormData(prev => ({ ...prev, blockers }))}
            maxBlockers={MAX_BLOCKERS}
          />
        )
      
      case 4:
        return (
          <ReportObjectivesForm
            objectives={formData.nextWeekObjectives}
            onChange={(objectives) => setFormData(prev => ({ ...prev, nextWeekObjectives: objectives }))}
            maxObjectives={MAX_OBJECTIVES}
          />
        )
      
      default:
        return null
    }
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>
            {/* ✅ MODIFIÉ - Titre dynamique */}
            {!projectSelected ? "Sélectionner un Projet" : "Créer un Rapport Hebdomadaire"}
          </DialogTitle>
          <DialogDescription>
            {/* ✅ MODIFIÉ - Description dynamique */}
            {!projectSelected 
              ? "Choisissez le projet pour lequel vous souhaitez créer un rapport"
              : `Étape ${currentStep + 1}/${TOTAL_STEPS} : ${getStepTitle()}`
            }
          </DialogDescription>
          
          {/* ✅ MODIFIÉ - Progress bar seulement si projet sélectionné */}
          {projectSelected && (
            <div className="flex gap-1 mt-4">
              {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                <div 
                  key={i}
                  className={cn(
                    "h-1 flex-1 rounded transition-all",
                    i <= currentStep ? "bg-primary" : "bg-muted"
                  )}
                />
              ))}
            </div>
          )}
        </DialogHeader>
        
        {/* Content scrollable */}
        <div className="flex-1 overflow-y-auto py-4">
          {renderStep()}
        </div>
        
        <DialogFooter className="border-t pt-4">
          <div className="flex items-center justify-between w-full">
            <div>
              {/* ✅ MODIFIÉ - Bouton précédent */}
              {(projectSelected && currentStep > 0) && (
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={isSubmitting}
                >
                  Précédent
                </Button>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
              >
                Annuler
              </Button>
              
              {/* ✅ MODIFIÉ - Bouton suivant/publier */}
              {!projectSelected ? (
                <Button 
                  onClick={handleProjectConfirm}
                  disabled={!selectedProjectId}
                >
                  Continuer
                </Button>
              ) : currentStep < TOTAL_STEPS - 1 ? (
                <Button 
                  onClick={handleNext}
                  disabled={!canGoNext() || isSubmitting}
                >
                  {isSubmitting && currentStep === 0 ? "Validation..." : "Suivant"}
                </Button>
              ) : (
                <Button 
                  onClick={handlePublish}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Publication..." : "Publier le Rapport"}
                </Button>
              )}
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}