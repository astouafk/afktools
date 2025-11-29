// lib/services/company-service.ts
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export interface Company {
  id: string
  name: string
  logo?: string
  createdAt: Date
  updatedAt: Date
}

export async function getCompanyById(companyId: string): Promise<Company | null> {
  try {
    const companyRef = doc(db, 'companies', companyId)
    const companySnap = await getDoc(companyRef)

    if (!companySnap.exists()) {
      return null
    }

    const data = companySnap.data()
    return {
      id: companySnap.id,
      name: data.name || 'Mon Entreprise',
      logo: data.logo,
      createdAt: data.createdAt?.toDate() || new Date(),
      updatedAt: data.updatedAt?.toDate() || new Date(),
    }
  } catch (error) {
    console.error('Error fetching company:', error)
    return null
  }
}