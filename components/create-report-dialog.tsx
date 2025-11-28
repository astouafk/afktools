//components/create-report-dialog.tsx
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
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { useRouter } from "next/navigation"

type CreateReportDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateReportDialog({ open, onOpenChange }: CreateReportDialogProps) {
  const router = useRouter()
  const [formData, setFormData] = React.useState({
    title: "",
    projectId: "",
    weekDate: new Date().toISOString().split("T")[0],
  })

  // Mock data - in real app, filter based on analysis completion
  const availableProjects = [
    { id: "1", name: "E-commerce Platform Redesign", analysisComplete: true },
    { id: "2", name: "Mobile Banking App", analysisComplete: false },
    { id: "3", name: "Social Media Campaign", analysisComplete: true },
  ]

  const selectedProject = availableProjects.find((p) => p.id === formData.projectId)
  const canCreateReport = selectedProject?.analysisComplete

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!canCreateReport) return

    console.log("Creating report:", formData)
    // Navigate to the new report editing page
    router.push(`/reports/new?projectId=${formData.projectId}`)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create Weekly Report</DialogTitle>
            <DialogDescription>Select a project and week to create a new weekly report.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">
                Report Title <span className="text-destructive">*</span>
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="E.g., Week 12 - March 18-22, 2025"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="project">
                Project <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.projectId}
                onValueChange={(value) => setFormData({ ...formData, projectId: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  {availableProjects.map((project) => (
                    <SelectItem key={project.id} value={project.id}>
                      {project.name}
                      {!project.analysisComplete && " (Analysis Incomplete)"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="weekDate">
                Week Date <span className="text-destructive">*</span>
              </Label>
              <Input
                id="weekDate"
                type="date"
                value={formData.weekDate}
                onChange={(e) => setFormData({ ...formData, weekDate: e.target.value })}
                required
              />
            </div>

            {formData.projectId && !canCreateReport && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Analysis for this project is incomplete. Complete the analysis to 100% before creating weekly reports.
                </AlertDescription>
              </Alert>
            )}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!canCreateReport}>
              Create Report
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
