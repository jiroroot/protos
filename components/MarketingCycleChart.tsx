"use client"

import * as React from "react"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// Marketing cycle data with four metrics
const marketingCycleData = [
  { date: "Mar 1", reach: 21200, inform: 18900, convert: 15600, retain: 14200 },
  { date: "Mar 2", reach: 19800, inform: 17500, convert: 14300, retain: 12900 },
  { date: "Mar 3", reach: 22400, inform: 20100, convert: 16800, retain: 15400 },
  { date: "Mar 4", reach: 23100, inform: 20800, convert: 17500, retain: 16100 },
  { date: "Mar 5", reach: 21800, inform: 19500, convert: 16200, retain: 14800 },
  { date: "Mar 6", reach: 24500, inform: 22200, convert: 18900, retain: 17500 },
  { date: "Mar 7", reach: 25200, inform: 22900, convert: 19600, retain: 18200 },
  { date: "Mar 8", reach: 23900, inform: 21600, convert: 18300, retain: 16900 },
  { date: "Mar 9", reach: 26600, inform: 24300, convert: 21000, retain: 19600 },
  { date: "Mar 10", reach: 27300, inform: 25000, convert: 21700, retain: 20300 },
  { date: "Mar 11", reach: 26000, inform: 23700, convert: 20400, retain: 19000 },
  { date: "Mar 12", reach: 28700, inform: 26400, convert: 23100, retain: 21700 },
  { date: "Mar 13", reach: 29400, inform: 27100, convert: 23800, retain: 22400 },
  { date: "Mar 14", reach: 28100, inform: 25800, convert: 22500, retain: 21100 },
  { date: "Mar 15", reach: 30800, inform: 28500, convert: 25200, retain: 23800 },
  { date: "Mar 16", reach: 31500, inform: 29200, convert: 25900, retain: 24500 },
  { date: "Mar 17", reach: 30200, inform: 27900, convert: 24600, retain: 23200 },
  { date: "Mar 18", reach: 32900, inform: 30600, convert: 27300, retain: 25900 },
  { date: "Mar 19", reach: 33600, inform: 31300, convert: 28000, retain: 26600 },
  { date: "Mar 20", reach: 32300, inform: 30000, convert: 26700, retain: 25300 },
  { date: "Mar 21", reach: 35000, inform: 32700, convert: 29400, retain: 28000 },
  { date: "Mar 22", reach: 35700, inform: 33400, convert: 30100, retain: 28700 },
  { date: "Mar 23", reach: 34400, inform: 32100, convert: 28800, retain: 27400 },
  { date: "Mar 24", reach: 37100, inform: 34800, convert: 31500, retain: 30100 },
  { date: "Mar 25", reach: 37800, inform: 35500, convert: 32200, retain: 30800 },
  { date: "Mar 26", reach: 36500, inform: 34200, convert: 30900, retain: 29500 },
  { date: "Mar 27", reach: 39200, inform: 36900, convert: 33600, retain: 32200 },
  { date: "Mar 28", reach: 39900, inform: 37600, convert: 34300, retain: 32900 },
  { date: "Mar 29", reach: 38600, inform: 36300, convert: 33000, retain: 31600 },
  { date: "Mar 30", reach: 41300, inform: 39000, convert: 35700, retain: 34300 },
  { date: "Mar 31", reach: 42000, inform: 39700, convert: 36400, retain: 35000 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-900 mb-2">{label}</p>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-600">Reach: {payload[0]?.value?.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Inform: {payload[1]?.value?.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-sm text-gray-600">Convert: {payload[2]?.value?.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-sm text-gray-600">Retain: {payload[3]?.value?.toLocaleString()}</span>
          </div>
        </div>
      </div>
    )
  }
  return null
}

export function MarketingCycleChart() {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Marketing Cycle</CardTitle>
        <CardDescription>
          Your campaigns are primarily driving conversion and retention. Investing more on reach may increase conversions without additional conversion budget.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={marketingCycleData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="reach" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#3b82f6" }}
              />
              <Line 
                type="monotone" 
                dataKey="inform" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#10b981" }}
              />
              <Line 
                type="monotone" 
                dataKey="convert" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#8b5cf6" }}
              />
              <Line 
                type="monotone" 
                dataKey="retain" 
                stroke="#f59e0b" 
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#f59e0b" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center mt-4 space-x-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm text-gray-600">Reach</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-600">Inform</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-sm text-gray-600">Convert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-sm text-gray-600">Retain</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
