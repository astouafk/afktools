// components/report-form/ReportBlockersForm.tsx
"use client"

import * as React from "react"
import { Plus, Trash2, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Blocker } from "@/lib/services/report-service"

interface ReportBlockersFormProps {
  blockers: Blocker[]
  onChange: (blockers: Blocker[]) => void
  maxBlockers?: number
}

export function ReportBlockersForm({ 
  blockers, 
  onChange, 
  maxBlockers = 100 
}: ReportBlockersFormProps) {
  const canAddBlocker = blockers.length < maxBlockers

  const addBlocker = () => {
    if (!canAddBlocker) return
    
    onChange([
      ...blockers,
      {
        id: crypto.randomUUID(),
        description: '',
        level: 'medium',
        mitigation: ''
      }
    ])
  }

  const updateBlocker = (index: number, field: keyof Blocker, value: any) => {
    const newBlockers = blockers.map((blocker, i) => 
      i === index ? { ...blocker, [field]: value } : blocker
    )
    onChange(newBlockers)
  }

  const removeBlocker = (index: number) => {
    onChange(blockers.filter((_, i) => i !== index))
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-red-500 border-red-500/20 bg-red-500/10'
      case 'medium': return 'text-orange-500 border-orange-500/20 bg-orange-500/10'
      case 'low': return 'text-yellow-500 border-yellow-500/20 bg-yellow-500/10'
      default: return ''
    }
  }

  const getLevelLabel = (level: string) => {
    switch (level) {
      case 'high': return 'Élevé'
      case 'medium': return 'Moyen'
      case 'low': return 'Bas'
      default: return level
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-red-500">
              <AlertTriangle className="h-5 w-5" />
              Blocages & Défis
              <Badge variant="secondary">{blockers.length}/{maxBlockers}</Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Identifiez les obstacles rencontrés et les actions de mitigation
            </p>
          </div>
          <Button 
            onClick={addBlocker} 
            size="sm"
            disabled={!canAddBlocker}
            variant="outline"
          >
            <Plus className="mr-2 h-4 w-4" />
            Ajouter {!canAddBlocker && `(${maxBlockers} max)`}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {blockers.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <AlertTriangle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Aucun blocage signalé</p>
            <p className="text-sm mt-2">Cliquez sur "Ajouter" si vous rencontrez des obstacles</p>
          </div>
        ) : (
          <div className={cn(
            "space-y-3",
            blockers.length > 5 && "max-h-[500px] overflow-y-auto pr-2"
          )}>
            {blockers.map((blocker, index) => (
              <Card key={blocker.id} className="border-red-500/30 bg-red-500/5">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="flex-1 space-y-3">
                      {/* Description du blocage */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Description du blocage <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          value={blocker.description}
                          onChange={(e) => updateBlocker(index, 'description', e.target.value)}
                          placeholder="Décrivez le blocage rencontré..."
                          rows={2}
                          className="resize-none"
                        />
                      </div>

                      {/* Niveau d'impact */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Niveau d'impact <span className="text-destructive">*</span>
                        </label>
                        <Select
                          value={blocker.level}
                          onValueChange={(value: 'high' | 'medium' | 'low') => 
                            updateBlocker(index, 'level', value)
                          }
                        >
                          <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">
                              <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-red-500" />
                                Élevé
                              </span>
                            </SelectItem>
                            <SelectItem value="medium">
                              <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-orange-500" />
                                Moyen
                              </span>
                            </SelectItem>
                            <SelectItem value="low">
                              <span className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-yellow-500" />
                                Bas
                              </span>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Action de mitigation */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Action de mitigation
                          <span className="text-muted-foreground ml-1">(optionnel)</span>
                        </label>
                        <Textarea
                          value={blocker.mitigation || ''}
                          onChange={(e) => updateBlocker(index, 'mitigation', e.target.value)}
                          placeholder="Décrivez les actions prévues pour résoudre ou contourner ce blocage..."
                          rows={2}
                          className="resize-none"
                        />
                      </div>

                      {/* Badge niveau d'impact */}
                      <Badge 
                        variant="outline" 
                        className={cn("w-fit", getLevelColor(blocker.level))}
                      >
                        Impact {getLevelLabel(blocker.level)}
                      </Badge>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeBlocker(index)}
                      className="flex-shrink-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {blockers.length > 10 && (
          <p className="text-xs text-muted-foreground text-center pt-3">
            {blockers.length} blocages • Faites défiler pour voir tous
          </p>
        )}

        {!canAddBlocker && (
          <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3">
            <p className="text-sm text-amber-600 dark:text-amber-400">
              ⚠ Limite de {maxBlockers} blocages atteinte
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}