// // lib/services/project-service.ts
// import { collection, addDoc, getDocs, updateDoc, doc, query, where, Timestamp, getDoc } from 'firebase/firestore'
// import { db, auth } from '@/lib/firebase'

// export interface Project {
//   id: string
//   companyId: string
//   userId: string
//   name: string
//   type: 'Web App' | 'Mobile App' | 'Website' | 'Social Media Campaign'
//   client?: string
//   description?: string
//   startDate: Date
//   status: 'Open' | 'Completed'
//   analysisProgress: number        // ✅ NOUVEAU - Remplace progress
//   analysisComplete: boolean
//   reportsCount: number
//   createdAt: Date
//   updatedAt: Date
// }

// export async function createProject(data: {
//   companyId: string
//   name: string
//   type: Project['type']
//   client?: string
//   startDate: string
// }) {
//   console.log('[Project Service] Creating project:', data)
  
//   // Vérifier les doublons
//   const existingQuery = query(
//     collection(db, 'projects'),
//     where('companyId', '==', data.companyId),
//     where('userId', '==', auth.currentUser?.uid),
//     where('name', '==', data.name),
//     where('type', '==', data.type),
//     where('client', '==', data.client || null)
//   )
  
//   const existingSnapshot = await getDocs(existingQuery)
  
//   if (!existingSnapshot.empty) {
//     throw new Error('Un projet avec ce nom, type et client existe déjà')
//   }
  
//   const startDateTimestamp = Timestamp.fromDate(new Date(data.startDate))
  
//   const docRef = await addDoc(collection(db, 'projects'), {
//     companyId: data.companyId,
//     name: data.name,
//     type: data.type,
//     client: data.client || null,
//     startDate: startDateTimestamp,
//     userId: auth.currentUser?.uid,
//     status: 'Open',
//     analysisProgress: 0,           // ✅ NOUVEAU
//     analysisComplete: false,
//     reportsCount: 0,
//     createdAt: Timestamp.now(),
//     updatedAt: Timestamp.now()
//   })
//   console.log('[Project Service] Project created with ID:', docRef.id)
//   return docRef.id
// }

// export async function updateProject(
//   projectId: string,
//   data: {
//     name: string
//     type: Project['type']
//     client?: string
//     startDate: string
//   }
// ) {
//   console.log('[Project Service] Updating project:', projectId, data)
  
//   // Récupérer le projet actuel pour vérifier les doublons
//   const projectRef = doc(db, 'projects', projectId)
  
//   // Vérifier les doublons (exclure le projet en cours de modification)
//   const existingQuery = query(
//     collection(db, 'projects'),
//     where('userId', '==', auth.currentUser?.uid),
//     where('name', '==', data.name),
//     where('type', '==', data.type),
//     where('client', '==', data.client || null)
//   )
  
//   const existingSnapshot = await getDocs(existingQuery)
//   const hasDuplicate = existingSnapshot.docs.some(doc => doc.id !== projectId)
  
//   if (hasDuplicate) {
//     throw new Error('Un projet avec ce nom, type et client existe déjà')
//   }
  
//   const startDateTimestamp = Timestamp.fromDate(new Date(data.startDate))
  
//   await updateDoc(projectRef, {
//     name: data.name,
//     type: data.type,
//     client: data.client || null,
//     startDate: startDateTimestamp,
//     updatedAt: Timestamp.now()
//   })
  
//   console.log('[Project Service] Project updated')
// }

// export async function getProjectsByCompany(companyId: string): Promise<Project[]> {
//   console.log('[Project Service] Fetching projects for company:', companyId)
//   console.log('[Project Service] Current user:', auth.currentUser?.uid)
  
//   const q = query(
//     collection(db, 'projects'),
//     where('companyId', '==', companyId),
//     where('userId', '==', auth.currentUser?.uid)
//   )
  
//   console.log('[Project Service] Executing query...')
//   const snapshot = await getDocs(q)
//   console.log('[Project Service] Query returned:', snapshot.docs.length, 'documents')
  
