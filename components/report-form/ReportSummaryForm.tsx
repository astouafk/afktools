// components/report-form/ReportSummaryForm.tsx
"use client"

import * as React from "react"
import { FileText } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ReportSummaryFormProps {
  summary: string
  onChange: (summary: string) => void
}

export function ReportSummaryForm({ summary, onChange }: ReportSummaryFormProps) {
  const charCount = summary.length

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Résumé Hebdomadaire
        </CardTitle>
        <CardDescription>
          Décrivez les principaux accomplissements et événements de la semaine (optionnel)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="summary">Résumé</Label>
          <Textarea
            id="summary"
            value={summary}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Exemple: Cette semaine, l'équipe a finalisé le module d'authentification et démarré l'intégration des paiements. Nous avons également résolu plusieurs bugs critiques signalés par les premiers utilisateurs..."
            rows={12}
            className="resize-none"
          />
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Un bon résumé inclut : accomplissements clés, décisions importantes, points d'attention
            </p>
            <p className="text-xs text-muted-foreground">
              {charCount} caractère{charCount > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}