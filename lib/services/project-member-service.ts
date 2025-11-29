// lib/services/project-member-service.ts
import { collection, addDoc, getDocs, deleteDoc, doc, query, where, Timestamp, getDoc } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'
import { getMembersByCompany, type Member } from './member-service'

export interface ProjectMember {
  id: string
  projectId: string
  memberId: string
  companyId: string
  userId: string
  role?: string
  createdAt: Date
}

export interface ProjectMemberWithDetails extends ProjectMember {
  memberName: string
  memberEmail: string
  memberRole: string
}

export async function addMemberToProject(data: {
  projectId: string
  memberId: string
  companyId: string
  role?: string
}) {
  console.log('[Project Member Service] Adding member to project:', data)
  
  // Vérifier si le membre est déjà assigné
  const existingQuery = query(
    collection(db, 'projectMembers'),
    where('projectId', '==', data.projectId),
    where('memberId', '==', data.memberId),
    where('userId', '==', auth.currentUser?.uid)
  )
  
  const existingSnapshot = await getDocs(existingQuery)
  
  if (!existingSnapshot.empty) {
    throw new Error('Ce membre est déjà assigné à ce projet')
  }
  
  const docRef = await addDoc(collection(db, 'projectMembers'), {
    projectId: data.projectId,
    memberId: data.memberId,
    companyId: data.companyId,
    userId: auth.currentUser?.uid,
    role: data.role || null,
    createdAt: Timestamp.now()
  })
  
  console.log('[Project Member Service] Member added with ID:', docRef.id)
  return docRef.id
}

export async function removeMemberFromProject(projectMemberId: string) {
  console.log('[Project Member Service] Removing member from project:', projectMemberId)
  await deleteDoc(doc(db, 'projectMembers', projectMemberId))
  console.log('[Project Member Service] Member removed')
}

export async function getProjectMembers(projectId: string): Promise<ProjectMemberWithDetails[]> {
  console.log('[Project Member Service] Fetching members for project:', projectId)
  
  // Récupérer les assignations
  const q = query(
    collection(db, 'projectMembers'),
    where('projectId', '==', projectId),
    where('userId', '==', auth.currentUser?.uid)
  )
  
  const snapshot = await getDocs(q)
  
  if (snapshot.empty) {
    return []
  }
  
  const projectMembers = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate()
  })) as ProjectMember[]
  
  const companyId = projectMembers[0]?.companyId
  if (!companyId) return []
  
  const allMembers = await getMembersByCompany(companyId)
  
  const membersWithDetails = projectMembers.map(pm => {
    const member = allMembers.find(m => m.id === pm.memberId)
    return {
      ...pm,
      memberName: member?.name || 'Membre inconnu',
      memberEmail: member?.email || '',
      memberRole: member?.role || ''
    }
  })
  
  return membersWithDetails.sort((a, b) => a.memberName.localeCompare(b.memberName))
}