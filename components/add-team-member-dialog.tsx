// components/add-team-member-dialog.tsx
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

type AddTeamMemberDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  companyId: string  // ✅ AJOUTÉ
}

export function AddTeamMemberDialog({ 
  open, 
  onOpenChange,
  companyId  // ✅ AJOUTÉ
}: AddTeamMemberDialogProps) {
  const { toast } = useToast()
  const createMember = useCreateMember()

  const [formData, setFormData] = React.useState({
    name: "",
    role: "",
    email: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.role) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir le nom et le rôle.",
        variant: "destructive"
      })
      return
    }

    try {
      await createMember.mutateAsync({
        companyId,  // ✅ UTILISÉ ICI
        name: formData.name,
        role: formData.role,
        email: formData.email
      })

      toast({
        title: "Membre ajouté",
        description: `${formData.name} a été ajouté à l'équipe.`
      })

      setFormData({ name: "", role: "", email: "" })
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajouter un Membre</DialogTitle>
          <DialogDescription>
            Ajoutez un nouveau membre à votre équipe
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nom *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="John Doe"
            />
          </div>
          <div>
            <Label htmlFor="role">Rôle *</Label>
            <Input
              id="role"
              value={formData.role}
              onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
              placeholder="Developer, Designer, etc."
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="john@example.com"
            />
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