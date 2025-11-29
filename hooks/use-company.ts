// hooks/use-company.ts
import { useQuery } from '@tanstack/react-query'
import { getCompanyById } from '@/lib/services/company-service'

export function useCompany(companyId: string | null) {
  return useQuery({
    queryKey: ['company', companyId],
    queryFn: () => companyId ? getCompanyById(companyId) : null,
    enabled: !!companyId,
  })
}