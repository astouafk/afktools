// // lib/export-pdf.ts
// import jsPDF from 'jspdf'
// import autoTable from 'jspdf-autotable'
// import type { Report } from '@/lib/services/report-service'
// import type { Project } from '@/lib/services/project-service'
// import type { Member } from '@/lib/services/member-service'

// type ExportParams = {
//   reports: Report[]
//   projects: Project[]
//   members: Member[]
//   period: string
//   companyId: string
// }

// export async function generatePDFExport(params: ExportParams) {
//   const { reports, projects, members } = params

//   // Trier les rapports par projet puis par semaine
//   const sortedReports = [...reports].sort((a, b) => {
//     if (a.projectId !== b.projectId) {
//       return a.projectId.localeCompare(b.projectId)
//     }
//     return a.weekNumber - b.weekNumber
//   })

//   // Créer le PDF
//   const doc = new jsPDF()
//   const companyName = "Mon Entreprise" // TODO: Récupérer depuis DB

//   // ========================================
//   // PAGE DE COUVERTURE
//   // ========================================
//   doc.setFontSize(28)
//   doc.setFont('helvetica', 'bold')
//   doc.text(companyName, 105, 60, { align: 'center' })

//   doc.setFontSize(20)
//   doc.setFont('helvetica', 'normal')
//   doc.text('RAPPORT CONSOLIDÉ', 105, 80, { align: 'center' })

//   doc.setFontSize(14)
//   doc.text(getPeriodLabel(params.period), 105, 100, { align: 'center' })

//   doc.setFontSize(12)
//   const dateStr = new Date().toLocaleDateString('fr-FR', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric'
//   })
//   doc.text(dateStr, 105, 120, { align: 'center' })

//   // Statistiques globales
//   const totalTasks = reports.reduce((sum, r) => sum + (r.tasks?.length || 0), 0)
//   const completedTasks = reports.reduce((sum, r) => 
//     sum + (r.tasks?.filter(t => t.completed).length || 0), 0
//   )
//   const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
//   const totalBlockers = reports.reduce((sum, r) => sum + (r.blockers?.length || 0), 0)

//   doc.setFontSize(10)
//   doc.setFont('helvetica', 'normal')
//   let yPos = 160
//   doc.text(`Projets inclus : ${projects.length}`, 105, yPos, { align: 'center' })
//   yPos += 8
//   doc.text(`Rapports générés : ${reports.length}`, 105, yPos, { align: 'center' })
//   yPos += 8
//   doc.text(`Tâches complétées : ${completedTasks}/${totalTasks} (${completionRate}%)`, 105, yPos, { align: 'center' })
//   yPos += 8
//   doc.text(`Blocages actifs : ${totalBlockers}`, 105, yPos, { align: 'center' })

//   // ========================================
//   // RAPPORTS PAR PROJET
//   // ========================================
//   const projectGroups = new Map<string, Report[]>()
  
//   sortedReports.forEach(report => {
//     if (!projectGroups.has(report.projectId)) {
//       projectGroups.set(report.projectId, [])
//     }
//     projectGroups.get(report.projectId)!.push(report)
//   })

//   projectGroups.forEach((projectReports, projectId) => {
//     const project = projects.find(p => p.id === projectId)
//     if (!project) return

//     projectReports.forEach((report, reportIndex) => {
//       // Nouvelle page pour chaque rapport
//       doc.addPage()

//       let currentY = 20

//       // ========================================
//       // EN-TÊTE DU RAPPORT
//       // ========================================
//       doc.setFillColor(59, 130, 246) // Bleu primary
//       doc.rect(0, 0, 210, 30, 'F')

//       doc.setTextColor(255, 255, 255)
//       doc.setFontSize(18)
//       doc.setFont('helvetica', 'bold')
//       doc.text(`Semaine #${report.weekNumber}`, 15, 15)

//       doc.setFontSize(12)
//       doc.setFont('helvetica', 'normal')
//       doc.text(project.name, 15, 23)

//       // Statut
//       const statusX = 170
//       doc.setFontSize(10)
//       if (report.status === 'Published') {
//         doc.setFillColor(34, 197, 94) // Vert
//         doc.text('Publié', statusX, 15)
//       } else {
//         doc.setFillColor(156, 163, 175) // Gris
//         doc.text('Brouillon', statusX, 15)
//       }

//       currentY = 40
//       doc.setTextColor(0, 0, 0)

//       // ========================================
//       // INFORMATIONS PROJET
//       // ========================================
//       doc.setFontSize(14)
//       doc.setFont('helvetica', 'bold')
//       doc.text('Informations Projet', 15, currentY)
//       currentY += 8

//       doc.setFontSize(10)
//       doc.setFont('helvetica', 'normal')
      
//       if (project.client) {
//         doc.text(`Client : ${project.client}`, 15, currentY)
//         currentY += 6
//       }

//       doc.text(
//         `Période : ${new Date(report.startDate).toLocaleDateString('fr-FR')} - ${new Date(report.endDate).toLocaleDateString('fr-FR')}`,
//         15,
//         currentY
//       )
//       currentY += 10

//       // ========================================
//       // MÉTRIQUES
//       // ========================================
//       const reportTasks = report.tasks?.length || 0
//       const reportCompleted = report.tasks?.filter(t => t.completed).length || 0
//       const reportRate = reportTasks > 0 ? Math.round((reportCompleted / reportTasks) * 100) : 0
//       const reportBlockers = report.blockers?.length || 0

//       doc.setFontSize(14)
//       doc.setFont('helvetica', 'bold')
//       doc.text('Métriques', 15, currentY)
//       currentY += 8

//       doc.setFontSize(10)
//       doc.setFont('helvetica', 'normal')

