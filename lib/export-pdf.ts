// lib/export-pdf.ts
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
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
  includeLogo?: boolean
  companyName?: string  
  companyLogo?: string  
}

// Mapping des champs techniques vers labels français
const FIELD_LABELS: Record<string, string> = {
  'objectives': 'Objectifs',
  'mainFeatures': 'Fonctionnalités principales',
  'userStories': 'User Stories',
  'useCases': 'Cas d\'utilisation',
  'businessRules': 'Règles métier',
  'workflows': 'Flux de travail',
  'dataModel': 'Modèle de données',
  'context': 'Contexte',
  'architecture': 'Architecture',
  'stack': 'Stack technique',
  'integrations': 'Intégrations',
  'solutions': 'Solutions proposées',
  'challenges': 'Défis techniques',
  'dependencies': 'Dépendances',
  'feasibility': 'Faisabilité',
  'constraints': 'Contraintes',
  'existingIssues': 'Problèmes existants',
  'userPersonas': 'Personas utilisateurs',
  'userJourney': 'Parcours utilisateur',
  'designPrinciples': 'Principes de design',
  'wireframes': 'Wireframes',
  'designSystem': 'Design System',
  'interactions': 'Interactions',
  'accessibility': 'Accessibilité',
  'responsive': 'Responsive',
  'metrics': 'Métriques',
  'bottlenecks': 'Goulots d\'étranglement',
  'optimizations': 'Optimisations',
  'loadTesting': 'Tests de charge',
  'monitoring': 'Surveillance',
  'caching': 'Mise en cache',
  'database': 'Base de données',
}

