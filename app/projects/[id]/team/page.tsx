// app/projects/[id]/team/page.tsx
import { ProjectTeamView } from "@/components/project-team-view"
import { AuthGuard } from "@/components/auth-guard"
import { TopNav } from "@/components/top-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

type PageProps = {
  params: Promise<{ id: string }>
}

export default async function ProjectTeamPage({ params }: PageProps) {
  const { id } = await params

  return (
    <AuthGuard>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <TopNav />
          <main className="flex-1 p-6">
            <ProjectTeamView projectId={id} />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </AuthGuard>
  )
}