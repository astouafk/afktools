// // components/projects-view.tsx
// "use client"

// import * as React from "react"
// import { Plus, Search, Building, Calendar, Eye, Edit, Monitor, Smartphone, Globe, Megaphone } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import { CreateProjectDialog } from "@/components/create-project-dialog"
// import { EditProjectDialog } from "@/components/edit-project-dialog"
// import { Progress } from "@/components/ui/progress"
// import { useProjects } from "@/hooks/use-projects"
// import { Skeleton } from "@/components/ui/skeleton"
// import Link from "next/link"
// import { CheckCircle2, AlertCircle } from "lucide-react"
// import type { Project } from "@/lib/services/project-service"

// const ITEMS_PER_PAGE = 6

// const getProjectIcon = (type: string) => {
//   switch (type) {
//     case "Web App": return <Monitor className="h-4 w-4" />
//     case "Mobile App": return <Smartphone className="h-4 w-4" />
//     case "Website": return <Globe className="h-4 w-4" />
//     case "Social Media Campaign": return <Megaphone className="h-4 w-4" />
//     default: return <Monitor className="h-4 w-4" />
//   }
// }

// const getTypeColor = (type: string) => {
//   switch (type) {
//     case "Web App": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
//     case "Mobile App": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
//     case "Website": return "bg-green-500/10 text-green-500 border-green-500/20"
//     case "Social Media Campaign": return "bg-pink-500/10 text-pink-500 border-pink-500/20"
//     default: return "bg-blue-500/10 text-blue-500 border-blue-500/20"
//   }
// }

// const translateType = (type: string) => {
//   switch (type) {
//     case "Web App": return "Application Web"
//     case "Mobile App": return "Application Mobile"
//     case "Website": return "Site Web"
//     case "Social Media Campaign": return "Campagne Réseaux Sociaux"
//     default: return type
//   }
// }

// const translateStatus = (status: string) => {
//   return status === "Open" ? "Ouvert" : "Terminé"
// }

// export function ProjectsView() {
//   const companyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
//   const { data: projects = [], isLoading } = useProjects(companyId)
  
//   const [filterStatus, setFilterStatus] = React.useState<string>("all")
//   const [filterType, setFilterType] = React.useState<string>("all")
//   const [searchQuery, setSearchQuery] = React.useState("")
//   const [createDialogOpen, setCreateDialogOpen] = React.useState(false)
//   const [editProject, setEditProject] = React.useState<Project | null>(null)
//   const [currentPage, setCurrentPage] = React.useState(1)

//   const filteredProjects = projects.filter((project) => {
//     const matchesStatus = filterStatus === "all" || project.status === filterStatus
//     const matchesType = filterType === "all" || project.type === filterType
//     const matchesSearch =
//       project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       project.client?.toLowerCase().includes(searchQuery.toLowerCase())
//     return matchesStatus && matchesType && matchesSearch
//   })

//   const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
//   const endIndex = startIndex + ITEMS_PER_PAGE
//   const paginatedProjects = filteredProjects.slice(startIndex, endIndex)

//   if (isLoading) {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <Skeleton className="h-9 w-32 mb-2" />
//             <Skeleton className="h-4 w-64" />
//           </div>
//           <Skeleton className="h-10 w-40" />
//         </div>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {Array.from({ length: 6 }).map((_, i) => (
//             <Skeleton key={i} className="h-72 rounded-xl" />
//           ))}
//         </div>
//       </div>
//     )
//   }

//   if (!companyId) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <div className="text-center">
//           <p className="text-muted-foreground">Aucune entreprise sélectionnée</p>
//           <Button asChild className="mt-4">
//             <Link href="/select-society">Sélectionner une entreprise</Link>
//           </Button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-semibold tracking-tight text-foreground">Projets</h1>
//           <p className="text-sm text-muted-foreground mt-1">Gérez et suivez tous vos projets</p>
//         </div>
//         <Button onClick={() => setCreateDialogOpen(true)} size="lg" className="bg-primary hover:bg-primary/90">
//           <Plus className="mr-2 h-4 w-4" />
//           Nouveau Projet
//         </Button>
//       </div>

