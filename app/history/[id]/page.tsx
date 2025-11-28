//app/history/[id]/page.tsx
import { TopNav } from "@/components/top-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ArrowLeft, FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { AuthGuard } from "@/components/auth-guard"

export default function HistoryDetailPage({ params }: { params: { id: string } }) {
  // Mock completed project data
  const project = {
    id: params.id,
    name: "Corporate Website",
    type: "Website",
    client: "Global Corp",
    startDate: "2024-12-01",
    completionDate: "2025-03-15",
    status: "Completed",
    totalReports: 16,
    totalTasks: 48,
    resolvedBlockers: 8,
  }

  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <AppSidebar />
          <div className="flex flex-1 flex-col">
            <TopNav />
            <main className="flex-1 p-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Button asChild variant="ghost" size="icon">
                    <Link href="/history">
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h1 className="text-3xl font-semibold tracking-tight text-card-foreground">{project.name}</h1>
                      <Badge variant="secondary">{project.status}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.client} • Completed on {new Date(project.completionDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Button variant="outline">
                    <FileDown className="mr-2 h-4 w-4" />
                    Export Project
                  </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="bg-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-card-foreground">Total Reports</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-card-foreground">{project.totalReports}</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-card-foreground">Total Tasks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-card-foreground">{project.totalTasks}</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-card">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-card-foreground">Blockers Resolved</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-card-foreground">{project.resolvedBlockers}</div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-card">
                  <CardContent className="pt-6">
                    <div className="rounded-lg border border-border bg-background p-6 text-center">
                      <p className="text-muted-foreground">
                        This is a completed project. All content is read-only and cannot be modified.
                      </p>
                      <div className="mt-4 flex justify-center gap-4">
                        <Button asChild variant="outline">
                          <Link href={`/history/${project.id}/analysis`}>View Analysis</Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href={`/history/${project.id}/reports`}>View Reports</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analysis">Analysis</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-6">
                    <Card className="bg-card">
                      <CardHeader>
                        <CardTitle className="text-card-foreground">Project Overview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <dl className="grid gap-4 text-sm">
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Project Type:</dt>
                            <dd className="font-medium text-foreground">{project.type}</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Start Date:</dt>
                            <dd className="font-medium text-foreground">
                              {new Date(project.startDate).toLocaleDateString()}
                            </dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Completion Date:</dt>
                            <dd className="font-medium text-foreground">
                              {new Date(project.completionDate).toLocaleDateString()}
                            </dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-muted-foreground">Duration:</dt>
                            <dd className="font-medium text-foreground">
                              {Math.ceil(
                                (new Date(project.completionDate).getTime() - new Date(project.startDate).getTime()) /
                                  (1000 * 60 * 60 * 24 * 7),
                              )}{" "}
                              weeks
                            </dd>
                          </div>
                        </dl>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="analysis" className="mt-6">
                    <Card className="bg-card">
                      <CardHeader>
                        <CardTitle className="text-card-foreground">Analysis & Specifications</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          View the complete analysis and specifications for this completed project.
                        </p>
                        <Button className="mt-4" asChild>
                          <Link href={`/history/${project.id}/analysis`}>View Full Analysis</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="reports" className="mt-6">
                    <Card className="bg-card">
                      <CardHeader>
                        <CardTitle className="text-card-foreground">Weekly Reports</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Browse all {project.totalReports} weekly reports generated during this project.
                        </p>
                        <Button className="mt-4" asChild>
                          <Link href={`/history/${project.id}/reports`}>View All Reports</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}
