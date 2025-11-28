// app/projects/[id]/analysis/[analysisId]/page.tsx
import { TopNav } from "@/components/top-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AnalysisDetailView } from "@/components/analysis-detail-view"
import { AuthGuard } from "@/components/auth-guard"

export default async function AnalysisDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string; analysisId: string }> 
}) {
  const { id, analysisId } = await params
  
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <AppSidebar />
          <div className="flex flex-1 flex-col">
            <TopNav />
            <main className="flex-1 p-6">
              <AnalysisDetailView projectId={id} analysisId={analysisId} />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}