//       <div className="flex flex-col gap-4 md:flex-row md:items-center bg-muted/30 p-4 rounded-lg">
//         <div className="relative flex-1">
//           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//           <Input
//             placeholder="Rechercher un projet..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="pl-10 bg-background"
//           />
//         </div>
//         <div className="flex gap-3">
//           <Select value={filterStatus} onValueChange={setFilterStatus}>
//             <SelectTrigger className="w-[160px] bg-background">
//               <SelectValue placeholder="Tous les statuts" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">Tous les statuts</SelectItem>
//               <SelectItem value="Open">Ouvert</SelectItem>
//               <SelectItem value="Completed">Terminé</SelectItem>
//             </SelectContent>
//           </Select>
//           <Select value={filterType} onValueChange={setFilterType}>
//             <SelectTrigger className="w-[200px] bg-background">
//               <SelectValue placeholder="Tous les types" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">Tous les types</SelectItem>
//               <SelectItem value="Web App">Application Web</SelectItem>
//               <SelectItem value="Mobile App">Application Mobile</SelectItem>
//               <SelectItem value="Website">Site Web</SelectItem>
//               <SelectItem value="Social Media Campaign">Campagne</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </div>

//       {paginatedProjects.length === 0 ? (
//   <div className="flex items-center justify-center min-h-[400px]">
//     <div className="text-center">
//       {projects.length === 0 ? (
//         // Cas 1: Vraiment aucun projet créé
//         <>
//           <p className="text-muted-foreground">Aucun projet trouvé</p>
//           <Button onClick={() => setCreateDialogOpen(true)} className="mt-4">
//             <Plus className="mr-2 h-4 w-4" />
//             Créer votre premier projet
//           </Button>
//         </>
//       ) : (
//         // Cas 2: Projets existent mais filtrés
//         <>
//           <p className="text-muted-foreground">Aucun projet ne correspond aux filtres sélectionnés</p>
//           <Button 
//             variant="outline"
//             onClick={() => {
//               setFilterStatus("all")
//               setFilterType("all")
//               setSearchQuery("")
//             }} 
//             className="mt-4"
//           >
//             Réinitialiser les filtres
//           </Button>
//         </>
//       )}
//     </div>
//   </div>
// ) : (
//         <>
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//             {paginatedProjects.map((project) => (
//               <Card key={project.id} className="bg-card border-border hover:border-primary/50 transition-colors">
//                 <CardContent className="p-6 space-y-4">
//                   <div className="space-y-3">
//                     <h3 className="text-lg font-semibold text-foreground line-clamp-1">{project.name}</h3>
//                     <div className="flex items-center gap-2 flex-wrap">
//                       <Badge variant="outline" className={`${getTypeColor(project.type)} flex items-center gap-1`}>
//                         {getProjectIcon(project.type)}
//                         {translateType(project.type)}
//                       </Badge>
//                       <Badge
//                         variant={project.status === "Open" ? "default" : "secondary"}
//                         className={
//                           project.status === "Open"
//                             ? "bg-green-500/10 text-green-500 border-green-500/20"
//                             : "bg-muted text-muted-foreground"
//                         }
//                       >
//                         {translateStatus(project.status)}
//                       </Badge>
//                     </div>
//                   </div>

//                   <div className="space-y-2 text-sm text-muted-foreground">
//                     <div className="flex items-center gap-2">
//                       <Building className="h-4 w-4" />
//                       <span>{project.client || "Aucun client"}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Calendar className="h-4 w-4" />
//                       <span>Début : {new Date(project.startDate).toLocaleDateString('fr-FR')}</span>
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-muted-foreground">Progression</span>
//                       <span className="font-semibold text-foreground">{project.progress}%</span>
//                     </div>
//                     <Progress value={project.progress} className="h-2" />
//                   </div>

