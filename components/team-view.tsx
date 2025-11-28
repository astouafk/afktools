// //components/team-view.tsx
// "use client"

// import * as React from "react"
// import { Plus, MoreVertical, Edit, Trash2, Mail, User } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import { Badge } from "@/components/ui/badge"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import { AlertCircle } from "lucide-react"
// import { AddTeamMemberDialog } from "@/components/add-team-member-dialog"
// import { EditTeamMemberDialog } from "@/components/edit-team-member-dialog"

// type TeamMember = {
//   id: number
//   name: string
//   role: string
//   email?: string
//   activeTasks: number
// }

// const mockTeamMembers: TeamMember[] = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "Lead Designer",
//     email: "sarah.johnson@company.com",
//     activeTasks: 5,
//   },
//   {
//     id: 2,
//     name: "Mike Chen",
//     role: "Backend Developer",
//     email: "mike.chen@company.com",
//     activeTasks: 8,
//   },
//   {
//     id: 3,
//     name: "Alex Smith",
//     role: "Frontend Developer",
//     email: "alex.smith@company.com",
//     activeTasks: 3,
//   },
//   {
//     id: 4,
//     name: "Jessica Lee",
//     role: "Project Manager",
//     email: "jessica.lee@company.com",
//     activeTasks: 12,
//   },
//   {
//     id: 5,
//     name: "David Brown",
//     role: "QA Engineer",
//     activeTasks: 0,
//   },
// ]

// export function TeamView() {
//   const [members, setMembers] = React.useState<TeamMember[]>(mockTeamMembers)
//   const [searchQuery, setSearchQuery] = React.useState("")
//   const [addDialogOpen, setAddDialogOpen] = React.useState(false)
//   const [editMember, setEditMember] = React.useState<TeamMember | null>(null)
//   const [deleteAttempt, setDeleteAttempt] = React.useState<TeamMember | null>(null)

//   const filteredMembers = members.filter(
//     (member) =>
//       member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       member.role.toLowerCase().includes(searchQuery.toLowerCase()),
//   )

//   const handleDelete = (member: TeamMember) => {
//     if (member.activeTasks > 0) {
//       setDeleteAttempt(member)
//       setTimeout(() => setDeleteAttempt(null), 5000)
//     } else {
//       setMembers(members.filter((m) => m.id !== member.id))
//     }
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-semibold tracking-tight text-card-foreground">Team Members</h1>
//           <p className="text-sm text-muted-foreground">Manage team members and their task assignments.</p>
//         </div>
//         <Button onClick={() => setAddDialogOpen(true)}>
//           <Plus className="mr-2 h-4 w-4" />
//           Add Team Member
//         </Button>
//       </div>

//       <div className="flex items-center gap-4">
//         <div className="flex-1">
//           <Input
//             placeholder="Search by name or role..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="max-w-md"
//           />
//         </div>
//       </div>

//       {deleteAttempt && (
//         <Alert variant="destructive">
//           <AlertCircle className="h-4 w-4" />
//           <AlertDescription>
//             Cannot delete {deleteAttempt.name} - they have {deleteAttempt.activeTasks} active task
//             {deleteAttempt.activeTasks !== 1 ? "s" : ""}. Reassign their tasks before deleting.
//           </AlertDescription>
//         </Alert>
//       )}

//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {filteredMembers.map((member) => (
//           <Card key={member.id} className="bg-card">
//             <CardContent className="p-6">
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
//                     <User className="h-6 w-6" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-card-foreground">{member.name}</h3>
//                     <p className="text-sm text-muted-foreground">{member.role}</p>
//                   </div>
//                 </div>
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button variant="ghost" size="icon">
//                       <MoreVertical className="h-4 w-4" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuItem onClick={() => setEditMember(member)}>
//                       <Edit className="mr-2 h-4 w-4" />
//                       Edit Member
//                     </DropdownMenuItem>
//                     <DropdownMenuItem
//                       className={member.activeTasks > 0 ? "text-muted-foreground" : "text-destructive"}
//                       onClick={() => handleDelete(member)}
//                     >
//                       <Trash2 className="mr-2 h-4 w-4" />
//                       Delete Member
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>

//               {member.email && (
//                 <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
//                   <Mail className="h-4 w-4" />
//                   {member.email}
//                 </div>
//               )}

