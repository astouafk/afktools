//contexts/auth-context.tsx
"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import {
  type User,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useRouter } from "next/navigation"

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signIn: async () => {},
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Set persistence to local (persists even when browser window is closed)
    setPersistence(auth, browserLocalPersistence)

    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("[v0] Auth state changed:", user?.email || "No user")
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      console.log("[v0] Attempting to sign in with:", email)
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log("[v0] Sign in successful:", userCredential.user.email)
      // Router navigation will be handled in the login component
    } catch (error: any) {
      console.error("[v0] Sign in error:", error.message)
      throw new Error(error.message || "Failed to sign in")
    }
  }

  const signOut = async () => {
    try {
      console.log("[v0] Signing out user")
      await firebaseSignOut(auth)
      console.log("[v0] Sign out successful")
      router.push("/login")
    } catch (error: any) {
      console.error("[v0] Sign out error:", error.message)
      throw new Error(error.message || "Failed to sign out")
    }
  }

  return <AuthContext.Provider value={{ user, loading, signIn, signOut }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
