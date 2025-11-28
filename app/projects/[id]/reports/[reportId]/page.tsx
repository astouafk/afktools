// app/projects/[id]/reports/[reportId]/page.tsx
import { TopNav } from "@/components/top-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ReportDetailView } from "@/components/report-detail-view"
import { AuthGuard } from "@/components/auth-guard"

export default async function ReportDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string; reportId: string }> 
}) {
  const { id, reportId } = await params
  
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <AppSidebar />
          <div className="flex flex-1 flex-col">
            <TopNav />
            <main className="flex-1 p-6">
              <ReportDetailView projectId={id} reportId={reportId} />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}