//               <div className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
//                 <span className="text-sm text-foreground">Active Tasks</span>
//                 <Badge variant={member.activeTasks > 0 ? "default" : "secondary"}>{member.activeTasks}</Badge>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <AddTeamMemberDialog open={addDialogOpen} onOpenChange={setAddDialogOpen} />
//       {editMember && (
//         <EditTeamMemberDialog
//           member={editMember}
//           open={!!editMember}
//           onOpenChange={(open) => !open && setEditMember(null)}
//         />
//       )}
//     </div>
//   )
// }



// components/team-view.tsx
"use client"

import * as React from "react"
import { Plus, MoreVertical, Edit, Trash2, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { AddTeamMemberDialog } from "@/components/add-team-member-dialog"
import { EditTeamMemberDialog } from "@/components/edit-team-member-dialog"
import { useMembers, useDeleteMember } from "@/hooks/use-members"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"

export function TeamView() {
  const companyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  const { data: members = [], isLoading } = useMembers(companyId)
  const deleteMember = useDeleteMember()
  const { toast } = useToast()
  
  const [searchQuery, setSearchQuery] = React.useState("")
  const [addDialogOpen, setAddDialogOpen] = React.useState(false)
  const [editMember, setEditMember] = React.useState<any>(null)
  const [deleteAttempt, setDeleteAttempt] = React.useState<any>(null)

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleDelete = async (member: any) => {
    // TODO: Vérifier si le membre a des tâches actives avant suppression
    const hasActiveTasks = false // À implémenter avec une vraie vérification
    
    if (hasActiveTasks) {
      setDeleteAttempt(member)
      setTimeout(() => setDeleteAttempt(null), 5000)
    } else {
      try {
        await deleteMember.mutateAsync(member.id)
        toast({
          title: "Membre supprimé",
          description: `${member.name} a été retiré de l'équipe.`
        })
      } catch (error: any) {
        toast({
          title: "Erreur",
          description: error.message,
          variant: "destructive"
        })
      }
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <Skeleton className="h-9 w-48 mb-2" />
            <Skeleton className="h-4 w-96" />
          </div>
          <Skeleton className="h-10 w-48" />
        </div>
        <Skeleton className="h-10 w-full max-w-md" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-48" />
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
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">Membres de l'Équipe</h1>
          <p className="text-sm text-muted-foreground mt-1">Gérez les membres de votre équipe et leurs assignations.</p>
        </div>
        <Button onClick={() => setAddDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un Membre
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <Input
            placeholder="Rechercher par nom ou rôle..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md"
          />
        </div>
      </div>

      {deleteAttempt && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Impossible de supprimer {deleteAttempt.name} - ils ont des tâches actives. 
            Réassignez leurs tâches avant de les supprimer.
          </AlertDescription>
        </Alert>
      )}

      {filteredMembers.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            {members.length === 0 ? (
              <>
                <p className="text-muted-foreground">Aucun membre dans l'équipe</p>
                <Button onClick={() => setAddDialogOpen(true)} className="mt-4">
                  <Plus className="mr-2 h-4 w-4" />
                  Ajouter votre premier membre
                </Button>
              </>
            ) : (
              <>
                <p className="text-muted-foreground">Aucun membre ne correspond à la recherche</p>
                <Button 
                  variant="outline"
                  onClick={() => setSearchQuery("")} 
                  className="mt-4"
                >
                  Réinitialiser la recherche
                </Button>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="bg-card hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <User className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setEditMember(member)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Éditer le Membre
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-destructive"
                        onClick={() => handleDelete(member)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Supprimer le Membre
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {member.email && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Mail className="h-4 w-4" />
                    <span className="truncate">{member.email}</span>
                  </div>
                )}

                <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-3">
                  <span className="text-sm text-muted-foreground">Tâches Actives</span>
                  <Badge variant="secondary">0</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {companyId && (
        <>
          <AddTeamMemberDialog 
            open={addDialogOpen} 
            onOpenChange={setAddDialogOpen}
            companyId={companyId}
          />
          {editMember && (
            <EditTeamMemberDialog
              member={editMember}
              open={!!editMember}
              onOpenChange={(open) => !open && setEditMember(null)}
            />
          )}
        </>
      )}
    </div>
  )
}