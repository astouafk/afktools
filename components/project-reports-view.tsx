//components/project-reports-view.tsx
"use client"
import { ArrowLeft, FileText, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

type ProjectReportsViewProps = {
  projectId: string
}

export function ProjectReportsView({ projectId }: ProjectReportsViewProps) {
  // Mock data
  const project = {
    id: projectId,
    name: "E-commerce Platform Redesign",
  }

  const reports = [
    {
      id: "1",
      title: "Week 12 - March 18-22, 2025",
      date: "2025-03-18",
      tasksCompleted: 8,
      totalTasks: 12,
      blockersCount: 2,
    },
    {
      id: "2",
      title: "Week 11 - March 11-15, 2025",
      date: "2025-03-11",
      tasksCompleted: 10,
      totalTasks: 10,
      blockersCount: 0,
    },
    {
      id: "3",
      title: "Week 10 - March 4-8, 2025",
      date: "2025-03-04",
      tasksCompleted: 7,
      totalTasks: 9,
      blockersCount: 1,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link href={`/projects/${projectId}`}>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">Rapports Hebdomadaires</h1>
            <p className="text-sm text-muted-foreground mt-1">{project.name}</p>
          </div>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nouveau Rapport
        </Button>
      </div>

      <div className="grid gap-4">
        {reports.map((report) => (
          <Card key={report.id} className="bg-card hover:bg-accent/5 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle className="text-lg text-foreground">{report.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {new Date(report.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <Button asChild>
                  <Link href={`/reports/${report.id}`}>
                    <FileText className="mr-2 h-4 w-4" />
                    Voir Détails
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Taches:</span>
                  <span className="text-sm font-medium text-foreground">
                    {report.tasksCompleted}/{report.totalTasks} complétés
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Blocages:</span>
                  {report.blockersCount > 0 ? (
                    <Badge variant="destructive">{report.blockersCount}</Badge>
                  ) : (
                    <Badge variant="default">None</Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
