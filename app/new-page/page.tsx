'use client'

import { NewPageSidebar } from "@/components/new-page-sidebar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { MobileDesktopCharts } from "@/components/MobileDesktopCharts"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, FilterIcon, Search, Settings, MessageCircle, ChevronDown, Star, Cloud, TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function NewPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "60px",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <NewPageSidebar variant="inset" />
      <SidebarInset>
        {/* Simple Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-900">Home</span>
            <Star className="h-4 w-4 text-gray-400" />
            <Cloud className="h-4 w-4 text-gray-400" />
          </div>
          <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
            <Search className="h-4 w-4 text-gray-500" />
            <Settings className="h-4 w-4 text-gray-500" />
            <MessageCircle className="h-4 w-4 text-gray-500" />
            <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
              
              {/* Filter Controls */}
              <div className="px-4 lg:px-6">
                <div className="flex items-center gap-4 mb-6">
                  {/* Campaigns Picker */}
                  <div className="flex items-center gap-2 bg-white rounded-lg border px-4 py-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Campaigns</span>
                      <Select defaultValue="all">
                        <SelectTrigger className="border-0 p-0 h-auto font-medium text-gray-900">
                          <SelectValue placeholder="All campaigns (5)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All campaigns (5)</SelectItem>
                          <SelectItem value="campaign1">Summer Sale</SelectItem>
                          <SelectItem value="campaign2">Holiday Special</SelectItem>
                          <SelectItem value="campaign3">Product Launch</SelectItem>
                          <SelectItem value="campaign4">Email Newsletter</SelectItem>
                          <SelectItem value="campaign5">Social Media</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-px h-6 bg-gray-300 mx-2"></div>
                    <FilterIcon className="h-4 w-4 text-gray-500" />
                  </div>

                  {/* Date Range Picker */}
                  <div className="flex items-center gap-2 bg-white rounded-lg border px-4 py-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-500">Date range - All time</span>
                      <Select defaultValue="mar2025">
                        <SelectTrigger className="border-0 p-0 h-auto font-medium text-gray-900">
                          <SelectValue placeholder="Mar 1, 2025 - Mar 31, 2025" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="today">Today</SelectItem>
                          <SelectItem value="yesterday">Yesterday</SelectItem>
                          <SelectItem value="last7days">Last 7 days</SelectItem>
                          <SelectItem value="last30days">Last 30 days</SelectItem>
                          <SelectItem value="last90days">Last 90 days</SelectItem>
                          <SelectItem value="mar2025">Mar 1, 2025 - Mar 31, 2025</SelectItem>
                          <SelectItem value="custom">Custom range</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <CalendarIcon className="h-4 w-4 text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Scorecards Section */}
              <div className="px-4 lg:px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                  {/* Conversions */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Conversions</p>
                          <p className="text-2xl font-bold">106.0</p>
                        </div>
                        <div className="flex items-center text-green-600">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          <span className="text-sm">19.1%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* ROAS */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">ROAS</p>
                          <p className="text-2xl font-bold">2.8</p>
                        </div>
                        <div className="flex items-center text-green-600">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          <span className="text-sm">10%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Total Revenue */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Total revenue</p>
                          <p className="text-2xl font-bold">21.2K</p>
                        </div>
                        <div className="flex items-center text-green-600">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          <span className="text-sm">12%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* LTV */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">LTV</p>
                          <p className="text-2xl font-bold">0.6%</p>
                        </div>
                        <div className="flex items-center text-red-600">
                          <TrendingDown className="h-4 w-4 mr-1" />
                          <span className="text-sm">-20.4%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Cost */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Cost</p>
                          <p className="text-2xl font-bold">$236K</p>
                        </div>
                        <div className="flex items-center text-green-600">
                          <TrendingDown className="h-4 w-4 mr-1" />
                          <span className="text-sm">-3.3%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* CTR */}
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">CTR</p>
                          <p className="text-2xl font-bold">1.8%</p>
                        </div>
                        <div className="flex items-center text-green-600">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          <span className="text-sm">47.1%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Marketing Cycle Section */}
              <div className="px-4 lg:px-6">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Marketing Cycle
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Your campaigns are primarily driving <span className="text-purple-600 font-semibold">conversion</span> and <span className="text-blue-600 font-semibold">retention</span>. Investing more on <span className="text-green-600 font-semibold">reach</span> may increase conversions without adding additional budget
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
