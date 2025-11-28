// // components/create-analysis-view.tsx
// "use client"

// import * as React from "react"
// import { ArrowLeft, FileUp, Save, CheckCircle } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useRouter } from "next/navigation"
// import { useProject } from "@/hooks/use-projects"
// import { useCreateAnalysis } from "@/hooks/use-analyses"
// import { toast } from "@/hooks/use-toast"
// import { Skeleton } from "@/components/ui/skeleton"
// import type { Analysis } from "@/lib/services/analysis-service"
// import { ANALYSIS_FIELDS_BY_TYPE, type AnalysisFieldConfig } from "@/lib/analysis-fields-config"

// type CreateAnalysisViewProps = {
//   projectId: string
// }

// export function CreateAnalysisView({ projectId }: CreateAnalysisViewProps) {
//   const router = useRouter()
//   const { data: project, isLoading: projectLoading } = useProject(projectId)
//   const { mutate: createAnalysis, isPending } = useCreateAnalysis()
  
//   const [isManualInput, setIsManualInput] = React.useState(true)
//   const [selectedType, setSelectedType] = React.useState<Analysis['type'] | "">("")
//   const [title, setTitle] = React.useState("")
//   const [description, setDescription] = React.useState("")
//   const [fieldValues, setFieldValues] = React.useState<Record<string, string>>({})

//   const currentFields = selectedType ? ANALYSIS_FIELDS_BY_TYPE[selectedType] : []

//   const handleFieldChange = (fieldName: string, value: string) => {
//     setFieldValues(prev => ({ ...prev, [fieldName]: value }))
//   }

//   const handleSubmit = (status: 'Draft' | 'Completed') => {
//     if (!title || !selectedType) {
//       toast({
//         title: "Champs requis",
//         description: "Veuillez remplir le titre et le type d'analyse",
//         variant: "destructive"
//       })
//       return
//     }

//     // Vérifier les champs obligatoires
//     const requiredFields = currentFields.filter(f => f.required)
//     const missingFields = requiredFields.filter(f => !fieldValues[f.name]?.trim())
    
//     if (missingFields.length > 0 && status === 'Completed') {
//       toast({
//         title: "Champs obligatoires manquants",
//         description: `Veuillez remplir: ${missingFields.map(f => f.label.replace(' *', '')).join(', ')}`,
//         variant: "destructive"
//       })
//       return
//     }

//     createAnalysis(
//       {
//         projectId,
//         title,
//         description: description || undefined,
//         type: selectedType,
//         status,
//         content: fieldValues
//       },
//       {
//         onSuccess: (analysisId) => {
//           toast({
//             title: status === 'Draft' ? "Brouillon sauvegardé" : "Analyse créée",
//             description: status === 'Draft' 
//               ? "L'analyse a été sauvegardée en brouillon"
//               : "L'analyse a été créée avec succès"
//           })
//           router.push(`/project/${projectId}/analysis/${analysisId}`)
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

//   if (projectLoading) {
//     return (
//       <div className="space-y-6">
//         <Skeleton className="h-10 w-96" />
//         <Skeleton className="h-[600px]" />
//       </div>
//     )
//   }

