// components/report-form/ReportObjectivesForm.tsx
"use client"

import * as React from "react"
import { Plus, Trash2, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ReportObjectivesFormProps {
  objectives: string[]
  onChange: (objectives: string[]) => void
  maxObjectives?: number
}

export function ReportObjectivesForm({ 
  objectives, 
  onChange, 
  maxObjectives = 100 
}: ReportObjectivesFormProps) {
  const canAddObjective = objectives.length < maxObjectives

  const addObjective = () => {
    if (!canAddObjective) return
    onChange([...objectives, ''])
  }

  const updateObjective = (index: number, value: string) => {
    const newObjectives = objectives.map((obj, i) => 
      i === index ? value : obj
    )
    onChange(newObjectives)
  }

  const removeObjective = (index: number) => {
    onChange(objectives.filter((_, i) => i !== index))
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Objectifs Semaine Prochaine
              <Badge variant="secondary">{objectives.length}/{maxObjectives}</Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Définissez les objectifs et priorités pour la semaine suivante
            </p>
          </div>
          <Button 
            onClick={addObjective} 
            size="sm"
            disabled={!canAddObjective}
          >
            <Plus className="mr-2 h-4 w-4" />
            Ajouter {!canAddObjective && `(${maxObjectives} max)`}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {objectives.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Aucun objectif défini</p>
            <p className="text-sm mt-2">Cliquez sur "Ajouter" pour planifier la semaine prochaine</p>
          </div>
        ) : (
          <div className={cn(
            "space-y-3",
            objectives.length > 10 && "max-h-[500px] overflow-y-auto pr-2"
          )}>
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start gap-3">
                {/* Numéro */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-primary/10 flex-shrink-0 mt-1">
                  <span className="text-sm font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>

                {/* Input */}
                <Input
                  value={objective}
                  onChange={(e) => updateObjective(index, e.target.value)}
                  placeholder="Décrivez l'objectif..."
                  className="flex-1"
                />

                {/* Bouton supprimer */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeObjective(index)}
                  className="flex-shrink-0"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        {objectives.length > 15 && (
          <p className="text-xs text-muted-foreground text-center pt-3">
            {objectives.length} objectifs • Faites défiler pour voir tous
          </p>
        )}

        {!canAddObjective && (
          <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3">
            <p className="text-sm text-amber-600 dark:text-amber-400">
              ⚠ Limite de {maxObjectives} objectifs atteinte
            </p>
          </div>
        )}

        {objectives.length > 0 && (
          <div className="mt-4 rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              💡 <strong>Conseil :</strong> Définissez des objectifs SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporels)
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}