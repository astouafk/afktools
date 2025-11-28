// hooks/use-members.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createMember, getMembersByCompany, deleteMember } from '@/lib/services/member-service'

export function useMembers(companyId: string | null) {
  return useQuery({
    queryKey: ['members', companyId],
    queryFn: () => getMembersByCompany(companyId!),
    enabled: !!companyId,
    staleTime: 1000 * 60 * 5
  })
}

export function useCreateMember() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: createMember,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['members', variables.companyId] })
    }
  })
}

export function useDeleteMember() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] })
    }
  })
}