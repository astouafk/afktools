// lib/services/member-service.ts
import { collection, addDoc, getDocs, getDoc, doc, query, where, Timestamp, updateDoc, deleteDoc } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'

export interface Member {
  id: string
  companyId: string
  userId: string
  name: string
  email: string
  role?: string
  createdAt: Date
  updatedAt: Date
}

export async function createMember(data: {
  companyId: string
  name: string
  email: string
  role?: string
}) {
  console.log('[Member Service] Creating member:', data)
  
  const existingQuery = query(
    collection(db, 'members'),
    where('companyId', '==', data.companyId),
    where('userId', '==', auth.currentUser?.uid),
    where('email', '==', data.email)
  )
  
  const existingSnapshot = await getDocs(existingQuery)
  
  if (!existingSnapshot.empty) {
    throw new Error('Un membre avec cet email existe déjà dans cette entreprise')
  }
  
  const docRef = await addDoc(collection(db, 'members'), {
    companyId: data.companyId,
    userId: auth.currentUser?.uid,
    name: data.name,
    email: data.email,
    role: data.role || null,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  })
  
  console.log('[Member Service] Member created with ID:', docRef.id)
  return docRef.id
}

export async function updateMember(
  memberId: string,
  data: {
    name: string
    email: string
    role?: string
  }
) {
  console.log('[Member Service] Updating member:', memberId, data)
  
  const memberRef = doc(db, 'members', memberId)
  await updateDoc(memberRef, {
    name: data.name,
    email: data.email,
    role: data.role || null,
    updatedAt: Timestamp.now()
  })
  
  console.log('[Member Service] Member updated')
}

export async function deleteMember(memberId: string) {
  console.log('[Member Service] Deleting member:', memberId)
  await deleteDoc(doc(db, 'members', memberId))
  console.log('[Member Service] Member deleted')
}

export async function getMembersByCompany(companyId: string): Promise<Member[]> {
  console.log('[Member Service] Fetching members for company:', companyId)
  
  const q = query(
    collection(db, 'members'),
    where('companyId', '==', companyId),
    where('userId', '==', auth.currentUser?.uid)
  )
  
  const snapshot = await getDocs(q)
  console.log('[Member Service] Query returned:', snapshot.docs.length, 'documents')
  
  const members = snapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate()
    }
  }) as Member[]
  
  const sorted = members.sort((a, b) => a.name.localeCompare(b.name))
  console.log('[Member Service] Returning members:', sorted)
  
  return sorted
}

export async function getMemberById(memberId: string): Promise<Member | null> {
  console.log('[Member Service] Fetching member:', memberId)
  
  try {
    const memberRef = doc(db, 'members', memberId)
    const memberSnap = await getDoc(memberRef)
    
    if (!memberSnap.exists()) {
      console.log('[Member Service] Member not found')
      return null
    }
    
    const data = memberSnap.data()
    
    if (data.userId !== auth.currentUser?.uid) {
      console.warn('[Member Service] Member does not belong to current user')
      return null
    }
    
    return {
      id: memberSnap.id,
      ...data,
      createdAt: data.createdAt?.toDate(),
      updatedAt: data.updatedAt?.toDate()
    } as Member
  } catch (error) {
    console.error('[Member Service] Error fetching member:', error)
    throw error
  }
}