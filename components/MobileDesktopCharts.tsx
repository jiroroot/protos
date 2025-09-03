"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "Mobile and Desktop charts with unified hover"

const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150, chart3: 222, chart4: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180, chart3: 97, chart4: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120, chart3: 167, chart4: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260, chart3: 242, chart4: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290, chart3: 373, chart4: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340, chart3: 301, chart4: 340 },
  { date: "2024-04-07", desktop: 245, mobile: 180, chart3: 245, chart4: 180 },
  { date: "2024-04-08", desktop: 409, mobile: 320, chart3: 409, chart4: 320 },
  { date: "2024-04-09", desktop: 59, mobile: 110, chart3: 59, chart4: 110 },
  { date: "2024-04-10", desktop: 261, mobile: 190, chart3: 261, chart4: 190 },
  { date: "2024-04-11", desktop: 327, mobile: 350, chart3: 327, chart4: 350 },
  { date: "2024-04-12", desktop: 292, mobile: 210, chart3: 292, chart4: 210 },
  { date: "2024-04-13", desktop: 342, mobile: 380, chart3: 342, chart4: 380 },
  { date: "2024-04-14", desktop: 137, mobile: 220, chart3: 137, chart4: 220 },
  { date: "2024-04-15", desktop: 120, mobile: 170, chart3: 120, chart4: 170 },
  { date: "2024-04-16", desktop: 138, mobile: 190, chart3: 138, chart4: 190 },
  { date: "2024-04-17", desktop: 446, mobile: 360, chart3: 446, chart4: 360 },
  { date: "2024-04-18", desktop: 364, mobile: 410, chart3: 364, chart4: 410 },
  { date: "2024-04-19", desktop: 243, mobile: 180, chart3: 243, chart4: 180 },
  { date: "2024-04-20", desktop: 89, mobile: 150, chart3: 89, chart4: 150 },
  { date: "2024-04-21", desktop: 137, mobile: 200, chart3: 137, chart4: 200 },
  { date: "2024-04-22", desktop: 224, mobile: 170, chart3: 224, chart4: 170 },
  { date: "2024-04-23", desktop: 138, mobile: 230, chart3: 138, chart4: 230 },
  { date: "2024-04-24", desktop: 387, mobile: 290, chart3: 387, chart4: 290 },
  { date: "2024-04-25", desktop: 215, mobile: 250, chart3: 215, chart4: 250 },
  { date: "2024-04-26", desktop: 75, mobile: 130, chart3: 75, chart4: 130 },
  { date: "2024-04-27", desktop: 383, mobile: 420, chart3: 383, chart4: 420 },
  { date: "2024-04-28", desktop: 122, mobile: 180, chart3: 122, chart4: 180 },
  { date: "2024-04-29", desktop: 315, mobile: 240, chart3: 315, chart4: 240 },
  { date: "2024-04-30", desktop: 454, mobile: 380, chart3: 454, chart4: 380 },
  { date: "2024-05-01", desktop: 165, mobile: 220, chart3: 165, chart4: 220 },
  { date: "2024-05-02", desktop: 293, mobile: 310, chart3: 293, chart4: 310 },
  { date: "2024-05-03", desktop: 247, mobile: 190, chart3: 247, chart4: 190 },
  { date: "2024-05-04", desktop: 385, mobile: 420, chart3: 385, chart4: 420 },
  { date: "2024-05-05", desktop: 481, mobile: 390, chart3: 481, chart4: 390 },
  { date: "2024-05-06", desktop: 498, mobile: 520, chart3: 498, chart4: 520 },
  { date: "2024-05-07", desktop: 388, mobile: 300, chart3: 388, chart4: 300 },
  { date: "2024-05-08", desktop: 149, mobile: 210, chart3: 149, chart4: 210 },
  { date: "2024-05-09", desktop: 227, mobile: 180, chart3: 227, chart4: 180 },
  { date: "2024-05-10", desktop: 293, mobile: 330, chart3: 293, chart4: 330 },
  { date: "2024-05-11", desktop: 335, mobile: 270, chart3: 335, chart4: 270 },
  { date: "2024-05-12", desktop: 197, mobile: 240, chart3: 197, chart4: 240 },
  { date: "2024-05-13", desktop: 197, mobile: 160, chart3: 197, chart4: 160 },
  { date: "2024-05-14", desktop: 448, mobile: 490, chart3: 448, chart4: 490 },
  { date: "2024-05-15", desktop: 473, mobile: 380, chart3: 473, chart4: 380 },
  { date: "2024-05-16", desktop: 338, mobile: 400, chart3: 338, chart4: 400 },
  { date: "2024-05-17", desktop: 499, mobile: 420, chart3: 499, chart4: 420 },
  { date: "2024-05-18", desktop: 315, mobile: 350, chart3: 315, chart4: 350 },
  { date: "2024-05-19", desktop: 235, mobile: 180, chart3: 235, chart4: 180 },
  { date: "2024-05-20", desktop: 177, mobile: 230, chart3: 177, chart4: 230 },
  { date: "2024-05-21", desktop: 82, mobile: 140, chart3: 82, chart4: 140 },
  { date: "2024-05-22", desktop: 81, mobile: 120, chart3: 81, chart4: 120 },
  { date: "2024-05-23", desktop: 252, mobile: 290, chart3: 252, chart4: 290 },
  { date: "2024-05-24", desktop: 294, mobile: 220, chart3: 294, chart4: 220 },
  { date: "2024-05-25", desktop: 201, mobile: 250, chart3: 201, chart4: 250 },
  { date: "2024-05-26", desktop: 213, mobile: 170, chart3: 213, chart4: 170 },
  { date: "2024-05-27", desktop: 420, mobile: 460, chart3: 420, chart4: 460 },
  { date: "2024-05-28", desktop: 233, mobile: 190, chart3: 233, chart4: 190 },
  { date: "2024-05-29", desktop: 78, mobile: 130, chart3: 78, chart4: 130 },
  { date: "2024-05-30", desktop: 340, mobile: 280, chart3: 340, chart4: 280 },
  { date: "2024-05-31", desktop: 178, mobile: 230, chart3: 178, chart4: 230 },
  { date: "2024-06-01", desktop: 178, mobile: 200, chart3: 178, chart4: 200 },
  { date: "2024-06-02", desktop: 470, mobile: 410, chart3: 470, chart4: 410 },
  { date: "2024-06-03", desktop: 103, mobile: 160, chart3: 103, chart4: 160 },
  { date: "2024-06-04", desktop: 439, mobile: 380, chart3: 439, chart4: 380 },
  { date: "2024-06-05", desktop: 88, mobile: 140, chart3: 88, chart4: 140 },
  { date: "2024-06-06", desktop: 294, mobile: 250, chart3: 294, chart4: 250 },
  { date: "2024-06-07", desktop: 323, mobile: 370, chart3: 323, chart4: 370 },
  { date: "2024-06-08", desktop: 385, mobile: 320, chart3: 385, chart4: 320 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  chart3: {
    label: "Chart 3",
    color: "hsl(var(--chart-3))",
  },
  chart4: {
    label: "Chart 4",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function MobileDesktopCharts() {
  const [timeRange, setTimeRange] = React.useState("90d")
  const [hoveredDate, setHoveredDate] = React.useState<string | null>(null)

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-08")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Mobile vs Desktop Traffic</CardTitle>
          <CardDescription>
            Comparing mobile and desktop traffic over time
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <div className="space-y-0">
          {/* Desktop Chart */}
          <div className="h-[120px] w-full mb-[-30px] relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart 
                data={filteredData}
                onMouseMove={(e) => {
                  if (e && e.activeLabel) {
                    setHoveredDate(e.activeLabel)
                  }
                }}
                onMouseLeave={() => setHoveredDate(null)}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <defs>
                  <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-1))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-1))"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  hide
                />
                <YAxis hide />
                <Tooltip
                  cursor={false}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const dataPoint = filteredData.find(item => item.date === label)
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                {new Date(label).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Desktop: {dataPoint?.desktop?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Mobile: {dataPoint?.mobile?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Chart 3: {dataPoint?.chart3?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Chart 4: {dataPoint?.chart4?.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="url(#fillDesktop)"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth={2}
                />
                {hoveredDate && (
                  <ReferenceLine 
                    x={hoveredDate} 
                    stroke="#CCCCCC" 
                    strokeWidth={2}
                    strokeOpacity={1}
                    ifOverflow="visible"
                    isFront={true}
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Mobile Chart */}
          <div className="h-[120px] w-full mt-[-30px] relative z-20">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart 
                data={filteredData}
                onMouseMove={(e) => {
                  if (e && e.activeLabel) {
                    setHoveredDate(e.activeLabel)
                  }
                }}
                onMouseLeave={() => setHoveredDate(null)}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <defs>
                  <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-2))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-2))"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  hide
                />
                <YAxis hide />
                <Tooltip
                  cursor={false}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const dataPoint = filteredData.find(item => item.date === label)
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                {new Date(label).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Desktop: {dataPoint?.desktop?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Mobile: {dataPoint?.mobile?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Chart 3: {dataPoint?.chart3?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Chart 4: {dataPoint?.chart4?.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Area
                  dataKey="mobile"
                  type="natural"
                  fill="url(#fillMobile)"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                />
                {hoveredDate && (
                  <ReferenceLine 
                    x={hoveredDate} 
                    stroke="#CCCCCC" 
                    strokeWidth={2}
                    strokeOpacity={1}
                    ifOverflow="visible"
                    isFront={true}
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 3 */}
          <div className="h-[120px] w-full mt-[-30px] relative z-30">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart 
                data={filteredData}
                onMouseMove={(e) => {
                  if (e && e.activeLabel) {
                    setHoveredDate(e.activeLabel)
                  }
                }}
                onMouseLeave={() => setHoveredDate(null)}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <defs>
                  <linearGradient id="fillChart3" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-3))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-3))"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  hide
                />
                <YAxis hide />
                <Tooltip
                  cursor={false}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const dataPoint = filteredData.find(item => item.date === label)
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                {new Date(label).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Desktop: {dataPoint?.desktop?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Mobile: {dataPoint?.mobile?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Chart 3: {dataPoint?.chart3?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Chart 4: {dataPoint?.chart4?.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Area
                  dataKey="chart3"
                  type="natural"
                  fill="url(#fillChart3)"
                  stroke="hsl(var(--chart-3))"
                  strokeWidth={2}
                />
                {hoveredDate && (
                  <ReferenceLine 
                    x={hoveredDate} 
                    stroke="#CCCCCC" 
                    strokeWidth={2}
                    strokeOpacity={1}
                    ifOverflow="visible"
                    isFront={true}
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 4 */}
          <div className="h-[120px] w-full mt-[-30px] relative z-40">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart 
                data={filteredData}
                onMouseMove={(e) => {
                  if (e && e.activeLabel) {
                    setHoveredDate(e.activeLabel)
                  }
                }}
                onMouseLeave={() => setHoveredDate(null)}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              >
                <defs>
                  <linearGradient id="fillChart4" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--chart-4))"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--chart-4))"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value)
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                />
                <YAxis hide />
                <Tooltip
                  cursor={false}
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const dataPoint = filteredData.find(item => item.date === label)
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                {new Date(label).toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric",
                                })}
                              </span>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Desktop: {dataPoint?.desktop?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Mobile: {dataPoint?.mobile?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Chart 3: {dataPoint?.chart3?.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                <span className="font-bold text-muted-foreground">
                                  Chart 4: {dataPoint?.chart4?.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Area
                  dataKey="chart4"
                  type="natural"
                  fill="url(#fillChart4)"
                  stroke="hsl(var(--chart-4))"
                  strokeWidth={2}
                />
                {hoveredDate && (
                  <ReferenceLine 
                    x={hoveredDate} 
                    stroke="#CCCCCC" 
                    strokeWidth={2}
                    strokeOpacity={1}
                    ifOverflow="visible"
                    isFront={true}
                  />
                )}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
