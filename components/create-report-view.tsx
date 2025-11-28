// // components/create-report-view.tsx
// "use client"

// import * as React from "react"
// import { ArrowLeft, Plus, Trash2 } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import { useRouter } from "next/navigation"
// import { useCreateReport, useUpdateReport } from "@/hooks/use-reports"
// import { useProjectMembers } from "@/hooks/use-project-members"
// import { useToast } from "@/hooks/use-toast"
// import { StepIndicator } from "@/components/step-indicator"
// import type { Task, Blocker } from "@/lib/services/report-service"

// const TOTAL_STEPS = 5

// type CreateReportViewProps = {
//   projectId: string
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

// export function CreateReportView({ projectId }: CreateReportViewProps) {
//   const router = useRouter()
//   const { toast } = useToast()
  
//   const { data: projectMembersData = [] } = useProjectMembers(projectId)
//   const createReport = useCreateReport()
//   const updateReport = useUpdateReport()
  
//   const [currentStep, setCurrentStep] = React.useState(0)
//   const [isValidatingDuplicate, setIsValidatingDuplicate] = React.useState(false)
//   const [createdReportId, setCreatedReportId] = React.useState<string | null>(null)
  
//   const [formData, setFormData] = React.useState<FormData>({
//     weekNumber: 0,
//     startDate: '',
//     endDate: '',
//     summary: '',
//     tasks: [],
//     blockers: [],
//     nextWeekObjectives: []
//   })

//   const addTask = () => {
//     setFormData(prev => ({
//       ...prev,
//       tasks: [
//         ...prev.tasks,
//         {
//           id: crypto.randomUUID(),
//           description: '',
//           assignedTo: undefined,
//           completed: false
//         }
//       ]
//     }))
//   }

//   const updateTask = (index: number, field: keyof Task, value: any) => {
//     setFormData(prev => ({
//       ...prev,
//       tasks: prev.tasks.map((task, i) => 
//         i === index ? { ...task, [field]: value } : task
//       )
//     }))
//   }

//   const removeTask = (index: number) => {
//     setFormData(prev => ({
//       ...prev,
//       tasks: prev.tasks.filter((_, i) => i !== index)
//     }))
//   }

//   const addBlocker = () => {
//     setFormData(prev => ({
//       ...prev,
//       blockers: [
//         ...prev.blockers,
//         {
//           id: crypto.randomUUID(),
//           description: '',
//           level: 'medium',
//           mitigation: ''
//         }
//       ]
//     }))
//   }

//   const updateBlocker = (index: number, field: keyof Blocker, value: any) => {
//     setFormData(prev => ({
//       ...prev,
//       blockers: prev.blockers.map((blocker, i) => 
//         i === index ? { ...blocker, [field]: value } : blocker
//       )
//     }))
//   }

//   const removeBlocker = (index: number) => {
//     setFormData(prev => ({
//       ...prev,
//       blockers: prev.blockers.filter((_, i) => i !== index)
//     }))
//   }

//   const addObjective = () => {
//     setFormData(prev => ({
//       ...prev,
//       nextWeekObjectives: [...prev.nextWeekObjectives, '']
//     }))
//   }

//   const updateObjective = (index: number, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       nextWeekObjectives: prev.nextWeekObjectives.map((obj, i) => 
//         i === index ? value : obj
//       )
//     }))
//   }

//   const removeObjective = (index: number) => {
//     setFormData(prev => ({
//       ...prev,
//       nextWeekObjectives: prev.nextWeekObjectives.filter((_, i) => i !== index)
//     }))
//   }

//   const handleNext = async () => {
//     if (currentStep === 0) {
//       if (!formData.weekNumber || !formData.startDate || !formData.endDate) {
//         toast({
//           title: "Champs requis",
//           description: "Veuillez remplir tous les champs obligatoires.",
//           variant: "destructive"
//         })
//         return
//       }

//       setIsValidatingDuplicate(true)
//       try {
//         const reportId = await createReport.mutateAsync({
//           projectId,
//           weekNumber: formData.weekNumber,
//           startDate: formData.startDate,
//           endDate: formData.endDate,
//           currentStep: 0,
//           summary: '',
//           tasks: [],
//           blockers: [],
//           nextWeekObjectives: []
//         })
        
