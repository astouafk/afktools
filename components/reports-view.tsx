// components/reports-view.tsx
"use client"

import * as React from "react"
import { ArrowLeft, Plus, FileText, Clock, CheckCircle2, Calendar, MoreVertical, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import Link from "next/link"
import { useProject } from "@/hooks/use-projects"
import { useReports, useDeleteReport } from "@/hooks/use-reports"
import { Skeleton } from "@/components/ui/skeleton"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

type ReportsViewProps = {
  projectId: string
}

const ITEMS_PER_PAGE = 6

export function ReportsView({ projectId }: ReportsViewProps) {
  const router = useRouter()
  const { toast } = useToast()
  const { data: project, isLoading: projectLoading } = useProject(projectId)
  
  // ✅ CORRECTION - Ajouter companyId
  const { data: reports = [], isLoading: reportsLoading } = useReports(projectId, project?.companyId || null)
  const deleteReport = useDeleteReport()
  
  const [currentPage, setCurrentPage] = React.useState(1)
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
  const [reportToDelete, setReportToDelete] = React.useState<string | null>(null)

  const isLoading = projectLoading || reportsLoading

  const totalPages = Math.ceil(reports.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedReports = reports.slice(startIndex, endIndex)

  const handleDelete = async () => {
    if (!reportToDelete) return
    
    try {
      await deleteReport.mutateAsync(reportToDelete)
      toast({
        title: "Rapport supprimé",
        description: "Le rapport a été supprimé avec succès."
      })
      setDeleteDialogOpen(false)
      setReportToDelete(null)
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      })
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-9 w-96" />
        </div>
        <Skeleton className="h-20" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Projet introuvable</p>
          <Button asChild>
            <Link href="/projects">Retour aux projets</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Rapports Hebdomadaires
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {project.name}
            </p>
          </div>
        </div>
        <Button asChild>
          <Link href={`/project/${projectId}/reports/create`}>
            <Plus className="mr-2 h-4 w-4" />
            Créer un Rapport
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Résumé</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <span className="text-sm text-muted-foreground">Rapports créés</span>
              <p className="text-2xl font-bold">{reports.length}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Rapports publiés</span>
              <p className="text-2xl font-bold">
                {reports.filter(r => r.status === "Published").length}
              </p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Brouillons</span>
              <p className="text-2xl font-bold">
                {reports.filter(r => r.status === "Draft").length}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {reports.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Aucun rapport créé pour ce projet</p>
            <Button className="mt-4" asChild>
              <Link href={`/project/${projectId}/reports/create`}>
                <Plus className="mr-2 h-4 w-4" />
                Créer votre premier rapport
              </Link>
            </Button>
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
                      <h3 className="text-lg font-semibold text-foreground">
                        Semaine #{report.weekNumber}
                      </h3>
                      {report.status === "Published" && (
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 ml-2" />
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

                  <div className="pt-2 border-t">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Progression: </span>
                      <span className="font-medium">Étape {report.currentStep + 1}/5</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button 
                      asChild 
                      className="flex-1"
                      variant="outline"
                    >
                      <Link href={`/project/${projectId}/reports/${report.id}`}>
                        <FileText className="mr-2 h-4 w-4" />
                        {report.status === "Draft" ? "Continuer" : "Voir Détails"}
                      </Link>
                    </Button>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          className="text-destructive"
                          onClick={() => {
                            setReportToDelete(report.id)
                            setDeleteDialogOpen(true)
                          }}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
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

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer ce rapport ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Le rapport sera définitivement supprimé.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}