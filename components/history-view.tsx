// components/history-view.tsx
"use client"

import * as React from "react"
import { History, TrendingUp, TrendingDown, Minus, Calendar, FileText, FolderKanban, CheckCircle2, AlertCircle, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useAllReports } from "@/hooks/use-reports"
import { useProjects } from "@/hooks/use-projects"
import { Skeleton } from "@/components/ui/skeleton"
import { getAnalysesByProject } from "@/lib/services/analysis-service"
import type { Analysis } from "@/lib/services/analysis-service"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

type TimeRange = 'month' | 'quarter' | 'semester' | 'year' | 'all'
type EventType = 'all' | 'report' | 'analysis' | 'project' | 'blocker'

interface TimelineEvent {
  id: string
  type: 'report' | 'analysis' | 'project_created' | 'project_completed' | 'blocker_resolved'
  title: string
  description: string
  date: Date
  projectId?: string
  projectName?: string
  metadata?: any
}

export function HistoryView() {
  const selectedCompanyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  
  const { data: allReports = [], isLoading: reportsLoading } = useAllReports(selectedCompanyId)
  const { data: projects = [], isLoading: projectsLoading } = useProjects(selectedCompanyId)
  
  const [allAnalyses, setAllAnalyses] = React.useState<Analysis[]>([])
  const [analysesLoading, setAnalysesLoading] = React.useState(false)
  const [timeRange, setTimeRange] = React.useState<TimeRange>('semester')
  const [eventType, setEventType] = React.useState<EventType>('all')
  const [selectedProjects, setSelectedProjects] = React.useState<string[]>([])
  const [searchQuery, setSearchQuery] = React.useState("")

  const isLoading = reportsLoading || projectsLoading || analysesLoading

  // Charger les analyses
  React.useEffect(() => {
    async function loadAnalyses() {
      if (!selectedCompanyId || projects.length === 0) return
      
      setAnalysesLoading(true)
      try {
        const analysesPromises = projects.map(project => 
          getAnalysesByProject(project.id, project.companyId)
        )
        const analysesArrays = await Promise.all(analysesPromises)
        const flatAnalyses = analysesArrays.flat()
        setAllAnalyses(flatAnalyses)
      } catch (error) {
        console.error('Error loading analyses:', error)
      } finally {
        setAnalysesLoading(false)
      }
    }

    loadAnalyses()
  }, [projects, selectedCompanyId])

  // Fonction pour obtenir la date de début
  const getStartDate = (range: TimeRange) => {
    const d = new Date()
    switch (range) {
      case 'month':
        d.setMonth(d.getMonth() - 1)
        return d
      case 'quarter':
        d.setMonth(d.getMonth() - 3)
        return d
      case 'semester':
        d.setMonth(d.getMonth() - 6)
        return d
      case 'year':
        d.setFullYear(d.getFullYear() - 1)
        return d
      case 'all':
        return new Date(2020, 0, 1) // Date très ancienne
    }
  }

  // Générer les événements de la timeline
  const timelineEvents = React.useMemo(() => {
    const events: TimelineEvent[] = []
    const startDate = getStartDate(timeRange)

    // Événements rapports
    allReports.forEach(report => {
      const reportDate = new Date(report.createdAt)
      if (reportDate >= startDate) {
        const project = projects.find(p => p.id === report.projectId)
        events.push({
          id: `report-${report.id}`,
          type: 'report',
          title: `Rapport Semaine #${report.weekNumber}`,
          description: `${project?.name || 'Projet'} - ${report.tasks?.length || 0} tâches`,
          date: reportDate,
          projectId: report.projectId,
          projectName: project?.name,
          metadata: report
        })
      }
    })

    // Événements analyses
    allAnalyses.forEach(analysis => {
      const analysisDate = new Date(analysis.createdAt)
      if (analysisDate >= startDate) {
        const project = projects.find(p => p.id === analysis.projectId)
        events.push({
          id: `analysis-${analysis.id}`,
          type: 'analysis',
          title: `Analyse ${translateAnalysisType(analysis.type)}`,
          description: `${project?.name || 'Projet'} - ${analysis.title}`,
          date: analysisDate,
          projectId: analysis.projectId,
          projectName: project?.name,
          metadata: analysis
        })
      }
    })

    // Événements projets complétés
    projects.forEach(project => {
      if (project.status === 'Completed' && project.updatedAt) {
        const completedDate = new Date(project.updatedAt)
        if (completedDate >= startDate) {
          events.push({
            id: `project-completed-${project.id}`,
            type: 'project_completed',
            title: `Projet Bouclé`,
            description: `${project.name} terminé avec succès`,
            date: completedDate,
            projectId: project.id,
            projectName: project.name,
            metadata: project
          })
        }
      }

      // Projet créé
      const createdDate = new Date(project.createdAt)
      if (createdDate >= startDate) {
        events.push({
          id: `project-created-${project.id}`,
          type: 'project_created',
          title: `Nouveau Projet`,
          description: `${project.name} démarré`,
          date: createdDate,
          projectId: project.id,
          projectName: project.name,
          metadata: project
        })
      }
    })

    // Trier par date décroissante
    return events.sort((a, b) => b.date.getTime() - a.date.getTime())
  }, [allReports, allAnalyses, projects, timeRange])

  // Filtrer les événements
  const filteredEvents = React.useMemo(() => {
    let filtered = timelineEvents

    // Filtre par type
    if (eventType !== 'all') {
      if (eventType === 'report') {
        filtered = filtered.filter(e => e.type === 'report')
      } else if (eventType === 'analysis') {
        filtered = filtered.filter(e => e.type === 'analysis')
      } else if (eventType === 'project') {
        filtered = filtered.filter(e => e.type === 'project_created' || e.type === 'project_completed')
      } else if (eventType === 'blocker') {
        // Filtrer uniquement les rapports avec blocages
        filtered = filtered.filter(e => {
          if (e.type === 'report' && e.metadata) {
            return e.metadata.blockers && e.metadata.blockers.length > 0
          }
          return false
        })
      }
    }

    // Filtre par projets
    if (selectedProjects.length > 0) {
      filtered = filtered.filter(e => e.projectId && selectedProjects.includes(e.projectId))
    }

    // Filtre par recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(e => 
        e.title.toLowerCase().includes(query) ||
        e.description.toLowerCase().includes(query) ||
        e.projectName?.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [timelineEvents, eventType, selectedProjects, searchQuery])

  // Données pour le graphique d'évolution (rapports par mois)
  const chartData = React.useMemo(() => {
    const monthlyData = new Map<string, { month: string, reports: number, analyses: number, blockers: number }>()
    
    const startDate = getStartDate(timeRange)
    const now = new Date()
    
    // Initialiser les mois
    const current = new Date(startDate)
    while (current <= now) {
      const monthKey = `${current.getFullYear()}-${String(current.getMonth() + 1).padStart(2, '0')}`
      const monthLabel = current.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })
      monthlyData.set(monthKey, { month: monthLabel, reports: 0, analyses: 0, blockers: 0 })
      current.setMonth(current.getMonth() + 1)
    }

    // Compter les rapports
    allReports.forEach(report => {
      const reportDate = new Date(report.createdAt)
      if (reportDate >= startDate) {
        const monthKey = `${reportDate.getFullYear()}-${String(reportDate.getMonth() + 1).padStart(2, '0')}`
        const data = monthlyData.get(monthKey)
        if (data) {
          data.reports++
          data.blockers += report.blockers?.length || 0
        }
      }
    })

    // Compter les analyses
    allAnalyses.forEach(analysis => {
      const analysisDate = new Date(analysis.createdAt)
      if (analysisDate >= startDate) {
        const monthKey = `${analysisDate.getFullYear()}-${String(analysisDate.getMonth() + 1).padStart(2, '0')}`
        const data = monthlyData.get(monthKey)
        if (data) {
          data.analyses++
        }
      }
    })

    return Array.from(monthlyData.values())
  }, [allReports, allAnalyses, timeRange])

  // Statistiques globales
  const stats = React.useMemo(() => {
    const startDate = getStartDate(timeRange)
    
    const reportsInRange = allReports.filter(r => new Date(r.createdAt) >= startDate)
    const analysesInRange = allAnalyses.filter(a => new Date(a.createdAt) >= startDate)
    
    const totalTasks = reportsInRange.reduce((sum, r) => sum + (r.tasks?.length || 0), 0)
    const completedTasks = reportsInRange.reduce((sum, r) => 
      sum + (r.tasks?.filter(t => t.completed).length || 0), 0
    )
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
    
    const totalBlockers = reportsInRange.reduce((sum, r) => sum + (r.blockers?.length || 0), 0)
    const resolvedBlockers = reportsInRange.reduce((sum, r) => 
      sum + (r.blockers?.filter(b => b.mitigation).length || 0), 0
    )

    const completedAnalyses = analysesInRange.filter(a => a.status === 'Completed').length
    const analysesRate = analysesInRange.length > 0 ? Math.round((completedAnalyses / analysesInRange.length) * 100) : 0

    return {
      totalReports: reportsInRange.length,
      totalAnalyses: analysesInRange.length,
      completionRate,
      totalBlockers,
      resolvedBlockers,
      analysesRate
    }
  }, [allReports, allAnalyses, timeRange])

  const toggleProject = (projectId: string) => {
    setSelectedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    )
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'report': return FileText
      case 'analysis': return FileText
      case 'project_created': return FolderKanban
      case 'project_completed': return CheckCircle2
      case 'blocker_resolved': return AlertCircle
      default: return Calendar
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case 'report': return 'bg-blue-500'
      case 'analysis': return 'bg-purple-500'
      case 'project_created': return 'bg-green-500'
      case 'project_completed': return 'bg-emerald-500'
      case 'blocker_resolved': return 'bg-amber-500'
      default: return 'bg-gray-500'
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    )
  }

  if (!selectedCompanyId) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <History className="h-12 w-12 text-muted-foreground mx-auto" />
          <p className="text-muted-foreground">Veuillez sélectionner une entreprise</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
          <History className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Historique & Évolution
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Visualisez l'évolution de vos projets dans le temps
          </p>
        </div>
      </div>

      {/* Filtres */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtres
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {/* Période */}
            <div className="space-y-2">
              <Label>Période</Label>
              <Select value={timeRange} onValueChange={(value: TimeRange) => setTimeRange(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Dernier mois</SelectItem>
                  <SelectItem value="quarter">Dernier trimestre</SelectItem>
                  <SelectItem value="semester">Derniers 6 mois</SelectItem>
                  <SelectItem value="year">Dernière année</SelectItem>
                  <SelectItem value="all">Tout l'historique</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Type d'événement */}
            <div className="space-y-2">
              <Label>Type d'événement</Label>
              <Select value={eventType} onValueChange={(value: EventType) => setEventType(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les événements</SelectItem>
                  <SelectItem value="report">Rapports</SelectItem>
                  <SelectItem value="analysis">Analyses</SelectItem>
                  <SelectItem value="project">Projets</SelectItem>
                  <SelectItem value="blocker">Blocages</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Projets */}
            <div className="space-y-2">
              <Label>Projets</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {selectedProjects.length === 0 
                      ? "Tous les projets" 
                      : `${selectedProjects.length} projet${selectedProjects.length > 1 ? 's' : ''}`
                    }
                    <FolderKanban className="ml-2 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-4" align="start">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label className="text-sm font-semibold">Filtrer par projet</Label>
                      {selectedProjects.length > 0 && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setSelectedProjects([])}
                        >
                          Réinitialiser
                        </Button>
                      )}
                    </div>
                    <div className="max-h-[300px] overflow-y-auto space-y-2">
                      {projects.map(project => (
                        <div key={project.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={project.id}
                            checked={selectedProjects.includes(project.id)}
                            onCheckedChange={() => toggleProject(project.id)}
                          />
                          <Label 
                            htmlFor={project.id}
                            className="text-sm cursor-pointer flex-1"
                          >
                            {project.name}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Recherche */}
          <div className="mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Rechercher dans l'historique..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistiques */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Rapports Créés</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalReports}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Taux complétion : {stats.completionRate}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Analyses Terminées</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">{stats.totalAnalyses}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Taux : {stats.analysesRate}%
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Blocages Résolus</CardTitle>
            <AlertCircle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-amber-500">
              {stats.resolvedBlockers}/{stats.totalBlockers}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Avec mitigation définie
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Graphique d'évolution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Évolution dans le Temps
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="reports" stroke="#3b82f6" name="Rapports" strokeWidth={2} />
              <Line type="monotone" dataKey="analyses" stroke="#8b5cf6" name="Analyses" strokeWidth={2} />
              <Line type="monotone" dataKey="blockers" stroke="#f59e0b" name="Blocages" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Timeline des événements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Ligne du Temps
            <Badge variant="secondary" className="ml-2">{filteredEvents.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>Aucun événement ne correspond aux filtres</p>
              <Button 
                variant="outline"
                onClick={() => {
                  setEventType('all')
                  setSelectedProjects([])
                  setSearchQuery('')
                }}
                className="mt-4"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          ) : (
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {filteredEvents.map((event, index) => {
                const Icon = getEventIcon(event.type)
                const color = getEventColor(event.type)
                
                return (
                  <div key={event.id} className="flex gap-4">
                    {/* Timeline indicator */}
                    <div className="flex flex-col items-center">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${color}`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      {index < filteredEvents.length - 1 && (
                        <div className="w-0.5 flex-1 bg-border mt-2" />
                      )}
                    </div>

                    {/* Event content */}
                    <Card className="flex-1 mb-2">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <p className="font-semibold">{event.title}</p>
                            <p className="text-sm text-muted-foreground mt-1">{event.description}</p>
                            {event.projectName && (
                              <Badge variant="outline" className="mt-2">
                                {event.projectName}
                              </Badge>
                            )}
                          </div>
                          <time className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                            {event.date.toLocaleDateString('fr-FR', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </time>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

function translateAnalysisType(type: string): string {
  switch (type) {
    case 'Functional': return 'Fonctionnelle'
    case 'Technical': return 'Technique'
    case 'UI/UX': return 'UX/UI'
    case 'Performance': return 'Performance'
    default: return type
  }
}