// //app/history/page.tsx
// import { TopNav } from "@/components/top-nav"
// import { AppSidebar } from "@/components/app-sidebar"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { HistoryView } from "@/components/history-view"
// import { AuthGuard } from "@/components/auth-guard"

// export default function HistoryPage() {
//   return (
//     <AuthGuard>
//       <SidebarProvider>
//         <div className="flex min-h-screen w-full bg-background">
//           <AppSidebar />
//           <div className="flex flex-1 flex-col">
//             <TopNav />
//             <main className="flex-1 p-6">
//               <HistoryView />
//             </main>
//           </div>
//         </div>
//       </SidebarProvider>
//     </AuthGuard>
//   )
// }





// app/history/page.tsx
import { HistoryView } from "@/components/history-view"
import { AuthGuard } from "@/components/auth-guard"
import { TopNav } from "@/components/top-nav"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"

export default function HistoryPage() {
  return (
    <AuthGuard>
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <AppSidebar />
          <SidebarInset>
          <TopNav />
            <main className="flex-1 p-8">
              <HistoryView />
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </AuthGuard>
  )
}