//   const projects = snapshot.docs.map(doc => {
//     const data = doc.data()
//     console.log('[Project Service] Processing document:', doc.id, data)
    
//     return {
//       id: doc.id,
//       ...data,
//       startDate: data.startDate?.toDate ? data.startDate.toDate() : new Date(data.startDate),
//       createdAt: data.createdAt?.toDate(),
//       updatedAt: data.updatedAt?.toDate()
//     }
//   }) as Project[]
  
//   console.log('[Project Service] Mapped projects:', projects)
  
//   const sorted = projects.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
//   console.log('[Project Service] Returning projects:', sorted)
  
//   return sorted
// }

// export async function getProjectById(projectId: string): Promise<Project | null> {
//   console.log('[Project Service] getProjectById called with:', projectId)
//   console.log('[Project Service] Current user:', auth.currentUser?.uid)
  
//   try {
//     const projectRef = doc(db, 'projects', projectId)
//     console.log('[Project Service] Project ref created:', projectRef.path)
    
//     const projectSnap = await getDoc(projectRef)
//     console.log('[Project Service] getDoc completed, exists:', projectSnap.exists())
    
//     if (!projectSnap.exists()) {
//       console.log('[Project Service] Project not found in Firestore')
//       return null
//     }
    
//     const data = projectSnap.data()
//     console.log('[Project Service] Raw project data:', data)
    
//     // Vérifier que le projet appartient à l'utilisateur actuel
//     if (data.userId !== auth.currentUser?.uid) {
//       console.warn('[Project Service] Project does not belong to current user')
//       console.log('[Project Service] Project userId:', data.userId)
//       console.log('[Project Service] Current userId:', auth.currentUser?.uid)
//       return null
//     }
    
//     const project = {
//       id: projectSnap.id,
//       ...data,
//       startDate: data.startDate?.toDate ? data.startDate.toDate() : new Date(data.startDate),
//       createdAt: data.createdAt?.toDate(),
//       updatedAt: data.updatedAt?.toDate()
//     } as Project
    
//     console.log('[Project Service] Returning project:', project)
//     return project
//   } catch (error) {
//     console.error('[Project Service] Error fetching project:', error)
//     throw error
//   }
// }

// export async function updateProjectProgress(projectId: string) {
//   console.log('[Project Service] Updating project progress:', projectId)
  
//   const analysesQuery = query(
//     collection(db, 'analyses'),
//     where('projectId', '==', projectId),
//     where('userId', '==', auth.currentUser?.uid)
//   )
  
//   const analysesSnap = await getDocs(analysesQuery)
//   const analyses = analysesSnap.docs.map(doc => doc.data())
  
//   const totalAnalyses = analyses.length
//   const completedAnalyses = analyses.filter(a => a.status === 'Completed').length
  
//   const analysisProgress = totalAnalyses > 0 
//     ? Math.round((completedAnalyses / totalAnalyses) * 100)
//     : 0
  
//   const reportsQuery = query(
//     collection(db, 'reports'),
//     where('projectId', '==', projectId),
//     where('userId', '==', auth.currentUser?.uid),
//     where('status', '==', 'Published')
//   )
  
//   const reportsSnap = await getDocs(reportsQuery)
//   const reportsCount = reportsSnap.size
  
//   // ✅ Bouclage automatique si 4 analyses terminées
//   const shouldAutoComplete = completedAnalyses === 4
  
//   const projectRef = doc(db, 'projects', projectId)
  
//   const updateData: any = {
//     analysisProgress,
//     reportsCount,
//     updatedAt: Timestamp.now()
//   }
  
//   // ✅ Ne modifier analysisComplete que si auto-bouclage
//   if (shouldAutoComplete) {
//     updateData.analysisComplete = true
//   }
  
//   await updateDoc(projectRef, updateData)
  
//   console.log('[Project Service] Project progress updated:', {
//     totalAnalyses,
//     completedAnalyses,
//     analysisProgress,
//     reportsCount,
//     autoCompleted: shouldAutoComplete
//   })
// }

