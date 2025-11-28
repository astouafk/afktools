module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/app/select-society/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/app/select-society/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/app/select-society/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// //app/select-society/page.tsx
// "use client"
// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Building2, Plus, Search, Users, FolderKanban, ChevronLeft, ChevronRight } from "lucide-react"
// import { ThemeToggle } from "@/components/theme-toggle"
// import { AuthGuard } from "@/components/auth-guard"
// // Mock data - replace with your backend data
// const allSocieties = [
//   { id: 1, name: "TechCorp Solutions", industry: "Technology", projectCount: 12, memberCount: 24 },
//   { id: 2, name: "Digital Marketing Agency", industry: "Marketing", projectCount: 8, memberCount: 15 },
//   { id: 3, name: "StartupXYZ", industry: "E-commerce", projectCount: 5, memberCount: 10 },
//   { id: 4, name: "Global Innovations Ltd", industry: "Consulting", projectCount: 18, memberCount: 42 },
//   { id: 5, name: "Creative Studios Inc", industry: "Design", projectCount: 14, memberCount: 28 },
//   { id: 6, name: "Finance Solutions Pro", industry: "Finance", projectCount: 22, memberCount: 56 },
//   { id: 7, name: "Healthcare Systems", industry: "Healthcare", projectCount: 9, memberCount: 18 },
//   { id: 8, name: "Education Platform", industry: "Education", projectCount: 11, memberCount: 22 },
//   { id: 9, name: "Retail Ventures", industry: "Retail", projectCount: 7, memberCount: 14 },
// ]
// export default function SelectSocietyPage() {
//   const router = useRouter()
//   const [searchQuery, setSearchQuery] = useState("")
//   const [currentPage, setCurrentPage] = useState(1)
//   const itemsPerPage = 6
//   const filteredSocieties = allSocieties.filter((society) =>
//     society.name.toLowerCase().includes(searchQuery.toLowerCase()),
//   )
//   const totalPages = Math.ceil(filteredSocieties.length / itemsPerPage)
//   const startIndex = (currentPage - 1) * itemsPerPage
//   const endIndex = startIndex + itemsPerPage
//   const currentSocieties = filteredSocieties.slice(startIndex, endIndex)
//   const handleSelectSociety = (societyId: number) => {
//     router.push("/")
//   }
//   const handleCreateNew = () => {
//     router.push("/create-company")
//   }
//   return (
//     <AuthGuard>
//       <div className="min-h-screen flex items-center justify-center bg-background p-6">
//         <div className="fixed top-4 right-4 z-50">
//           <ThemeToggle />
//         </div>
//         <div className="w-full max-w-5xl space-y-8">
//           {/* Header with icon */}
//           <div className="text-center space-y-4">
//             <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
//               <Building2 className="w-8 h-8 text-primary-foreground" />
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold text-foreground">Choisir une Entreprise </h1>
//               <p className="text-muted-foreground mt-2">Choisissez l'espace de travail d'entreprise auquel vous souhaitez accéder.</p>
//             </div>
//           </div>
//           {/* Search Bar */}
//           <div className="max-w-md mx-auto">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
//               <Input
//                 type="text"
//                 placeholder="Chercher une entreprise..."
//                 value={searchQuery}
//                 onChange={(e) => {
//                   setSearchQuery(e.target.value)
//                   setCurrentPage(1) // Reset to first page on search
//                 }}
//                 className="pl-10 h-11 bg-card border-border"
//               />
//             </div>
//           </div>
//           {/* Companies Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {currentSocieties.map((society) => (
//               <button
//                 key={society.id}
//                 onClick={() => handleSelectSociety(society.id)}
//                 className="bg-card border border-border rounded-xl p-6 text-left hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 group"
//               >
//                 <div className="space-y-4">
//                   <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
//                     <Building2 className="w-6 h-6 text-primary" />
//                   </div>
//                   <div className="space-y-1">
//                     <h3 className="font-semibold text-foreground text-lg">{society.name}</h3>
//                     <p className="text-sm text-muted-foreground">{society.industry}</p>
//                   </div>
//                   <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2 border-t border-border">
//                     <div className="flex items-center gap-1">
//                       <FolderKanban className="w-4 h-4" />
//                       <span>{society.projectCount} projets</span>
//                     </div>
//                     <div className="flex items-center gap-1">
//                       <Users className="w-4 h-4" />
//                       <span>{society.memberCount} membres</span>
//                     </div>
//                   </div>
//                 </div>
//               </button>
//             ))}
//             {/* Create New Company Card */}
//             <button
//               onClick={handleCreateNew}
//               className="bg-primary/10 border-2 border-dashed border-primary rounded-xl p-6 text-left hover:bg-primary/20 transition-all group min-h-[200px] flex flex-col items-center justify-center"
//             >
//               <div className="space-y-3 text-center">
//                 <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
//                   <Plus className="w-6 h-6 text-primary-foreground" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-primary text-lg">Nouvelle Entreprise</h3>
//                   <p className="text-sm text-muted-foreground mt-1">créer un nouvel espace de travail</p>
//                 </div>
//               </div>
//             </button>
//           </div>
//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex items-center justify-center gap-2">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//               >
//                 <ChevronLeft className="w-4 h-4 mr-1" />
//                 Previous
//               </Button>
//               <div className="flex items-center gap-1">
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                   <Button
//                     key={page}
//                     variant={currentPage === page ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setCurrentPage(page)}
//                     className="w-9"
//                   >
//                     {page}
//                   </Button>
//                 ))}
//               </div>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//               >
//                 Next
//                 <ChevronRight className="w-4 h-4 ml-1" />
//               </Button>
//             </div>
//           )}
//           {/* Bottom Actions */}
//           <div className="flex items-center justify-center gap-4">
//             <Button variant="ghost" onClick={() => router.push("/login")}>
//               <ChevronLeft className="w-4 h-4 mr-1" />
//               Back
//             </Button>
//           </div>
//         </div>
//       </div>
//     </AuthGuard>
//   )
// }
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/app/select-society/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/app/select-society/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__27a86bad._.js.map