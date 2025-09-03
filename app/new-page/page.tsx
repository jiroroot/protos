'use client'

import { NewPageSidebar } from "@/components/new-page-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { MobileDesktopCharts } from "@/components/MobileDesktopCharts"

export default function NewPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <NewPageSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              
              {/* Page Header */}
              <div className="px-4 lg:px-6">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Marketing Analytics Dashboard
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Track your marketing cycle performance across reach, inform, convert, and retain stages.
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-4 lg:px-6">
                 <MobileDesktopCharts />
              </div>

            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