//         setCreatedReportId(reportId)
//         setCurrentStep(1)
//       } catch (error: any) {
//         toast({
//           title: "Erreur",
//           description: error.message,
//           variant: "destructive"
//         })
//       } finally {
//         setIsValidatingDuplicate(false)
//       }
//     } else if (currentStep < TOTAL_STEPS - 1) {
//       setCurrentStep(prev => prev + 1)
//     }
//   }

//   const handlePrevious = () => {
//     if (currentStep > 0) {
//       setCurrentStep(prev => prev - 1)
//     }
//   }

//   const handlePublish = async () => {
//     if (!createdReportId) {
//       toast({
//         title: "Erreur",
//         description: "Une erreur s'est produite. Veuillez réessayer.",
//         variant: "destructive"
//       })
//       return
//     }

//     try {
//       await updateReport.mutateAsync({
//         reportId: createdReportId,
//         projectId,
//         data: {
//           status: 'Published',
//           currentStep: TOTAL_STEPS - 1,
//           summary: formData.summary,
//           tasks: formData.tasks.filter(t => t.description.trim()),
//           blockers: formData.blockers.filter(b => b.description.trim()),
//           nextWeekObjectives: formData.nextWeekObjectives.filter(o => o.trim())
//         }
//       })
      
//       toast({
//         title: "Rapport publié",
//         description: "Le rapport a été créé et publié avec succès."
//       })
      
//       router.push(`/project/${projectId}/reports`)
//     } catch (error: any) {
//       toast({
//         title: "Erreur",
//         description: error.message,
//         variant: "destructive"
//       })
//     }
//   }

//   const renderStep = () => {
//     switch (currentStep) {
//       case 0:
//         return (
//           <Card>
//             <CardHeader>
//               <CardTitle>Informations de Base</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div>
//                 <Label htmlFor="weekNumber">Numéro de Semaine *</Label>
//                 <Input
//                   id="weekNumber"
//                   type="number"
//                   min="1"
//                   max="52"
//                   value={formData.weekNumber || ''}
//                   onChange={(e) => setFormData(prev => ({ 
//                     ...prev, 
//                     weekNumber: parseInt(e.target.value) || 0 
//                   }))}
//                   placeholder="Ex: 12"
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="startDate">Date de Début *</Label>
//                 <Input
//                   id="startDate"
//                   type="date"
//                   value={formData.startDate}
//                   onChange={(e) => setFormData(prev => ({ 
//                     ...prev, 
//                     startDate: e.target.value 
//                   }))}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="endDate">Date de Fin *</Label>
//                 <Input
//                   id="endDate"
//                   type="date"
//                   value={formData.endDate}
//                   onChange={(e) => setFormData(prev => ({ 
//                     ...prev, 
//                     endDate: e.target.value 
//                   }))}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         )

//       case 1:
//         return (
//           <Card>
//             <CardHeader>
//               <CardTitle>Résumé Hebdomadaire</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <Textarea
//                 value={formData.summary}
//                 onChange={(e) => setFormData(prev => ({ 
//                   ...prev, 
//                   summary: e.target.value 
//                 }))}
//                 placeholder="Décrivez les principaux accomplissements et événements de la semaine..."
//                 rows={10}
//               />
//             </CardContent>
//           </Card>
//         )