//       // Tableau de métriques
//       autoTable(doc, {
//         startY: currentY,
//         head: [['Métrique', 'Valeur']],
//         body: [
//           ['Total tâches', reportTasks.toString()],
//           ['Tâches complétées', `${reportCompleted} (${reportRate}%)`],
//           ['Blocages signalés', reportBlockers.toString()],
//         ],
//         theme: 'grid',
//         headStyles: { fillColor: [59, 130, 246] },
//         margin: { left: 15, right: 15 },
//       })

//       currentY = (doc as any).lastAutoTable.finalY + 10

//       // ========================================
//       // RÉSUMÉ HEBDOMADAIRE
//       // ========================================
//       if (report.summary) {
//         doc.setFontSize(14)
//         doc.setFont('helvetica', 'bold')
//         doc.text('Résumé Hebdomadaire', 15, currentY)
//         currentY += 8

//         doc.setFontSize(10)
//         doc.setFont('helvetica', 'normal')
        
//         const summaryLines = doc.splitTextToSize(report.summary, 180)
//         doc.text(summaryLines, 15, currentY)
//         currentY += (summaryLines.length * 5) + 10
//       }

//       // ========================================
//       // TÂCHES
//       // ========================================
//       if (report.tasks && report.tasks.length > 0) {
//         // Vérifier si on a assez de place, sinon nouvelle page
//         if (currentY > 240) {
//           doc.addPage()
//           currentY = 20
//         }

//         doc.setFontSize(14)
//         doc.setFont('helvetica', 'bold')
//         doc.text(`Tâches de la Semaine (${report.tasks.length})`, 15, currentY)
//         currentY += 8

//         const tasksData = report.tasks.map(task => {
//           const member = members.find(m => m.id === task.assignedTo)
//           return [
//             task.completed ? '✓' : '○',
//             task.description,
//             member?.name || 'Non assignée',
//           ]
//         })

//         autoTable(doc, {
//           startY: currentY,
//           head: [['', 'Description', 'Assigné à']],
//           body: tasksData,
//           theme: 'striped',
//           headStyles: { fillColor: [59, 130, 246] },
//           columnStyles: {
//             0: { cellWidth: 10 },
//             1: { cellWidth: 130 },
//             2: { cellWidth: 45 },
//           },
//           margin: { left: 15, right: 15 },
//         })

//         currentY = (doc as any).lastAutoTable.finalY + 10
//       }

//       // ========================================
//       // BLOCAGES
//       // ========================================
//       if (report.blockers && report.blockers.length > 0) {
//         // Vérifier si on a assez de place, sinon nouvelle page
//         if (currentY > 200) {
//           doc.addPage()
//           currentY = 20
//         }

//         doc.setFontSize(14)
//         doc.setFont('helvetica', 'bold')
//         doc.setTextColor(239, 68, 68) // Rouge
//         doc.text(`⚠ Blocages & Défis (${report.blockers.length})`, 15, currentY)
//         doc.setTextColor(0, 0, 0)
//         currentY += 8

//         const blockersData = report.blockers.map(blocker => [
//           translateBlockerLevel(blocker.level),
//           blocker.description,
//           blocker.mitigation || 'N/A',
//         ])

//         autoTable(doc, {
//           startY: currentY,
//           head: [['Niveau', 'Description', 'Mitigation']],
//           body: blockersData,
//           theme: 'grid',
//           headStyles: { fillColor: [239, 68, 68] },
//           columnStyles: {
//             0: { cellWidth: 25 },
//             1: { cellWidth: 85 },
//             2: { cellWidth: 85 },
//           },
//           margin: { left: 15, right: 15 },
//         })

//         currentY = (doc as any).lastAutoTable.finalY + 10
//       }

//       // ========================================
//       // OBJECTIFS SEMAINE PROCHAINE
//       // ========================================
//       if (report.nextWeekObjectives && report.nextWeekObjectives.length > 0) {
//         // Vérifier si on a assez de place, sinon nouvelle page
//         if (currentY > 220) {
//           doc.addPage()
//           currentY = 20
//         }

//         doc.setFontSize(14)
//         doc.setFont('helvetica', 'bold')
//         doc.text(`Objectifs Semaine Prochaine (${report.nextWeekObjectives.length})`, 15, currentY)
//         currentY += 8

//         const objectivesData = report.nextWeekObjectives.map((obj, idx) => [
//           (idx + 1).toString(),
//           obj,
//         ])

//         autoTable(doc, {
//           startY: currentY,
//           head: [['#', 'Objectif']],
//           body: objectivesData,
//           theme: 'plain',
//           headStyles: { fillColor: [59, 130, 246] },
//           columnStyles: {
//             0: { cellWidth: 10 },
//             1: { cellWidth: 185 },
//           },
//           margin: { left: 15, right: 15 },
//         })

//         currentY = (doc as any).lastAutoTable.finalY + 10
//       }

//       // Pied de page
//       const pageCount = doc.getNumberOfPages()
//       doc.setFontSize(8)
//       doc.setTextColor(128, 128, 128)
//       doc.text(
//         `Généré le ${new Date().toLocaleDateString('fr-FR')} - Page ${doc.getCurrentPageInfo().pageNumber}/${pageCount}`,
//         105,
//         285,
//         { align: 'center' }
//       )
//     })
//   })

//   // Générer le nom du fichier
//   const fileName = generateFileName('pdf', params.period, projects)
  
//   // Télécharger le fichier
//   doc.save(fileName)
// }

// function getPeriodLabel(period: string): string {
//   switch (period) {
//     case 'week': return 'Cette semaine'
//     case 'month': return 'Ce mois'
//     case 'quarter': return 'Ce trimestre'
//     case 'year': return 'Cette année'
//     default: return period
//   }
// }

// function translateBlockerLevel(level: string): string {
//   switch (level) {
//     case 'high': return 'ÉLEVÉ'
//     case 'medium': return 'MOYEN'
//     case 'low': return 'BAS'
//     default: return level.toUpperCase()
//   }
// }

// function generateFileName(type: 'excel' | 'pdf', period: string, projects: Project[]): string {
//   const date = new Date().toISOString().split('T')[0]
//   const periodLabel = getPeriodLabel(period).toLowerCase().replace(/\s+/g, '-')
  
