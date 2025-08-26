"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { ChartDemo } from "@/components/ChartDemo"
import { VennDemo } from "@/components/VennDemo"
import { SiteHeader } from "@/components/site-header"
import { DataTable, columns } from "@/components/data-table"
import { DialogDemo } from "@/components/dialog-demo"
import { DrawerDemo } from "@/components/drawer-demo"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { IconCheck, IconX } from "@tabler/icons-react"

import data from "./data.json"

export default function ComponentsPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              
              {/* Page Header */}
              <div className="px-4 lg:px-6">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Protos Component Library
                  </h1>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    A comprehensive showcase of all available components for building powerful Node.js applications
                  </p>
                </div>
              </div>

              {/* Existing Components Section */}
              <div className="px-4 lg:px-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                    Existing Components
                  </h2>
                  
                  {/* Chart Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Interactive Chart</h3>
                    <ChartDemo />
                  </div>

                  {/* Venn Diagram Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Custom Venn Diagram</h3>
                    <VennDemo />
                  </div>
                </div>
              </div>

              {/* Sidebar Components Section */}
              <div className="px-4 lg:px-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                    Sidebar Components
                  </h2>
                  
                  {/* AppSidebar Placeholder */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">AppSidebar Component</h3>
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <div className="text-gray-500 mb-2">📱</div>
                      <p className="text-gray-600">AppSidebar Component Placeholder</p>
                      <p className="text-sm text-gray-500 mt-2">Navigation sidebar with collapsible menu</p>
                    </div>
                  </div>

                  {/* SiteHeader Placeholder */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">SiteHeader Component</h3>
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <div className="text-gray-500 mb-2">🏠</div>
                      <p className="text-gray-600">SiteHeader Component Placeholder</p>
                      <p className="text-sm text-gray-500 mt-2">Top navigation header with search and user menu</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Components Section */}
              <div className="px-4 lg:px-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                    Data Components
                  </h2>
                  
                  {/* DataTable Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">DataTable Component</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Interactive data table with sorting, filtering, pagination, and row selection. 
                      Displays your 68-item project management dataset.
                    </p>
                    <DataTable columns={columns} data={data} />
                  </div>

                  {/* ChartAreaInteractive Placeholder */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">ChartAreaInteractive Component</h3>
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <div className="text-gray-500 mb-2">📈</div>
                      <p className="text-gray-600">ChartAreaInteractive Component Placeholder</p>
                      <p className="text-sm text-gray-500 mt-2">Interactive area chart with time filtering</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layout Components Section */}
              <div className="px-4 lg:px-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                    Layout Components
                  </h2>
                  
                  {/* SectionCards Placeholder */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">SectionCards Component</h3>
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <div className="text-gray-500 mb-2">🃏</div>
                      <p className="text-gray-600">SectionCards Component Placeholder</p>
                      <p className="text-sm text-gray-500 mt-2">Grid of information cards with metrics</p>
                    </div>
                  </div>

                  {/* SidebarInset Placeholder */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">SidebarInset Component</h3>
                    <div className="bg-gray-100 rounded-lg p-8 text-center">
                      <div className="text-gray-500 mb-2">📐</div>
                      <p className="text-gray-600">SidebarInset Component Placeholder</p>
                      <p className="text-sm text-gray-500 mt-2">Main content area with sidebar layout</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Components Section */}
              <div className="px-4 lg:px-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                    Form Components
                  </h2>
                  
                  {/* Badge Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Badge Components</h3>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                        <Badge variant="outline">Outline</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="bg-blue-500 text-white hover:bg-blue-600">
                          <IconCheck className="mr-1 h-3 w-3" />
                          Verified
                        </Badge>
                        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                          8
                        </Badge>
                        <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">
                          99
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Breadcrumb Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Breadcrumb Component</h3>
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>

                  {/* Button Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Button Components</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="destructive">Destructive</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="link">Link</Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>

                  {/* Calendar Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Calendar Component</h3>
                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={new Date()}
                        className="rounded-md border"
                      />
                    </div>
                  </div>

                  {/* Card Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Card Components</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Card Title</CardTitle>
                          <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>This is the card content area where you can put any content.</p>
                        </CardContent>
                        <CardFooter>
                          <Button>Action</Button>
                        </CardFooter>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle>Another Card</CardTitle>
                          <CardDescription>With different content</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Cards are great for organizing content into logical sections.</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline">Cancel</Button>
                          <Button>Save</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </div>

                  {/* Checkbox Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Checkbox Components</h3>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-4">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                    </div>
                  </div>

                  {/* Label Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Label Components</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email">Email address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Enter your username" className="col-span-3" />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="bio">Bio</Label>
                        <Input id="bio" placeholder="Tell us about yourself" className="col-span-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlay Components Section */}
              <div className="px-4 lg:px-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                    Overlay Components
                  </h2>
                  
                  {/* Dialog Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Dialog Component</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Modal dialog for forms and important actions. Click the button below to see it in action.
                    </p>
                    <DialogDemo />
                  </div>

                  {/* Drawer Component */}
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Drawer Component</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Slide-out drawer for mobile-friendly navigation and settings. Click the button below to see it in action.
                    </p>
                    <DrawerDemo />
                  </div>
                </div>
              </div>

              {/* Feedback Components Section */}
              <div className="px-4 lg:px-6">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 border-b pb-2">
                    Feedback Components
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Toast Placeholder */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Toast Notifications</h3>
                      <div className="bg-gray-100 rounded-lg p-6 text-center">
                        <div className="text-gray-500 mb-2">🍞</div>
                        <p className="text-gray-600">Toast Component Placeholder</p>
                        <p className="text-sm text-gray-500 mt-2">Success, error, info notifications</p>
                      </div>
                    </div>

                    {/* Alert Placeholder */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Alert Components</h3>
                      <div className="bg-gray-100 rounded-lg p-6 text-center">
                        <div className="text-gray-500 mb-2">⚠️</div>
                        <p className="text-gray-600">Alert Component Placeholder</p>
                        <p className="text-sm text-gray-500 mt-2">Warning, error, success alerts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Getting Started Section */}
              <div className="px-4 lg:px-6">
                <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-center text-white">
                  <h2 className="text-2xl font-bold mb-4">Amazing Progress! 🎉</h2>
                  <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    We've added DataTable, Dialog, Drawer, and Label components! Your showcase now has 
                    <strong> 10 fully functional components</strong> plus working placeholders!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://ui.shadcn.com/docs/components" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      View shadcn/ui Docs
                    </a>
                    <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                      Add More Components
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
