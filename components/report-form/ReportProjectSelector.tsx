// components/report-form/ReportProjectSelector.tsx
"use client"

import * as React from "react"
import { Search, ChevronDown, ChevronRight, CheckCircle2, AlertCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/services/project-service"
import type { Analysis } from "@/lib/services/analysis-service"

interface ReportProjectSelectorProps {
  projects: Project[]
  analyses: Analysis[]
  selectedProjectId: string | null
  onSelect: (projectId: string) => void
}

export function ReportProjectSelector({
  projects,
  analyses,
  selectedProjectId,
  onSelect
}: ReportProjectSelectorProps) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showIneligible, setShowIneligible] = React.useState(false)

  // Filtrer les projets éligibles et inéligibles
  const eligibleProjects = React.useMemo(() => {
    return projects.filter(project => {
      const projectAnalyses = analyses.filter(a => a.projectId === project.id)
      return projectAnalyses.some(a => a.status === 'Completed')
    })
  }, [projects, analyses])

  const ineligibleProjects = React.useMemo(() => {
    return projects.filter(project => {
      const projectAnalyses = analyses.filter(a => a.projectId === project.id)
      return !projectAnalyses.some(a => a.status === 'Completed')
    })
  }, [projects, analyses])

  // Appliquer la recherche
  const filteredEligible = React.useMemo(() => {
    if (!searchQuery) return eligibleProjects
    const query = searchQuery.toLowerCase()
    return eligibleProjects.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.client?.toLowerCase().includes(query)
    )
  }, [eligibleProjects, searchQuery])

  const filteredIneligible = React.useMemo(() => {
    if (!searchQuery) return ineligibleProjects
    const query = searchQuery.toLowerCase()
    return ineligibleProjects.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.client?.toLowerCase().includes(query)
    )
  }, [ineligibleProjects, searchQuery])

  // Compter les analyses terminées par projet
  const getCompletedAnalysesCount = (projectId: string) => {
    return analyses.filter(a => 
      a.projectId === projectId && a.status === 'Completed'
    ).length
  }

  return (
    <div className="space-y-6">
      {/* Barre de recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Rechercher par nom de projet ou client..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Alerte projets éligibles */}
      <div className="rounded-lg border border-amber-500/20 bg-amber-500/10 p-4">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="flex-1 space-y-2">
            <p className="text-sm font-medium text-amber-600 dark:text-amber-500">
              Condition d'éligibilité
            </p>
            <p className="text-sm text-amber-600/90 dark:text-amber-500/90">
              Seuls les projets avec au moins une analyse terminée peuvent générer des rapports hebdomadaires.
            </p>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
        <div className="flex items-center gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Projets éligibles</p>
            <p className="text-2xl font-bold text-foreground">{filteredEligible.length}</p>
          </div>
          <div className="h-10 w-px bg-border" />
          <div>
            <p className="text-sm text-muted-foreground">Projets inéligibles</p>
            <p className="text-2xl font-bold text-muted-foreground">{filteredIneligible.length}</p>
          </div>
        </div>
        {searchQuery && (
          <Badge variant="secondary">
            Résultats filtrés
          </Badge>
        )}
      </div>

      {/* Section projets inéligibles (collapsible) */}
      {filteredIneligible.length > 0 && (
        <div className="space-y-3">
          <button
            onClick={() => setShowIneligible(!showIneligible)}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {showIneligible ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
            Projets inéligibles ({filteredIneligible.length})
          </button>

          {showIneligible && (
            <div className="space-y-2 pl-6">
              {filteredIneligible.map(project => {
                const analysesCount = analyses.filter(a => a.projectId === project.id).length
                const completedCount = getCompletedAnalysesCount(project.id)
                
                return (
                  <div
                    key={project.id}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 opacity-60"
                  >
                    <AlertCircle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {project.name}
                      </p>
                      {project.client && (
                        <p className="text-xs text-muted-foreground truncate">
                          Client: {project.client}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1">
                        {analysesCount === 0 
                          ? "Aucune analyse créée"
                          : `${completedCount}/${analysesCount} analyse(s) terminée(s)`
                        }
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      )}

      {/* Section projets éligibles */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-foreground">
          Projets éligibles ({filteredEligible.length})
        </h3>

        {filteredEligible.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            {searchQuery ? (
              <>
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Aucun projet éligible ne correspond à votre recherche</p>
              </>
            ) : (
              <>
                <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Aucun projet éligible</p>
                <p className="text-sm mt-2">
                  Créez des analyses pour vos projets pour pouvoir générer des rapports
                </p>
              </>
            )}
          </div>
        ) : (
          <div className={cn(
            "space-y-3",
            filteredEligible.length > 5 && "max-h-[400px] overflow-y-auto pr-2"
          )}>
            {filteredEligible.map(project => {
              const completedCount = getCompletedAnalysesCount(project.id)
              const isSelected = selectedProjectId === project.id
              
              return (
                <Card
                  key={project.id}
                  className={cn(
                    "cursor-pointer transition-all hover:border-primary/50",
                    isSelected && "border-primary bg-primary/5"
                  )}
                  onClick={() => onSelect(project.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg flex-shrink-0",
                        isSelected ? "bg-primary text-primary-foreground" : "bg-muted"
                      )}>
                        {isSelected ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/50" />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-foreground truncate">
                          {project.name}
                        </h4>
                        
                        {project.client && (
                          <p className="text-sm text-muted-foreground truncate mt-1">
                            Client: {project.client}
                          </p>
                        )}

                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline" className="text-xs">
                            {project.type}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            {completedCount} analyse{completedCount > 1 ? 's' : ''} terminée{completedCount > 1 ? 's' : ''}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {filteredEligible.length > 10 && (
          <p className="text-xs text-muted-foreground text-center pt-2">
            {filteredEligible.length} projets éligibles • Faites défiler pour voir tous
          </p>
        )}
      </div>
    </div>
  )
}