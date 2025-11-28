//app/page.tsx
import { TopNav } from "@/components/top-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { DashboardView } from "@/components/dashboard-view"
import { AuthGuard } from "@/components/auth-guard"

export default function HomePage() {
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <AppSidebar />
          <div className="flex flex-1 flex-col">
            <TopNav />
            <main className="flex-1 p-6">
              <DashboardView />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}