//   if (!project) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <div className="text-center space-y-4">
//           <p className="text-muted-foreground">Projet introuvable</p>
//           <Button onClick={() => router.back()}>Retour</Button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center gap-4">
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={() => router.back()}
//           disabled={isPending}
//         >
//           <ArrowLeft className="h-5 w-5" />
//         </Button>
//         <div>
//           <h1 className="text-3xl font-semibold tracking-tight text-foreground">
//             Créer une Analyse
//           </h1>
//           <p className="text-sm text-muted-foreground mt-1">
//             {project.name}
//           </p>
//         </div>
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle>Mode de Saisie</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="flex items-center gap-6">
//             <div className="flex items-center space-x-2">
//               <Checkbox 
//                 id="manual" 
//                 checked={isManualInput}
//                 onCheckedChange={(checked) => setIsManualInput(checked as boolean)}
//               />
//               <label
//                 htmlFor="manual"
//                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               >
//                 Saisie manuelle
//               </label>
//             </div>
//             <div className="flex items-center space-x-2">
//               <Checkbox 
//                 id="import" 
//                 checked={!isManualInput}
//                 onCheckedChange={(checked) => setIsManualInput(!checked)}
//               />
//               <label
//                 htmlFor="import"
//                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//               >
//                 Importer un fichier
//               </label>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {isManualInput ? (
//         <div className="space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle>Informations Générales</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid gap-4 md:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label htmlFor="title">Titre de l'analyse *</Label>
//                   <Input
//                     id="title"
//                     placeholder="Ex: Analyse technique du système de paiement"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="type">Type d'analyse *</Label>
//                   <Select
//                     value={selectedType}
//                     onValueChange={(value: Analysis['type']) => {
//                       setSelectedType(value)
//                       setFieldValues({}) // Reset fields when type changes
//                     }}
//                     required
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Sélectionner un type" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="Technical">Technique</SelectItem>
//                       <SelectItem value="Functional">Fonctionnelle</SelectItem>
//                       <SelectItem value="UI/UX">UI/UX</SelectItem>
//                       <SelectItem value="Performance">Performance</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea
//                   id="description"
//                   placeholder="Brève description de l'analyse..."
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows={2}
//                 />
//               </div>
//             </CardContent>
//           </Card>

//           {selectedType && currentFields.map((field) => (
//             <Card key={field.name}>
//               <CardHeader>
//                 <CardTitle>{field.label}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <Textarea
//                   id={field.name}
//                   placeholder={field.placeholder}
//                   value={fieldValues[field.name] || ""}
//                   onChange={(e) => handleFieldChange(field.name, e.target.value)}
//                   rows={field.rows || 4}
//                   required={field.required}
//                 />
//               </CardContent>
//             </Card>
//           ))}

//           {selectedType && (
//             <div className="flex items-center gap-4">
//               <Button
//                 type="button"
//                 variant="outline"
//                 onClick={() => router.back()}
//                 disabled={isPending}
//               >
//                 Annuler
//               </Button>
//               <Button 
//                 type="button"
//                 variant="outline"
//                 onClick={() => handleSubmit('Draft')}
//                 disabled={isPending}
//               >
//                 <Save className="mr-2 h-4 w-4" />
//                 Sauvegarder en Brouillon
//               </Button>
//               <Button 
//                 type="button"
//                 onClick={() => handleSubmit('Completed')}
//                 disabled={isPending}
//               >
//                 <CheckCircle className="mr-2 h-4 w-4" />
//                 {isPending ? "Création..." : "Créer et Terminer"}
//               </Button>
//             </div>
//           )}
//         </div>
//       ) : (
//         <Card>
//           <CardContent className="flex items-center justify-center min-h-[400px]">
//             <div className="text-center space-y-4">
//               <FileUp className="h-16 w-16 mx-auto text-muted-foreground" />
//               <p className="text-muted-foreground">
//                 Fonctionnalité d'import de fichier à venir
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   )
// }




// components/create-analysis-view.tsx
"use client"

