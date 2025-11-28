// components/all-reports-view.tsx
"use client"

import * as React from "react"
import { FileText, Clock, CheckCircle2, Calendar, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { useAllReports } from "@/hooks/use-reports"
import { useProjects } from "@/hooks/use-projects"
import { Skeleton } from "@/components/ui/skeleton"

const ITEMS_PER_PAGE = 6

export function AllReportsView() {
  const { data: allReports = [], isLoading: reportsLoading } = useAllReports()
  const [currentPage, setCurrentPage] = React.useState(1)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [filterProject, setFilterProject] = React.useState<string>("all")
  const [filterStatus, setFilterStatus] = React.useState<string>("all")

  const companyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  const { data: projects = [] } = useProjects(companyId)

  const getProjectName = (projectId: string) => {
    const project = projects.find(p => p.id === projectId)
    return project ? project.name : "Projet inconnu"
  }

  const filteredReports = allReports.filter((report) => {
    const projectName = getProjectName(report.projectId)
    const matchesSearch = 
      `Semaine ${report.weekNumber}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      projectName.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesProject = filterProject === "all" || report.projectId === filterProject
    const matchesStatus = filterStatus === "all" || report.status === filterStatus
    
    return matchesSearch && matchesProject && matchesStatus
  })

  const uniqueProjects = Array.from(new Set(allReports.map(r => r.projectId)))
    .map(projectId => ({
      id: projectId,
      name: getProjectName(projectId)
    }))

  const totalPages = Math.ceil(filteredReports.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedReports = filteredReports.slice(startIndex, endIndex)

  if (reportsLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-20" />
        <Skeleton className="h-32" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Tous les Rapports
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Vue d'ensemble de tous vos rapports hebdomadaires
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Statistiques Globales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <span className="text-sm text-muted-foreground">Total rapports</span>
              <p className="text-2xl font-bold">{allReports.length}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Publiés</span>
              <p className="text-2xl font-bold text-green-500">
                {allReports.filter(r => r.status === "Published").length}
              </p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Brouillons</span>
              <p className="text-2xl font-bold text-gray-500">
                {allReports.filter(r => r.status === "Draft").length}
              </p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Projets actifs</span>
              <p className="text-2xl font-bold">{uniqueProjects.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4 md:flex-row md:items-center bg-muted/30 p-4 rounded-lg">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher un rapport ou projet..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background"
          />
        </div>
        <div className="flex gap-3">
          <Select value={filterProject} onValueChange={setFilterProject}>
            <SelectTrigger className="w-[200px] bg-background">
              <SelectValue placeholder="Tous les projets" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les projets</SelectItem>
              {uniqueProjects.map((project) => (
                <SelectItem key={project.id} value={project.id}>
                  {project.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[160px] bg-background">
              <SelectValue placeholder="Tous les statuts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="Published">Publié</SelectItem>
              <SelectItem value="Draft">Brouillon</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredReports.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            {allReports.length === 0 ? (
              <p className="text-muted-foreground">Aucun rapport créé</p>
            ) : (
              <>
                <p className="text-muted-foreground">Aucun rapport ne correspond aux filtres</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setFilterProject("all")
                    setFilterStatus("all")
                    setSearchQuery("")
                  }} 
                  className="mt-4"
                >
                  Réinitialiser les filtres
                </Button>
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedReports.map((report) => (
              <Card key={report.id} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          Semaine #{report.weekNumber}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {getProjectName(report.projectId)}
                        </p>
                      </div>
                      {report.status === "Published" && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                      )}
                    </div>
                    
                    <Badge 
                      variant="outline" 
                      className={
                        report.status === "Published"
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : "bg-gray-500/10 text-gray-500 border-gray-500/20"
                      }
                    >
                      {report.status === "Published" ? "Publié" : "Brouillon"}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(report.startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                        {' - '}
                        {new Date(report.endDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>
                        Créé le {new Date(report.createdAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short'
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t text-sm">
                    <span className="text-muted-foreground">Tâches</span>
                    <span className="font-medium">
                      {report.tasks.filter(t => t.completed).length}/{report.tasks.length}
                    </span>
                  </div>

                  <Button 
                    asChild 
                    className="w-full"
                    variant="outline"
                  >
                    <Link href={`/reports/${report.id}`}>
                      <FileText className="mr-2 h-4 w-4" />
                      {report.status === "Draft" ? "Continuer" : "Voir Détails"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Précédent
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Suivant
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}