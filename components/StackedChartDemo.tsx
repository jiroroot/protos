"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

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
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "Four stacked area charts with unified hover"

// Marketing cycle data with four metrics
const chartData = [
  { date: "2024-04-01", reach: 222, inform: 150, convert: 120, retain: 100 },
  { date: "2024-04-02", reach: 97, inform: 180, convert: 140, retain: 110 },
  { date: "2024-04-03", reach: 134, inform: 220, convert: 160, retain: 120 },
  { date: "2024-04-04", reach: 156, inform: 240, convert: 180, retain: 130 },
  { date: "2024-04-05", reach: 178, inform: 260, convert: 200, retain: 140 },
  { date: "2024-04-06", reach: 200, inform: 280, convert: 220, retain: 150 },
  { date: "2024-04-07", reach: 222, inform: 300, convert: 240, retain: 160 },
  { date: "2024-04-08", reach: 244, inform: 320, convert: 260, retain: 170 },
  { date: "2024-04-09", reach: 266, inform: 340, convert: 280, retain: 180 },
  { date: "2024-04-10", reach: 288, inform: 360, convert: 300, retain: 190 },
  { date: "2024-04-11", reach: 310, inform: 380, convert: 320, retain: 200 },
  { date: "2024-04-12", reach: 332, inform: 400, convert: 340, retain: 210 },
  { date: "2024-04-13", reach: 354, inform: 420, convert: 360, retain: 220 },
  { date: "2024-04-14", reach: 376, inform: 440, convert: 380, retain: 230 },
  { date: "2024-04-15", reach: 398, inform: 460, convert: 400, retain: 240 },
  { date: "2024-04-16", reach: 420, inform: 480, convert: 420, retain: 250 },
  { date: "2024-04-17", reach: 442, inform: 500, convert: 440, retain: 260 },
  { date: "2024-04-18", reach: 464, inform: 520, convert: 460, retain: 270 },
  { date: "2024-04-19", reach: 486, inform: 540, convert: 480, retain: 280 },
  { date: "2024-04-20", reach: 508, inform: 560, convert: 500, retain: 290 },
  { date: "2024-04-21", reach: 530, inform: 580, convert: 520, retain: 300 },
  { date: "2024-04-22", reach: 552, inform: 600, convert: 540, retain: 310 },
  { date: "2024-04-23", reach: 574, inform: 620, convert: 560, retain: 320 },
  { date: "2024-04-24", reach: 596, inform: 640, convert: 580, retain: 330 },
  { date: "2024-04-25", reach: 618, inform: 660, convert: 600, retain: 340 },
  { date: "2024-04-26", reach: 640, inform: 680, convert: 620, retain: 350 },
  { date: "2024-04-27", reach: 662, inform: 700, convert: 640, retain: 360 },
  { date: "2024-04-28", reach: 684, inform: 720, convert: 660, retain: 370 },
  { date: "2024-04-29", reach: 706, inform: 740, convert: 680, retain: 380 },
  { date: "2024-04-30", reach: 728, inform: 760, convert: 700, retain: 390 },
  { date: "2024-05-01", reach: 750, inform: 780, convert: 720, retain: 400 },
  { date: "2024-05-02", reach: 772, inform: 800, convert: 740, retain: 410 },
  { date: "2024-05-03", reach: 794, inform: 820, convert: 760, retain: 420 },
  { date: "2024-05-04", reach: 816, inform: 840, convert: 780, retain: 430 },
  { date: "2024-05-05", reach: 838, inform: 860, convert: 800, retain: 440 },
  { date: "2024-05-06", reach: 860, inform: 880, convert: 820, retain: 450 },
  { date: "2024-05-07", reach: 882, inform: 900, convert: 840, retain: 460 },
  { date: "2024-05-08", reach: 904, inform: 920, convert: 860, retain: 470 },
  { date: "2024-05-09", reach: 926, inform: 940, convert: 880, retain: 480 },
  { date: "2024-05-10", reach: 948, inform: 960, convert: 900, retain: 490 },
  { date: "2024-05-11", reach: 970, inform: 980, convert: 920, retain: 500 },
  { date: "2024-05-12", reach: 992, inform: 1000, convert: 940, retain: 510 },
  { date: "2024-05-13", reach: 1014, inform: 1020, convert: 960, retain: 520 },
  { date: "2024-05-14", reach: 1036, inform: 1040, convert: 980, retain: 530 },
  { date: "2024-05-15", reach: 1058, inform: 1060, convert: 1000, retain: 540 },
  { date: "2024-05-16", reach: 1080, inform: 1080, convert: 1020, retain: 550 },
  { date: "2024-05-17", reach: 1102, inform: 1100, convert: 1040, retain: 560 },
  { date: "2024-05-18", reach: 1124, inform: 1120, convert: 1060, retain: 570 },
  { date: "2024-05-19", reach: 1146, inform: 1140, convert: 1080, retain: 580 },
  { date: "2024-05-20", reach: 1168, inform: 1160, convert: 1100, retain: 590 },
  { date: "2024-05-21", reach: 1190, inform: 1180, convert: 1120, retain: 600 },
  { date: "2024-05-22", reach: 1212, inform: 1200, convert: 1140, retain: 610 },
  { date: "2024-05-23", reach: 1234, inform: 1220, convert: 1160, retain: 620 },
  { date: "2024-05-24", reach: 1256, inform: 1240, convert: 1180, retain: 630 },
  { date: "2024-05-25", reach: 1278, inform: 1260, convert: 1200, retain: 640 },
  { date: "2024-05-26", reach: 1300, inform: 1280, convert: 1220, retain: 650 },
  { date: "2024-05-27", reach: 1322, inform: 1300, convert: 1240, retain: 660 },
  { date: "2024-05-28", reach: 1344, inform: 1320, convert: 1260, retain: 670 },
  { date: "2024-05-29", reach: 1366, inform: 1340, convert: 1280, retain: 680 },
  { date: "2024-05-30", reach: 1388, inform: 1360, convert: 1300, retain: 690 },
  { date: "2024-05-31", reach: 1410, inform: 1380, convert: 1320, retain: 700 },
  { date: "2024-06-01", reach: 1432, inform: 1400, convert: 1340, retain: 710 },
  { date: "2024-06-02", reach: 1454, inform: 1420, convert: 1360, retain: 720 },
  { date: "2024-06-03", reach: 1476, inform: 1440, convert: 1380, retain: 730 },
  { date: "2024-06-04", reach: 1498, inform: 1460, convert: 1400, retain: 740 },
  { date: "2024-06-05", reach: 1520, inform: 1480, convert: 1420, retain: 750 },
  { date: "2024-06-06", reach: 1542, inform: 1500, convert: 1440, retain: 760 },
  { date: "2024-06-07", reach: 1564, inform: 1520, convert: 1460, retain: 770 },
  { date: "2024-06-08", reach: 1586, inform: 1540, convert: 1480, retain: 780 },
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

export function StackedChartDemo() {
  const [timeRange, setTimeRange] = React.useState("90d")

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
          <CardTitle>Marketing Cycle - Stacked Charts</CardTitle>
          <CardDescription>
            Showing marketing funnel performance across reach, inform, convert, and retain stages
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
        <div className="space-y-4">
          {/* Reach Chart */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm font-medium text-gray-700">Reach</span>
              </div>
              <div className="text-sm text-gray-500">
                Impressions {filteredData[filteredData.length - 1]?.reach?.toLocaleString()} ↑ 12%
              </div>
            </div>
            <div className="h-[80px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredData}>
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
                    content={
                      <ChartTooltipContent
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })
                        }}
                        indicator="dot"
                      />
                    }
                  />
                  <Area
                    dataKey="reach"
                    type="natural"
                    fill="url(#fillReach)"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Inform Chart */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-gray-700">Inform</span>
              </div>
              <div className="text-sm text-gray-500">
                Interactions {filteredData[filteredData.length - 1]?.inform?.toLocaleString()} ↓ 3.2%
              </div>
            </div>
            <div className="h-[80px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredData}>
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
                    content={
                      <ChartTooltipContent
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })
                        }}
                        indicator="dot"
                      />
                    }
                  />
                  <Area
                    dataKey="inform"
                    type="natural"
                    fill="url(#fillInform)"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Convert Chart */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm font-medium text-gray-700">Convert</span>
              </div>
              <div className="text-sm text-gray-500">
                Purchases {filteredData[filteredData.length - 1]?.convert?.toLocaleString()} ↑ 12%
              </div>
            </div>
            <div className="h-[80px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredData}>
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
                    content={
                      <ChartTooltipContent
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })
                        }}
                        indicator="dot"
                      />
                    }
                  />
                  <Area
                    dataKey="convert"
                    type="natural"
                    fill="url(#fillConvert)"
                    stroke="hsl(var(--chart-3))"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Retain Chart */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                <span className="text-sm font-medium text-gray-700">Retain</span>
              </div>
              <div className="text-sm text-gray-500">
                LTV {filteredData[filteredData.length - 1]?.retain?.toLocaleString()} ↑ 12%
              </div>
            </div>
            <div className="h-[80px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={filteredData}>
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
                    content={
                      <ChartTooltipContent
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })
                        }}
                        indicator="dot"
                      />
                    }
                  />
                  <Area
                    dataKey="retain"
                    type="natural"
                    fill="url(#fillRetain)"
                    stroke="hsl(var(--chart-4))"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
