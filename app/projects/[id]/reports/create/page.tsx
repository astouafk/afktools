// app/projects/[id]/reports/create/page.tsx
import { CreateReportView } from "@/components/create-report-view"
import { AnalysisCompleteGuard } from "@/components/analysis-complete-guard"
import { AuthGuard } from "@/components/auth-guard"
import { TopNav } from "@/components/top-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function CreateReportPage({ params }: PageProps) {
  const { id } = await params

  return (
    <AuthGuard>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <TopNav />
          <main className="flex-1 p-6">
            <AnalysisCompleteGuard projectId={id}>
              <CreateReportView projectId={id} />
            </AnalysisCompleteGuard>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  )
}