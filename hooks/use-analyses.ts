// hooks/use-analyses.ts
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAnalysesByProject, getAnalysisById, updateAnalysis } from '@/lib/services/analysis-service'
import { useMutation } from '@tanstack/react-query'
import { createAnalysis } from '@/lib/services/analysis-service'
import { markAnalysisAsCompleted } from '@/lib/services/analysis-service'
import { updateProjectProgress } from '@/lib/services/project-service'
import { deleteAnalysis } from '@/lib/services/analysis-service'


export function useAnalyses(projectId: string | null) {
  return useQuery({
    queryKey: ['analyses', projectId],
    queryFn: () => getAnalysesByProject(projectId!),
    enabled: !!projectId,
    staleTime: 1000 * 60 * 5
  })
}

export function useAnalysis(analysisId: string) {
  return useQuery({
    queryKey: ['analysis', analysisId],
    queryFn: () => getAnalysisById(analysisId),
    enabled: !!analysisId,
    staleTime: 1000 * 60 * 5
  })
}

export function useCreateAnalysis() {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: async (data: Parameters<typeof createAnalysis>[0]) => {
        const analysisId = await createAnalysis(data)
        if (data.status === 'Completed') {
          await updateProjectProgress(data.projectId)
        }
        return analysisId
      },
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({ queryKey: ['analyses', variables.projectId] })
        queryClient.invalidateQueries({ queryKey: ['project', variables.projectId] })
      }
    })
  }

  export function useMarkAnalysisCompleted() {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: async ({ analysisId, projectId }: { analysisId: string; projectId: string }) => {
        await markAnalysisAsCompleted(analysisId)
        await updateProjectProgress(projectId)
      },
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({ queryKey: ['analysis', variables.analysisId] })
        queryClient.invalidateQueries({ queryKey: ['analyses', variables.projectId] })
        queryClient.invalidateQueries({ queryKey: ['project', variables.projectId] })
      }
    })
  }

  export function useUpdateAnalysis() {
    const queryClient = useQueryClient()
    
    return useMutation({
      mutationFn: ({ analysisId, data }: { analysisId: string; data: Parameters<typeof updateAnalysis>[1] }) => 
        updateAnalysis(analysisId, data),
      onSuccess: (_, variables) => {
        queryClient.invalidateQueries({ queryKey: ['analysis', variables.analysisId] })
        queryClient.invalidateQueries({ queryKey: ['analyses'] })
      }
    })
  }


export function useDeleteAnalysis() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: deleteAnalysis,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['analyses'] })
    }
  })
}