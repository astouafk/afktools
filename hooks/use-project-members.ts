// hooks/use-project-members.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getProjectMembers, addMemberToProject, removeMemberFromProject } from '@/lib/services/project-member-service'

export function useProjectMembers(projectId: string | null) {
  return useQuery({
    queryKey: ['projectMembers', projectId],
    queryFn: () => getProjectMembers(projectId!),
    enabled: !!projectId,
    staleTime: 1000 * 60 * 5
  })
}

export function useAddMemberToProject() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: addMemberToProject,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['projectMembers', variables.projectId] })
    }
  })
}

export function useRemoveMemberFromProject() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: removeMemberFromProject,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projectMembers'] })
    }
  })
}