//       case 2:
//         return (
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle>Tâches de la Semaine</CardTitle>
//                 <Button onClick={addTask} size="sm">
//                   <Plus className="mr-2 h-4 w-4" />
//                   Ajouter Tâche
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className={`space-y-3 ${formData.tasks.length > 5 ? 'max-h-[400px] overflow-y-auto pr-2' : ''}`}>
//                 {formData.tasks.length === 0 ? (
//                   <div className="text-center py-8 text-muted-foreground">
//                     Aucune tâche ajoutée. Cliquez sur "Ajouter Tâche" pour commencer.
//                   </div>
//                 ) : (
//                   formData.tasks.map((task, index) => (
//                     <Card key={task.id} className="bg-muted/30">
//                       <CardContent className="pt-6 space-y-3">
//                         <div className="flex items-start gap-2">
//                           <Checkbox
//                             checked={task.completed}
//                             onCheckedChange={(checked) => 
//                               updateTask(index, 'completed', checked === true)
//                             }
//                           />
//                           <div className="flex-1 space-y-3">
//                             <Textarea
//                               value={task.description}
//                               onChange={(e) => updateTask(index, 'description', e.target.value)}
//                               placeholder="Description de la tâche..."
//                               rows={2}
//                             />
//                             <Select
//                               value={task.assignedTo || 'unassigned'}
//                               onValueChange={(value) => 
//                                 updateTask(index, 'assignedTo', value === 'unassigned' ? undefined : value)
//                               }
//                             >
//                               <SelectTrigger className="w-full">
//                                 <SelectValue placeholder="Assigner à..." />
//                               </SelectTrigger>
//                               <SelectContent>
//                                 <SelectItem value="unassigned">Non assignée</SelectItem>
//                                 {projectMembersData.map(pm => (
//                                   <SelectItem key={pm.memberId} value={pm.memberId}>
//                                     {pm.memberName}
//                                   </SelectItem>
//                                 ))}
//                               </SelectContent>
//                             </Select>
//                           </div>
//                           <Button
//                             variant="ghost"
//                             size="icon"
//                             onClick={() => removeTask(index)}
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))
//                 )}
//               </div>
//               {formData.tasks.length > 10 && (
//                 <p className="text-xs text-muted-foreground text-center pt-2">
//                   {formData.tasks.length} tâches • Faites défiler pour voir toutes
//                 </p>
//               )}
//             </CardContent>
//           </Card>
//         )

//       case 3:
//         return (
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle>Blocages & Défis</CardTitle>
//                 <Button onClick={addBlocker} size="sm">
//                   <Plus className="mr-2 h-4 w-4" />
//                   Ajouter Blocage
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className={`space-y-3 ${formData.blockers.length > 5 ? 'max-h-[400px] overflow-y-auto pr-2' : ''}`}>
//                 {formData.blockers.length === 0 ? (
//                   <div className="text-center py-8 text-muted-foreground">
//                     Aucun blocage signalé. Cliquez sur "Ajouter Blocage" si nécessaire.
//                   </div>
//                 ) : (
//                   formData.blockers.map((blocker, index) => (
//                     <Card key={blocker.id} className="bg-muted/30">
//                       <CardContent className="pt-6 space-y-3">
//                         <div className="flex items-start gap-2">
//                           <div className="flex-1 space-y-3">
//                             <Textarea
//                               value={blocker.description}
//                               onChange={(e) => updateBlocker(index, 'description', e.target.value)}
//                               placeholder="Description du blocage..."
//                               rows={2}
//                             />
//                             <Select
//                               value={blocker.level}
//                               onValueChange={(value: 'high' | 'medium' | 'low') => 
//                                 updateBlocker(index, 'level', value)
//                               }
//                             >
//                               <SelectTrigger className="w-[200px]">
//                                 <SelectValue placeholder="Niveau d'impact" />
//                               </SelectTrigger>
//                               <SelectContent>
//                                 <SelectItem value="high">Élevé</SelectItem>
//                                 <SelectItem value="medium">Moyen</SelectItem>
//                                 <SelectItem value="low">Bas</SelectItem>
//                               </SelectContent>
//                             </Select>
//                             <Textarea
//                               value={blocker.mitigation || ''}
//                               onChange={(e) => updateBlocker(index, 'mitigation', e.target.value)}
//                               placeholder="Action de mitigation (optionnel)..."
//                               rows={2}
//                             />
//                           </div>
//                           <Button
//                             variant="ghost"
//                             size="icon"
//                             onClick={() => removeBlocker(index)}
//                           >
//                             <Trash2 className="h-4 w-4" />
//                           </Button>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))
//                 )}
//               </div>
//               {formData.blockers.length > 10 && (
//                 <p className="text-xs text-muted-foreground text-center pt-2">
//                   {formData.blockers.length} blocages
//                 </p>
//               )}
//             </CardContent>
//           </Card>
//         )

