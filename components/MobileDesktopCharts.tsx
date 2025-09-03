"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"
import { ChevronDown, TrendingUp, TrendingDown } from "lucide-react"

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
  { date: "2024-04-01", reach: 2220, inform: 250, convert: 103, retain: 150 },
  { date: "2024-04-02", reach: 970, inform: 270, convert: 439, retain: 180 },
  { date: "2024-04-03", reach: 1670, inform: 320, convert: 880, retain: 120 },
  { date: "2024-04-04", reach: 2420, inform: 150, convert: 294, retain: 260 },
  { date: "2024-04-05", reach: 3730, inform: 180, convert: 323, retain: 290 },
  { date: "2024-04-06", reach: 3010, inform: 120, convert: 385, retain: 340 },
  { date: "2024-04-07", reach: 2450, inform: 260, convert: 222, retain: 180 },
  { date: "2024-04-08", reach: 4090, inform: 290, convert: 97, retain: 320 },
  { date: "2024-04-09", reach: 590, inform: 340, convert: 167, retain: 110 },
  { date: "2024-04-10", reach: 2610, inform: 180, convert: 242, retain: 190 },
  { date: "2024-04-11", reach: 3270, inform: 320, convert: 373, retain: 350 },
  { date: "2024-04-12", reach: 292, inform: 110, convert: 301, retain: 210 },
  { date: "2024-04-13", reach: 3420, inform: 190, convert: 245, retain: 380 },
  { date: "2024-04-14", reach: 1370, inform: 350, convert: 409, retain: 220 },
  { date: "2024-04-15", reach: 1200, inform: 210, convert: 59, retain: 170 },
  { date: "2024-04-16", reach: 1380, inform: 380, convert: 261, retain: 190 },
  { date: "2024-04-17", reach: 4460, inform: 220, convert: 327, retain: 360 },
  { date: "2024-04-18", reach: 364, inform: 170, convert: 29, retain: 410 },
  { date: "2024-04-19", reach: 2430, inform: 190, convert: 342, retain: 180 },
  { date: "2024-04-20", reach: 890, inform: 360, convert: 137, retain: 150 },
  { date: "2024-04-21", reach: 1370, inform: 410, convert: 120, retain: 200 },
  { date: "2024-04-22", reach: 2240, inform: 180, convert: 138, retain: 170 },
  { date: "2024-04-23", reach: 1380, inform: 150, convert: 446, retain: 230 },
  { date: "2024-04-24", reach: 3870, inform: 200, convert: 36, retain: 290 },
  { date: "2024-04-25", reach: 2150, inform: 170, convert: 243, retain: 250 },
  { date: "2024-04-26", reach: 750, inform: 230, convert: 89, retain: 130 },
  { date: "2024-04-27", reach: 3830, inform: 290, convert: 137, retain: 420 },
  { date: "2024-04-28", reach: 1220, inform: 250, convert: 224, retain: 180 },
  { date: "2024-04-29", reach: 3150, inform: 130, convert: 138, retain: 240 },
  { date: "2024-04-30", reach: 4540, inform: 420, convert: 387, retain: 380 },
  { date: "2024-05-01", reach: 1650, inform: 180, convert: 215, retain: 220 },
  { date: "2024-05-02", reach: 2930, inform: 240, convert: 75, retain: 310 },
  { date: "2024-05-03", reach: 2470, inform: 380, convert: 383, retain: 190 },
  { date: "2024-05-04", reach: 3850, inform: 220, convert: 122, retain: 420 },
  { date: "2024-05-05", reach: 4810, inform: 310, convert: 315, retain: 390 },
  { date: "2024-05-06", reach: 4980, inform: 190, convert: 454, retain: 520 },
  { date: "2024-05-07", reach: 3880, inform: 420, convert: 165, retain: 300 },
  { date: "2024-05-08", reach: 1490, inform: 390, convert: 293, retain: 210 },
  { date: "2024-05-09", reach: 2270, inform: 520, convert: 247, retain: 180 },
  { date: "2024-05-10", reach: 2930, inform: 300, convert: 385, retain: 330 },
  { date: "2024-05-11", reach: 3350, inform: 210, convert: 481, retain: 270 },
  { date: "2024-05-12", reach: 1970, inform: 180, convert: 498, retain: 240 },
  { date: "2024-05-13", reach: 1970, inform: 330, convert: 388, retain: 160 },
  { date: "2024-05-14", reach: 4480, inform: 270, convert: 149, retain: 490 },
  { date: "2024-05-15", reach: 4730, inform: 240, convert: 227, retain: 380 },
  { date: "2024-05-16", reach: 3380, inform: 160, convert: 293, retain: 400 },
  { date: "2024-05-17", reach: 4990, inform: 490, convert: 335, retain: 420 },
  { date: "2024-05-18", reach: 3150, inform: 380, convert: 197, retain: 350 },
  { date: "2024-05-19", reach: 2350, inform: 400, convert: 197, retain: 180 },
  { date: "2024-05-20", reach: 1770, inform: 420, convert: 448, retain: 230 },
  { date: "2024-05-21", reach: 820, inform: 350, convert: 473, retain: 140 },
  { date: "2024-05-22", reach: 810, inform: 180, convert: 338, retain: 120 },
  { date: "2024-05-23", reach: 2520, inform: 230, convert: 499, retain: 290 },
  { date: "2024-05-24", reach: 2940, inform: 140, convert: 315, retain: 220 },
  { date: "2024-05-25", reach: 2010, inform: 120, convert: 235, retain: 250 },
  { date: "2024-05-26", reach: 2130, inform: 290, convert: 177, retain: 170 },
  { date: "2024-05-27", reach: 4200, inform: 220, convert: 82, retain: 460 },
  { date: "2024-05-28", reach: 2330, inform: 250, convert: 81, retain: 190 },
  { date: "2024-05-29", reach: 780, inform: 170, convert: 252, retain: 130 },
  { date: "2024-05-30", reach: 3400, inform: 460, convert: 294, retain: 280 },
  { date: "2024-05-31", reach: 1780, inform: 190, convert: 201, retain: 230 },
  { date: "2024-06-01", reach: 1780, inform: 130, convert: 213, retain: 200 },
  { date: "2024-06-02", reach: 4700, inform: 280, convert: 420, retain: 410 },
  { date: "2024-06-03", reach: 1030, inform: 230, convert: 233, retain: 160 },
  { date: "2024-06-04", reach: 4390, inform: 200, convert: 78, retain: 380 },
  { date: "2024-06-05", reach: 880, inform: 410, convert: 340, retain: 140 },
  { date: "2024-06-06", reach: 2940, inform: 160, convert: 178, retain: 250 },
  { date: "2024-06-07", reach: 3230, inform: 380, convert: 178, retain: 370 },
  { date: "2024-06-08", reach: 3850, inform: 140, convert: 470, retain: 320 },
]

