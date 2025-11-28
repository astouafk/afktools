// components/create-project-dialog.tsx
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCreateProject } from "@/hooks/use-projects"
import { toast } from "@/hooks/use-toast"

type CreateProjectDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  companyId: string
}

export function CreateProjectDialog({ open, onOpenChange, companyId }: CreateProjectDialogProps) {
  const { mutate: createProject, isPending } = useCreateProject()
  const [formData, setFormData] = React.useState({
    name: "",
    type: "",
    client: "",
    startDate: new Date().toISOString().split("T")[0],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    createProject(
      {
        companyId,
        name: formData.name,
        type: formData.type as any,
        client: formData.client || undefined,
        startDate: formData.startDate
      },
      {
        onSuccess: () => {
          toast({
            title: "Projet créé",
            description: "Le projet a été créé avec succès"
          })
          onOpenChange(false)
          setFormData({
            name: "",
            type: "",
            client: "",
            startDate: new Date().toISOString().split("T")[0],
          })
        },
        onError: (error) => {
          toast({
            title: "Erreur",
            description: error.message,
            variant: "destructive"
          })
        }
      }
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Créer un Projet</DialogTitle>
            <DialogDescription>
              Remplissez les détails pour créer un nouveau projet. Les champs marqués d'un * sont obligatoires.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">
                Nom du Projet <span className="text-destructive">*</span>
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ex: Refonte E-commerce"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="type">
                Type de Projet <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Web App">Application Web</SelectItem>
                  <SelectItem value="Mobile App">Application Mobile</SelectItem>
                  <SelectItem value="Website">Site Web</SelectItem>
                  <SelectItem value="Social Media Campaign">Campagne Réseaux Sociaux</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="client">Client (Optionnel)</Label>
              <Input
                id="client"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                placeholder="Ex: TechCorp Inc."
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="startDate">
                Date de Début <span className="text-destructive">*</span>
              </Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
              disabled={isPending}
            >
              Annuler
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Création..." : "Créer le Projet"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}