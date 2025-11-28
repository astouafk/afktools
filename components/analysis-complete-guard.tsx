// components/analysis-complete-guard.tsx
"use client"

import * as React from "react"
import { useProject } from "@/hooks/use-projects"
import { useRouter } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

type AnalysisCompleteGuardProps = {
  projectId: string
  children: React.ReactNode
}

export function AnalysisCompleteGuard({ projectId, children }: AnalysisCompleteGuardProps) {
  const router = useRouter()
  const { data: project, isLoading } = useProject(projectId)

  React.useEffect(() => {
    if (project && !project.analysisComplete) {
      router.push(`/project/${projectId}`)
    }
  }, [project, projectId, router])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-96" />
        <Skeleton className="h-64" />
      </div>
    )
  }

  if (!project || !project.analysisComplete) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <AlertCircle className="h-12 w-12 text-amber-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Analyse Non Bouclée</h3>
            <p className="text-sm text-muted-foreground text-center max-w-md mb-4">
              L'analyse du projet doit être bouclée avant de pouvoir créer des rapports hebdomadaires.
            </p>
            <Button asChild>
              <Link href={`/project/${projectId}`}>Retour au Projet</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return <>{children}</>
}