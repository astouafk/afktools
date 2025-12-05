// // components/report-form/ReportSummaryForm.tsx
// "use client"

// import * as React from "react"
// import { FileText } from "lucide-react"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// interface ReportSummaryFormProps {
//   summary: string
//   onChange: (summary: string) => void
// }

// export function ReportSummaryForm({ summary, onChange }: ReportSummaryFormProps) {
//   const charCount = summary.length

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//           <FileText className="h-5 w-5" />
//           Résumé Hebdomadaire
//         </CardTitle>
//         <CardDescription>
//           Décrivez les principaux accomplissements et événements de la semaine (optionnel)
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div className="space-y-2">
//           <Label htmlFor="summary">Résumé</Label>
//           <Textarea
//             id="summary"
//             value={summary}
//             onChange={(e) => onChange(e.target.value)}
//             placeholder="Exemple: Cette semaine, l'équipe a finalisé le module d'authentification et démarré l'intégration des paiements. Nous avons également résolu plusieurs bugs critiques signalés par les premiers utilisateurs..."
//             rows={12}
//             className="resize-none"
//           />
//           <div className="flex items-center justify-between">
//             <p className="text-xs text-muted-foreground">
//               Un bon résumé inclut : accomplissements clés, décisions importantes, points d'attention
//             </p>
//             <p className="text-xs text-muted-foreground">
//               {charCount} caractère{charCount > 1 ? 's' : ''}
//             </p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }



// components/report-form/ReportBasicInfoForm.tsx
"use client"

import * as React from "react"
import { Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ReportBasicInfoFormProps {
  weekNumber: number
  startDate: string
  endDate: string
  onChange: (data: { weekNumber?: number; startDate?: string; endDate?: string }) => void
}

// ✅ AJOUTÉ - Export nommé
export function ReportBasicInfoForm({
  weekNumber,
  startDate,
  endDate,
  onChange
}: ReportBasicInfoFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Informations de Base</CardTitle>
        <CardDescription>
          Définissez la période du rapport hebdomadaire (maximum 7 jours)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="weekNumber">
            Numéro de Semaine <span className="text-destructive">*</span>
          </Label>
          <Input
            id="weekNumber"
            type="number"
            min="1"
            max="52"
            value={weekNumber || ''}
            onChange={(e) => onChange({ weekNumber: parseInt(e.target.value) || 0 })}
            placeholder="Ex: 12"
          />
          <p className="text-xs text-muted-foreground">
            Semaine de l'année (1-52)
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="startDate">
              Date de Début <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => onChange({ startDate: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="endDate">
              Date de Fin <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => onChange({ endDate: e.target.value })}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-blue-500/20 bg-blue-500/10 p-3">
          <p className="text-sm text-blue-600 dark:text-blue-400">
            💡 <strong>Astuce :</strong> Un rapport hebdomadaire couvre généralement 7 jours. 
            La date de fin ne peut pas être dans le futur ni antérieure à la date de début.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}