// hooks/use-members.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getMembersByCompany, getMemberById, createMember, updateMember, deleteMember } from '@/lib/services/member-service'

export function useMembers(companyId: string | null) {
  return useQuery({
    queryKey: ['members', companyId],
    queryFn: () => getMembersByCompany(companyId!),
    enabled: !!companyId,
    staleTime: 1000 * 60 * 5
  })
}

export function useMember(memberId: string) {
  return useQuery({
    queryKey: ['member', memberId],
    queryFn: () => getMemberById(memberId),
    enabled: !!memberId,
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

export function useUpdateMember() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ memberId, data }: { memberId: string; data: Parameters<typeof updateMember>[1] }) => 
      updateMember(memberId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['member', variables.memberId] })
      queryClient.invalidateQueries({ queryKey: ['members'] })
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