//       case 4:
//         return (
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <CardTitle>Objectifs Semaine Prochaine</CardTitle>
//                 <Button onClick={addObjective} size="sm">
//                   <Plus className="mr-2 h-4 w-4" />
//                   Ajouter Objectif
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className={`space-y-3 ${formData.nextWeekObjectives.length > 10 ? 'max-h-[400px] overflow-y-auto pr-2' : ''}`}>
//                 {formData.nextWeekObjectives.length === 0 ? (
//                   <div className="text-center py-8 text-muted-foreground">
//                     Aucun objectif défini. Cliquez sur "Ajouter Objectif" pour commencer.
//                   </div>
//                 ) : (
//                   formData.nextWeekObjectives.map((objective, index) => (
//                     <div key={index} className="flex items-center gap-2">
//                       <Input
//                         value={objective}
//                         onChange={(e) => updateObjective(index, e.target.value)}
//                         placeholder="Objectif..."
//                       />
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() => removeObjective(index)}
//                       >
//                         <Trash2 className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   ))
//                 )}
//               </div>
//               {formData.nextWeekObjectives.length > 15 && (
//                 <p className="text-xs text-muted-foreground text-center pt-2">
//                   {formData.nextWeekObjectives.length} objectifs
//                 </p>
//               )}
//             </CardContent>
//           </Card>
//         )

//       default:
//         return null
//     }
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center gap-4">
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={() => router.back()}
//         >
//           <ArrowLeft className="h-5 w-5" />
//         </Button>
//         <div>
//           <h1 className="text-3xl font-semibold tracking-tight text-foreground">
//             Créer un Rapport Hebdomadaire
//           </h1>
//           <p className="text-sm text-muted-foreground mt-1">
//             Étape {currentStep + 1} sur {TOTAL_STEPS}
//           </p>
//         </div>
//       </div>

//       <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

//       <div className="min-h-[600px]">
//         {renderStep()}
//       </div>

//       <div className="flex items-center justify-between">
//         <div>
//           {currentStep > 0 && (
//             <Button variant="outline" onClick={handlePrevious}>
//               Précédent
//             </Button>
//           )}
//         </div>
//         <div>
//           {currentStep < TOTAL_STEPS - 1 ? (
//             <Button 
//               onClick={handleNext}
//               disabled={isValidatingDuplicate}
//             >
//               {currentStep === 0 && isValidatingDuplicate ? "Vérification..." : "Suivant"}
//             </Button>
//           ) : (
//             <Button 
//               onClick={handlePublish}
//               disabled={createReport.isPending || updateReport.isPending}
//             >
//               {createReport.isPending || updateReport.isPending ? "Publication..." : "Publier le Rapport"}
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }







// components/create-report-view.tsx
"use client"

