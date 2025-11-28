// components/app-sidebar.tsx

"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  FolderKanban,
  FileText,
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
} from "@/components/ui/sidebar"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Projets",
    url: "/projects",
    icon: FolderKanban,
    matchPaths: ["/projects", "/project"] // Matcher /projects et /project/* (analyses incluses)
  },
  {
    title: "Rapports",
    url: "/reports", // URL de la page globale des rapports
    icon: FileText,
    matchPaths: ["/reports"] // Uniquement la page globale /reports
  },
  {
    title: "Exports",
    url: "/exports", // URL de la page globale des rapports
    icon: FileText,
    matchPaths: ["/export"] // Uniquement la page globale /reports
  },
  {
    title: "Historique",
    url: "/history", // URL de la page globale des rapports
    icon: FileText,
    matchPaths: ["/history"] // Uniquement la page globale /reports
  },
  {
    title: "Paramètres",
    url: "/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push("/login")
  }

  const isActive = (item: typeof items[0]) => {
    if (item.matchPaths) {
      // Vérifier si le pathname commence par un des matchPaths
      return item.matchPaths.some(path => pathname.startsWith(path))
    }
    return pathname === item.url
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border px-6 py-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <FolderKanban className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold text-foreground">AFKTOOLS</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item)}>
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
      <SidebarFooter className="border-t border-border p-4">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Déconnexion
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}