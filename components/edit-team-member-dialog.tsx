//components/edit-team-member-dialog.tsx
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

type TeamMember = {
  id: number
  name: string
  role: string
  email?: string
  activeTasks: number
}

type EditTeamMemberDialogProps = {
  member: TeamMember
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EditTeamMemberDialog({ member, open, onOpenChange }: EditTeamMemberDialogProps) {
  const [formData, setFormData] = React.useState({
    name: member.name,
    role: member.role,
    email: member.email || "",
  })

  React.useEffect(() => {
    setFormData({
      name: member.name,
      role: member.role,
      email: member.email || "",
    })
  }, [member])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Updating team member:", formData)
    // Here you would handle team member update
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Team Member</DialogTitle>
            <DialogDescription>Update team member information.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Full Name</Label>
              <Input
                id="edit-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-role">Role/Position</Label>
              <Input
                id="edit-role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-email">Email</Label>
              <Input
                id="edit-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
