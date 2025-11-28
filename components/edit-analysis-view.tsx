// components/edit-analysis-view.tsx
"use client"

import * as React from "react"
import { ArrowLeft, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { useAnalysis, useUpdateAnalysis } from "@/hooks/use-analyses"
import { toast } from "@/hooks/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import type { Analysis } from "@/lib/services/analysis-service"
import { ANALYSIS_FIELDS_BY_TYPE } from "@/lib/analysis-fields-config"
import Link from "next/link"

type EditAnalysisViewProps = {
  projectId: string
  analysisId: string
}

export function EditAnalysisView({ projectId, analysisId }: EditAnalysisViewProps) {
  const router = useRouter()
  const { data: analysis, isLoading } = useAnalysis(analysisId)
  const { mutate: updateAnalysis, isPending } = useUpdateAnalysis()
  
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [selectedType, setSelectedType] = React.useState<Analysis['type'] | "">("")
  const [fieldValues, setFieldValues] = React.useState<Record<string, string>>({})

  React.useEffect(() => {
    if (analysis) {
      setTitle(analysis.title)
      setDescription(analysis.description || "")
      setSelectedType(analysis.type)
      setFieldValues(analysis.content as Record<string, string>)
    }
  }, [analysis])

  const currentFields = selectedType ? ANALYSIS_FIELDS_BY_TYPE[selectedType] : []

  const handleFieldChange = (fieldName: string, value: string) => {
    setFieldValues(prev => ({ ...prev, [fieldName]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!title || !selectedType) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir le titre et le type d'analyse",
        variant: "destructive"
      })
      return
    }

    updateAnalysis(
      {
        analysisId,
        data: {
          title,
          description: description || undefined,
          type: selectedType,
          content: fieldValues
        }
      },
      {
        onSuccess: () => {
          toast({
            title: "Analyse modifiée",
            description: "L'analyse a été modifiée avec succès"
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

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-96" />
        <Skeleton className="h-[600px]" />
      </div>
    )
  }

  if (!analysis) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Analyse introuvable</p>
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
            Modifier l'Analyse
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {analysis.title}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type d'analyse *</Label>
                <Select
                  value={selectedType}
                  onValueChange={(value: Analysis['type']) => setSelectedType(value)}
                  required
                >
                  <SelectTrigger>
                    <SelectValue />
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        {currentFields.map((field) => (
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

        <div className="flex items-center gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={isPending}
          >
            Annuler
          </Button>
          <Button type="submit" disabled={isPending}>
            <Save className="mr-2 h-4 w-4" />
            {isPending ? "Modification..." : "Enregistrer les Modifications"}
          </Button>
        </div>
      </form>
    </div>
  )
}