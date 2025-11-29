// components/app-sidebar.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  FolderKanban,
  FileText,
  Users,
  Download,
  History,
  Settings,
  LogOut,
  Building2,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { auth } from "@/lib/firebase"
import { signOut } from "firebase/auth"
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

// Rubriques principales (navigation)
const mainItems = [
  {
    title: "Tableau de bord",
    url: "/dashboard",
    icon: LayoutDashboard,
    matchPaths: ["/dashboard"]
  },
  {
    title: "Projets",
    url: "/projects",
    icon: FolderKanban,
    matchPaths: ["/projects", "/project"]
  },
  {
    title: "Rapports",
    url: "/reports",
    icon: FileText,
    matchPaths: ["/reports", "/report"]
  },
  {
    title: "Équipe",
    url: "/team",
    icon: Users,
    matchPaths: ["/team"]
  },
  {
    title: "Exports",
    url: "/exports",
    icon: Download,
    matchPaths: ["/exports"]
  },
  {
    title: "Historique",
    url: "/history",
    icon: History,
    matchPaths: ["/history"]
  },
]

// Rubriques en bas (paramètres)
const bottomItems = [
  {
    title: "Paramètres",
    url: "/settings",
    icon: Settings,
    matchPaths: ["/settings"]
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [showChangeCompanyDialog, setShowChangeCompanyDialog] = React.useState(false)
  const [showLogoutDialog, setShowLogoutDialog] = React.useState(false)

  const isActive = (itemPaths: string[]) => {
    return itemPaths.some(path => pathname?.startsWith(path))
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      localStorage.removeItem('selectedCompanyId')
      router.push('/login')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const handleChangeCompany = () => {
    // Effacer la compagnie sélectionnée
    localStorage.removeItem('selectedCompanyId')
    // Rediriger vers la page de sélection
    router.push('/select-company')
    setShowChangeCompanyDialog(false)
  }

  return (
    <>
      <Sidebar>
        <SidebarHeader className="border-b border-sidebar-border p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Building2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">AFKTOOLS</span>
              <span className="text-xs text-muted-foreground">Gestion de projets</span>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          {/* Navigation principale */}
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive(item.matchPaths)}>
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-sidebar-border p-4">
          {/* Paramètres */}
          <SidebarMenu>
            {bottomItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={isActive(item.matchPaths)}>
                  <Link href={item.url}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>

          {/* Déconnexion */}
          <Button
            variant="ghost"
            className="w-full justify-start text-muted-foreground hover:text-foreground mt-2"
            onClick={() => setShowLogoutDialog(true)}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

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

      {/* Dialog Déconnexion */}
      <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Se déconnecter ?</AlertDialogTitle>
            <AlertDialogDescription>
              Êtes-vous sûr de vouloir vous déconnecter de votre compte ?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout}>
              Se déconnecter
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}