// // ✅ NOUVELLE FONCTION - Boucler la phase d'analyse
// export async function completeAnalysisPhase(projectId: string) {
//   console.log('[Project Service] Completing analysis phase for project:', projectId)
  
//   const projectRef = doc(db, 'projects', projectId)
//   await updateDoc(projectRef, {
//     analysisComplete: true,
//     updatedAt: Timestamp.now()
//   })
  
//   console.log('[Project Service] Analysis phase marked as complete')
// }




// lib/services/project-service.ts
import { collection, addDoc, getDocs, updateDoc, doc, query, where, Timestamp, getDoc } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'

export interface Project {
  id: string
  companyId: string
  userId: string
  name: string
  type: 'Web App' | 'Mobile App' | 'Website' | 'Social Media Campaign'
  client?: string
  description?: string
  startDate: Date
  status: 'Open' | 'Completed'
  analysisProgress: number
  analysisComplete: boolean
  reportsCount: number
  createdAt: Date
  updatedAt: Date
}

export async function createProject(data: {
  companyId: string
  name: string
  type: Project['type']
  client?: string
  startDate: string
}) {
  console.log('[Project Service] Creating project:', data)
  
  const existingQuery = query(
    collection(db, 'projects'),
    where('companyId', '==', data.companyId),
    where('userId', '==', auth.currentUser?.uid),
    where('name', '==', data.name),
    where('type', '==', data.type),
    where('client', '==', data.client || null)
  )
  
  const existingSnapshot = await getDocs(existingQuery)
  
  if (!existingSnapshot.empty) {
    throw new Error('Un projet avec ce nom, type et client existe déjà')
  }
  
  const startDateTimestamp = Timestamp.fromDate(new Date(data.startDate))
  
  const docRef = await addDoc(collection(db, 'projects'), {
    companyId: data.companyId,
    name: data.name,
    type: data.type,
    client: data.client || null,
    startDate: startDateTimestamp,
    userId: auth.currentUser?.uid,
    status: 'Open',
    analysisProgress: 0,
    analysisComplete: false,
    reportsCount: 0,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  })
  console.log('[Project Service] Project created with ID:', docRef.id)
  return docRef.id
}

export async function updateProject(
  projectId: string,
  data: {
    name: string
    type: Project['type']
    client?: string
    startDate: string
  }
) {
  console.log('[Project Service] Updating project:', projectId, data)
  
  const projectRef = doc(db, 'projects', projectId)
  
  const existingQuery = query(
    collection(db, 'projects'),
    where('userId', '==', auth.currentUser?.uid),
    where('name', '==', data.name),
    where('type', '==', data.type),
    where('client', '==', data.client || null)
  )
  
  const existingSnapshot = await getDocs(existingQuery)
  const hasDuplicate = existingSnapshot.docs.some(doc => doc.id !== projectId)
  
  if (hasDuplicate) {
    throw new Error('Un projet avec ce nom, type et client existe déjà')
  }
  
  const startDateTimestamp = Timestamp.fromDate(new Date(data.startDate))
  
  await updateDoc(projectRef, {
    name: data.name,
    type: data.type,
    client: data.client || null,
    startDate: startDateTimestamp,
    updatedAt: Timestamp.now()
  })
  
  console.log('[Project Service] Project updated')
}

export async function getProjectsByCompany(companyId: string): Promise<Project[]> {
  console.log('[Project Service] Fetching projects for company:', companyId)
  console.log('[Project Service] Current user:', auth.currentUser?.uid)
  
  const q = query(
    collection(db, 'projects'),
    where('companyId', '==', companyId),
    where('userId', '==', auth.currentUser?.uid)
  )
  
  console.log('[Project Service] Executing query...')
  const snapshot = await getDocs(q)
  console.log('[Project Service] Query returned:', snapshot.docs.length, 'documents')
  
  const projects = snapshot.docs.map(doc => {
    const data = doc.data()
    console.log('[Project Service] Processing document:', doc.id, data)
    
    return {
      id: doc.id,
      ...data,
      startDate: data.startDate?.toDate ? data.startDate.toDate() : new Date(data.startDate),
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate()
    }
  }) as Project[]
  
  console.log('[Project Service] Mapped projects:', projects)
  
  const sorted = projects.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  console.log('[Project Service] Returning projects:', sorted)
  
  return sorted
}

