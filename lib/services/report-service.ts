// lib/services/report-service.ts
import { collection, addDoc, getDocs, getDoc, doc, query, where, Timestamp, updateDoc, deleteDoc } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'

export interface Task {
  id: string
  description: string
  assignedTo?: string
  completed: boolean
}

export interface Blocker {
  id: string
  description: string
  level: 'high' | 'medium' | 'low'
  mitigation?: string
}

export interface Report {
  id: string
  projectId: string
  companyId: string  
  userId: string
  weekNumber: number
  startDate: Date
  endDate: Date
  status: 'Draft' | 'Published'
  currentStep: number
  summary: string
  tasks: Task[]
  blockers: Blocker[]
  nextWeekObjectives: string[]
  createdAt: Date
  updatedAt: Date
}

// export async function createReport(data: {
//   projectId: string
//   companyId: string  
//   weekNumber: number
//   startDate: string
//   endDate: string
//   currentStep?: number
//   summary?: string
//   tasks?: Task[]
//   blockers?: Blocker[]
//   nextWeekObjectives?: string[]
// }) {
//   console.log('[Report Service] Creating report:', data)
//   console.log('[Report Service] Current user:', auth.currentUser?.uid)
  
//   // ✅ Vérification doublon par weekNumber + companyId
//   const existingWeekQuery = query(
//     collection(db, 'reports'),
//     where('projectId', '==', data.projectId),
//     where('companyId', '==', data.companyId),
//     where('userId', '==', auth.currentUser?.uid),
//     where('weekNumber', '==', data.weekNumber)
//   )
  
//   const existingWeekSnapshot = await getDocs(existingWeekQuery)
//   console.log('[Report Service] Found by weekNumber:', existingWeekSnapshot.size)
  
//   if (!existingWeekSnapshot.empty) {
//     const existingId = existingWeekSnapshot.docs[0].id
//     console.log('[Report Service] Duplicate found:', existingId)
//     throw new Error(`Un rapport existe déjà pour la semaine ${data.weekNumber} de ce projet (ID: ${existingId})`)
//   }
  
//   // ✅ Vérification doublon par dates + companyId
//   const startTimestamp = Timestamp.fromDate(new Date(data.startDate))
//   const endTimestamp = Timestamp.fromDate(new Date(data.endDate))
  
//   const existingDatesQuery = query(
//     collection(db, 'reports'),
//     where('projectId', '==', data.projectId),
//     where('companyId', '==', data.companyId),
//     where('userId', '==', auth.currentUser?.uid),
//     where('startDate', '==', startTimestamp),
//     where('endDate', '==', endTimestamp)
//   )
  
//   const existingDatesSnapshot = await getDocs(existingDatesQuery)
//   console.log('[Report Service] Found by dates:', existingDatesSnapshot.size)
  
//   if (!existingDatesSnapshot.empty) {
//     const existingId = existingDatesSnapshot.docs[0].id
//     console.log('[Report Service] Duplicate found:', existingId)
//     throw new Error(
//       `Un rapport existe déjà pour la période du ${new Date(data.startDate).toLocaleDateString('fr-FR')} au ${new Date(data.endDate).toLocaleDateString('fr-FR')} (ID: ${existingId}).`
//     )
//   }
  
//   // Créer le rapport
//   const docRef = await addDoc(collection(db, 'reports'), {
//     projectId: data.projectId,
//     companyId: data.companyId,  // ✅ AJOUTÉ
//     userId: auth.currentUser?.uid,
//     weekNumber: data.weekNumber,
//     startDate: startTimestamp,
//     endDate: endTimestamp,
//     status: 'Draft',
//     currentStep: data.currentStep || 0,
//     summary: data.summary || '',
//     tasks: data.tasks || [],
//     blockers: data.blockers || [],
//     nextWeekObjectives: data.nextWeekObjectives || [],
//     createdAt: Timestamp.now(),
//     updatedAt: Timestamp.now()
//   })
  
//   console.log('[Report Service] Report created with ID:', docRef.id)
//   return docRef.id
// }