//   if (projects.length === 1) {
//     const projectName = projects[0].name.toLowerCase().replace(/\s+/g, '-')
//     return `rapport-${projectName}-${periodLabel}-${date}.${type === 'excel' ? 'xlsx' : 'pdf'}`
//   }
  
//   return `rapport-consolide-${periodLabel}-${date}.${type === 'excel' ? 'xlsx' : 'pdf'}`
// }



// // lib/export-pdf.ts
// import jsPDF from 'jspdf'
// import autoTable from 'jspdf-autotable'
// import type { Report } from '@/lib/services/report-service'
// import type { Analysis } from '@/lib/services/analysis-service'
// import type { Project } from '@/lib/services/project-service'
// import type { Member } from '@/lib/services/member-service'

// type ExportParams = {
//   reports: Report[]
//   analyses: Analysis[]
//   projects: Project[]
//   members: Member[]
//   period: string
//   companyId: string
//   contentType: 'reports' | 'analyses' | 'both'
// }

// // Mapping des champs techniques vers labels français
// const FIELD_LABELS: Record<string, string> = {
//   // Analyse Fonctionnelle
//   'objectives': 'Objectifs',
//   'mainFeatures': 'Fonctionnalités principales',
//   'userStories': 'User Stories',
//   'useCases': 'Cas d\'utilisation',
//   'businessRules': 'Règles métier',
//   'workflows': 'Flux de travail',
//   'dataModel': 'Modèle de données',
//   'context': 'Contexte',
  
//   // Analyse Technique
//   'architecture': 'Architecture',
//   'stack': 'Stack technique',
//   'integrations': 'Intégrations',
//   'solutions': 'Solutions proposées',
//   'challenges': 'Défis techniques',
//   'dependencies': 'Dépendances',
//   'feasibility': 'Faisabilité',
//   'constraints': 'Contraintes',
//   'existingIssues': 'Problèmes existants',
  
//   // Analyse UX/UI
//   'userPersonas': 'Personas utilisateurs',
//   'userJourney': 'Parcours utilisateur',
//   'designPrinciples': 'Principes de design',
//   'wireframes': 'Wireframes',
//   'designSystem': 'Design System',
//   'interactions': 'Interactions',
//   'accessibility': 'Accessibilité',
//   'responsive': 'Responsive',
  
//   // Analyse Performance
//   'metrics': 'Métriques',
//   'bottlenecks': 'Goulots d\'étranglement',
//   'optimizations': 'Optimisations',
//   'loadTesting': 'Tests de charge',
//   'monitoring': 'Surveillance',
//   'caching': 'Mise en cache',
//   'database': 'Base de données',
// }

// export async function generatePDFExport(params: ExportParams) {
//   const { reports, analyses, projects, members, contentType } = params

//   const doc = new jsPDF()
//   const companyName = "Mon Entreprise" // TODO: Récupérer depuis DB

//   // ========================================
//   // PAGE DE COUVERTURE
//   // ========================================
//   doc.setFontSize(28)
//   doc.setFont('helvetica', 'bold')
//   doc.text(companyName, 105, 60, { align: 'center' })

//   doc.setFontSize(20)
//   doc.setFont('helvetica', 'normal')
//   doc.text('RAPPORT CONSOLIDÉ', 105, 80, { align: 'center' })

//   doc.setFontSize(14)
//   doc.text(getPeriodLabel(params.period), 105, 100, { align: 'center' })
//   doc.text(getContentTypeLabel(contentType), 105, 110, { align: 'center' })

//   doc.setFontSize(12)
//   const dateStr = new Date().toLocaleDateString('fr-FR', {
//     day: 'numeric',
//     month: 'long',
//     year: 'numeric'
//   })
//   doc.text(dateStr, 105, 130, { align: 'center' })

//   // Statistiques globales
//   const totalTasks = reports.reduce((sum, r) => sum + (r.tasks?.length || 0), 0)
//   const completedTasks = reports.reduce((sum, r) => 
//     sum + (r.tasks?.filter(t => t.completed).length || 0), 0
//   )
//   const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
//   const totalBlockers = reports.reduce((sum, r) => sum + (r.blockers?.length || 0), 0)
//   const completedAnalyses = analyses.filter(a => a.status === 'Completed').length

//   doc.setFontSize(10)
//   doc.setFont('helvetica', 'normal')
//   let yPos = 160
//   doc.text(`Projets inclus : ${projects.length}`, 105, yPos, { align: 'center' })
//   yPos += 8

//   if (contentType === 'reports' || contentType === 'both') {
//     doc.text(`Rapports générés : ${reports.length}`, 105, yPos, { align: 'center' })
//     yPos += 8
//     doc.text(`Tâches complétées : ${completedTasks}/${totalTasks} (${completionRate}%)`, 105, yPos, { align: 'center' })
//     yPos += 8
//     doc.text(`Blocages actifs : ${totalBlockers}`, 105, yPos, { align: 'center' })
//     yPos += 8
//   }

//   if (contentType === 'analyses' || contentType === 'both') {
//     doc.text(`Analyses créées : ${analyses.length}`, 105, yPos, { align: 'center' })
//     yPos += 8
//     doc.text(`Analyses terminées : ${completedAnalyses}`, 105, yPos, { align: 'center' })
//     yPos += 8
//   }

//   // ========================================
//   // RAPPORTS PAR PROJET
//   // ========================================
//   if (contentType === 'reports' || contentType === 'both') {
//     const sortedReports = [...reports].sort((a, b) => {
//       if (a.projectId !== b.projectId) {
//         return a.projectId.localeCompare(b.projectId)
//       }
//       return a.weekNumber - b.weekNumber
//     })

//     const projectGroups = new Map<string, Report[]>()
//     sortedReports.forEach(report => {
//       if (!projectGroups.has(report.projectId)) {
//         projectGroups.set(report.projectId, [])
//       }
//       projectGroups.get(report.projectId)!.push(report)
//     })

