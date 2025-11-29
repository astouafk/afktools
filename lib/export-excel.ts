// lib/export-excel.ts
import * as XLSX from 'xlsx'
import type { Report } from '@/lib/services/report-service'
import type { Analysis } from '@/lib/services/analysis-service'
import type { Project } from '@/lib/services/project-service'
import type { Member } from '@/lib/services/member-service'

type ExportParams = {
  reports: Report[]
  analyses: Analysis[]
  projects: Project[]
  members: Member[]
  period: string
  companyId: string
  contentType: 'reports' | 'analyses' | 'both' | 'single-report' | 'blockers'
  companyName?: string  
  companyLogo?: string  
}

const FIELD_LABELS: Record<string, string> = {
  // Analyse Fonctionnelle
  'objectives': 'Objectifs',
  'mainFeatures': 'Fonctionnalités principales',
  'userStories': 'User Stories',
  'useCases': 'Cas d\'utilisation',
  'businessRules': 'Règles métier',
  'workflows': 'Flux de travail',
  'dataModel': 'Modèle de données',
  'context': 'Contexte',
  
  // Analyse Technique
  'architecture': 'Architecture',
  'stack': 'Stack technique',
  'integrations': 'Intégrations',
  'solutions': 'Solutions proposées',
  'challenges': 'Défis techniques',
  'dependencies': 'Dépendances',
  'feasibility': 'Faisabilité',
  'constraints': 'Contraintes',
  'existingIssues': 'Problèmes existants',
  
  // Analyse UX/UI
  'userPersonas': 'Personas utilisateurs',
  'userJourney': 'Parcours utilisateur',
  'designPrinciples': 'Principes de design',
  'wireframes': 'Wireframes',
  'designSystem': 'Design System',
  'interactions': 'Interactions',
  'accessibility': 'Accessibilité',
  'responsive': 'Responsive',
  
  // Analyse Performance
  'metrics': 'Métriques',
  'bottlenecks': 'Goulots d\'étranglement',
  'optimizations': 'Optimisations',
  'loadTesting': 'Tests de charge',
  'monitoring': 'Surveillance',
  'caching': 'Mise en cache',
  'database': 'Base de données',
}

