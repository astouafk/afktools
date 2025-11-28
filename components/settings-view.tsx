//components/settings-view.tsx
"use client"

import { Building2, Bell } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export function SettingsView() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="company" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-4 pt-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Change Workspace</h3>
            <p className="text-sm text-muted-foreground">Switch to a different company workspace</p>
            <Button asChild variant="outline" className="mt-4 bg-transparent">
              <Link href="/select-society">
                <Building2 className="mr-2 h-4 w-4" />
                Select Company
              </Link>
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4 pt-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Profile Information</h3>
            <div className="rounded-lg border bg-card p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-semibold">
                  TL
                </div>
                <div>
                  <p className="text-lg font-medium">Thomas Leroy</p>
                  <p className="text-sm text-muted-foreground">thomas.leroy@company.com</p>
                  <p className="mt-1 text-sm text-muted-foreground">Project Manager</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4 pt-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Notification Preferences</h3>
            <p className="text-sm text-muted-foreground">
              No notifications configured yet. This feature will be available soon.
            </p>
            <div className="flex items-center justify-center rounded-lg border border-dashed bg-muted/50 p-12">
              <div className="text-center">
                <Bell className="mx-auto h-12 w-12 text-muted-foreground" />
                <p className="mt-4 text-sm text-muted-foreground">Coming soon</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