//     projectGroups.forEach((projectReports, projectId) => {
//       const project = projects.find(p => p.id === projectId)
//       if (!project) return

//       projectReports.forEach((report) => {
//         doc.addPage()
//         let currentY = 20

//         // EN-TÊTE DU RAPPORT
//         doc.setFillColor(59, 130, 246)
//         doc.rect(0, 0, 210, 30, 'F')

//         doc.setTextColor(255, 255, 255)
//         doc.setFontSize(18)
//         doc.setFont('helvetica', 'bold')
//         doc.text(`Semaine #${report.weekNumber}`, 15, 15)

//         doc.setFontSize(12)
//         doc.setFont('helvetica', 'normal')
//         doc.text(project.name, 15, 23)

//         const statusX = 170
//         doc.setFontSize(10)
//         doc.text(report.status === 'Published' ? 'Publié' : 'Brouillon', statusX, 15)

//         currentY = 40
//         doc.setTextColor(0, 0, 0)

//         // INFORMATIONS PROJET
//         doc.setFontSize(14)
//         doc.setFont('helvetica', 'bold')
//         doc.text('Informations Projet', 15, currentY)
//         currentY += 8

//         doc.setFontSize(10)
//         doc.setFont('helvetica', 'normal')
        
//         if (project.client) {
//           doc.text(`Client : ${project.client}`, 15, currentY)
//           currentY += 6
//         }

//         doc.text(
//           `Période : ${new Date(report.startDate).toLocaleDateString('fr-FR')} - ${new Date(report.endDate).toLocaleDateString('fr-FR')}`,
//           15,
//           currentY
//         )
//         currentY += 10

//         // MÉTRIQUES
//         const reportTasks = report.tasks?.length || 0
//         const reportCompleted = report.tasks?.filter(t => t.completed).length || 0
//         const reportRate = reportTasks > 0 ? Math.round((reportCompleted / reportTasks) * 100) : 0
//         const reportBlockers = report.blockers?.length || 0

//         doc.setFontSize(14)
//         doc.setFont('helvetica', 'bold')
//         doc.text('Métriques', 15, currentY)
//         currentY += 8

//         autoTable(doc, {
//           startY: currentY,
//           head: [['Métrique', 'Valeur']],
//           body: [
//             ['Total tâches', reportTasks.toString()],
//             ['Tâches complétées', `${reportCompleted} (${reportRate}%)`],
//             ['Blocages signalés', reportBlockers.toString()],
//           ],
//           theme: 'grid',
//           headStyles: { fillColor: [59, 130, 246] },
//           margin: { left: 15, right: 15 },
//         })

//         currentY = (doc as any).lastAutoTable.finalY + 10

//         // RÉSUMÉ
//         if (report.summary) {
//           doc.setFontSize(14)
//           doc.setFont('helvetica', 'bold')
//           doc.text('Résumé Hebdomadaire', 15, currentY)
//           currentY += 8

//           doc.setFontSize(10)
//           doc.setFont('helvetica', 'normal')
          
//           const summaryLines = doc.splitTextToSize(report.summary, 180)
//           doc.text(summaryLines, 15, currentY)
//           currentY += (summaryLines.length * 5) + 10
//         }

//         // TÂCHES
//         if (report.tasks && report.tasks.length > 0) {
//           if (currentY > 240) {
//             doc.addPage()
//             currentY = 20
//           }

//           doc.setFontSize(14)
//           doc.setFont('helvetica', 'bold')
//           doc.text(`Tâches de la Semaine (${report.tasks.length})`, 15, currentY)
//           currentY += 8

//           const tasksData = report.tasks.map(task => {
//             const member = members.find(m => m.id === task.assignedTo)
//             return [
//               task.completed ? '✓' : '○',
//               task.description,
//               member?.name || 'Non assignée',
//             ]
//           })

//           autoTable(doc, {
//             startY: currentY,
//             head: [['', 'Description', 'Assigné à']],
//             body: tasksData,
//             theme: 'striped',
//             headStyles: { fillColor: [59, 130, 246] },
//             columnStyles: {
//               0: { cellWidth: 10 },
//               1: { cellWidth: 130 },
//               2: { cellWidth: 45 },
//             },
//             margin: { left: 15, right: 15 },
//           })

//           currentY = (doc as any).lastAutoTable.finalY + 10
//         }

//         // BLOCAGES
//         if (report.blockers && report.blockers.length > 0) {
//           if (currentY > 200) {
//             doc.addPage()
//             currentY = 20
//           }

//           doc.setFontSize(14)
//           doc.setFont('helvetica', 'bold')
//           doc.setTextColor(239, 68, 68)
//           doc.text(`⚠ Blocages & Défis (${report.blockers.length})`, 15, currentY)
//           doc.setTextColor(0, 0, 0)
//           currentY += 8

//           const blockersData = report.blockers.map(blocker => [
//             translateBlockerLevel(blocker.level),
//             blocker.description,
//             blocker.mitigation || 'N/A',
//           ])

//           autoTable(doc, {
//             startY: currentY,
//             head: [['Niveau', 'Description', 'Mitigation']],
//             body: blockersData,
//             theme: 'grid',
//             headStyles: { fillColor: [239, 68, 68] },
//             columnStyles: {
//               0: { cellWidth: 25 },
//               1: { cellWidth: 85 },
//               2: { cellWidth: 85 },
//             },
//             margin: { left: 15, right: 15 },
//           })

//           currentY = (doc as any).lastAutoTable.finalY + 10
//         }

//         // OBJECTIFS
//         if (report.nextWeekObjectives && report.nextWeekObjectives.length > 0) {
//           if (currentY > 220) {
//             doc.addPage()
//             currentY = 20
//           }

//           doc.setFontSize(14)
//           doc.setFont('helvetica', 'bold')
//           doc.text(`Objectifs Semaine Prochaine (${report.nextWeekObjectives.length})`, 15, currentY)
//           currentY += 8

