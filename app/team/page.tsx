// app/team/page.tsx
import { TeamView } from "@/components/team-view"
import { TopNav } from "@/components/top-nav"
import { AuthGuard } from "@/components/auth-guard"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function TeamPage() {
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset>
          <TopNav />
            <main className="flex-1 p-8">
              <TeamView />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}
