//app/login/page.tsx
"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Building2, Lock, Mail, AlertCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from "@/contexts/auth-context"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const router = useRouter()
  const { signIn } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await signIn(email, password)
      router.push("/select-society")
    } catch (error: any) {
      console.error("[v0] Login error:", error)
      setError(error.message || "Failed to sign in. Please check your credentials.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Branding */}
        <div className="hidden lg:flex flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 justify-center lg:justify-start">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground">AFKTools</h2>
              <p className="text-sm text-muted-foreground">Mon Système de Reporting Professionnel</p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Gestion Technique Des Projets avec Aisance 
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Suivre l'avancement des projets, collaboration équipe et bons résultats grâce à ma plateforme complète de gestion de projet.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Projets</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Users</div>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-card border border-border rounded-2xl shadow-xl p-8 space-y-6">
            <div className="space-y-2 text-center">
              <div className="lg:hidden mx-auto w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Hello Astou Fall</h2>
              <p className="text-muted-foreground">Connectes toi pour accéder à tes dashboard</p>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Adresse Mail 
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10 h-11 bg-secondary/50 border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Mot de Passe
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10 h-11 bg-secondary/50 border-border"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full h-11 text-base" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Connexion"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
