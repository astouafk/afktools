// components/create-member-dialog.tsx
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
import { useCreateMember } from "@/hooks/use-members"
import { useToast } from "@/hooks/use-toast"

type CreateMemberDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  companyId: string
}

export function CreateMemberDialog({ open, onOpenChange, companyId }: CreateMemberDialogProps) {
  const { toast } = useToast()
  const createMember = useCreateMember()
  
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [role, setRole] = React.useState("")

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
      await createMember.mutateAsync({
        companyId,
        name: name.trim(),
        email: email.trim(),
        role: role.trim() || undefined
      })
      
      toast({
        title: "Membre ajouté",
        description: "Le membre a été ajouté avec succès."
      })
      
      // Reset form
      setName("")
      setEmail("")
      setRole("")
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
          <DialogTitle>Ajouter un Membre</DialogTitle>
          <DialogDescription>
            Ajoutez un nouveau membre à votre équipe.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                placeholder="Ex: Jean Dupont"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Ex: jean.dupont@entreprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Rôle (optionnel)</Label>
              <Input
                id="role"
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
            <Button type="submit" disabled={createMember.isPending}>
              {createMember.isPending ? "Ajout..." : "Ajouter"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}