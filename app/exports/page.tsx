// //app/export/page.tsx
// import { TopNav } from "@/components/top-nav"
// import { AppSidebar } from "@/components/app-sidebar"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { ExportView } from "@/components/export-view"
// import { AuthGuard } from "@/components/auth-guard"

// export default function ExportPage() {
//   return (
//     <AuthGuard>
//       <SidebarProvider>
//         <div className="flex min-h-screen w-full bg-background">
//           <AppSidebar />
//           <div className="flex flex-1 flex-col">
//             <TopNav />
//             <main className="flex-1 p-6">
//               <ExportView />
//             </main>
//           </div>
//         </div>
//       </SidebarProvider>
//     </AuthGuard>
//   )
// }


// app/exports/page.tsx
import { ExportsView } from "@/components/exports-view"
import { AuthGuard } from "@/components/auth-guard"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { TopNav } from "@/components/top-nav"


export default function ExportsPage() {
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset>
            <TopNav />
            <main className="flex-1 p-8">
              <ExportsView />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}