//           const objectivesData = report.nextWeekObjectives.map((obj, idx) => [
//             (idx + 1).toString(),
//             obj,
//           ])

//           autoTable(doc, {
//             startY: currentY,
//             head: [['#', 'Objectif']],
//             body: objectivesData,
//             theme: 'plain',
//             headStyles: { fillColor: [59, 130, 246] },
//             columnStyles: {
//               0: { cellWidth: 10 },
//               1: { cellWidth: 185 },
//             },
//             margin: { left: 15, right: 15 },
//           })
//         }

//         // Pied de page
//         addFooter(doc)
//       })
//     })
//   }

//   // ========================================
//   // ANALYSES PAR PROJET
//   // ========================================
//   if (contentType === 'analyses' || contentType === 'both') {
//     const sortedAnalyses = [...analyses].sort((a, b) => {
//       if (a.projectId !== b.projectId) {
//         return a.projectId.localeCompare(b.projectId)
//       }
//       return a.type.localeCompare(b.type)
//     })

//     const projectGroups = new Map<string, Analysis[]>()
//     sortedAnalyses.forEach(analysis => {
//       if (!projectGroups.has(analysis.projectId)) {
//         projectGroups.set(analysis.projectId, [])
//       }
//       projectGroups.get(analysis.projectId)!.push(analysis)
//     })

//     projectGroups.forEach((projectAnalyses, projectId) => {
//       const project = projects.find(p => p.id === projectId)
//       if (!project) return

//       projectAnalyses.forEach((analysis) => {
//         doc.addPage()
//         let currentY = 20

//         // EN-TÊTE ANALYSE
//         doc.setFillColor(59, 130, 246)
//         doc.rect(0, 0, 210, 30, 'F')

//         doc.setTextColor(255, 255, 255)
//         doc.setFontSize(18)
//         doc.setFont('helvetica', 'bold')
//         doc.text(`Analyse ${translateAnalysisType(analysis.type)}`, 15, 15)

//         doc.setFontSize(12)
//         doc.setFont('helvetica', 'normal')
//         doc.text(project.name, 15, 23)

//         const statusX = 170
//         doc.setFontSize(10)
//         doc.text(translateAnalysisStatus(analysis.status), statusX, 15)

//         currentY = 40
//         doc.setTextColor(0, 0, 0)

//         // INFORMATIONS PROJET
//         doc.setFontSize(14)
//         doc.setFont('helvetica', 'bold')
//         doc.text('Informations', 15, currentY)
//         currentY += 8

//         doc.setFontSize(10)
//         doc.setFont('helvetica', 'normal')
        
//         doc.text(`Titre : ${analysis.title}`, 15, currentY)
//         currentY += 6

//         if (project.client) {
//           doc.text(`Client : ${project.client}`, 15, currentY)
//           currentY += 6
//         }

//         doc.text(
//           `Date création : ${new Date(analysis.createdAt).toLocaleDateString('fr-FR')}`,
//           15,
//           currentY
//         )
//         currentY += 6

//         doc.text(
//           `Dernière MAJ : ${new Date(analysis.updatedAt).toLocaleDateString('fr-FR')}`,
//           15,
//           currentY
//         )
//         currentY += 12

//         // DESCRIPTION
//         if (analysis.description) {
//           doc.setFontSize(14)
//           doc.setFont('helvetica', 'bold')
//           doc.text('Description', 15, currentY)
//           currentY += 8

//           doc.setFontSize(10)
//           doc.setFont('helvetica', 'normal')
          
//           const descLines = doc.splitTextToSize(analysis.description, 180)
//           doc.text(descLines, 15, currentY)
//           currentY += (descLines.length * 5) + 10
//         }

//         // CONTENU DÉTAILLÉ AVEC TRADUCTION
//         if (analysis.content && Object.keys(analysis.content).length > 0) {
//           if (currentY > 220) {
//             doc.addPage()
//             currentY = 20
//           }

//           doc.setFontSize(14)
//           doc.setFont('helvetica', 'bold')
//           doc.text('Détails de l\'Analyse', 15, currentY)
//           currentY += 8

//           // Traduire les clés en français
//           const contentData = Object.entries(analysis.content).map(([key, value]) => {
//             const label = FIELD_LABELS[key] || key
//             return [label, value]
//           })

//           autoTable(doc, {
//             startY: currentY,
//             body: contentData,
//             theme: 'grid',
//             columnStyles: {
//               0: { cellWidth: 50, fontStyle: 'bold' },
//               1: { cellWidth: 145 },
//             },
//             margin: { left: 15, right: 15 },
//           })
//         }

//         // Pied de page
//         addFooter(doc)
//       })
//     })
//   }

//   // Générer le nom du fichier
//   const fileName = generateFileName('pdf', params.period, projects, contentType)
  
//   // Télécharger le fichier
//   doc.save(fileName)
// }

// function addFooter(doc: jsPDF) {
//   const pageCount = doc.getNumberOfPages()
//   doc.setFontSize(8)
//   doc.setTextColor(128, 128, 128)
//   doc.text(
//     `Généré le ${new Date().toLocaleDateString('fr-FR')} - Page ${doc.getCurrentPageInfo().pageNumber}/${pageCount}`,
//     105,
//     285,
//     { align: 'center' }
//   )
// }

// function getPeriodLabel(period: string): string {
//   switch (period) {
//     case 'week': return 'Cette semaine'
//     case 'month': return 'Ce mois'
//     case 'quarter': return 'Ce trimestre'
//     case 'year': return 'Cette année'
//     default: return period
//   }
// }

// function getContentTypeLabel(type: string): string {
//   switch (type) {
//     case 'reports': return 'Rapports Hebdomadaires'
//     case 'analyses': return 'Analyses & Spécifications'
//     case 'both': return 'Rapports + Analyses'
//     default: return type
//   }
// }

