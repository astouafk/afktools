// app/projects/[id]/reports/page.tsx
import { TopNav } from "@/components/top-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ReportsView } from "@/components/reports-view"
import { AuthGuard } from "@/components/auth-guard"

export default async function ReportsPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <AppSidebar />
          <div className="flex flex-1 flex-col">
            <TopNav />
            <main className="flex-1 p-6">
              <ReportsView projectId={id} />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}