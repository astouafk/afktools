// hooks/use-reports.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createReport, updateReport, getReportsByProject, getReportById } from '@/lib/services/report-service'
import { updateProjectProgress } from '@/lib/services/project-service'
import { getAllReports } from '@/lib/services/report-service'
import { deleteReport } from '@/lib/services/report-service'



export function useReports(projectId: string | null) {
  return useQuery({
    queryKey: ['reports', projectId],
    queryFn: () => getReportsByProject(projectId!),
    enabled: !!projectId,
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
      queryClient.invalidateQueries({ queryKey: ['reports', variables.projectId] })
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
      queryClient.invalidateQueries({ queryKey: ['reports', variables.projectId] })
      
      // Si publié, mettre à jour le compteur de rapports du projet
      if (variables.data.status === 'Published') {
        await updateProjectProgress(variables.projectId)
      }
    }
  })
}


export function useAllReports() {
  return useQuery({
    queryKey: ['reports', 'all'],
    queryFn: getAllReports,
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