// lib/services/member-service.ts
import { collection, addDoc, getDocs, query, where, Timestamp, deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'

export interface Member {
  id: string
  companyId: string
  userId: string
  name: string
  email: string
  role: string
  createdAt: Date
}

export async function createMember(data: {
  companyId: string
  name: string
  email: string
  role: string
}) {
  console.log('[Member Service] Creating member:', data)
  
  const docRef = await addDoc(collection(db, 'members'), {
    companyId: data.companyId,
    userId: auth.currentUser?.uid,
    name: data.name,
    email: data.email,
    role: data.role,
    createdAt: Timestamp.now()
  })
  
  console.log('[Member Service] Member created with ID:', docRef.id)
  return docRef.id
}

export async function getMembersByCompany(companyId: string): Promise<Member[]> {
  console.log('[Member Service] Fetching members for company:', companyId)
  
  const q = query(
    collection(db, 'members'),
    where('companyId', '==', companyId),
    where('userId', '==', auth.currentUser?.uid)
  )
  
  const snapshot = await getDocs(q)
  const members = snapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt?.toDate()
    }
  }) as Member[]
  
  return members.sort((a, b) => a.name.localeCompare(b.name))
}

export async function deleteMember(memberId: string) {
  console.log('[Member Service] Deleting member:', memberId)
  await deleteDoc(doc(db, 'members', memberId))
}