// function translateBlockerLevel(level: string): string {
//   switch (level) {
//     case 'high': return 'ÉLEVÉ'
//     case 'medium': return 'MOYEN'
//     case 'low': return 'BAS'
//     default: return level.toUpperCase()
//   }
// }

// function translateAnalysisType(type: string): string {
//   switch (type) {
//     case 'Functional': return 'Fonctionnelle'
//     case 'Technical': return 'Technique'
//     case 'UI/UX': return 'UX/UI'
//     case 'Performance': return 'Performance'
//     default: return type
//   }
// }

// function translateAnalysisStatus(status: string): string {
//   switch (status) {
//     case 'Draft': return 'Brouillon'
//     case 'In Progress': return 'En cours'
//     case 'Completed': return 'Terminée'
//     default: return status
//   }
// }

// function generateFileName(
//   type: 'excel' | 'pdf', 
//   period: string, 
//   projects: Project[],
//   contentType: string
// ): string {
//   const date = new Date().toISOString().split('T')[0]
//   const periodLabel = getPeriodLabel(period).toLowerCase().replace(/\s+/g, '-')
//   const ext = type === 'excel' ? 'xlsx' : 'pdf'
  
//   let prefix = 'export'
//   if (contentType === 'reports') prefix = 'rapports'
//   if (contentType === 'analyses') prefix = 'analyses'
//   if (contentType === 'both') prefix = 'complet'
  
//   if (projects.length === 1) {
//     const projectName = projects[0].name.toLowerCase().replace(/\s+/g, '-')
//     return `${prefix}-${projectName}-${periodLabel}-${date}.${ext}`
//   }
  
//   return `${prefix}-tous-projets-${periodLabel}-${date}.${ext}`
// }





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
}

// Mapping des champs techniques vers labels français
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