const chartConfig = {
  reach: {
    label: "Reach",
    color: "hsl(var(--chart-1))",
  },
  inform: {
    label: "Inform",
    color: "hsl(var(--chart-2))",
  },
  convert: {
    label: "Convert",
    color: "hsl(var(--chart-3))",
  },
  retain: {
    label: "Retain",
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
    <Card className="pt-0 overflow-visible">
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
        <div className="flex gap-6">
          {/* Left Content - Marketing Funnel Stages */}
          <div className="w-[180px] flex-shrink-0">
            <div className="space-y-6">
              {/* Reach Stage */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reach</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-600">Impressions</span>
                        <ChevronDown className="h-3 w-3 text-gray-400" />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-900">21.2K</span>
                        <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>12%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inform Stage */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Inform</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-600">Interactions</span>
                        <ChevronDown className="h-3 w-3 text-gray-400" />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-900">21.2K</span>
                        <div className="flex items-center bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                          <TrendingDown className="h-3 w-3 mr-1" />
                          <span>3.2%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Convert Stage */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Convert</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-600">Purchases</span>
                        <ChevronDown className="h-3 w-3 text-gray-400" />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-900">21.2K</span>
                        <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>12%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Retain Stage */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Retain</h3>
                  <div className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm text-gray-600">LTV</span>
                        <ChevronDown className="h-3 w-3 text-gray-400" />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-gray-900">21.2K</span>
                        <div className="flex items-center bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          <span>12%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Charts */}
          <div className="flex-1">
            <div className="space-y-0 pb-4">
              {/* Desktop Chart */}
              <div className="h-[120px] w-full mb-[-20px] relative z-10">
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
                      <linearGradient id="fillReach" x1="0" y1="0" x2="0" y2="1">
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
                            <div className="rounded-lg border bg-background p-2 shadow-sm relative z-50">
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
                                      Reach: {dataPoint?.reach?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Inform: {dataPoint?.inform?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Convert: {dataPoint?.convert?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Retain: {dataPoint?.retain?.toLocaleString()}
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
                      dataKey="reach"
                      type="natural"
                      fill="url(#fillReach)"
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
              <div className="h-[120px] w-full mt-[-20px] relative z-20">
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
                      <linearGradient id="fillInform" x1="0" y1="0" x2="0" y2="1">
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
                            <div className="rounded-lg border bg-background p-2 shadow-sm relative z-50">
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
                                      Reach: {dataPoint?.reach?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Inform: {dataPoint?.inform?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Convert: {dataPoint?.convert?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Retain: {dataPoint?.retain?.toLocaleString()}
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
                      dataKey="inform"
                      type="natural"
                      fill="url(#fillInform)"
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
              <div className="h-[120px] w-full mt-[-20px] relative z-30">
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
                      <linearGradient id="fillConvert" x1="0" y1="0" x2="0" y2="1">
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
                            <div className="rounded-lg border bg-background p-2 shadow-sm relative z-50">
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
                                      Reach: {dataPoint?.reach?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Inform: {dataPoint?.inform?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Convert: {dataPoint?.convert?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Retain: {dataPoint?.retain?.toLocaleString()}
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
                      dataKey="convert"
                      type="natural"
                      fill="url(#fillConvert)"
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
              <div className="h-[120px] w-full mt-[-20px] relative z-40 mb-4">
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
                      <linearGradient id="fillRetain" x1="0" y1="0" x2="0" y2="1">
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
                            <div className="rounded-lg border bg-background p-2 shadow-sm relative z-50">
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
                                      Reach: {dataPoint?.reach?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Inform: {dataPoint?.inform?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Convert: {dataPoint?.convert?.toLocaleString()}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                    <span className="font-bold text-muted-foreground">
                                      Retain: {dataPoint?.retain?.toLocaleString()}
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
                      dataKey="retain"
                      type="natural"
                      fill="url(#fillRetain)"
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
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
