// components/assign-members-dialog.tsx
"use client"

import * as React from "react"
import { Search, User, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { useMembers } from "@/hooks/use-members"
import { useProjectMembers, useAddMemberToProject } from "@/hooks/use-project-members"
import { useToast } from "@/hooks/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import Link from "next/link"

type AssignMembersDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  projectId: string
  companyId: string
}

const ITEMS_PER_PAGE = 10

export function AssignMembersDialog({ 
  open, 
  onOpenChange, 
  projectId, 
  companyId 
}: AssignMembersDialogProps) {
  const { toast } = useToast()
  const { data: allMembers = [], isLoading: membersLoading } = useMembers(companyId)
  const { data: projectMembers = [], isLoading: projectMembersLoading } = useProjectMembers(projectId)
  const addMemberToProject = useAddMemberToProject()

  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedMemberIds, setSelectedMemberIds] = React.useState<string[]>([])
  const [currentPage, setCurrentPage] = React.useState(1)

  const isLoading = membersLoading || projectMembersLoading

  // IDs des membres déjà assignés
  const assignedMemberIds = React.useMemo(
    () => projectMembers.map(pm => pm.memberId),
    [projectMembers]
  )

  // Filtrer par recherche
  const filteredMembers = React.useMemo(
    () => allMembers.filter(member =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [allMembers, searchQuery]
  )

  // Pagination
  const totalPages = Math.ceil(filteredMembers.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedMembers = filteredMembers.slice(startIndex, endIndex)

  // Reset lors de l'ouverture
  React.useEffect(() => {
    if (open) {
      setSelectedMemberIds([])
      setSearchQuery("")
      setCurrentPage(1)
    }
  }, [open])

  const handleToggleMember = (memberId: string) => {
    setSelectedMemberIds(prev =>
      prev.includes(memberId)
        ? prev.filter(id => id !== memberId)
        : [...prev, memberId]
    )
  }

  const handleSubmit = async () => {
    if (selectedMemberIds.length === 0) {
      toast({
        title: "Aucun membre sélectionné",
        description: "Veuillez sélectionner au moins un membre.",
        variant: "destructive"
      })
      return
    }

    try {
      // Ajouter chaque membre sélectionné
      for (const memberId of selectedMemberIds) {
        await addMemberToProject.mutateAsync({
          projectId,
          memberId,
          companyId
        })
      }

      toast({
        title: "Membres associés",
        description: `${selectedMemberIds.length} membre(s) associé(s) avec succès.`
      })

      setSelectedMemberIds([])
      onOpenChange(false)
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive"
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Associer des Membres au Projet</DialogTitle>
          <DialogDescription>
            Sélectionnez les membres de votre équipe à associer à ce projet
          </DialogDescription>
        </DialogHeader>

        {isLoading ? (
          <div className="space-y-4 flex-1 overflow-y-auto">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-16" />
            ))}
          </div>
        ) : allMembers.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <User className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Aucun membre dans la compagnie</h3>
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              Ajoutez des membres à la compagnie dans la section Équipe pour pouvoir les associer au projet.
            </p>
            <Button asChild>
              <Link href="/team">Aller à la Gestion d'Équipe</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4 flex-1 overflow-hidden flex flex-col">
              {/* Barre de recherche */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Rechercher par nom..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setCurrentPage(1)
                  }}
                  className="pl-10"
                />
              </div>

              {/* Liste des membres */}
              <div className="flex-1 overflow-y-auto space-y-2">
                {paginatedMembers.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Aucun membre trouvé</p>
                  </div>
                ) : (
                  paginatedMembers.map((member) => {
                    const isAssigned = assignedMemberIds.includes(member.id)
                    const isSelected = selectedMemberIds.includes(member.id)

                    return (
                      <div
                        key={member.id}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                          isAssigned
                            ? "bg-muted/50 border-muted"
                            : isSelected
                            ? "bg-primary/5 border-primary/50"
                            : "bg-card border-border hover:border-primary/30"
                        }`}
                      >
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => handleToggleMember(member.id)}
                          disabled={isAssigned}
                        />
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground flex-shrink-0">
                          <User className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="font-medium truncate">{member.name}</p>
                            {isAssigned && (
                              <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                Déjà assigné
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{member.role}</p>
                          {member.email && (
                            <p className="text-xs text-muted-foreground truncate">{member.email}</p>
                          )}
                        </div>
                      </div>
                    )
                  })
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-2 border-t">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Précédent
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    Page {currentPage} sur {totalPages}
                  </span>
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
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Annuler
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={selectedMemberIds.length === 0 || addMemberToProject.isPending}
              >
                {addMemberToProject.isPending
                  ? "Association..."
                  : `Associer ${selectedMemberIds.length > 0 ? `(${selectedMemberIds.length})` : ""}`
                }
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}