export async function generatePDFExport(params: ExportParams) {
  const { reports, analyses, projects, members, period, contentType, includeLogo } = params

  const doc = new jsPDF()
  let yPos = 20

  // ========================================
  // PAGE DE GARDE
  // ========================================
  const companyName = "Mon Entreprise" // TODO: Récupérer depuis DB

  // Logo (si demandé)
  if (includeLogo) {
    // TODO: Implémenter le chargement du logo depuis la DB ou assets
    // doc.addImage(logoData, 'PNG', 15, yPos, 30, 30)
    yPos += 35
  }

  // Titre principal
  doc.setFontSize(24)
  doc.setFont('helvetica', 'bold')
  doc.text(getMainTitle(contentType), 15, yPos)
  yPos += 15

  // Sous-titre
  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(100, 100, 100)
  doc.text(companyName, 15, yPos)
  yPos += 10
  doc.text(getPeriodLabel(period), 15, yPos)
  yPos += 7
  doc.text(`Date de génération : ${new Date().toLocaleDateString('fr-FR')}`, 15, yPos)
  yPos += 20

  // ========================================
  // STATISTIQUES GLOBALES
  // ========================================
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(0, 0, 0)
  doc.text('Statistiques Globales', 15, yPos)
  yPos += 10

  const totalTasks = reports.reduce((sum, r) => sum + (r.tasks?.length || 0), 0)
  const completedTasks = reports.reduce((sum, r) => 
    sum + (r.tasks?.filter(t => t.completed).length || 0), 0
  )
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
  const totalBlockers = reports.reduce((sum, r) => sum + (r.blockers?.length || 0), 0)
  
  const completedAnalyses = analyses.filter(a => a.status === 'Completed').length
  const analysesRate = analyses.length > 0 ? Math.round((completedAnalyses / analyses.length) * 100) : 0

  const statsData: any[] = [
    ['Nombre de projets', projects.length],
  ]

  if (contentType === 'reports' || contentType === 'both' || contentType === 'single-report') {
    statsData.push(
      ['Rapports hebdomadaires', reports.length],
      ['Total tâches', totalTasks],
      ['Tâches complétées', `${completedTasks} (${completionRate}%)`],
      ['Blocages actifs', totalBlockers]
    )
  }

  if (contentType === 'analyses' || contentType === 'both') {
    statsData.push(
      ['Analyses totales', analyses.length],
      ['Analyses terminées', `${completedAnalyses} (${analysesRate}%)`],
      ['En cours', analyses.filter(a => a.status === 'In Progress').length],
      ['Brouillon', analyses.filter(a => a.status === 'Draft').length]
    )
  }

  if (contentType === 'blockers') {
    const highBlockers = reports.reduce((sum, r) => sum + (r.blockers?.filter(b => b.level === 'high').length || 0), 0)
    const mediumBlockers = reports.reduce((sum, r) => sum + (r.blockers?.filter(b => b.level === 'medium').length || 0), 0)
    const lowBlockers = reports.reduce((sum, r) => sum + (r.blockers?.filter(b => b.level === 'low').length || 0), 0)
    
    statsData.push(
      ['Total blocages', totalBlockers],
      ['Blocages élevés', highBlockers],
      ['Blocages moyens', mediumBlockers],
      ['Blocages faibles', lowBlockers]
    )
  }

  autoTable(doc, {
    startY: yPos,
    head: [['Métrique', 'Valeur']],
    body: statsData,
    theme: 'grid',
    headStyles: { fillColor: [59, 130, 246], fontSize: 11 },
    styles: { fontSize: 10 },
    margin: { left: 15, right: 15 },
  })

  yPos = (doc as any).lastAutoTable.finalY + 15

  // ========================================
  // EXPORT BLOCKERS SEULS
  // ========================================
  if (contentType === 'blockers') {
    doc.addPage()
    yPos = 20

    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.text('Rapport Détaillé des Blocages', 15, yPos)
    yPos += 10

    const blockersData: any[] = []
    
    reports.forEach(report => {
      const project = projects.find(p => p.id === report.projectId)
      report.blockers?.forEach(blocker => {
        blockersData.push([
          project?.name || 'N/A',
          `Sem. ${report.weekNumber}`,
          translateBlockerLevel(blocker.level),
          blocker.description,
          blocker.mitigation || 'Aucune action définie',
        ])
      })
    })

    if (blockersData.length > 0) {
      // Trier par niveau (high > medium > low)
      blockersData.sort((a, b) => {
        const levelOrder = { 'Élevé': 0, 'Moyen': 1, 'Bas': 2 }
        return (levelOrder[a[2] as keyof typeof levelOrder] || 99) - (levelOrder[b[2] as keyof typeof levelOrder] || 99)
      })

      autoTable(doc, {
        startY: yPos,
        head: [['Projet', 'Semaine', 'Niveau', 'Description', 'Mitigation']],
        body: blockersData,
        theme: 'grid',
        headStyles: { fillColor: [239, 68, 68], fontSize: 10 },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: {
          0: { cellWidth: 35 },
          1: { cellWidth: 20 },
          2: { cellWidth: 20 },
          3: { cellWidth: 55 },
          4: { cellWidth: 55 },
        },
        margin: { left: 15, right: 15 },
        didDrawCell: (data) => {
          // Colorier selon le niveau
          if (data.column.index === 2 && data.section === 'body') {
            const level = data.cell.text[0]
            if (level === 'Élevé') {
              doc.setFillColor(239, 68, 68)
            } else if (level === 'Moyen') {
              doc.setFillColor(251, 146, 60)
            } else if (level === 'Bas') {
              doc.setFillColor(234, 179, 8)
            }
          }
        }
      })

      // Résumé par niveau
      doc.addPage()
      yPos = 20

      doc.setFontSize(16)
      doc.text('Résumé par Niveau de Criticité', 15, yPos)
      yPos += 10

      const highBlockers = blockersData.filter(b => b[2] === 'Élevé')
      const mediumBlockers = blockersData.filter(b => b[2] === 'Moyen')
      const lowBlockers = blockersData.filter(b => b[2] === 'Bas')

      const summaryData = [
        ['Blocages Élevés', highBlockers.length, `${Math.round((highBlockers.length / blockersData.length) * 100)}%`],
        ['Blocages Moyens', mediumBlockers.length, `${Math.round((mediumBlockers.length / blockersData.length) * 100)}%`],
        ['Blocages Faibles', lowBlockers.length, `${Math.round((lowBlockers.length / blockersData.length) * 100)}%`],
      ]

      autoTable(doc, {
        startY: yPos,
        head: [['Niveau', 'Nombre', 'Pourcentage']],
        body: summaryData,
        theme: 'grid',
        headStyles: { fillColor: [59, 130, 246] },
        margin: { left: 15, right: 15 },
      })
    } else {
      doc.setFontSize(12)
      doc.setTextColor(100, 100, 100)
      doc.text('Aucun blocage trouvé pour cette période.', 15, yPos)
    }

    // Télécharger le PDF
    const fileName = generateFileName('pdf', period, projects, contentType)
    doc.save(fileName)
    return
  }

  // ========================================
  // SECTION RAPPORTS
  // ========================================
  if (contentType === 'reports' || contentType === 'both' || contentType === 'single-report') {
    doc.addPage()
    yPos = 20

    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.text('Rapports Hebdomadaires', 15, yPos)
    yPos += 10

    // Tableau des rapports
    const reportsData = reports.map(report => {
      const project = projects.find(p => p.id === report.projectId)
      const totalTasks = report.tasks?.length || 0
      const completedTasks = report.tasks?.filter(t => t.completed).length || 0
      const rate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
      
      return [
        `Sem. ${report.weekNumber}`,
        project?.name || 'N/A',
        project?.client || 'N/A',
        `${completedTasks}/${totalTasks}`,
        `${rate}%`,
        report.blockers?.length || 0,
      ]
    })

    autoTable(doc, {
      startY: yPos,
      head: [['Semaine', 'Projet', 'Client', 'Tâches', 'Taux', 'Blocages']],
      body: reportsData,
      theme: 'grid',
      headStyles: { fillColor: [59, 130, 246], fontSize: 10 },
      styles: { fontSize: 9 },
      columnStyles: {
        0: { cellWidth: 20 },
        1: { cellWidth: 50 },
        2: { cellWidth: 40 },
        3: { cellWidth: 25 },
        4: { cellWidth: 20 },
        5: { cellWidth: 25 },
      },
      margin: { left: 15, right: 15 },
    })

    // Détail des tâches
    doc.addPage()
    yPos = 20

    doc.setFontSize(16)
    doc.text('Détail des Tâches', 15, yPos)
    yPos += 10

    const tasksData: any[] = []
    reports.forEach(report => {
      const project = projects.find(p => p.id === report.projectId)
      report.tasks?.forEach(task => {
        const member = members.find(m => m.id === task.assignedTo)
        tasksData.push([
          project?.name || 'N/A',
          `Sem. ${report.weekNumber}`,
          task.description.substring(0, 60) + (task.description.length > 60 ? '...' : ''),
          member?.name || 'Non assignée',
          task.completed ? '✓' : '⏳',
        ])
      })
    })

    if (tasksData.length > 0) {
      autoTable(doc, {
        startY: yPos,
        head: [['Projet', 'Semaine', 'Description', 'Assigné à', 'Statut']],
        body: tasksData,
        theme: 'grid',
        headStyles: { fillColor: [59, 130, 246], fontSize: 10 },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: {
          0: { cellWidth: 40 },
          1: { cellWidth: 20 },
          2: { cellWidth: 70 },
          3: { cellWidth: 35 },
          4: { cellWidth: 15 },
        },
        margin: { left: 15, right: 15 },
      })
    }

    // Blocages
    if (totalBlockers > 0) {
      doc.addPage()
      yPos = 20

      doc.setFontSize(16)
      doc.text('Blocages', 15, yPos)
      yPos += 10

      const blockersData: any[] = []
      reports.forEach(report => {
        const project = projects.find(p => p.id === report.projectId)
        report.blockers?.forEach(blocker => {
          blockersData.push([
            project?.name || 'N/A',
            `Sem. ${report.weekNumber}`,
            translateBlockerLevel(blocker.level),
            blocker.description.substring(0, 50) + (blocker.description.length > 50 ? '...' : ''),
            (blocker.mitigation || 'N/A').substring(0, 50),
          ])
        })
      })

      autoTable(doc, {
        startY: yPos,
        head: [['Projet', 'Semaine', 'Niveau', 'Description', 'Mitigation']],
        body: blockersData,
        theme: 'grid',
        headStyles: { fillColor: [239, 68, 68], fontSize: 10 },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: {
          0: { cellWidth: 35 },
          1: { cellWidth: 20 },
          2: { cellWidth: 20 },
          3: { cellWidth: 60 },
          4: { cellWidth: 50 },
        },
        margin: { left: 15, right: 15 },
      })
    }

    // Objectifs
    const objectivesData: any[] = []
    reports.forEach(report => {
      const project = projects.find(p => p.id === report.projectId)
      report.nextWeekObjectives?.forEach((objective, index) => {
        objectivesData.push([
          project?.name || 'N/A',
          `Sem. ${report.weekNumber}`,
          `${index + 1}`,
          objective,
        ])
      })
    })

    if (objectivesData.length > 0) {
      doc.addPage()
      yPos = 20

      doc.setFontSize(16)
      doc.text('Objectifs Semaine Prochaine', 15, yPos)
      yPos += 10

      autoTable(doc, {
        startY: yPos,
        head: [['Projet', 'Semaine', 'N°', 'Objectif']],
        body: objectivesData,
        theme: 'grid',
        headStyles: { fillColor: [34, 197, 94], fontSize: 10 },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: {
          0: { cellWidth: 40 },
          1: { cellWidth: 20 },
          2: { cellWidth: 10 },
          3: { cellWidth: 110 },
        },
        margin: { left: 15, right: 15 },
      })
    }
  }

  // ========================================
  // SECTION ANALYSES
  // ========================================
  if (contentType === 'analyses' || contentType === 'both') {
    doc.addPage()
    yPos = 20

    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.text('Analyses & Spécifications', 15, yPos)
    yPos += 10

    // Tableau des analyses
    const analysesData = analyses.map(analysis => {
      const project = projects.find(p => p.id === analysis.projectId)
      return [
        project?.name || 'N/A',
        analysis.title.substring(0, 40) + (analysis.title.length > 40 ? '...' : ''),
        translateAnalysisType(analysis.type),
        translateAnalysisStatus(analysis.status),
        new Date(analysis.createdAt).toLocaleDateString('fr-FR'),
      ]
    })

    autoTable(doc, {
      startY: yPos,
      head: [['Projet', 'Titre', 'Type', 'Statut', 'Date']],
      body: analysesData,
      theme: 'grid',
      headStyles: { fillColor: [139, 92, 246], fontSize: 10 },
      styles: { fontSize: 9 },
      columnStyles: {
        0: { cellWidth: 40 },
        1: { cellWidth: 60 },
        2: { cellWidth: 30 },
        3: { cellWidth: 25 },
        4: { cellWidth: 25 },
      },
      margin: { left: 15, right: 15 },
    })

    // Détail de chaque analyse
    analyses.forEach((analysis, index) => {
      doc.addPage()
      yPos = 20

      const project = projects.find(p => p.id === analysis.projectId)

      doc.setFontSize(14)
      doc.setFont('helvetica', 'bold')
      doc.text(`Analyse ${index + 1}: ${analysis.title}`, 15, yPos)
      yPos += 8

      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(100, 100, 100)
      doc.text(`Projet: ${project?.name || 'N/A'} | Type: ${translateAnalysisType(analysis.type)} | Statut: ${translateAnalysisStatus(analysis.status)}`, 15, yPos)
      yPos += 10

      doc.setTextColor(0, 0, 0)
      doc.setFontSize(10)
      doc.text('Description:', 15, yPos)
      yPos += 5

      const descriptionLines = doc.splitTextToSize(analysis.description || 'Aucune description', 180)
      doc.text(descriptionLines, 15, yPos)
      yPos += (descriptionLines.length * 5) + 10

      // Contenu de l'analyse
      if (analysis.content && Object.keys(analysis.content).length > 0) {
        doc.setFont('helvetica', 'bold')
        doc.text('Contenu détaillé:', 15, yPos)
        yPos += 7

        Object.entries(analysis.content).forEach(([key, value]) => {
          const label = FIELD_LABELS[key] || key
          
          doc.setFont('helvetica', 'bold')
          doc.setFontSize(9)
          doc.text(`${label}:`, 15, yPos)
          yPos += 5

          doc.setFont('helvetica', 'normal')
          const contentLines = doc.splitTextToSize(value || 'N/A', 175)
          doc.text(contentLines, 20, yPos)
          yPos += (contentLines.length * 4) + 5

          // Nouvelle page si nécessaire
          if (yPos > 270) {
            doc.addPage()
            yPos = 20
          }
        })
      }
    })
  }

  // Télécharger le PDF
  const fileName = generateFileName('pdf', period, projects, contentType)
  doc.save(fileName)
}

function getMainTitle(contentType: string): string {
  switch (contentType) {
    case 'reports': return 'Rapports Hebdomadaires'
    case 'analyses': return 'Analyses & Spécifications'
    case 'both': return 'Rapport Complet'
    case 'single-report': return 'Rapport Hebdomadaire'
    case 'blockers': return 'Rapport des Blocages'
    default: return 'Export'
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
  if (contentType === 'single-report') prefix = 'rapport'
  if (contentType === 'blockers') prefix = 'blocages'
  
  if (projects.length === 1) {
    const projectName = projects[0].name.toLowerCase().replace(/\s+/g, '-')
    return `${prefix}-${projectName}-${periodLabel}-${date}.${ext}`
  }
  
  return `${prefix}-tous-projets-${periodLabel}-${date}.${ext}`
}