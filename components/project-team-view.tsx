// // components/project-team-view.tsx
// "use client"

// import * as React from "react"
// import { User, Mail } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Skeleton } from "@/components/ui/skeleton"
// import { useProjectMembers } from "@/hooks/use-project-members"

// type ProjectTeamViewProps = {
//   projectId: string
// }

// const ITEMS_PER_PAGE = 9

// export function ProjectTeamView({ projectId }: ProjectTeamViewProps) {
//   const { data: members = [], isLoading } = useProjectMembers(projectId)
//   const [currentPage, setCurrentPage] = React.useState(1)

//   const totalPages = Math.ceil(members.length / ITEMS_PER_PAGE)
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
//   const endIndex = startIndex + ITEMS_PER_PAGE
//   const paginatedMembers = members.slice(startIndex, endIndex)

//   if (isLoading) {
//     return (
//       <div className="space-y-6">
//         <Skeleton className="h-10 w-48" />
//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//           {Array.from({ length: 9 }).map((_, i) => (
//             <Skeleton key={i} className="h-40" />
//           ))}
//         </div>
//       </div>
//     )
//   }

//   if (members.length === 0) {
//     return (
//       <div className="flex items-center justify-center min-h-[300px]">
//         <div className="text-center">
//           <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
//           <p className="text-muted-foreground">Aucun membre assigné à ce projet</p>
//           <p className="text-sm text-muted-foreground mt-2">
//             La gestion des membres sera disponible prochainement
//           </p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h3 className="text-lg font-semibold">Membres de l'Équipe</h3>
//           <p className="text-sm text-muted-foreground">{members.length} membre(s) assigné(s)</p>
//         </div>
//       </div>

//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {paginatedMembers.map((member) => (
//           <Card key={member.id} className="bg-card hover:border-primary/50 transition-colors">
//             <CardContent className="p-6">
//               <div className="flex items-start gap-3 mb-4">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
//                   <User className="h-6 w-6" />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <h4 className="font-semibold text-foreground truncate">{member.memberName}</h4>
//                   <p className="text-sm text-muted-foreground truncate">{member.memberRole}</p>
//                 </div>
//               </div>

//               {member.memberEmail && (
//                 <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
//                   <Mail className="h-4 w-4 flex-shrink-0" />
//                   <span className="truncate">{member.memberEmail}</span>
//                 </div>
//               )}

//               {member.role && (
//                 <Badge variant="outline" className="mt-2">
//                   {member.role}
//                 </Badge>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {totalPages > 1 && (
//         <div className="flex items-center justify-center gap-2 pt-4">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//             disabled={currentPage === 1}
//           >
//             Précédent
//           </Button>
//           <div className="flex items-center gap-1">
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <Button
//                 key={page}
//                 variant={currentPage === page ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setCurrentPage(page)}
//                 className="w-10"
//               >
//                 {page}
//               </Button>
//             ))}
//           </div>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//             disabled={currentPage === totalPages}
//           >
//             Suivant
//           </Button>
//         </div>
//       )}
//     </div>
//   )
// }





// components/project-team-view.tsx
"use client"

import * as React from "react"
import { ArrowLeft, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useProjectMembers } from "@/hooks/use-project-members"
import { useProject } from "@/hooks/use-projects"

type ProjectTeamViewProps = {
  projectId: string
}

const ITEMS_PER_PAGE = 9

export function ProjectTeamView({ projectId }: ProjectTeamViewProps) {
  const router = useRouter()
  const { data: project, isLoading: projectLoading } = useProject(projectId)
  const { data: members = [], isLoading: membersLoading } = useProjectMembers(projectId)
  const [currentPage, setCurrentPage] = React.useState(1)

  const isLoading = projectLoading || membersLoading

  const totalPages = Math.ceil(members.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedMembers = members.slice(startIndex, endIndex)

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="h-9 w-96" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} className="h-40" />
          ))}
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">Projet introuvable</p>
          <Button asChild>
            <Link href="/projects">Retour aux projets</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Équipe du Projet
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {project.name}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Résumé</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Membres assignés</span>
              <p className="text-2xl font-bold">{members.length}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {members.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Aucun membre assigné à ce projet</p>
            <p className="text-sm text-muted-foreground mt-2">
              La gestion des membres sera disponible prochainement
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paginatedMembers.map((member) => (
              <Card key={member.id} className="bg-card hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                      <User className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground truncate">{member.memberName}</h4>
                      <p className="text-sm text-muted-foreground truncate">{member.memberRole}</p>
                    </div>
                  </div>

                  {member.memberEmail && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{member.memberEmail}</span>
                    </div>
                  )}

                  {member.role && (
                    <Badge variant="outline" className="mt-2">
                      {member.role}
                    </Badge>
                  )}
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
    </div>
  )
}