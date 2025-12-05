// components/report-form/ReportTasksForm.tsx
"use client"

import * as React from "react"
import { Plus, Trash2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Task } from "@/lib/services/report-service"
import type { ProjectMemberWithDetails } from "@/lib/services/project-member-service"

interface ReportTasksFormProps {
  tasks: Task[]
  onChange: (tasks: Task[]) => void
  projectMembers: ProjectMemberWithDetails[]
  maxTasks?: number
}

export function ReportTasksForm({ 
  tasks, 
  onChange, 
  projectMembers,
  maxTasks = 100 
}: ReportTasksFormProps) {
  const canAddTask = tasks.length < maxTasks

  const addTask = () => {
    if (!canAddTask) return
    
    onChange([
      ...tasks,
      {
        id: crypto.randomUUID(),
        description: '',
        assignedTo: undefined,
        completed: false
      }
    ])
  }

  const updateTask = (index: number, field: keyof Task, value: any) => {
    const newTasks = tasks.map((task, i) => 
      i === index ? { ...task, [field]: value } : task
    )
    onChange(newTasks)
  }

  const removeTask = (index: number) => {
    onChange(tasks.filter((_, i) => i !== index))
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              Tâches de la Semaine
              <Badge variant="secondary">{tasks.length}/{maxTasks}</Badge>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Listez les tâches réalisées ou en cours durant cette semaine
            </p>
          </div>
          <Button 
            onClick={addTask} 
            size="sm"
            disabled={!canAddTask}
          >
            <Plus className="mr-2 h-4 w-4" />
            Ajouter {!canAddTask && `(${maxTasks} max)`}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {tasks.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>Aucune tâche ajoutée</p>
            <p className="text-sm mt-2">Cliquez sur "Ajouter" pour commencer</p>
          </div>
        ) : (
          <div className={cn(
            "space-y-3",
            tasks.length > 5 && "max-h-[500px] overflow-y-auto pr-2"
          )}>
            {tasks.map((task, index) => (
              <Card key={task.id} className="bg-muted/30">
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-start gap-2">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={(checked) => 
                        updateTask(index, 'completed', checked === true)
                      }
                      className="mt-1"
                    />
                    <div className="flex-1 space-y-3">
                      <Textarea
                        value={task.description}
                        onChange={(e) => updateTask(index, 'description', e.target.value)}
                        placeholder="Description de la tâche..."
                        rows={2}
                        className="resize-none"
                      />
                      <Select
                        value={task.assignedTo || 'unassigned'}
                        onValueChange={(value) => 
                          updateTask(index, 'assignedTo', value === 'unassigned' ? undefined : value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Assigner à..." />
                        </SelectTrigger>
                        <SelectContent className={projectMembers.length > 10 ? "max-h-[300px] overflow-y-auto" : ""}>
                          <SelectItem value="unassigned">
                            <span className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              Non assignée
                            </span>
                          </SelectItem>
                          {projectMembers.map(pm => (
                            <SelectItem key={pm.memberId} value={pm.memberId}>
                              <span className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {pm.memberName}
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTask(index)}
                      className="flex-shrink-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {tasks.length > 10 && (
          <p className="text-xs text-muted-foreground text-center pt-3">
            {tasks.length} tâches • Faites défiler pour voir toutes
          </p>
        )}

        {!canAddTask && (
          <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/10 p-3">
            <p className="text-sm text-amber-600 dark:text-amber-400">
              ⚠ Limite de {maxTasks} tâches atteinte
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}