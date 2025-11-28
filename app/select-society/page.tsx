// app/select-society/page.tsx
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building2, Plus, Search, ChevronLeft, ChevronRight, Loader2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { AuthGuard } from "@/components/auth-guard"
import { useCompanies } from "@/hooks/use-companies"
import { Skeleton } from "@/components/ui/skeleton"

export default function SelectSocietyPage() {
  const router = useRouter()
  const { data: companies, isLoading } = useCompanies()
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [loadingCompanyId, setLoadingCompanyId] = useState<string | null>(null)
  const itemsPerPage = 6

  const filteredCompanies = companies?.filter((company) =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || []

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentCompanies = filteredCompanies.slice(startIndex, endIndex)

  const handleSelectCompany = async (companyId: string) => {
    setLoadingCompanyId(companyId)
    localStorage.setItem('selectedCompanyId', companyId)
    
    // Simuler le préchargement des données
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    router.push("/")
  }

  const handleCreateNew = () => {
    router.push("/create-company")
  }

  if (isLoading) {
    return (
      <AuthGuard>
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <div className="w-full max-w-5xl space-y-8">
            <div className="text-center space-y-4">
              <Skeleton className="mx-auto w-16 h-16 rounded-2xl" />
              <Skeleton className="h-8 w-64 mx-auto" />
              <Skeleton className="h-4 w-96 mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-48 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </AuthGuard>
    )
  }

  return (
    <AuthGuard>
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <div className="w-full max-w-5xl space-y-8">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Building2 className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Choisir une Entreprise</h1>
              <p className="text-muted-foreground mt-2">Choisissez l'espace de travail d'entreprise auquel vous souhaitez accéder.</p>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Chercher une entreprise..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setCurrentPage(1)
                }}
                className="pl-10 h-11 bg-card border-border"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCompanies.map((company) => (
              <button
                key={company.id}
                onClick={() => handleSelectCompany(company.id)}
                disabled={loadingCompanyId !== null}
                className="bg-card border border-border rounded-xl p-6 text-left hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10 group disabled:opacity-50 disabled:cursor-not-allowed relative"
              >
                {loadingCompanyId === company.id && (
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-xl flex items-center justify-center z-10">
                    <div className="flex flex-col items-center gap-2">
                      <Loader2 className="w-8 h-8 text-primary animate-spin" />
                      <p className="text-sm text-muted-foreground">Chargement...</p>
                    </div>
                  </div>
                )}
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground text-lg">{company.name}</h3>
                    <p className="text-sm text-muted-foreground">{company.industry}</p>
                  </div>
                  {company.description && (
                    <p className="text-xs text-muted-foreground line-clamp-2">{company.description}</p>
                  )}
                </div>
              </button>
            ))}

            <button
              onClick={handleCreateNew}
              disabled={loadingCompanyId !== null}
              className="bg-primary/10 border-2 border-dashed border-primary rounded-xl p-6 text-left hover:bg-primary/20 transition-all group min-h-[200px] flex flex-col items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="space-y-3 text-center">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Plus className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary text-lg">Nouvelle Entreprise</h3>
                  <p className="text-sm text-muted-foreground mt-1">créer un nouvel espace de travail</p>
                </div>
              </div>
            </button>
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1 || loadingCompanyId !== null}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    disabled={loadingCompanyId !== null}
                    className="w-9"
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages || loadingCompanyId !== null}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}

          <div className="flex items-center justify-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => router.push("/login")}
              disabled={loadingCompanyId !== null}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}