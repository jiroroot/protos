"use client"

import * as React from "react"
import Link from "next/link"
import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

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

const data = {
  user: {
    name: "User Name",
    email: "user@example.com",
    avatar: "/avatars/protos.jpg",
  },
  navMain: [
    {
      title: "Link 1",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Link 2",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Link 3",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Link 4",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Link 5",
      url: "#",
      icon: IconUsers,
    },
  ],
  navSecondary: [
    {
      title: "Help",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
  ],
  documents: [
    {
      title: "Document A",
      url: "#",
      icon: IconFileAi,
    },
    {
      title: "Document B",
      url: "#",
      icon: IconFileAi,
    },
    {
      title: "Document C",
      url: "#",
      icon: IconFileAi,
    },
  ],
}

export function NewPageSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Company Name</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Section 1</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Section 2</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.documents.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-auto">
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navSecondary.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-2 p-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-sm font-semibold">
            U
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{data.user.name}</span>
            <span className="text-xs text-muted-foreground">{data.user.email}</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
