// hooks/use-projects.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { 
  createProject, 
  getProjectsByCompany, 
  updateProject, 
  getProjectById,
  completeAnalysisPhase  // ✅ NOUVEAU
} from '@/lib/services/project-service'

export function useProjects(companyId: string | null) {
  return useQuery({
    queryKey: ['projects', companyId],
    queryFn: () => getProjectsByCompany(companyId!),
    enabled: !!companyId,
    staleTime: 1000 * 60 * 5
  })
}

export function useCreateProject() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: createProject,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['projects', variables.companyId] })
    }
  })
}

export function useUpdateProject() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ projectId, data }: { projectId: string; data: Parameters<typeof updateProject>[1] }) => 
      updateProject(projectId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    }
  })
}

export function useProject(projectId: string) {
  console.log('[useProject] Hook called with projectId:', projectId)
  
  return useQuery({
    queryKey: ['project', projectId],
    queryFn: async () => {
      console.log('[useProject] QueryFn executing for:', projectId)
      const result = await getProjectById(projectId)
      console.log('[useProject] QueryFn result:', result)
      return result
    },
    enabled: !!projectId,
    staleTime: 1000 * 60 * 5,
    retry: false
  })
}

// ✅ NOUVEAU HOOK - Boucler la phase d'analyse
export function useCompleteAnalysisPhase() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ projectId }: { projectId: string }) => 
      completeAnalysisPhase(projectId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['project', variables.projectId] })
      queryClient.invalidateQueries({ queryKey: ['projects'] })
    }
  })
}