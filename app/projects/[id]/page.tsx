// app/projects/[id]/page.tsx
import { TopNav } from "@/components/top-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ProjectDetailView } from "@/components/project-detail-view"
import { AuthGuard } from "@/components/auth-guard"

export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  
  console.log('[ProjectDetailPage] Rendering with id:', id)
  
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <AppSidebar />
          <div className="flex flex-1 flex-col">
            <TopNav />
            <main className="flex-1 p-6">
              <ProjectDetailView projectId={id} />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}