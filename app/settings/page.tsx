//app/settings/page.tsx
import { TopNav } from "@/components/top-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { SettingsView } from "@/components/settings-view"
import { AuthGuard } from "@/components/auth-guard"

export default function SettingsPage() {
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-background">
          <AppSidebar />
          <div className="flex flex-1 flex-col">
            <TopNav />
            <main className="flex-1 p-6">
              <SettingsView />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}