//                   <div className="flex items-center gap-2 text-sm">
//                     {project.analysisComplete ? (
//                       <>
//                         <CheckCircle2 className="h-4 w-4 text-green-500" />
//                         <span className="text-green-500">Analyse Complétée</span>
//                       </>
//                     ) : (
//                       <>
//                         <AlertCircle className="h-4 w-4 text-amber-500" />
//                         <span className="text-amber-500">Analyse en Cours</span>
//                       </>
//                     )}
//                   </div>

//                   <div className="flex items-center gap-2 pt-2">
//                   <Button asChild className="flex-1">
//                     <Link href={`/project/${project.id}`}>
//                       <Eye className="mr-2 h-4 w-4" />
//                       Voir Détails
//                     </Link>
//                   </Button>
//                     <Button 
//                       variant="outline" 
//                       size="icon" 
//                       disabled={project.status === "Completed"}
//                       onClick={() => setEditProject(project)}
//                     >
//                       <Edit className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {totalPages > 1 && (
//             <div className="flex items-center justify-center gap-2 pt-4">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                 disabled={currentPage === 1}
//               >
//                 Précédent
//               </Button>
//               <div className="flex items-center gap-1">
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//                   <Button
//                     key={page}
//                     variant={currentPage === page ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setCurrentPage(page)}
//                     className="w-10"
//                   >
//                     {page}
//                   </Button>
//                 ))}
//               </div>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//                 disabled={currentPage === totalPages}
//               >
//                 Suivant
//               </Button>
//             </div>
//           )}
//         </>
//       )}

//       {companyId && (
//         <>
//           <CreateProjectDialog 
//             open={createDialogOpen} 
//             onOpenChange={setCreateDialogOpen}
//             companyId={companyId}
//           />
//           {editProject && (
//             <EditProjectDialog
//               project={editProject}
//               open={!!editProject}
//               onOpenChange={(open) => !open && setEditProject(null)}
//             />
//           )}
//         </>
//       )}
//     </div>
//   )
// }




// components/projects-view.tsx
"use client"

import * as React from "react"
import { Plus, Search, Building, Calendar, Eye, Edit, Monitor, Smartphone, Globe, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CreateProjectDialog } from "@/components/create-project-dialog"
import { EditProjectDialog } from "@/components/edit-project-dialog"
import { Progress } from "@/components/ui/progress"
import { useProjects } from "@/hooks/use-projects"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"
import { CheckCircle2, AlertCircle } from "lucide-react"
import type { Project } from "@/lib/services/project-service"

const ITEMS_PER_PAGE = 6

const getProjectIcon = (type: string) => {
  switch (type) {
    case "Web App": return <Monitor className="h-4 w-4" />
    case "Mobile App": return <Smartphone className="h-4 w-4" />
    case "Website": return <Globe className="h-4 w-4" />
    case "Social Media Campaign": return <Megaphone className="h-4 w-4" />
    default: return <Monitor className="h-4 w-4" />
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "Web App": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
    case "Mobile App": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
    case "Website": return "bg-green-500/10 text-green-500 border-green-500/20"
    case "Social Media Campaign": return "bg-pink-500/10 text-pink-500 border-pink-500/20"
    default: return "bg-blue-500/10 text-blue-500 border-blue-500/20"
  }
}

const translateType = (type: string) => {
  switch (type) {
    case "Web App": return "Application Web"
    case "Mobile App": return "Application Mobile"
    case "Website": return "Site Web"
    case "Social Media Campaign": return "Campagne Réseaux Sociaux"
    default: return type
  }
}

const translateStatus = (status: string) => {
  return status === "Open" ? "Ouvert" : "Terminé"
}