export async function generateExcelExport(params: ExportParams) {
  const { reports, analyses, projects, members, period, contentType } = params

  // Créer un nouveau workbook
  const wb = XLSX.utils.book_new()

  // ========================================
  // FEUILLE 1 : VUE D'ENSEMBLE
  // ========================================
  const companyName = params.companyName || "Mon Entreprise"
  
  const totalTasks = reports.reduce((sum, r) => sum + (r.tasks?.length || 0), 0)
  const completedTasks = reports.reduce((sum, r) => 
    sum + (r.tasks?.filter(t => t.completed).length || 0), 0
  )
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
  const totalBlockers = reports.reduce((sum, r) => sum + (r.blockers?.length || 0), 0)
  
  const completedAnalyses = analyses.filter(a => a.status === 'Completed').length
  const analysesRate = analyses.length > 0 ? Math.round((completedAnalyses / analyses.length) * 100) : 0

  const overviewData = [
    ['RAPPORT GLOBAL'],
    [''],
    ['Entreprise', companyName],
    ['Période', getPeriodLabel(period)],
    ['Date de génération', new Date().toLocaleDateString('fr-FR')],
    ['Type de contenu', getContentTypeLabel(contentType)],
    [''],
    ['STATISTIQUES'],
    ['Nombre de projets', projects.length],
  ]

  if (contentType === 'reports' || contentType === 'both') {
    overviewData.push(
      [''],
      ['RAPPORTS HEBDOMADAIRES'],
      ['Nombre de rapports', reports.length],
      ['Total tâches', totalTasks],
      ['Tâches complétées', `${completedTasks} (${completionRate}%)`],
      ['Blocages actifs', totalBlockers]
    )
  }

  if (contentType === 'analyses' || contentType === 'both') {
    overviewData.push(
      [''],
      ['ANALYSES & SPÉCIFICATIONS'],
      ['Nombre d\'analyses', analyses.length],
      ['Analyses terminées', `${completedAnalyses} (${analysesRate}%)`],
      ['En cours', analyses.filter(a => a.status === 'In Progress').length],
      ['Brouillon', analyses.filter(a => a.status === 'Draft').length]
    )
  }

  const wsOverview = XLSX.utils.aoa_to_sheet(overviewData)
  wsOverview['!cols'] = [{ wch: 25 }, { wch: 30 }]
  XLSX.utils.book_append_sheet(wb, wsOverview, 'Vue d\'ensemble')

  // ========================================
  // FEUILLES RAPPORTS
  // ========================================
  if (contentType === 'reports' || contentType === 'both') {
    // FEUILLE : RAPPORTS
    const reportsData = reports.map(report => {
      const project = projects.find(p => p.id === report.projectId)
      const totalTasks = report.tasks?.length || 0
      const completedTasks = report.tasks?.filter(t => t.completed).length || 0
      
      return {
        'Semaine': report.weekNumber,
        'Projet': project?.name || 'N/A',
        'Client': project?.client || 'N/A',
        'Date début': new Date(report.startDate).toLocaleDateString('fr-FR'),
        'Date fin': new Date(report.endDate).toLocaleDateString('fr-FR'),
        'Tâches totales': totalTasks,
        'Tâches complétées': completedTasks,
        'Taux complétion': totalTasks > 0 ? `${Math.round((completedTasks / totalTasks) * 100)}%` : '0%',
        'Blocages': report.blockers?.length || 0,
        'Statut': report.status === 'Published' ? 'Publié' : 'Brouillon',
      }
    })

    const wsReports = XLSX.utils.json_to_sheet(reportsData)
    wsReports['!cols'] = [
      { wch: 10 }, { wch: 25 }, { wch: 20 }, { wch: 12 }, { wch: 12 },
      { wch: 14 }, { wch: 16 }, { wch: 16 }, { wch: 10 }, { wch: 12 }
    ]
    XLSX.utils.book_append_sheet(wb, wsReports, 'Rapports')

    // FEUILLE : DÉTAIL TÂCHES
    const tasksData: any[] = []
    reports.forEach(report => {
      const project = projects.find(p => p.id === report.projectId)
      report.tasks?.forEach(task => {
        const member = members.find(m => m.id === task.assignedTo)
        tasksData.push({
          'Projet': project?.name || 'N/A',
          'Semaine': report.weekNumber,
          'Description': task.description,
          'Assigné à': member?.name || 'Non assignée',
          'Statut': task.completed ? '✓ Complétée' : '⏳ En cours',
          'Date rapport': new Date(report.createdAt).toLocaleDateString('fr-FR'),
        })
      })
    })

    if (tasksData.length > 0) {
      const wsTasks = XLSX.utils.json_to_sheet(tasksData)
      wsTasks['!cols'] = [
        { wch: 25 }, { wch: 10 }, { wch: 50 }, { wch: 20 }, { wch: 14 }, { wch: 14 }
      ]
      XLSX.utils.book_append_sheet(wb, wsTasks, 'Détail Tâches')
    }

    // FEUILLE : BLOCAGES
    const blockersData: any[] = []
    reports.forEach(report => {
      const project = projects.find(p => p.id === report.projectId)
      report.blockers?.forEach(blocker => {
        blockersData.push({
          'Projet': project?.name || 'N/A',
          'Semaine': report.weekNumber,
          'Description': blocker.description,
          'Niveau': translateBlockerLevel(blocker.level),
          'Mitigation': blocker.mitigation || 'N/A',
          'Date rapport': new Date(report.createdAt).toLocaleDateString('fr-FR'),
        })
      })
    })

    if (blockersData.length > 0) {
      const wsBlockers = XLSX.utils.json_to_sheet(blockersData)
      wsBlockers['!cols'] = [
        { wch: 25 }, { wch: 10 }, { wch: 50 }, { wch: 12 }, { wch: 50 }, { wch: 14 }
      ]
      XLSX.utils.book_append_sheet(wb, wsBlockers, 'Blocages')
    }

    // FEUILLE : OBJECTIFS
    const objectivesData: any[] = []
    reports.forEach(report => {
      const project = projects.find(p => p.id === report.projectId)
      report.nextWeekObjectives?.forEach((objective, index) => {
        objectivesData.push({
          'Projet': project?.name || 'N/A',
          'Semaine': report.weekNumber,
          'N°': index + 1,
          'Objectif': objective,
          'Date rapport': new Date(report.createdAt).toLocaleDateString('fr-FR'),
        })
      })
    })

    if (objectivesData.length > 0) {
      const wsObjectives = XLSX.utils.json_to_sheet(objectivesData)
      wsObjectives['!cols'] = [
        { wch: 25 }, { wch: 10 }, { wch: 5 }, { wch: 60 }, { wch: 14 }
      ]
      XLSX.utils.book_append_sheet(wb, wsObjectives, 'Objectifs')
    }
  }

  // ========================================
  // FEUILLES ANALYSES
  // ========================================
  if (contentType === 'analyses' || contentType === 'both') {
    // FEUILLE : ANALYSES
    const analysesData = analyses.map(analysis => {
      const project = projects.find(p => p.id === analysis.projectId)
      return {
        'Projet': project?.name || 'N/A',
        'Client': project?.client || 'N/A',
        'Titre': analysis.title,
        'Type': translateAnalysisType(analysis.type),
        'Statut': translateAnalysisStatus(analysis.status),
        'Date création': new Date(analysis.createdAt).toLocaleDateString('fr-FR'),
        'Dernière MAJ': new Date(analysis.updatedAt).toLocaleDateString('fr-FR'),
      }
    })

    const wsAnalyses = XLSX.utils.json_to_sheet(analysesData)
    wsAnalyses['!cols'] = [
      { wch: 25 }, { wch: 20 }, { wch: 30 }, { wch: 20 }, { wch: 15 }, { wch: 14 }, { wch: 14 }
    ]
    XLSX.utils.book_append_sheet(wb, wsAnalyses, 'Analyses')

    // FEUILLE : DÉTAIL ANALYSES
    const analysesDetailData: any[] = []
    
    analyses.forEach(analysis => {
      const project = projects.find(p => p.id === analysis.projectId)
      
      // Créer une ligne de base
      const baseRow: any = {
        'Projet': project?.name || 'N/A',
        'Titre': analysis.title,
        'Type': translateAnalysisType(analysis.type),
        'Description': analysis.description || 'N/A',
        'Statut': translateAnalysisStatus(analysis.status),
        'Date création': new Date(analysis.createdAt).toLocaleDateString('fr-FR'),
      }

      // Ajouter tous les champs du content avec leurs labels traduits
      if (analysis.content && Object.keys(analysis.content).length > 0) {
        Object.entries(analysis.content).forEach(([key, value]) => {
          const label = FIELD_LABELS[key] || key
          baseRow[label] = value || 'N/A'
        })
      }

      analysesDetailData.push(baseRow)
    })

    if (analysesDetailData.length > 0) {
      const wsAnalysesDetail = XLSX.utils.json_to_sheet(analysesDetailData)
      // Largeur automatique pour toutes les colonnes
      const maxColWidth = 50
      const colCount = Object.keys(analysesDetailData[0] || {}).length
      wsAnalysesDetail['!cols'] = Array(colCount).fill({ wch: maxColWidth })
      
      XLSX.utils.book_append_sheet(wb, wsAnalysesDetail, 'Détail Analyses')
    }
  }

  // Générer le nom du fichier
  const fileName = generateFileName('excel', period, projects, contentType)
  
  // Télécharger le fichier
  XLSX.writeFile(wb, fileName)
}

