// hooks/use-reports.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createReport, updateReport, getReportsByProject, getReportById, getAllReports, deleteReport } from '@/lib/services/report-service'
import { updateProjectProgress } from '@/lib/services/project-service'

export function useReports(projectId: string | null, companyId: string | null) {
  return useQuery({
    queryKey: ['reports', projectId, companyId],
    queryFn: () => getReportsByProject(projectId!, companyId!),
    enabled: !!projectId && !!companyId,
    staleTime: 1000 * 60 * 5
  })
}

export function useReport(reportId: string) {
  return useQuery({
    queryKey: ['report', reportId],
    queryFn: () => getReportById(reportId),
    enabled: !!reportId,
    staleTime: 1000 * 60 * 5
  })
}

export function useCreateReport() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: createReport,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['reports', variables.projectId, variables.companyId] })
    }
  })
}

export function useUpdateReport() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: ({ reportId, projectId, data }: { 
      reportId: string
      projectId: string
      data: Parameters<typeof updateReport>[1] 
    }) => updateReport(reportId, data),
    onSuccess: async (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['report', variables.reportId] })
      queryClient.invalidateQueries({ queryKey: ['reports'] })
      
      if (variables.data.status === 'Published') {
        await updateProjectProgress(variables.projectId)
      }
    }
  })
}

// ✅ Passer companyId
export function useAllReports(companyId: string | null) {
  return useQuery({
    queryKey: ['reports', 'all', companyId],
    queryFn: () => getAllReports(companyId!),
    enabled: !!companyId,
    staleTime: 1000 * 60 * 5
  })
}

export function useDeleteReport() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: deleteReport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reports'] })
    }
  })
}