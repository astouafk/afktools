// app/dashboard/page.tsx
import { DashboardView } from "@/components/dashboard-view"
import { AuthGuard } from "@/components/auth-guard"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { TopNav } from "@/components/top-nav"

export default function DashboardPage() {
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset>
            <TopNav />
            <main className="flex-1 p-8">
              <DashboardView />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}