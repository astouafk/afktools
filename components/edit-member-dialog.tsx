// components/edit-member-dialog.tsx
"use client"

import * as React from "react"
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
import { Label } from "@/components/ui/label"
import { useUpdateMember } from "@/hooks/use-members"
import { useToast } from "@/hooks/use-toast"
import type { Member } from "@/lib/services/member-service"

type EditMemberDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  member: Member
}

export function EditMemberDialog({ open, onOpenChange, member }: EditMemberDialogProps) {
  const { toast } = useToast()
  const updateMember = useUpdateMember()
  
  const [name, setName] = React.useState(member.name)
  const [email, setEmail] = React.useState(member.email)
  const [role, setRole] = React.useState(member.role || "")

  // Mettre à jour les champs quand member change
  React.useEffect(() => {
    setName(member.name)
    setEmail(member.email)
    setRole(member.role || "")
  }, [member])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Champs requis",
        description: "Le nom et l'email sont obligatoires.",
        variant: "destructive"
      })
      return
    }

    try {
      await updateMember.mutateAsync({
        memberId: member.id,
        data: {
          name: name.trim(),
          email: email.trim(),
          role: role.trim() || undefined
        }
      })
      
      toast({
        title: "Membre modifié",
        description: "Le membre a été modifié avec succès."
      })
      
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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Modifier le Membre</DialogTitle>
          <DialogDescription>
            Modifiez les informations du membre.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Nom complet *</Label>
              <Input
                id="edit-name"
                placeholder="Ex: Jean Dupont"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-email">Email *</Label>
              <Input
                id="edit-email"
                type="email"
                placeholder="Ex: jean.dupont@entreprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-role">Rôle (optionnel)</Label>
              <Input
                id="edit-role"
                placeholder="Ex: Développeur, Chef de projet..."
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Annuler
            </Button>
            <Button type="submit" disabled={updateMember.isPending}>
              {updateMember.isPending ? "Modification..." : "Enregistrer"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}