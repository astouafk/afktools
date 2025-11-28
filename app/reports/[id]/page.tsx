// app/reports/[id]/page.tsx

// import { TopNav } from "@/components/top-nav"
// import { AppSidebar } from "@/components/app-sidebar"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import { GlobalReportDetailView } from "@/components/global-report-detail-view"
// import { AuthGuard } from "@/components/auth-guard"

// export default async function GlobalReportDetailPage({ 
//   params 
// }: { 
//   params: Promise<{ reportId: string }> 
// }) {
//   const { reportId } = await params
  
//   return (
//     <AuthGuard>
//       <SidebarProvider>
//         <div className="flex min-h-screen w-full bg-background">
//           <AppSidebar />
//           <div className="flex flex-1 flex-col">
//             <TopNav />
//             <main className="flex-1 p-6">
//               <GlobalReportDetailView reportId={reportId} />
//             </main>
//           </div>
//         </div>
//       </SidebarProvider>
//     </AuthGuard>
//   )
// }