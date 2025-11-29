// components/settings-view.tsx
"use client"

import * as React from "react"
import { Settings, Building2, User, Bell, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { useCompany } from "@/hooks/use-company"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function SettingsView() {
  const router = useRouter()
  const { user } = useAuth()
  const selectedCompanyId = typeof window !== 'undefined' ? localStorage.getItem('selectedCompanyId') : null
  const { data: company } = useCompany(selectedCompanyId)
  
  const [showChangeCompanyDialog, setShowChangeCompanyDialog] = React.useState(false)

  const handleChangeCompany = () => {
    localStorage.removeItem('selectedCompanyId')
    router.push('/select-society')
    setShowChangeCompanyDialog(false)
  }

  const getUserInitials = () => {
    if (user?.displayName) {
      const names = user.displayName.split(' ')
      if (names.length >= 2) {
        return `${names[0][0]}${names[1][0]}`.toUpperCase()
      }
      return names[0].substring(0, 2).toUpperCase()
    }
    if (user?.email) {
      return user.email.substring(0, 2).toUpperCase()
    }
    return 'U'
  }

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
            <Settings className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Paramètres
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Gérez votre compte et vos préférences
            </p>
          </div>
        </div>

        {/* Grille de cards - Utilisateur, Notifications, Sécurité */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Informations Compte */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Compte Utilisateur
              </CardTitle>
              <CardDescription>Vos informations personnelles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                    {getUserInitials()}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="font-semibold text-lg">{user?.displayName || 'Utilisateur'}</p>
                  <p className="text-sm text-muted-foreground">{user?.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
              <CardDescription>Gérez vos préférences de notification</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fonctionnalité à venir...
              </p>
            </CardContent>
          </Card>

          {/* Sécurité */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Sécurité
              </CardTitle>
              <CardDescription>Paramètres de sécurité et confidentialité</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Fonctionnalité à venir...
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Espace de Travail */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Espace de Travail
            </CardTitle>
            <CardDescription>Gérez votre entreprise actuelle</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {company ? (
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Building2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">{company.name}</p>
                    <p className="text-sm text-muted-foreground">Entreprise active</p>
                  </div>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => setShowChangeCompanyDialog(true)}
                >
                  Changer d'espace
                </Button>
              </div>
            ) : (
              <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <p className="text-sm text-amber-600">
                  Aucune entreprise sélectionnée
                </p>
                <Button 
                  variant="outline"
                  onClick={() => router.push('/select-society')}
                  className="mt-2"
                >
                  Sélectionner une entreprise
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Dialog Changement de Compagnie */}
      <AlertDialog open={showChangeCompanyDialog} onOpenChange={setShowChangeCompanyDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Changer d'espace de travail ?</AlertDialogTitle>
            <AlertDialogDescription>
              Vous allez être redirigé vers la page de sélection d'entreprise. 
              Toutes vos données actuelles seront sauvegardées.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={handleChangeCompany}>
              Confirmer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}