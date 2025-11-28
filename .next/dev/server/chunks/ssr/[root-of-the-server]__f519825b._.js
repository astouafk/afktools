module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/create-report-view.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// // components/create-report-view.tsx
// "use client"
// import * as React from "react"
// import { ArrowLeft, Plus, Trash2, User } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import { useRouter, useSearchParams } from "next/navigation"
// import { useCreateReport, useUpdateReport, useReport } from "@/hooks/use-reports"
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
//   const searchParams = useSearchParams()
//   const reportId = searchParams.get('reportId')
//   const { toast } = useToast()
//   const { data: projectMembersData = [] } = useProjectMembers(projectId)
//   const { data: existingReport } = useReport(reportId || '')
//   const createReport = useCreateReport()
//   const updateReport = useUpdateReport()
//   const [currentStep, setCurrentStep] = React.useState(0)
//   const [savedReportId, setSavedReportId] = React.useState<string | null>(reportId)
//   const [formData, setFormData] = React.useState<FormData>({
//     weekNumber: 0,
//     startDate: '',
//     endDate: '',
//     summary: '',
//     tasks: [],
//     blockers: [],
//     nextWeekObjectives: []
//   })
//   // ✅ CORRECTION - Synchroniser currentStep avec rapport existant
//   React.useEffect(() => {
//     if (existingReport) {
//       setFormData({
//         weekNumber: existingReport.weekNumber,
//         startDate: existingReport.startDate.toISOString().split('T')[0],
//         endDate: existingReport.endDate.toISOString().split('T')[0],
//         summary: existingReport.summary || '',
//         tasks: existingReport.tasks || [],
//         blockers: existingReport.blockers || [],
//         nextWeekObjectives: existingReport.nextWeekObjectives || []
//       })
//       setCurrentStep(existingReport.currentStep) // ✅ LIGNE AJOUTÉE
//     }
//   }, [existingReport])
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
//   const saveProgress = async () => {
//     try {
//       if (!savedReportId) {
//         const id = await createReport.mutateAsync({
//           projectId,
//           weekNumber: formData.weekNumber,
//           startDate: formData.startDate,
//           endDate: formData.endDate,
//           currentStep,
//           summary: formData.summary,
//           tasks: formData.tasks.filter(t => t.description.trim()),
//           blockers: formData.blockers.filter(b => b.description.trim()),
//           nextWeekObjectives: formData.nextWeekObjectives.filter(o => o.trim())
//         })
//         setSavedReportId(id)
//         toast({
//           title: "Progression sauvegardée",
//           description: "Vous pouvez revenir plus tard pour continuer."
//         })
//       } else {
//         await updateReport.mutateAsync({
//           reportId: savedReportId,
//           projectId,
//           data: {
//             currentStep,
//             summary: formData.summary,
//             tasks: formData.tasks.filter(t => t.description.trim()),
//             blockers: formData.blockers.filter(b => b.description.trim()),
//             nextWeekObjectives: formData.nextWeekObjectives.filter(o => o.trim())
//           }
//         })
//         toast({
//           title: "Progression sauvegardée",
//           description: "Vous pouvez revenir plus tard pour continuer."
//         })
//       }
//     } catch (error: any) {
//       toast({
//         title: "Erreur",
//         description: error.message,
//         variant: "destructive"
//       })
//     }
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
//       if (!savedReportId) {
//         try {
//           const id = await createReport.mutateAsync({
//             projectId,
//             weekNumber: formData.weekNumber,
//             startDate: formData.startDate,
//             endDate: formData.endDate,
//             currentStep: 1
//           })
//           setSavedReportId(id)
//           setCurrentStep(1)
//         } catch (error: any) {
//           toast({
//             title: "Erreur",
//             description: error.message,
//             variant: "destructive"
//           })
//           return
//         }
//       } else {
//         setCurrentStep(1)
//       }
//     } else if (currentStep < TOTAL_STEPS - 1) {
//       await saveProgress()
//       setCurrentStep(prev => prev + 1)
//     }
//   }
//   const handlePrevious = () => {
//     if (currentStep > 0) {
//       setCurrentStep(prev => prev - 1)
//     }
//   }
//   const handlePublish = async () => {
//     if (!savedReportId) {
//       toast({
//         title: "Erreur",
//         description: "Veuillez d'abord sauvegarder le rapport.",
//         variant: "destructive"
//       })
//       return
//     }
//     try {
//       await updateReport.mutateAsync({
//         reportId: savedReportId,
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
//         description: "Le rapport a été publié avec succès."
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
//               {formData.tasks.length === 0 ? (
//                 <div className="text-center py-8 text-muted-foreground">
//                   Aucune tâche ajoutée. Cliquez sur "Ajouter Tâche" pour commencer.
//                 </div>
//               ) : (
//                 formData.tasks.map((task, index) => (
//                   <Card key={task.id} className="bg-muted/30">
//                     <CardContent className="pt-6 space-y-3">
//                       <div className="flex items-start gap-2">
//                         <Checkbox
//                           checked={task.completed}
//                           onCheckedChange={(checked) => 
//                             updateTask(index, 'completed', checked === true)
//                           }
//                         />
//                         <div className="flex-1 space-y-3">
//                           <Textarea
//                             value={task.description}
//                             onChange={(e) => updateTask(index, 'description', e.target.value)}
//                             placeholder="Description de la tâche..."
//                             rows={2}
//                           />
//                           <Select
//                             value={task.assignedTo || 'unassigned'}
//                             onValueChange={(value) => 
//                               updateTask(index, 'assignedTo', value === 'unassigned' ? undefined : value)
//                             }
//                           >
//                             <SelectTrigger className="w-full">
//                               <SelectValue placeholder="Assigner à..." />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="unassigned">Non assignée</SelectItem>
//                               {projectMembersData.map(pm => (
//                                 <SelectItem key={pm.memberId} value={pm.memberId}>
//                                   {pm.memberName}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </div>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => removeTask(index)}
//                         >
//                           <Trash2 className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
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
//               {formData.blockers.length === 0 ? (
//                 <div className="text-center py-8 text-muted-foreground">
//                   Aucun blocage signalé. Cliquez sur "Ajouter Blocage" si nécessaire.
//                 </div>
//               ) : (
//                 formData.blockers.map((blocker, index) => (
//                   <Card key={blocker.id} className="bg-muted/30">
//                     <CardContent className="pt-6 space-y-3">
//                       <div className="flex items-start gap-2">
//                         <div className="flex-1 space-y-3">
//                           <Textarea
//                             value={blocker.description}
//                             onChange={(e) => updateBlocker(index, 'description', e.target.value)}
//                             placeholder="Description du blocage..."
//                             rows={2}
//                           />
//                           <Select
//                             value={blocker.level}
//                             onValueChange={(value: 'high' | 'medium' | 'low') => 
//                               updateBlocker(index, 'level', value)
//                             }
//                           >
//                             <SelectTrigger className="w-[200px]">
//                               <SelectValue placeholder="Niveau d'impact" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="high">Élevé</SelectItem>
//                               <SelectItem value="medium">Moyen</SelectItem>
//                               <SelectItem value="low">Bas</SelectItem>
//                             </SelectContent>
//                           </Select>
//                           <Textarea
//                             value={blocker.mitigation || ''}
//                             onChange={(e) => updateBlocker(index, 'mitigation', e.target.value)}
//                             placeholder="Action de mitigation (optionnel)..."
//                             rows={2}
//                           />
//                         </div>
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => removeBlocker(index)}
//                         >
//                           <Trash2 className="h-4 w-4" />
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))
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
//               {formData.nextWeekObjectives.length === 0 ? (
//                 <div className="text-center py-8 text-muted-foreground">
//                   Aucun objectif défini. Cliquez sur "Ajouter Objectif" pour commencer.
//                 </div>
//               ) : (
//                 formData.nextWeekObjectives.map((objective, index) => (
//                   <div key={index} className="flex items-center gap-2">
//                     <Input
//                       value={objective}
//                       onChange={(e) => updateObjective(index, e.target.value)}
//                       placeholder="Objectif..."
//                     />
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => removeObjective(index)}
//                     >
//                       <Trash2 className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 ))
//               )}
//             </CardContent>
//           </Card>
//         )
//       default:
//         return null
//     }
//   }
//   return (
//     <div className="space-y-6 max-w-4xl mx-auto">
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
//             {reportId ? 'Continuer le Rapport' : 'Créer un Rapport Hebdomadaire'}
//           </h1>
//           <p className="text-sm text-muted-foreground mt-1">
//             Étape {currentStep + 1} sur {TOTAL_STEPS}
//           </p>
//         </div>
//       </div>
//       <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
//       {renderStep()}
//       <div className="flex items-center justify-between">
//         <div className="flex gap-2">
//           {currentStep > 0 && (
//             <Button variant="outline" onClick={handlePrevious}>
//               Précédent
//             </Button>
//           )}
//         </div>
//         <div className="flex gap-2">
//           <Button variant="outline" onClick={saveProgress}>
//             Sauvegarder et Revenir Plus Tard
//           </Button>
//           {currentStep < TOTAL_STEPS - 1 ? (
//             <Button onClick={handleNext}>
//               Suivant
//             </Button>
//           ) : (
//             <Button onClick={handlePublish}>
//               Publier le Rapport
//             </Button>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/analysis-complete-guard.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AnalysisCompleteGuard",
    ()=>AnalysisCompleteGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AnalysisCompleteGuard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AnalysisCompleteGuard() from the server but AnalysisCompleteGuard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/analysis-complete-guard.tsx <module evaluation>", "AnalysisCompleteGuard");
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/analysis-complete-guard.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AnalysisCompleteGuard",
    ()=>AnalysisCompleteGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AnalysisCompleteGuard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AnalysisCompleteGuard() from the server but AnalysisCompleteGuard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/analysis-complete-guard.tsx", "AnalysisCompleteGuard");
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/analysis-complete-guard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$analysis$2d$complete$2d$guard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/analysis-complete-guard.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$analysis$2d$complete$2d$guard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/analysis-complete-guard.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$analysis$2d$complete$2d$guard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AuthGuard",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AuthGuard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AuthGuard() from the server but AuthGuard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx <module evaluation>", "AuthGuard");
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AuthGuard",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AuthGuard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AuthGuard() from the server but AuthGuard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx", "AuthGuard");
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$auth$2d$guard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$auth$2d$guard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$auth$2d$guard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "TopNav",
    ()=>TopNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TopNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TopNav() from the server but TopNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx <module evaluation>", "TopNav");
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "TopNav",
    ()=>TopNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TopNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TopNav() from the server but TopNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx", "TopNav");
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$top$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$top$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$top$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AppSidebar",
    ()=>AppSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AppSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AppSidebar() from the server but AppSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx <module evaluation>", "AppSidebar");
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "AppSidebar",
    ()=>AppSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const AppSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AppSidebar() from the server but AppSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx", "AppSidebar");
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$app$2d$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$app$2d$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$app$2d$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "SidebarContent",
    ()=>SidebarContent,
    "SidebarFooter",
    ()=>SidebarFooter,
    "SidebarGroup",
    ()=>SidebarGroup,
    "SidebarGroupAction",
    ()=>SidebarGroupAction,
    "SidebarGroupContent",
    ()=>SidebarGroupContent,
    "SidebarGroupLabel",
    ()=>SidebarGroupLabel,
    "SidebarHeader",
    ()=>SidebarHeader,
    "SidebarInput",
    ()=>SidebarInput,
    "SidebarInset",
    ()=>SidebarInset,
    "SidebarMenu",
    ()=>SidebarMenu,
    "SidebarMenuAction",
    ()=>SidebarMenuAction,
    "SidebarMenuBadge",
    ()=>SidebarMenuBadge,
    "SidebarMenuButton",
    ()=>SidebarMenuButton,
    "SidebarMenuItem",
    ()=>SidebarMenuItem,
    "SidebarMenuSkeleton",
    ()=>SidebarMenuSkeleton,
    "SidebarMenuSub",
    ()=>SidebarMenuSub,
    "SidebarMenuSubButton",
    ()=>SidebarMenuSubButton,
    "SidebarMenuSubItem",
    ()=>SidebarMenuSubItem,
    "SidebarProvider",
    ()=>SidebarProvider,
    "SidebarRail",
    ()=>SidebarRail,
    "SidebarSeparator",
    ()=>SidebarSeparator,
    "SidebarTrigger",
    ()=>SidebarTrigger,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Sidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Sidebar() from the server but Sidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "Sidebar");
const SidebarContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarContent() from the server but SidebarContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarContent");
const SidebarFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarFooter() from the server but SidebarFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarFooter");
const SidebarGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroup() from the server but SidebarGroup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarGroup");
const SidebarGroupAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupAction() from the server but SidebarGroupAction is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarGroupAction");
const SidebarGroupContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupContent() from the server but SidebarGroupContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarGroupContent");
const SidebarGroupLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupLabel() from the server but SidebarGroupLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarGroupLabel");
const SidebarHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarHeader() from the server but SidebarHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarHeader");
const SidebarInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarInput() from the server but SidebarInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarInput");
const SidebarInset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarInset() from the server but SidebarInset is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarInset");
const SidebarMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenu() from the server but SidebarMenu is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarMenu");
const SidebarMenuAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuAction() from the server but SidebarMenuAction is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuAction");
const SidebarMenuBadge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuBadge() from the server but SidebarMenuBadge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuBadge");
const SidebarMenuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuButton() from the server but SidebarMenuButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuButton");
const SidebarMenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuItem() from the server but SidebarMenuItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuItem");
const SidebarMenuSkeleton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSkeleton() from the server but SidebarMenuSkeleton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuSkeleton");
const SidebarMenuSub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSub() from the server but SidebarMenuSub is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuSub");
const SidebarMenuSubButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSubButton() from the server but SidebarMenuSubButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuSubButton");
const SidebarMenuSubItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSubItem() from the server but SidebarMenuSubItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarMenuSubItem");
const SidebarProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarProvider() from the server but SidebarProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarProvider");
const SidebarRail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarRail() from the server but SidebarRail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarRail");
const SidebarSeparator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarSeparator() from the server but SidebarSeparator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarSeparator");
const SidebarTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarTrigger() from the server but SidebarTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "SidebarTrigger");
const useSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSidebar() from the server but useSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx <module evaluation>", "useSidebar");
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "SidebarContent",
    ()=>SidebarContent,
    "SidebarFooter",
    ()=>SidebarFooter,
    "SidebarGroup",
    ()=>SidebarGroup,
    "SidebarGroupAction",
    ()=>SidebarGroupAction,
    "SidebarGroupContent",
    ()=>SidebarGroupContent,
    "SidebarGroupLabel",
    ()=>SidebarGroupLabel,
    "SidebarHeader",
    ()=>SidebarHeader,
    "SidebarInput",
    ()=>SidebarInput,
    "SidebarInset",
    ()=>SidebarInset,
    "SidebarMenu",
    ()=>SidebarMenu,
    "SidebarMenuAction",
    ()=>SidebarMenuAction,
    "SidebarMenuBadge",
    ()=>SidebarMenuBadge,
    "SidebarMenuButton",
    ()=>SidebarMenuButton,
    "SidebarMenuItem",
    ()=>SidebarMenuItem,
    "SidebarMenuSkeleton",
    ()=>SidebarMenuSkeleton,
    "SidebarMenuSub",
    ()=>SidebarMenuSub,
    "SidebarMenuSubButton",
    ()=>SidebarMenuSubButton,
    "SidebarMenuSubItem",
    ()=>SidebarMenuSubItem,
    "SidebarProvider",
    ()=>SidebarProvider,
    "SidebarRail",
    ()=>SidebarRail,
    "SidebarSeparator",
    ()=>SidebarSeparator,
    "SidebarTrigger",
    ()=>SidebarTrigger,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Sidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Sidebar() from the server but Sidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "Sidebar");
const SidebarContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarContent() from the server but SidebarContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarContent");
const SidebarFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarFooter() from the server but SidebarFooter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarFooter");
const SidebarGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroup() from the server but SidebarGroup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarGroup");
const SidebarGroupAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupAction() from the server but SidebarGroupAction is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarGroupAction");
const SidebarGroupContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupContent() from the server but SidebarGroupContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarGroupContent");
const SidebarGroupLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarGroupLabel() from the server but SidebarGroupLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarGroupLabel");
const SidebarHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarHeader() from the server but SidebarHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarHeader");
const SidebarInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarInput() from the server but SidebarInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarInput");
const SidebarInset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarInset() from the server but SidebarInset is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarInset");
const SidebarMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenu() from the server but SidebarMenu is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarMenu");
const SidebarMenuAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuAction() from the server but SidebarMenuAction is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarMenuAction");
const SidebarMenuBadge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuBadge() from the server but SidebarMenuBadge is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarMenuBadge");
const SidebarMenuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuButton() from the server but SidebarMenuButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarMenuButton");
const SidebarMenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuItem() from the server but SidebarMenuItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarMenuItem");
const SidebarMenuSkeleton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSkeleton() from the server but SidebarMenuSkeleton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarMenuSkeleton");
const SidebarMenuSub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSub() from the server but SidebarMenuSub is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarMenuSub");
const SidebarMenuSubButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSubButton() from the server but SidebarMenuSubButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarMenuSubButton");
const SidebarMenuSubItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarMenuSubItem() from the server but SidebarMenuSubItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarMenuSubItem");
const SidebarProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarProvider() from the server but SidebarProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarProvider");
const SidebarRail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarRail() from the server but SidebarRail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarRail");
const SidebarSeparator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarSeparator() from the server but SidebarSeparator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarSeparator");
const SidebarTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarTrigger() from the server but SidebarTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "SidebarTrigger");
const useSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSidebar() from the server but useSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx", "useSidebar");
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/app/projects/[id]/reports/create/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // app/projects/[id]/reports/create/page.tsx
// import { TopNav } from "@/components/top-nav"
// import { AppSidebar } from "@/components/app-sidebar"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { CreateReportView } from "@/components/create-report-view"
// import { AuthGuard } from "@/components/auth-guard"
// export default async function CreateReportPage({ 
//   params 
// }: { 
//   params: Promise<{ id: string }> 
// }) {
//   const { id } = await params
//   return (
//     <AuthGuard>
//       <SidebarProvider>
//         <div className="flex min-h-screen w-full bg-background">
//           <AppSidebar />
//           <div className="flex flex-1 flex-col">
//             <TopNav />
//             <main className="flex-1 p-6">
//               <CreateReportView projectId={id} />
//             </main>
//           </div>
//         </div>
//       </SidebarProvider>
//     </AuthGuard>
//   )
// }
// app/projects/[id]/reports/create/page.tsx
__turbopack_context__.s([
    "default",
    ()=>CreateReportPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$create$2d$report$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/create-report-view.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$analysis$2d$complete$2d$guard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/analysis-complete-guard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$auth$2d$guard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$top$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$app$2d$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function CreateReportPage({ params }) {
    const { id } = await params;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$auth$2d$guard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuthGuard"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarProvider"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$app$2d$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppSidebar"], {}, void 0, false, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/app/projects/[id]/reports/create/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarInset"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$top$2d$nav$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TopNav"], {}, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/app/projects/[id]/reports/create/page.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "flex-1 p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$analysis$2d$complete$2d$guard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AnalysisCompleteGuard"], {
                                projectId: id,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$create$2d$report$2d$view$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreateReportView"], {
                                    projectId: id
                                }, void 0, false, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/app/projects/[id]/reports/create/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/app/projects/[id]/reports/create/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/app/projects/[id]/reports/create/page.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/app/projects/[id]/reports/create/page.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/app/projects/[id]/reports/create/page.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/app/projects/[id]/reports/create/page.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/app/projects/[id]/reports/create/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/app/projects/[id]/reports/create/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f519825b._.js.map