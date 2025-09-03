"use client"

import * as React from "react"
import Link from "next/link"
import { 
  Home, 
  Megaphone, 
  Trophy, 
  Wrench, 
  CreditCard, 
  Settings,
  Menu,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const navItems = [
  {
    title: "Home",
    url: "/new-page",
    icon: Home,
    active: true,
  },
  {
    title: "Campaigns",
    url: "#",
    icon: Megaphone,
    active: false,
  },
  {
    title: "Goals",
    url: "#",
    icon: Trophy,
    active: false,
  },
  {
    title: "Tools",
    url: "#",
    icon: Wrench,
    active: false,
  },
  {
    title: "Billing",
    url: "#",
    icon: CreditCard,
    active: false,
  },
  {
    title: "Admin",
    url: "#",
    icon: Settings,
    active: false,
  },
]

export function NewPageSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props} className="w-16">
      <SidebarHeader className="p-2">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="w-8 h-8 flex items-center justify-center">
            <img 
              src="/assets/google-ads-logo.png" 
              alt="Google Ads" 
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="flex justify-center mb-4">
          <Menu className="h-5 w-5 text-gray-700" />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                className={`mb-1 ${item.active ? 'bg-blue-100 rounded-lg' : ''}`}
              >
                <Link href={item.url} className="flex flex-col items-center py-2">
                  <item.icon className={`h-5 w-5 mb-1 ${item.active ? 'text-gray-800' : 'text-gray-600'}`} />
                  <span className={`text-xs ${item.active ? 'text-gray-800 font-medium' : 'text-gray-600'}`}>
                    {item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