export async function getProjectById(projectId: string): Promise<Project | null> {
  console.log('[Project Service] getProjectById called with:', projectId)
  console.log('[Project Service] Current user:', auth.currentUser?.uid)
  
  try {
    const projectRef = doc(db, 'projects', projectId)
    console.log('[Project Service] Project ref created:', projectRef.path)
    
    const projectSnap = await getDoc(projectRef)
    console.log('[Project Service] getDoc completed, exists:', projectSnap.exists())
    
    if (!projectSnap.exists()) {
      console.log('[Project Service] Project not found in Firestore')
      return null
    }
    
    const data = projectSnap.data()
    console.log('[Project Service] Raw project data:', data)
    
    if (data.userId !== auth.currentUser?.uid) {
      console.warn('[Project Service] Project does not belong to current user')
      console.log('[Project Service] Project userId:', data.userId)
      console.log('[Project Service] Current userId:', auth.currentUser?.uid)
      return null
    }
    
    const project = {
      id: projectSnap.id,
      ...data,
      startDate: data.startDate?.toDate ? data.startDate.toDate() : new Date(data.startDate),
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate()
    } as Project
    
    console.log('[Project Service] Returning project:', project)
    return project
  } catch (error) {
    console.error('[Project Service] Error fetching project:', error)
    throw error
  }
}

export async function updateProjectProgress(projectId: string) {
  console.log('[Project Service] Updating project progress:', projectId)
  
  const analysesQuery = query(
    collection(db, 'analyses'),
    where('projectId', '==', projectId),
    where('userId', '==', auth.currentUser?.uid)
  )
  
  const analysesSnap = await getDocs(analysesQuery)
  const analyses = analysesSnap.docs.map(doc => doc.data())
  
  const totalAnalyses = analyses.length
  const completedAnalyses = analyses.filter(a => a.status === 'Completed').length
  
  // ✅ CORRECTION - Calculer le pourcentage correctement
  const analysisProgress = totalAnalyses > 0 
    ? Math.round((completedAnalyses / totalAnalyses) * 100)
    : 0
  
  const reportsQuery = query(
    collection(db, 'reports'),
    where('projectId', '==', projectId),
    where('userId', '==', auth.currentUser?.uid),
    where('status', '==', 'Published')
  )
  
  const reportsSnap = await getDocs(reportsQuery)
  const reportsCount = reportsSnap.size
  
  // ✅ CORRECTION - Bouclage automatique UNIQUEMENT si exactement 4 analyses terminées
  const shouldAutoComplete = completedAnalyses === 4 && totalAnalyses === 4
  
  const projectRef = doc(db, 'projects', projectId)
  
  const updateData: any = {
    analysisProgress,
    reportsCount,
    updatedAt: Timestamp.now()
  }
  
  // ✅ Ne boucler automatiquement QUE si 4 analyses exactement
  if (shouldAutoComplete) {
    console.log('[Project Service] Auto-completing analysis phase (4 analyses completed)')
    updateData.analysisComplete = true
  }
  
  await updateDoc(projectRef, updateData)
  
  console.log('[Project Service] Project progress updated:', {
    totalAnalyses,
    completedAnalyses,
    analysisProgress,
    reportsCount,
    autoCompleted: shouldAutoComplete
  })
}

// ✅ Fonction de bouclage manuel (inchangée)
export async function completeAnalysisPhase(projectId: string) {
  console.log('[Project Service] Manually completing analysis phase for project:', projectId)
  
  const projectRef = doc(db, 'projects', projectId)
  await updateDoc(projectRef, {
    analysisComplete: true,
    updatedAt: Timestamp.now()
  })
  
  console.log('[Project Service] Analysis phase manually marked as complete')
}