function getPeriodLabel(period: string): string {
  switch (period) {
    case 'week': return 'Cette semaine'
    case 'month': return 'Ce mois'
    case 'quarter': return 'Ce trimestre'
    case 'year': return 'Cette année'
    default: return period
  }
}

function getContentTypeLabel(type: string): string {
  switch (type) {
    case 'reports': return 'Rapports hebdomadaires'
    case 'analyses': return 'Analyses & Spécifications'
    case 'both': return 'Rapports + Analyses'
    default: return type
  }
}

function translateBlockerLevel(level: string): string {
  switch (level) {
    case 'high': return 'Élevé'
    case 'medium': return 'Moyen'
    case 'low': return 'Bas'
    default: return level
  }
}

function translateAnalysisType(type: string): string {
  switch (type) {
    case 'Functional': return 'Fonctionnelle'
    case 'Technical': return 'Technique'
    case 'UI/UX': return 'UX/UI'
    case 'Performance': return 'Performance'
    default: return type
  }
}

function translateAnalysisStatus(status: string): string {
  switch (status) {
    case 'Draft': return 'Brouillon'
    case 'In Progress': return 'En cours'
    case 'Completed': return 'Terminée'
    default: return status
  }
}

function generateFileName(
  type: 'excel' | 'pdf', 
  period: string, 
  projects: Project[],
  contentType: string
): string {
  const date = new Date().toISOString().split('T')[0]
  const periodLabel = getPeriodLabel(period).toLowerCase().replace(/\s+/g, '-')
  const ext = type === 'excel' ? 'xlsx' : 'pdf'
  
  let prefix = 'export'
  if (contentType === 'reports') prefix = 'rapports'
  if (contentType === 'analyses') prefix = 'analyses'
  if (contentType === 'both') prefix = 'complet'
  
  if (projects.length === 1) {
    const projectName = projects[0].name.toLowerCase().replace(/\s+/g, '-')
    return `${prefix}-${projectName}-${periodLabel}-${date}.${ext}`
  }
  
  return `${prefix}-tous-projets-${periodLabel}-${date}.${ext}`
}