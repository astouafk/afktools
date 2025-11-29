// lib/services/analysis-service.ts
import { collection, addDoc, getDocs, getDoc, doc, query, where, Timestamp, updateDoc, deleteDoc } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'

export interface Analysis {
  id: string
  projectId: string
  companyId: string  
  userId: string
  title: string
  description?: string
  type: 'Technical' | 'Functional' | 'UI/UX' | 'Performance'
  status: 'Draft' | 'In Progress' | 'Completed'
  content: Record<string, string>
  createdAt: Date
  updatedAt: Date
}

export async function createAnalysis(data: {
  projectId: string
  companyId: string  
  title: string
  description?: string
  type: Analysis['type']
  status?: Analysis['status']
  content: Record<string, string>
}) {
  console.log('[Analysis Service] Creating analysis:', data)
  
  const existingQuery = query(
    collection(db, 'analyses'),
    where('projectId', '==', data.projectId),
    where('companyId', '==', data.companyId),
    where('userId', '==', auth.currentUser?.uid),
    where('type', '==', data.type)
  )
  
  const existingSnapshot = await getDocs(existingQuery)
  
  if (!existingSnapshot.empty) {
    const typeNames = {
      'Technical': 'technique',
      'Functional': 'fonctionnelle',
      'UI/UX': 'UI/UX',
      'Performance': 'performance'
    }
    throw new Error(`Une analyse ${typeNames[data.type]} existe déjà pour ce projet`)
  }
  
  const docRef = await addDoc(collection(db, 'analyses'), {
    projectId: data.projectId,
    companyId: data.companyId,  
    userId: auth.currentUser?.uid,
    title: data.title,
    description: data.description || null,
    type: data.type,
    status: data.status || 'Draft',
    content: data.content,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  })
  
  console.log('[Analysis Service] Analysis created with ID:', docRef.id)
  return docRef.id
}

// ✅ Filtrer par companyId
export async function getAnalysesByProject(projectId: string, companyId: string): Promise<Analysis[]> {
  console.log('[Analysis Service] Fetching analyses for project:', projectId, 'company:', companyId)
  
  const q = query(
    collection(db, 'analyses'),
    where('projectId', '==', projectId),
    where('companyId', '==', companyId),  
    where('userId', '==', auth.currentUser?.uid)
  )
  
  const snapshot = await getDocs(q)
  console.log('[Analysis Service] Query returned:', snapshot.docs.length, 'documents')
  
  const analyses = snapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      content: data.content,
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate()
    }
  }) as Analysis[]
  
  const sorted = analyses.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  console.log('[Analysis Service] Returning analyses:', sorted)
  
  return sorted
}

export async function getAnalysisById(analysisId: string): Promise<Analysis | null> {
  console.log('[Analysis Service] Fetching analysis:', analysisId)
  
  try {
    const analysisRef = doc(db, 'analyses', analysisId)
    const analysisSnap = await getDoc(analysisRef)
    
    if (!analysisSnap.exists()) {
      console.log('[Analysis Service] Analysis not found')
      return null
    }
    
    const data = analysisSnap.data()
    
    if (data.userId !== auth.currentUser?.uid) {
      console.warn('[Analysis Service] Analysis does not belong to current user')
      return null
    }
    
    return {
      id: analysisSnap.id,
      ...data,
      content: data.content,
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate()
    } as Analysis
  } catch (error) {
    console.error('[Analysis Service] Error fetching analysis:', error)
    throw error
  }
}

export async function markAnalysisAsCompleted(analysisId: string) {
  console.log('[Analysis Service] Marking analysis as completed:', analysisId)
  
  const analysisRef = doc(db, 'analyses', analysisId)
  await updateDoc(analysisRef, {
    status: 'Completed',
    updatedAt: Timestamp.now()
  })
  
  console.log('[Analysis Service] Analysis marked as completed')
}

export async function updateAnalysis(
  analysisId: string,
  data: {
    title: string
    description?: string
    type: Analysis['type']
    content: Record<string, string>
  }
) {
  console.log('[Analysis Service] Updating analysis:', analysisId, data)
  
  const analysisRef = doc(db, 'analyses', analysisId)
  await updateDoc(analysisRef, {
    title: data.title,
    description: data.description || null,
    type: data.type,
    content: data.content,
    updatedAt: Timestamp.now()
  })
  
  console.log('[Analysis Service] Analysis updated')
}

export async function deleteAnalysis(analysisId: string) {
  console.log('[Analysis Service] Deleting analysis:', analysisId)
  await deleteDoc(doc(db, 'analyses', analysisId))
  console.log('[Analysis Service] Analysis deleted')
}