import * as React from "react"
import { ArrowLeft, FileUp, Save, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { useProject } from "@/hooks/use-projects"
import { useCreateAnalysis } from "@/hooks/use-analyses"
import { toast } from "@/hooks/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import type { Analysis } from "@/lib/services/analysis-service"
import { ANALYSIS_FIELDS_BY_TYPE, type AnalysisFieldConfig } from "@/lib/analysis-fields-config"

type CreateAnalysisViewProps = {
  projectId: string
}

export function CreateAnalysisView({ projectId }: CreateAnalysisViewProps) {
  const router = useRouter()
  const { data: project, isLoading: projectLoading } = useProject(projectId)
  const { mutate: createAnalysis, isPending } = useCreateAnalysis()
  
  const [isManualInput, setIsManualInput] = React.useState(true)
  const [selectedType, setSelectedType] = React.useState<Analysis['type'] | "">("")
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [fieldValues, setFieldValues] = React.useState<Record<string, string>>({})

  const currentFields = selectedType ? ANALYSIS_FIELDS_BY_TYPE[selectedType] : []

  const handleFieldChange = (fieldName: string, value: string) => {
    setFieldValues(prev => ({ ...prev, [fieldName]: value }))
  }

  const handleSubmit = (status: 'Draft' | 'Completed') => {
    if (!title || !selectedType) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir le titre et le type d'analyse",
        variant: "destructive"
      })
      return
    }

    // ✅ Vérifier que project et companyId existent
    if (!project || !project.companyId) {
      toast({
        title: "Erreur",
        description: "Impossible de récupérer les informations du projet",
        variant: "destructive"
      })
      return
    }

    const requiredFields = currentFields.filter(f => f.required)
    const missingFields = requiredFields.filter(f => !fieldValues[f.name]?.trim())
    
    if (missingFields.length > 0 && status === 'Completed') {
      toast({
        title: "Champs obligatoires manquants",
        description: `Veuillez remplir: ${missingFields.map(f => f.label.replace(' *', '')).join(', ')}`,
        variant: "destructive"
      })
      return
    }

    createAnalysis(
      {
        projectId,
        companyId: project.companyId,  // ✅ AJOUTÉ
        title,
        description: description || undefined,
        type: selectedType,
        status,
        content: fieldValues
      },
      {
        onSuccess: (analysisId) => {
          toast({
            title: status === 'Draft' ? "Brouillon sauvegardé" : "Analyse créée",
            description: status === 'Draft' 
              ? "L'analyse a été sauvegardée en brouillon"
              : "L'analyse a été créée avec succès"
          })
          router.push(`/project/${projectId}/analysis/${analysisId}`)
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

  if (projectLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-96" />
        <Skeleton className="h-[600px]" />
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Projet introuvable</p>
          <Button onClick={() => router.back()}>Retour</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
          disabled={isPending}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Créer une Analyse
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {project.name}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mode de Saisie</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="manual" 
                checked={isManualInput}
                onCheckedChange={(checked) => setIsManualInput(checked as boolean)}
              />
              <label
                htmlFor="manual"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Saisie manuelle
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="import" 
                checked={!isManualInput}
                onCheckedChange={(checked) => setIsManualInput(!checked)}
              />
              <label
                htmlFor="import"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Importer un fichier
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {isManualInput ? (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations Générales</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre de l'analyse *</Label>
                  <Input
                    id="title"
                    placeholder="Ex: Analyse technique du système de paiement"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type d'analyse *</Label>
                  <Select
                    value={selectedType}
                    onValueChange={(value: Analysis['type']) => {
                      setSelectedType(value)
                      setFieldValues({})
                    }}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Technical">Technique</SelectItem>
                      <SelectItem value="Functional">Fonctionnelle</SelectItem>
                      <SelectItem value="UI/UX">UI/UX</SelectItem>
                      <SelectItem value="Performance">Performance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Brève description de l'analyse..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {selectedType && currentFields.map((field) => (
            <Card key={field.name}>
              <CardHeader>
                <CardTitle>{field.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  id={field.name}
                  placeholder={field.placeholder}
                  value={fieldValues[field.name] || ""}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  rows={field.rows || 4}
                  required={field.required}
                />
              </CardContent>
            </Card>
          ))}

          {selectedType && (
            <div className="flex items-center gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={isPending}
              >
                Annuler
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={() => handleSubmit('Draft')}
                disabled={isPending}
              >
                <Save className="mr-2 h-4 w-4" />
                Sauvegarder en Brouillon
              </Button>
              <Button 
                type="button"
                onClick={() => handleSubmit('Completed')}
                disabled={isPending}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                {isPending ? "Création..." : "Créer et Terminer"}
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Card>
          <CardContent className="flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4">
              <FileUp className="h-16 w-16 mx-auto text-muted-foreground" />
              <p className="text-muted-foreground">
                Fonctionnalité d'import de fichier à venir
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}