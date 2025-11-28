//components/history-view.tsx
"use client"

import * as React from "react"
import { Archive, FileText, Eye, CheckCircle, ListTodo, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

type CompletedProject = {
  id: number
  name: string
  type: string
  client?: string
  startDate: string
  completionDate: string
  totalReports: number
  totalTasks: number
  resolvedBlockers: number
}

const mockCompletedProjects: CompletedProject[] = [
  {
    id: 4,
    name: "Corporate Website",
    type: "Website",
    client: "Global Corp",
    startDate: "2024-12-01",
    completionDate: "2025-03-15",
    totalReports: 16,
    totalTasks: 48,
    resolvedBlockers: 8,
  },
  {
    id: 5,
    name: "Marketing Automation System",
    type: "Web App",
    client: "MarketPro Inc.",
    startDate: "2024-10-15",
    completionDate: "2025-02-28",
    totalReports: 20,
    totalTasks: 72,
    resolvedBlockers: 12,
  },
  {
    id: 6,
    name: "Brand Refresh Campaign",
    type: "Social Media Campaign",
    client: "Fashion Brands Co.",
    startDate: "2024-11-01",
    completionDate: "2025-01-31",
    totalReports: 13,
    totalTasks: 35,
    resolvedBlockers: 5,
  },
]

export function HistoryView() {
  const [projects, setProjects] = React.useState<CompletedProject[]>(mockCompletedProjects)
  const [searchQuery, setSearchQuery] = React.useState("")
  const [filterType, setFilterType] = React.useState<string>("all")

  const filteredProjects = projects.filter((project) => {
    const matchesType = filterType === "all" || project.type === filterType
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  const totalCompleted = projects.length
  const totalReports = projects.reduce((sum, p) => sum + p.totalReports, 0)
  const totalTasks = projects.reduce((sum, p) => sum + p.totalTasks, 0)
  const avgDuration = Math.round(
    projects.reduce((sum, p) => {
      const start = new Date(p.startDate)
      const end = new Date(p.completionDate)
      const days = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
      return sum + days
    }, 0) / projects.length,
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
          <Archive className="h-6 w-6 text-muted-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-card-foreground">Project History</h1>
          <p className="text-sm text-muted-foreground">View completed projects and their documentation</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{totalCompleted}</div>
                <p className="text-sm text-muted-foreground">Completed Projects</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{totalReports}</div>
                <p className="text-sm text-muted-foreground">Total Reports</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10">
                <ListTodo className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{totalTasks}</div>
                <p className="text-sm text-muted-foreground">Total Tasks</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10">
                <Clock className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{avgDuration}</div>
                <p className="text-sm text-muted-foreground">Avg. Duration (days)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1">
          <Input
            placeholder="Search by name or client..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Web App">Web App</SelectItem>
            <SelectItem value="Mobile App">Mobile App</SelectItem>
            <SelectItem value="Website">Website</SelectItem>
            <SelectItem value="Social Media Campaign">Campaign</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-4">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="bg-card">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <Archive className="h-5 w-5 text-muted-foreground" />
                    <Link
                      href={`/history/${project.id}`}
                      className="text-lg font-semibold text-card-foreground hover:text-primary"
                    >
                      {project.name}
                    </Link>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div>
                      <span className="font-medium text-foreground">Type:</span> {project.type}
                    </div>
                    {project.client && (
                      <div>
                        <span className="font-medium text-foreground">Client:</span> {project.client}
                      </div>
                    )}
                    <div>
                      <span className="font-medium text-foreground">Duration:</span>{" "}
                      {new Date(project.startDate).toLocaleDateString()} -{" "}
                      {new Date(project.completionDate).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{project.totalReports} Reports</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground">{project.totalTasks} Tasks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground">{project.resolvedBlockers} Blockers Resolved</span>
                    </div>
                  </div>
                </div>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/history/${project.id}`}>
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