export async function generatePDFExport(params: ExportParams): Promise<Blob> 
  {
  const { reports, analyses, projects, members, contentType, includeLogo } = params

  const doc = new jsPDF()
  const companyName = params.companyName || "Mon Entreprise"

  // ========================================
  // PAGE DE COUVERTURE
  // ========================================
  
  // Logo (optionnel)
  if (includeLogo) {
    // TODO: Récupérer le logo depuis Firebase Storage ou base64
    // Pour l'instant, on affiche un placeholder
    doc.setFillColor(59, 130, 246)
    doc.circle(105, 40, 15, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('LOGO', 105, 43, { align: 'center' })
    doc.setTextColor(0, 0, 0)
  }

  const startY = includeLogo ? 70 : 60

  doc.setFontSize(28)
  doc.setFont('helvetica', 'bold')
  doc.text(companyName, 105, startY, { align: 'center' })

  doc.setFontSize(20)
  doc.setFont('helvetica', 'normal')
  doc.text(getTitleByContentType(contentType), 105, startY + 20, { align: 'center' })

  doc.setFontSize(14)
  doc.text(getPeriodLabel(params.period), 105, startY + 40, { align: 'center' })

  doc.setFontSize(12)
  const dateStr = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  doc.text(dateStr, 105, startY + 60, { align: 'center' })

  // Statistiques globales
  const totalTasks = reports.reduce((sum, r) => sum + (r.tasks?.length || 0), 0)
  const completedTasks = reports.reduce((sum, r) => 
    sum + (r.tasks?.filter(t => t.completed).length || 0), 0
  )
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
  const totalBlockers = reports.reduce((sum, r) => sum + (r.blockers?.length || 0), 0)
  const completedAnalyses = analyses.filter(a => a.status === 'Completed').length

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  let yPos = startY + 90
  doc.text(`Projets inclus : ${projects.length}`, 105, yPos, { align: 'center' })
  yPos += 8

  if (contentType === 'reports' || contentType === 'both' || contentType === 'single-report') {
    doc.text(`Rapports générés : ${reports.length}`, 105, yPos, { align: 'center' })
    yPos += 8
    doc.text(`Tâches complétées : ${completedTasks}/${totalTasks} (${completionRate}%)`, 105, yPos, { align: 'center' })
    yPos += 8
    doc.text(`Blocages actifs : ${totalBlockers}`, 105, yPos, { align: 'center' })
    yPos += 8
  }

  if (contentType === 'analyses' || contentType === 'both') {
    doc.text(`Analyses créées : ${analyses.length}`, 105, yPos, { align: 'center' })
    yPos += 8
    doc.text(`Analyses terminées : ${completedAnalyses}`, 105, yPos, { align: 'center' })
    yPos += 8
  }

  if (contentType === 'blockers') {
    // ✅ DÉCLARER LES VARIABLES ICI
    const highBlockers = reports.reduce((sum, r) => sum + (r.blockers?.filter(b => b.level === 'high').length || 0), 0)
    const mediumBlockers = reports.reduce((sum, r) => sum + (r.blockers?.filter(b => b.level === 'medium').length || 0), 0)
    const lowBlockers = reports.reduce((sum, r) => sum + (r.blockers?.filter(b => b.level === 'low').length || 0), 0)
    
    doc.text(`Total blocages : ${totalBlockers}`, 105, yPos, { align: 'center' })
    yPos += 8
    doc.text(`Élevés : ${highBlockers} | Moyens : ${mediumBlockers} | Faibles : ${lowBlockers}`, 105, yPos, { align: 'center' })
  }

  // ========================================
  // EXPORT BLOCKERS SEULS
  // ========================================
  if (contentType === 'blockers') {
    // ✅ REDÉCLARER ICI AUSSI (car hors du scope précédent)
    const highBlockers = reports.reduce((sum, r) => sum + (r.blockers?.filter(b => b.level === 'high').length || 0), 0)
    const mediumBlockers = reports.reduce((sum, r) => sum + (r.blockers?.filter(b => b.level === 'medium').length || 0), 0)
    const lowBlockers = reports.reduce((sum, r) => sum + (r.blockers?.filter(b => b.level === 'low').length || 0), 0)
    
    // Collecter tous les blocages
    const allBlockers: Array<{
      project: Project
      report: Report
      blocker: any
    }> = []

    reports.forEach(report => {
      const project = projects.find(p => p.id === report.projectId)
      if (project && report.blockers) {
        report.blockers.forEach(blocker => {
          allBlockers.push({ project, report, blocker })
        })
      }
    })
    

    // Trier par niveau (high > medium > low)
    allBlockers.sort((a, b) => {
      const levelOrder = { 'high': 0, 'medium': 1, 'low': 2 }
      return (levelOrder[a.blocker.level as keyof typeof levelOrder] || 99) - 
             (levelOrder[b.blocker.level as keyof typeof levelOrder] || 99)
    })

    // Page 1 : Vue d'ensemble
    doc.addPage()
    let currentY = 20

    doc.setFillColor(239, 68, 68)
    doc.rect(0, 0, 210, 30, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.text('⚠ RAPPORT BLOCAGES', 15, 15)

    doc.setFontSize(10)
    doc.text(`Total : ${allBlockers.length}`, 15, 23)

    currentY = 40
    doc.setTextColor(0, 0, 0)

    // Tableau récapitulatif par niveau
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Répartition par Niveau', 15, currentY)
    currentY += 8

    const summaryData = [
      ['ÉLEVÉ', highBlockers.toString(), 'Nécessite action immédiate'],
      ['MOYEN', mediumBlockers.toString(), 'À traiter rapidement'],
      ['FAIBLE', lowBlockers.toString(), 'Surveillance recommandée'],
    ]

    autoTable(doc, {
      startY: currentY,
      head: [['Niveau', 'Nombre', 'Recommandation']],
      body: summaryData,
      theme: 'grid',
      headStyles: { fillColor: [239, 68, 68] },
      columnStyles: {
        0: { cellWidth: 30, fontStyle: 'bold' },
        1: { cellWidth: 30, halign: 'center' },
        2: { cellWidth: 125 },
      },
      margin: { left: 15, right: 15 },
    })

    currentY = (doc as any).lastAutoTable.finalY + 15

    // Liste détaillée des blocages
    if (currentY > 220) {
      doc.addPage()
      currentY = 20
    }

    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.text('Liste Détaillée des Blocages', 15, currentY)
    currentY += 8

    const blockersTableData = allBlockers.map(({ project, report, blocker }) => [
      translateBlockerLevel(blocker.level),
      project.name,
      `S${report.weekNumber}`,
      blocker.description,
      blocker.mitigation || 'Non définie',
    ])

    autoTable(doc, {
      startY: currentY,
      head: [['Niveau', 'Projet', 'Sem.', 'Description', 'Mitigation']],
      body: blockersTableData,
      theme: 'striped',
      headStyles: { fillColor: [239, 68, 68] },
      columnStyles: {
        0: { cellWidth: 20, fontStyle: 'bold' },
        1: { cellWidth: 35 },
        2: { cellWidth: 15 },
        3: { cellWidth: 60 },
        4: { cellWidth: 55 },
      },
      margin: { left: 15, right: 15 },
      didParseCell: (data) => {
        if (data.section === 'body' && data.column.index === 0) {
          const level = data.cell.raw as string
          if (level === 'ÉLEVÉ') {
            data.cell.styles.textColor = [220, 38, 38]
            data.cell.styles.fontStyle = 'bold'
          } else if (level === 'MOYEN') {
            data.cell.styles.textColor = [234, 88, 12]
          }
        }
      }
    })

    addFooter(doc)

    // Générer fichier
    const fileName = generateFileName('pdf', params.period, projects, contentType)
    doc.save(fileName)
  }

  // ========================================
  // RAPPORTS PAR PROJET
  // ========================================
  if (contentType === 'reports' || contentType === 'both' || contentType === 'single-report') {
    const sortedReports = [...reports].sort((a, b) => {
      if (a.projectId !== b.projectId) {
        return a.projectId.localeCompare(b.projectId)
      }
      return a.weekNumber - b.weekNumber
    })

    const projectGroups = new Map<string, Report[]>()
    sortedReports.forEach(report => {
      if (!projectGroups.has(report.projectId)) {
        projectGroups.set(report.projectId, [])
      }
      projectGroups.get(report.projectId)!.push(report)
    })

    projectGroups.forEach((projectReports, projectId) => {
      const project = projects.find(p => p.id === projectId)
      if (!project) return

      projectReports.forEach((report) => {
        doc.addPage()
        let currentY = 20

        // EN-TÊTE DU RAPPORT
        doc.setFillColor(59, 130, 246)
        doc.rect(0, 0, 210, 30, 'F')

        doc.setTextColor(255, 255, 255)
        doc.setFontSize(18)
        doc.setFont('helvetica', 'bold')
        doc.text(`Semaine #${report.weekNumber}`, 15, 15)

        doc.setFontSize(12)
        doc.setFont('helvetica', 'normal')
        doc.text(project.name, 15, 23)

        const statusX = 170
        doc.setFontSize(10)
        doc.text(report.status === 'Published' ? 'Publié' : 'Brouillon', statusX, 15)

        currentY = 40
        doc.setTextColor(0, 0, 0)

        // INFORMATIONS PROJET
        doc.setFontSize(14)
        doc.setFont('helvetica', 'bold')
        doc.text('Informations Projet', 15, currentY)
        currentY += 8

        doc.setFontSize(10)
        doc.setFont('helvetica', 'normal')
        
        if (project.client) {
          doc.text(`Client : ${project.client}`, 15, currentY)
          currentY += 6
        }

        doc.text(
          `Période : ${new Date(report.startDate).toLocaleDateString('fr-FR')} - ${new Date(report.endDate).toLocaleDateString('fr-FR')}`,
          15,
          currentY
        )
        currentY += 10

        // MÉTRIQUES
        const reportTasks = report.tasks?.length || 0
        const reportCompleted = report.tasks?.filter(t => t.completed).length || 0
        const reportRate = reportTasks > 0 ? Math.round((reportCompleted / reportTasks) * 100) : 0
        const reportBlockers = report.blockers?.length || 0

        doc.setFontSize(14)
        doc.setFont('helvetica', 'bold')
        doc.text('Métriques', 15, currentY)
        currentY += 8

        autoTable(doc, {
          startY: currentY,
          head: [['Métrique', 'Valeur']],
          body: [
            ['Total tâches', reportTasks.toString()],
            ['Tâches complétées', `${reportCompleted} (${reportRate}%)`],
            ['Blocages signalés', reportBlockers.toString()],
          ],
          theme: 'grid',
          headStyles: { fillColor: [59, 130, 246] },
          margin: { left: 15, right: 15 },
        })

        currentY = (doc as any).lastAutoTable.finalY + 10

        // RÉSUMÉ
        if (report.summary) {
          doc.setFontSize(14)
          doc.setFont('helvetica', 'bold')
          doc.text('Résumé Hebdomadaire', 15, currentY)
          currentY += 8

          doc.setFontSize(10)
          doc.setFont('helvetica', 'normal')
          
          const summaryLines = doc.splitTextToSize(report.summary, 180)
          doc.text(summaryLines, 15, currentY)
          currentY += (summaryLines.length * 5) + 10
        }

        // TÂCHES
        if (report.tasks && report.tasks.length > 0) {
          if (currentY > 240) {
            doc.addPage()
            currentY = 20
          }

          doc.setFontSize(14)
          doc.setFont('helvetica', 'bold')
          doc.text(`Tâches de la Semaine (${report.tasks.length})`, 15, currentY)
          currentY += 8

          const tasksData = report.tasks.map(task => {
            const member = members.find(m => m.id === task.assignedTo)
            return [
              task.completed ? '✓' : '○',
              task.description,
              member?.name || 'Non assignée',
            ]
          })

          autoTable(doc, {
            startY: currentY,
            head: [['', 'Description', 'Assigné à']],
            body: tasksData,
            theme: 'striped',
            headStyles: { fillColor: [59, 130, 246] },
            columnStyles: {
              0: { cellWidth: 10 },
              1: { cellWidth: 130 },
              2: { cellWidth: 45 },
            },
            margin: { left: 15, right: 15 },
          })

          currentY = (doc as any).lastAutoTable.finalY + 10
        }

        // BLOCAGES
        if (report.blockers && report.blockers.length > 0) {
          if (currentY > 200) {
            doc.addPage()
            currentY = 20
          }

          doc.setFontSize(14)
          doc.setFont('helvetica', 'bold')
          doc.setTextColor(239, 68, 68)
          doc.text(`⚠ Blocages & Défis (${report.blockers.length})`, 15, currentY)
          doc.setTextColor(0, 0, 0)
          currentY += 8

          const blockersData = report.blockers.map(blocker => [
            translateBlockerLevel(blocker.level),
            blocker.description,
            blocker.mitigation || 'N/A',
          ])

          autoTable(doc, {
            startY: currentY,
            head: [['Niveau', 'Description', 'Mitigation']],
            body: blockersData,
            theme: 'grid',
            headStyles: { fillColor: [239, 68, 68] },
            columnStyles: {
              0: { cellWidth: 25 },
              1: { cellWidth: 85 },
              2: { cellWidth: 85 },
            },
            margin: { left: 15, right: 15 },
          })

          currentY = (doc as any).lastAutoTable.finalY + 10
        }

        // OBJECTIFS
        if (report.nextWeekObjectives && report.nextWeekObjectives.length > 0) {
          if (currentY > 220) {
            doc.addPage()
            currentY = 20
          }

          doc.setFontSize(14)
          doc.setFont('helvetica', 'bold')
          doc.text(`Objectifs Semaine Prochaine (${report.nextWeekObjectives.length})`, 15, currentY)
          currentY += 8

          const objectivesData = report.nextWeekObjectives.map((obj, idx) => [
            (idx + 1).toString(),
            obj,
          ])

          autoTable(doc, {
            startY: currentY,
            head: [['#', 'Objectif']],
            body: objectivesData,
            theme: 'plain',
            headStyles: { fillColor: [59, 130, 246] },
            columnStyles: {
              0: { cellWidth: 10 },
              1: { cellWidth: 185 },
            },
            margin: { left: 15, right: 15 },
          })
        }

        addFooter(doc)
      })
    })
  }

  // ========================================
  // ANALYSES PAR PROJET
  // ========================================
  if (contentType === 'analyses' || contentType === 'both') {
    const sortedAnalyses = [...analyses].sort((a, b) => {
      if (a.projectId !== b.projectId) {
        return a.projectId.localeCompare(b.projectId)
      }
      return a.type.localeCompare(b.type)
    })

    const projectGroups = new Map<string, Analysis[]>()
    sortedAnalyses.forEach(analysis => {
      if (!projectGroups.has(analysis.projectId)) {
        projectGroups.set(analysis.projectId, [])
      }
      projectGroups.get(analysis.projectId)!.push(analysis)
    })

    projectGroups.forEach((projectAnalyses, projectId) => {
      const project = projects.find(p => p.id === projectId)
      if (!project) return

      projectAnalyses.forEach((analysis) => {
        doc.addPage()
        let currentY = 20

        // EN-TÊTE ANALYSE
        doc.setFillColor(59, 130, 246)
        doc.rect(0, 0, 210, 30, 'F')

        doc.setTextColor(255, 255, 255)
        doc.setFontSize(18)
        doc.setFont('helvetica', 'bold')
        doc.text(`Analyse ${translateAnalysisType(analysis.type)}`, 15, 15)

        doc.setFontSize(12)
        doc.setFont('helvetica', 'normal')
        doc.text(project.name, 15, 23)

        const statusX = 170
        doc.setFontSize(10)
        doc.text(translateAnalysisStatus(analysis.status), statusX, 15)

        currentY = 40
        doc.setTextColor(0, 0, 0)

        // INFORMATIONS
        doc.setFontSize(14)
        doc.setFont('helvetica', 'bold')
        doc.text('Informations', 15, currentY)
        currentY += 8

        doc.setFontSize(10)
        doc.setFont('helvetica', 'normal')
        
        doc.text(`Titre : ${analysis.title}`, 15, currentY)
        currentY += 6

        if (project.client) {
          doc.text(`Client : ${project.client}`, 15, currentY)
          currentY += 6
        }

        doc.text(
          `Date création : ${new Date(analysis.createdAt).toLocaleDateString('fr-FR')}`,
          15,
          currentY
        )
        currentY += 6

        doc.text(
          `Dernière MAJ : ${new Date(analysis.updatedAt).toLocaleDateString('fr-FR')}`,
          15,
          currentY
        )
        currentY += 12

        // DESCRIPTION
        if (analysis.description) {
          doc.setFontSize(14)
          doc.setFont('helvetica', 'bold')
          doc.text('Description', 15, currentY)
          currentY += 8

          doc.setFontSize(10)
          doc.setFont('helvetica', 'normal')
          
          const descLines = doc.splitTextToSize(analysis.description, 180)
          doc.text(descLines, 15, currentY)
          currentY += (descLines.length * 5) + 10
        }

        // CONTENU DÉTAILLÉ
        if (analysis.content && Object.keys(analysis.content).length > 0) {
          if (currentY > 220) {
            doc.addPage()
            currentY = 20
          }

          doc.setFontSize(14)
          doc.setFont('helvetica', 'bold')
          doc.text('Détails de l\'Analyse', 15, currentY)
          currentY += 8

          const contentData = Object.entries(analysis.content).map(([key, value]) => {
            const label = FIELD_LABELS[key] || key
            return [label, value]
          })

          autoTable(doc, {
            startY: currentY,
            body: contentData,
            theme: 'grid',
            columnStyles: {
              0: { cellWidth: 50, fontStyle: 'bold' },
              1: { cellWidth: 145 },
            },
            margin: { left: 15, right: 15 },
          })
        }

        addFooter(doc)
      })
    })
  }

  const blob = doc.output('blob')
  return blob
}

function addFooter(doc: jsPDF) {
  const pageCount = doc.getNumberOfPages()
  doc.setFontSize(8)
  doc.setTextColor(128, 128, 128)
  doc.text(
    `Généré le ${new Date().toLocaleDateString('fr-FR')} - Page ${doc.getCurrentPageInfo().pageNumber}/${pageCount}`,
    105,
    285,
    { align: 'center' }
  )
}

function getTitleByContentType(type: string): string {
  switch (type) {
    case 'reports': return 'RAPPORTS HEBDOMADAIRES'
    case 'analyses': return 'ANALYSES & SPÉCIFICATIONS'
    case 'both': return 'RAPPORT CONSOLIDÉ'
    case 'single-report': return 'RAPPORT HEBDOMADAIRE'
    case 'blockers': return 'RAPPORT BLOCAGES'
    default: return 'RAPPORT'
  }
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

function translateBlockerLevel(level: string): string {
  switch (level) {
    case 'high': return 'ÉLEVÉ'
    case 'medium': return 'MOYEN'
    case 'low': return 'BAS'
    default: return level.toUpperCase()
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
  if (contentType === 'single-report') prefix = 'rapport'
  if (contentType === 'blockers') prefix = 'blocages'
  
  if (projects.length === 1) {
    const projectName = projects[0].name.toLowerCase().replace(/\s+/g, '-')
    return `${prefix}-${projectName}-${periodLabel}-${date}.${ext}`
  }
  
  return `${prefix}-tous-projets-${periodLabel}-${date}.${ext}`
}