// components/edit-project-dialog.tsx
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
import { useUpdateProject } from "@/hooks/use-projects"
import { toast } from "@/hooks/use-toast"
import type { Project } from "@/lib/services/project-service"

type EditProjectDialogProps = {
  project: Project
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EditProjectDialog({ project, open, onOpenChange }: EditProjectDialogProps) {
  const { mutate: updateProject, isPending } = useUpdateProject()
  const [formData, setFormData] = React.useState({
    name: project.name,
    type: project.type as Project['type'],
    client: project.client || "",
    startDate: project.startDate.toISOString().split("T")[0],
  })

  React.useEffect(() => {
    setFormData({
      name: project.name,
      type: project.type as Project['type'],
      client: project.client || "",
      startDate: project.startDate.toISOString().split("T")[0],
    })
  }, [project])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    updateProject(
      {
        projectId: project.id,
        data: {
          name: formData.name,
          type: formData.type,
          client: formData.client || undefined,
          startDate: formData.startDate
        }
      },
      {
        onSuccess: () => {
          toast({
            title: "Projet modifié",
            description: "Le projet a été modifié avec succès"
          })
          onOpenChange(false)
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
            <DialogTitle>Modifier le Projet</DialogTitle>
            <DialogDescription>Modifiez les informations du projet.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Nom du Projet</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-type">Type de Projet</Label>
              <Select
                value={formData.type}
                onValueChange={(value: Project['type']) => setFormData({ ...formData, type: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue />
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
              <Label htmlFor="edit-client">Client</Label>
              <Input
                id="edit-client"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-startDate">Date de Début</Label>
              <Input
                id="edit-startDate"
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
              {isPending ? "Modification..." : "Enregistrer"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}