import * as React from "react"
import { ArrowLeft, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"
import { useCreateReport, useUpdateReport } from "@/hooks/use-reports"
import { useProject } from "@/hooks/use-projects"
import { useProjectMembers } from "@/hooks/use-project-members"
import { useToast } from "@/hooks/use-toast"
import { StepIndicator } from "@/components/step-indicator"
import type { Task, Blocker } from "@/lib/services/report-service"

const TOTAL_STEPS = 5

type CreateReportViewProps = {
  projectId: string
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

export function CreateReportView({ projectId }: CreateReportViewProps) {
  const router = useRouter()
  const { toast } = useToast()
  
  // ✅ CORRECTION - Récupérer project pour avoir companyId
  const { data: project } = useProject(projectId)
  const { data: projectMembersData = [] } = useProjectMembers(projectId)
  const createReport = useCreateReport()
  const updateReport = useUpdateReport()
  
  const [currentStep, setCurrentStep] = React.useState(0)
  const [isValidatingDuplicate, setIsValidatingDuplicate] = React.useState(false)
  const [createdReportId, setCreatedReportId] = React.useState<string | null>(null)
  
  const [formData, setFormData] = React.useState<FormData>({
    weekNumber: 0,
    startDate: '',
    endDate: '',
    summary: '',
    tasks: [],
    blockers: [],
    nextWeekObjectives: []
  })

  const addTask = () => {
    setFormData(prev => ({
      ...prev,
      tasks: [
        ...prev.tasks,
        {
          id: crypto.randomUUID(),
          description: '',
          assignedTo: undefined,
          completed: false
        }
      ]
    }))
  }

  const updateTask = (index: number, field: keyof Task, value: any) => {
    setFormData(prev => ({
      ...prev,
      tasks: prev.tasks.map((task, i) => 
        i === index ? { ...task, [field]: value } : task
      )
    }))
  }

  const removeTask = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tasks: prev.tasks.filter((_, i) => i !== index)
    }))
  }

  const addBlocker = () => {
    setFormData(prev => ({
      ...prev,
      blockers: [
        ...prev.blockers,
        {
          id: crypto.randomUUID(),
          description: '',
          level: 'medium',
          mitigation: ''
        }
      ]
    }))
  }

  const updateBlocker = (index: number, field: keyof Blocker, value: any) => {
    setFormData(prev => ({
      ...prev,
      blockers: prev.blockers.map((blocker, i) => 
        i === index ? { ...blocker, [field]: value } : blocker
      )
    }))
  }

  const removeBlocker = (index: number) => {
    setFormData(prev => ({
      ...prev,
      blockers: prev.blockers.filter((_, i) => i !== index)
    }))
  }

  const addObjective = () => {
    setFormData(prev => ({
      ...prev,
      nextWeekObjectives: [...prev.nextWeekObjectives, '']
    }))
  }

  const updateObjective = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      nextWeekObjectives: prev.nextWeekObjectives.map((obj, i) => 
        i === index ? value : obj
      )
    }))
  }

  const removeObjective = (index: number) => {
    setFormData(prev => ({
      ...prev,
      nextWeekObjectives: prev.nextWeekObjectives.filter((_, i) => i !== index)
    }))
  }

  const handleNext = async () => {
    if (currentStep === 0) {
      if (!formData.weekNumber || !formData.startDate || !formData.endDate) {
        toast({
          title: "Champs requis",
          description: "Veuillez remplir tous les champs obligatoires.",
          variant: "destructive"
        })
        return
      }

      // ✅ CORRECTION - Vérifier project et companyId
      if (!project || !project.companyId) {
        toast({
          title: "Erreur",
          description: "Impossible de récupérer les informations du projet",
          variant: "destructive"
        })
        return
      }

      setIsValidatingDuplicate(true)
      try {
        const reportId = await createReport.mutateAsync({
          projectId,
          companyId: project.companyId,  // ✅ AJOUTÉ
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
        setCurrentStep(1)
      } catch (error: any) {
        toast({
          title: "Erreur",
          description: error.message,
          variant: "destructive"
        })
      } finally {
        setIsValidatingDuplicate(false)
      }
    } else if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handlePublish = async () => {
    if (!createdReportId) {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      })
      return
    }

    try {
      await updateReport.mutateAsync({
        reportId: createdReportId,
        projectId,
        data: {
          status: 'Published',
          currentStep: TOTAL_STEPS - 1,
          summary: formData.summary,
          tasks: formData.tasks.filter(t => t.description.trim()),
          blockers: formData.blockers.filter(b => b.description.trim()),
          nextWeekObjectives: formData.nextWeekObjectives.filter(o => o.trim())
        }
      })
      
      toast({
        title: "Rapport publié",
        description: "Le rapport a été créé et publié avec succès."
      })
      
      router.push(`/project/${projectId}/reports`)
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      })
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Informations de Base</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="weekNumber">Numéro de Semaine *</Label>
                <Input
                  id="weekNumber"
                  type="number"
                  min="1"
                  max="52"
                  value={formData.weekNumber || ''}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    weekNumber: parseInt(e.target.value) || 0 
                  }))}
                  placeholder="Ex: 12"
                />
              </div>
              <div>
                <Label htmlFor="startDate">Date de Début *</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    startDate: e.target.value 
                  }))}
                />
              </div>
              <div>
                <Label htmlFor="endDate">Date de Fin *</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    endDate: e.target.value 
                  }))}
                />
              </div>
            </CardContent>
          </Card>
        )

      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Résumé Hebdomadaire</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={formData.summary}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  summary: e.target.value 
                }))}
                placeholder="Décrivez les principaux accomplissements et événements de la semaine..."
                rows={10}
              />
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Tâches de la Semaine</CardTitle>
                <Button onClick={addTask} size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Ajouter Tâche
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className={`space-y-3 ${formData.tasks.length > 5 ? 'max-h-[400px] overflow-y-auto pr-2' : ''}`}>
                {formData.tasks.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Aucune tâche ajoutée. Cliquez sur "Ajouter Tâche" pour commencer.
                  </div>
                ) : (
                  formData.tasks.map((task, index) => (
                    <Card key={task.id} className="bg-muted/30">
                      <CardContent className="pt-6 space-y-3">
                        <div className="flex items-start gap-2">
                          <Checkbox
                            checked={task.completed}
                            onCheckedChange={(checked) => 
                              updateTask(index, 'completed', checked === true)
                            }
                          />
                          <div className="flex-1 space-y-3">
                            <Textarea
                              value={task.description}
                              onChange={(e) => updateTask(index, 'description', e.target.value)}
                              placeholder="Description de la tâche..."
                              rows={2}
                            />
                            <Select
                              value={task.assignedTo || 'unassigned'}
                              onValueChange={(value) => 
                                updateTask(index, 'assignedTo', value === 'unassigned' ? undefined : value)
                              }
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Assigner à..." />
                              </SelectTrigger>
                              <SelectContent className={projectMembersData.length > 10 ? "max-h-[300px] overflow-y-auto" : ""}>
                                <SelectItem value="unassigned">Non assignée</SelectItem>
                                {projectMembersData.map(pm => (
                                  <SelectItem key={pm.memberId} value={pm.memberId}>
                                    {pm.memberName}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeTask(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
              {formData.tasks.length > 10 && (
                <p className="text-xs text-muted-foreground text-center pt-2">
                  {formData.tasks.length} tâches • Faites défiler pour voir toutes
                </p>
              )}
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Blocages & Défis</CardTitle>
                <Button onClick={addBlocker} size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Ajouter Blocage
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className={`space-y-3 ${formData.blockers.length > 5 ? 'max-h-[400px] overflow-y-auto pr-2' : ''}`}>
                {formData.blockers.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Aucun blocage signalé. Cliquez sur "Ajouter Blocage" si nécessaire.
                  </div>
                ) : (
                  formData.blockers.map((blocker, index) => (
                    <Card key={blocker.id} className="bg-muted/30">
                      <CardContent className="pt-6 space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="flex-1 space-y-3">
                            <Textarea
                              value={blocker.description}
                              onChange={(e) => updateBlocker(index, 'description', e.target.value)}
                              placeholder="Description du blocage..."
                              rows={2}
                            />
                            <Select
                              value={blocker.level}
                              onValueChange={(value: 'high' | 'medium' | 'low') => 
                                updateBlocker(index, 'level', value)
                              }
                            >
                              <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Niveau d'impact" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="high">Élevé</SelectItem>
                                <SelectItem value="medium">Moyen</SelectItem>
                                <SelectItem value="low">Bas</SelectItem>
                              </SelectContent>
                            </Select>
                            <Textarea
                              value={blocker.mitigation || ''}
                              onChange={(e) => updateBlocker(index, 'mitigation', e.target.value)}
                              placeholder="Action de mitigation (optionnel)..."
                              rows={2}
                            />
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeBlocker(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
              {formData.blockers.length > 10 && (
                <p className="text-xs text-muted-foreground text-center pt-2">
                  {formData.blockers.length} blocages
                </p>
              )}
            </CardContent>
          </Card>
        )

      case 4:
        return (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Objectifs Semaine Prochaine</CardTitle>
                <Button onClick={addObjective} size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Ajouter Objectif
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className={`space-y-3 ${formData.nextWeekObjectives.length > 10 ? 'max-h-[400px] overflow-y-auto pr-2' : ''}`}>
                {formData.nextWeekObjectives.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    Aucun objectif défini. Cliquez sur "Ajouter Objectif" pour commencer.
                  </div>
                ) : (
                  formData.nextWeekObjectives.map((objective, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        value={objective}
                        onChange={(e) => updateObjective(index, e.target.value)}
                        placeholder="Objectif..."
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeObjective(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
              {formData.nextWeekObjectives.length > 15 && (
                <p className="text-xs text-muted-foreground text-center pt-2">
                  {formData.nextWeekObjectives.length} objectifs
                </p>
              )}
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Créer un Rapport Hebdomadaire
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Étape {currentStep + 1} sur {TOTAL_STEPS}
          </p>
        </div>
      </div>

      <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      <div className="min-h-[600px]">
        {renderStep()}
      </div>

      <div className="flex items-center justify-between">
        <div>
          {currentStep > 0 && (
            <Button variant="outline" onClick={handlePrevious}>
              Précédent
            </Button>
          )}
        </div>
        <div>
          {currentStep < TOTAL_STEPS - 1 ? (
            <Button 
              onClick={handleNext}
              disabled={isValidatingDuplicate}
            >
              {currentStep === 0 && isValidatingDuplicate ? "Vérification..." : "Suivant"}
            </Button>
          ) : (
            <Button 
              onClick={handlePublish}
              disabled={createReport.isPending || updateReport.isPending}
            >
              {createReport.isPending || updateReport.isPending ? "Publication..." : "Publier le Rapport"}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}