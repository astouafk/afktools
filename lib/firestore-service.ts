// lib/firestore-service.ts
import { collection, addDoc, getDocs, query, where, Timestamp } from 'firebase/firestore'
import { db, auth } from './firebase'

export interface Company {
  id: string
  name: string
  industry: string
  description: string
  address: string
  userId: string
  createdAt: Date
}

export async function createCompany(data: {
  name: string
  industry: string
  description: string
  address: string
}) {
  const docRef = await addDoc(collection(db, 'companies'), {
    ...data,
    userId: auth.currentUser?.uid,
    createdAt: Timestamp.now()
  })
  return docRef.id
}

export async function getCompanies(): Promise<Company[]> {
  const q = query(
    collection(db, 'companies'),
    where('userId', '==', auth.currentUser?.uid)
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate()
  })) as Company[]
}