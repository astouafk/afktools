// hooks/use-companies.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createCompany, getCompanies } from '@/lib/firestore-service'

export function useCompanies() {
  return useQuery({
    queryKey: ['companies'],
    queryFn: getCompanies,
    staleTime: 1000 * 60 * 5 // 5 minutes
  })
}

export function useCreateCompany() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: createCompany,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['companies'] })
    }
  })
}