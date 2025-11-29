// components/team-view.tsx
"use client"

import * as React from "react"
import { Plus, Users, Mail, Briefcase, MoreVertical, Trash2, Edit, Search, FolderKanban, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useMembers, useDeleteMember } from "@/hooks/use-members"
import { useProjects } from "@/hooks/use-projects"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"
import { CreateMemberDialog } from "@/components/create-member-dialog"
import { EditMemberDialog } from "@/components/edit-member-dialog"
import { getProjectMembers } from "@/lib/services/project-member-service"
import type { Member } from "@/lib/services/member-service"
import Link from "next/link"

const ITEMS_PER_PAGE = 9

export function TeamView() {
  const { toast } = useToast()
  
  // Récupérer companyId depuis localStorage
  const selectedCompanyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  
  const { data: members = [], isLoading } = useMembers(selectedCompanyId)
  const { data: projects = [] } = useProjects(selectedCompanyId)
  const deleteMember = useDeleteMember()
  
  const [searchQuery, setSearchQuery] = React.useState("")
  const [currentPage, setCurrentPage] = React.useState(1)
  const [createDialogOpen, setCreateDialogOpen] = React.useState(false)
  const [editDialogOpen, setEditDialogOpen] = React.useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false)
  const [projectsDialogOpen, setProjectsDialogOpen] = React.useState(false)
  const [memberToEdit, setMemberToEdit] = React.useState<Member | null>(null)
  const [memberToDelete, setMemberToDelete] = React.useState<string | null>(null)
  const [selectedMemberForProjects, setSelectedMemberForProjects] = React.useState<Member | null>(null)
  
  // ✅ État pour stocker les projectMembers de tous les projets
  const [allProjectMembers, setAllProjectMembers] = React.useState<Record<string, any[]>>({})

  // ✅ Charger les projectMembers de tous les projets une seule fois
  React.useEffect(() => {
    async function loadAllProjectMembers() {
      const projectMembersMap: Record<string, any[]> = {}
      
      for (const project of projects) {
        try {
          const projectMembers = await getProjectMembers(project.id)
          projectMembersMap[project.id] = projectMembers
        } catch (error) {
          console.error(`Error loading project members for ${project.id}:`, error)
          projectMembersMap[project.id] = []
        }
      }
      
      setAllProjectMembers(projectMembersMap)
    }
    
    if (projects.length > 0) {
      loadAllProjectMembers()
    }
  }, [projects])

  // ✅ Fonction pour compter les projets d'un membre
  const getMemberProjectCount = (memberId: string) => {
    return projects.filter(project => {
      const projectMembers = allProjectMembers[project.id] || []
      return projectMembers.some(pm => pm.memberId === memberId)
    }).length
  }

  // ✅ Fonction pour obtenir les projets d'un membre
  const getMemberProjects = (memberId: string) => {
    return projects.filter(project => {
      const projectMembers = allProjectMembers[project.id] || []
      return projectMembers.some(pm => pm.memberId === memberId)
    })
  }

  // Filtrage par recherche
  const filteredMembers = members.filter((member) => {
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (member.role && member.role.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesSearch
  })

  // Pagination
  const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedMembers = filteredMembers.slice(startIndex, endIndex)

  // Reset à la page 1 si la recherche change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [searchQuery])

  // Fonction pour obtenir les initiales
  const getInitials = (name: string) => {
    const parts = name.trim().split(' ')
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  // Fonction de suppression
  const handleDelete = async () => {
    if (!memberToDelete) return
    
    try {
      await deleteMember.mutateAsync(memberToDelete)
      toast({
        title: "Membre supprimé",
        description: "Le membre a été supprimé avec succès."
      })
      setDeleteDialogOpen(false)
      setMemberToDelete(null)
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      })
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-40" />
        </div>
        <Skeleton className="h-32" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} className="h-48" />
          ))}
        </div>
      </div>
    )
  }

  if (!selectedCompanyId) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <Users className="h-12 w-12 text-muted-foreground mx-auto" />
          <p className="text-muted-foreground">Veuillez sélectionner une entreprise</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Équipe
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gérez les membres de votre entreprise
          </p>
        </div>
        <Button onClick={() => setCreateDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Ajouter un Membre
        </Button>
      </div>

      {/* Card Résumé */}
      <Card>
        <CardHeader>
          <CardTitle>Résumé</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <span className="text-sm text-muted-foreground">Total membres</span>
              <p className="text-2xl font-bold">{members.length}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Avec rôle défini</span>
              <p className="text-2xl font-bold">
                {members.filter(m => m.role).length}
              </p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Sans rôle</span>
              <p className="text-2xl font-bold">
                {members.filter(m => !m.role).length}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Barre de recherche */}
      <div className="flex items-center gap-4 bg-muted/30 p-4 rounded-lg">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Rechercher par nom, email ou rôle..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-background"
          />
        </div>
      </div>

      {/* Liste des membres */}
      {filteredMembers.length === 0 ? (
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="text-center">
            {members.length === 0 ? (
              <>
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Aucun membre dans votre équipe</p>
                <Button className="mt-4" onClick={() => setCreateDialogOpen(true)}>
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
        <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginatedMembers.map((member) => {
              // ✅ Utiliser la fonction helper au lieu du hook
              const memberProjects = getMemberProjects(member.id)
              
              return (
                <Card key={member.id} className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      {/* Avatar avec initiales */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                        {getInitials(member.name)}
                      </div>
                      
                      {/* Menu actions */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => {
                              setMemberToEdit(member)
                              setEditDialogOpen(true)
                            }}
                          >
                            <Edit className="mr-2 h-4 w-4" />
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            className="text-destructive"
                            onClick={() => {
                              setMemberToDelete(member.id)
                              setDeleteDialogOpen(true)
                            }}
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Informations du membre */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-lg text-foreground line-clamp-1">
                          {member.name}
                        </h3>
                        {member.role && (
                          <Badge variant="outline" className="mt-2">
                            <Briefcase className="mr-1 h-3 w-3" />
                            {member.role}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </div>

                      {/* Nombre de projets associés */}
                      <div className="pt-3 border-t">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-sm"
                          onClick={() => {
                            setSelectedMemberForProjects(member)
                            setProjectsDialogOpen(true)
                          }}
                        >
                          <FolderKanban className="mr-2 h-4 w-4" />
                          {memberProjects.length === 0 
                            ? "Aucun projet"
                            : `${memberProjects.length} projet${memberProjects.length > 1 ? 's' : ''}`
                          }
                          {memberProjects.length > 0 && (
                            <Eye className="ml-auto h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        Ajouté le {new Date(member.createdAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Pagination */}
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

      {/* Dialogs */}
      {selectedCompanyId && (
        <>
          <CreateMemberDialog
            open={createDialogOpen}
            onOpenChange={setCreateDialogOpen}
            companyId={selectedCompanyId}
          />

          {memberToEdit && (
            <EditMemberDialog
              open={editDialogOpen}
              onOpenChange={setEditDialogOpen}
              member={memberToEdit}
            />
          )}
        </>
      )}

      {/* Dialog de confirmation de suppression */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer ce membre ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Le membre sera définitivement supprimé de votre équipe.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Dialog liste des projets du membre */}
      <Dialog open={projectsDialogOpen} onOpenChange={setProjectsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              Projets de {selectedMemberForProjects?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {selectedMemberForProjects && (() => {
              // ✅ Utiliser la fonction helper
              const memberProjects = getMemberProjects(selectedMemberForProjects.id)

              if (memberProjects.length === 0) {
                return (
                  <div className="text-center py-8 text-muted-foreground">
                    <FolderKanban className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Ce membre n'est assigné à aucun projet</p>
                  </div>
                )
              }

              return (
                <div className={`space-y-3 ${memberProjects.length > 10 ? 'max-h-[400px] overflow-y-auto pr-2' : ''}`}>
                  {memberProjects.map((project) => (
                    <Card key={project.id} className="hover:border-primary/50 transition-colors">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{project.name}</h4>
                            {project.client && (
                              <p className="text-sm text-muted-foreground mt-1">
                                Client: {project.client}
                              </p>
                            )}
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/project/${project.id}`}>
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )
            })()}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}