export function ProjectsView() {
  const companyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  const { data: projects = [], isLoading } = useProjects(companyId)
  
  const [filterStatus, setFilterStatus] = React.useState<string>("all")
  const [filterType, setFilterType] = React.useState<string>("all")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false)
  const [editProject, setEditProject] = React.useState<Project | null>(null)
  const [currentPage, setCurrentPage] = React.useState(1)

  const filteredProjects = projects.filter((project) => {
    const matchesStatus = filterStatus === "all" || project.status === filterStatus
    const matchesType = filterType === "all" || project.type === filterType
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client?.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesStatus && matchesType && matchesSearch
  })

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex)

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="h-9 w-32 mb-2" />
            <Skeleton className="h-4 w-64" />
          </div>
          <Skeleton className="h-10 w-40" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-72 rounded-xl" />
          ))}
        </div>
      </div>
    )
  }

  if (!companyId) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-muted-foreground">Aucune entreprise sélectionnée</p>
          <Button asChild className="mt-4">
            <Link href="/select-society">Sélectionner une entreprise</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Projets</h1>
          <p className="text-sm text-muted-foreground mt-1">Gérez et suivez tous vos projets</p>
        </div>
        <Button onClick={() => setCreateDialogOpen(true)} size="lg" className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Nouveau Projet
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center bg-muted/30 p-4 rounded-lg">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher un projet..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background"
          />
        </div>
        <div className="flex gap-3">
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[160px] bg-background">
              <SelectValue placeholder="Tous les statuts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              <SelectItem value="Open">Ouvert</SelectItem>
              <SelectItem value="Completed">Terminé</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[200px] bg-background">
              <SelectValue placeholder="Tous les types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="Web App">Application Web</SelectItem>
              <SelectItem value="Mobile App">Application Mobile</SelectItem>
              <SelectItem value="Website">Site Web</SelectItem>
              <SelectItem value="Social Media Campaign">Campagne</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {paginatedProjects.length === 0 ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            {projects.length === 0 ? (
              <>
                <p className="text-muted-foreground">Aucun projet trouvé</p>
                <Button onClick={() => setCreateDialogOpen(true)} className="mt-4">
                  <Plus className="mr-2 h-4 w-4" />
                  Créer votre premier projet
                </Button>
              </>
            ) : (
              <>
                <p className="text-muted-foreground">Aucun projet ne correspond aux filtres sélectionnés</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setFilterStatus("all")
                    setFilterType("all")
                    setSearchQuery("")
                  }} 
                  className="mt-4"
                >
                  Réinitialiser les filtres
                </Button>
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedProjects.map((project) => (
              <Card key={project.id} className="bg-card border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground line-clamp-1">{project.name}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="outline" className={`${getTypeColor(project.type)} flex items-center gap-1`}>
                        {getProjectIcon(project.type)}
                        {translateType(project.type)}
                      </Badge>
                      <Badge
                        variant={project.status === "Open" ? "default" : "secondary"}
                        className={
                          project.status === "Open"
                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                            : "bg-muted text-muted-foreground"
                        }
                      >
                        {translateStatus(project.status)}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4" />
                      <span>{project.client || "Aucun client"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>Début : {new Date(project.startDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>

                  {/* ✅ MODIFIÉ - Affichage de analysisProgress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progression Analyse</span>
                      <span className="font-semibold text-foreground">{project.analysisProgress}%</span>
                    </div>
                    <Progress value={project.analysisProgress} className="h-2" />
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    {project.analysisComplete ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-green-500">Phase d'Analyse Bouclée</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-4 w-4 text-amber-500" />
                        <span className="text-amber-500">Analyse en Cours</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Button asChild className="flex-1">
                      <Link href={`/project/${project.id}`}>
                        <Eye className="mr-2 h-4 w-4" />
                        Voir Détails
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      disabled={project.status === "Completed"}
                      onClick={() => setEditProject(project)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Précédent
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-10"
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Suivant
              </Button>
            </div>
          )}
        </>
      )}

      {companyId && (
        <>
          <CreateProjectDialog 
            open={createDialogOpen} 
            onOpenChange={setCreateDialogOpen}
            companyId={companyId}
          />
          {editProject && (
            <EditProjectDialog
              project={editProject}
              open={!!editProject}
              onOpenChange={(open) => !open && setEditProject(null)}
            />
          )}
        </>
      )}
    </div>
  )
}