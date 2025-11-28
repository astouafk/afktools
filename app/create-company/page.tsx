// app/create-company/page.tsx
"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Building2, ChevronLeft } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AuthGuard } from "@/components/auth-guard"
import { useCreateCompany } from "@/hooks/use-companies"
import { toast } from "@/hooks/use-toast"

export default function CreateCompanyPage() {
  const router = useRouter()
  const { mutate: createCompany, isPending } = useCreateCompany()
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    description: "",
    address: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    createCompany(formData, {
      onSuccess: () => {
        toast({
          title: "Entreprise créée",
          description: "L'entreprise a été créée avec succès"
        })
        router.push("/select-society")
      },
      onError: (error) => {
        toast({
          title: "Erreur",
          description: error.message,
          variant: "destructive"
        })
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <AuthGuard>
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <div className="w-full max-w-2xl space-y-8">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Ajouter une Entreprise</h1>
              <p className="text-muted-foreground mt-2">Créez un nouvel espace de travail pour votre organisation</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Nom de l'entreprise<span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Entrez le nom de l'entreprise"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-11 bg-secondary/50 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry" className="text-sm font-medium">
                  Domaine <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="industry"
                  name="industry"
                  type="text"
                  placeholder="e.g., Technology, Healthcare, Finance"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="h-11 bg-secondary/50 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Brève description de votre entreprise"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium">
                  Adresse
                </Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Adresse de l'entreprise"
                  value={formData.address}
                  onChange={handleChange}
                  className="h-11 bg-secondary/50 border-border"
                />
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-11 bg-transparent"
                  onClick={() => router.push("/select-society")}
                  disabled={isPending}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Retour
                </Button>
                <Button type="submit" className="flex-1 h-11" disabled={isPending}>
                  {isPending ? "Création..." : "Créer l'Entreprise"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}