export async function createReport(data: {
  projectId: string
  companyId: string
  weekNumber: number
  startDate: string
  endDate: string
  currentStep?: number
  summary?: string
  tasks?: Task[]
  blockers?: Blocker[]
  nextWeekObjectives?: string[]
}) {
  console.log('[Report Service] Creating report:', data)
  console.log('[Report Service] Current user:', auth.currentUser?.uid)
  
  // ✅ OPTIMISÉ - Préparer les timestamps une seule fois
  const startTimestamp = Timestamp.fromDate(new Date(data.startDate))
  const endTimestamp = Timestamp.fromDate(new Date(data.endDate))
  
  // ✅ OPTIMISÉ - Préparer les 2 requêtes en parallèle
  const existingWeekQuery = query(
    collection(db, 'reports'),
    where('projectId', '==', data.projectId),
    where('companyId', '==', data.companyId),
    where('userId', '==', auth.currentUser?.uid),
    where('weekNumber', '==', data.weekNumber)
  )
  
  const existingDatesQuery = query(
    collection(db, 'reports'),
    where('projectId', '==', data.projectId),
    where('companyId', '==', data.companyId),
    where('userId', '==', auth.currentUser?.uid),
    where('startDate', '==', startTimestamp),
    where('endDate', '==', endTimestamp)
  )
  
  // ✅ OPTIMISÉ - Exécuter les 2 vérifications en PARALLÈLE
  const [existingWeekSnapshot, existingDatesSnapshot] = await Promise.all([
    getDocs(existingWeekQuery),
    getDocs(existingDatesQuery)
  ])
  
  console.log('[Report Service] Found by weekNumber:', existingWeekSnapshot.size)
  console.log('[Report Service] Found by dates:', existingDatesSnapshot.size)
  
  // Vérifier doublon par weekNumber
  if (!existingWeekSnapshot.empty) {
    const existingId = existingWeekSnapshot.docs[0].id
    console.log('[Report Service] Duplicate found:', existingId)
    throw new Error(`Un rapport existe déjà pour la semaine ${data.weekNumber} de ce projet`)
  }
  
  // Vérifier doublon par dates
  if (!existingDatesSnapshot.empty) {
    const existingId = existingDatesSnapshot.docs[0].id
    console.log('[Report Service] Duplicate found:', existingId)
    throw new Error(
      `Un rapport existe déjà pour la période du ${new Date(data.startDate).toLocaleDateString('fr-FR')} au ${new Date(data.endDate).toLocaleDateString('fr-FR')}`
    )
  }
  
  // Créer le rapport
  const docRef = await addDoc(collection(db, 'reports'), {
    projectId: data.projectId,
    companyId: data.companyId,
    userId: auth.currentUser?.uid,
    weekNumber: data.weekNumber,
    startDate: startTimestamp,
    endDate: endTimestamp,
    status: 'Draft',
    currentStep: data.currentStep || 0,
    summary: data.summary || '',
    tasks: data.tasks || [],
    blockers: data.blockers || [],
    nextWeekObjectives: data.nextWeekObjectives || [],
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  })
  
  console.log('[Report Service] Report created with ID:', docRef.id)
  return docRef.id
}

export async function updateReport(
  reportId: string,
  data: {
    currentStep?: number
    summary?: string
    tasks?: Task[]
    blockers?: Blocker[]
    nextWeekObjectives?: string[]
    status?: 'Draft' | 'Published'
  }
) {
  console.log('[Report Service] Updating report:', reportId, data)
  
  const reportRef = doc(db, 'reports', reportId)
  await updateDoc(reportRef, {
    ...data,
    updatedAt: Timestamp.now()
  })
  
  console.log('[Report Service] Report updated')
}

// ✅ Filtrer par companyId
export async function getReportsByProject(projectId: string, companyId: string): Promise<Report[]> {
  console.log('[Report Service] Fetching reports for project:', projectId, 'company:', companyId)
  
  const q = query(
    collection(db, 'reports'),
    where('projectId', '==', projectId),
    where('companyId', '==', companyId),  // ✅ AJOUTÉ
    where('userId', '==', auth.currentUser?.uid)
  )
  
  const snapshot = await getDocs(q)
  console.log('[Report Service] Query returned:', snapshot.docs.length, 'documents')
  
  const reports = snapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      startDate: data.startDate?.toDate(),
      endDate: data.endDate?.toDate(),
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate()
    }
  }) as Report[]
  
  const sorted = reports.sort((a, b) => b.weekNumber - a.weekNumber)
  console.log('[Report Service] Returning reports:', sorted)
  
  return sorted
}

export async function getReportById(reportId: string): Promise<Report | null> {
  console.log('[Report Service] Fetching report:', reportId)
  
  try {
    const reportRef = doc(db, 'reports', reportId)
    const reportSnap = await getDoc(reportRef)
    
    if (!reportSnap.exists()) {
      return null
    }
    
    const data = reportSnap.data()
    
    if (data.userId !== auth.currentUser?.uid) {
      return null
    }
    
    return {
      id: reportSnap.id,
      ...data,
      startDate: data.startDate?.toDate(),
      endDate: data.endDate?.toDate(),
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate(),
      tasks: data.tasks || [],
      blockers: data.blockers || [],
      nextWeekObjectives: data.nextWeekObjectives || []
    } as Report
  } catch (error) {
    console.error('[Report Service] Error fetching report:', error)
    throw error
  }
}

// ✅ Filtrer par companyId
export async function getAllReports(companyId: string): Promise<Report[]> {
  console.log('[Report Service] Fetching all reports for company:', companyId)
  
  const q = query(
    collection(db, 'reports'),
    where('companyId', '==', companyId),  // ✅ AJOUTÉ
    where('userId', '==', auth.currentUser?.uid)
  )
  
  const snapshot = await getDocs(q)
  const reports = snapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      startDate: data.startDate?.toDate(),
      endDate: data.endDate?.toDate(),
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate(),
      tasks: data.tasks || [],
      blockers: data.blockers || [],
      nextWeekObjectives: data.nextWeekObjectives || []
    }
  }) as Report[]
  
  return reports.sort((a, b) => b.weekNumber - a.weekNumber)
}

export async function deleteReport(reportId: string) {
  console.log('[Report Service] Deleting report:', reportId)
  await deleteDoc(doc(db, 'reports', reportId))
  console.log('[Report Service] Report deleted')
}