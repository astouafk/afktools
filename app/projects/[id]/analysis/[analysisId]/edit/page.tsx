// app/projects/[id]/analysis/[analysisId]/edit/page.tsx
import { TopNav } from "@/components/top-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { EditAnalysisView } from "@/components/edit-analysis-view"
import { AuthGuard } from "@/components/auth-guard"

export default async function EditAnalysisPage({ 
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
              <EditAnalysisView projectId={id} analysisId={analysisId} />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}