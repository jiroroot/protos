"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { VennDiagram, type VennData } from "@/components/ui/venn-diagram"

const sampleData: VennData[] = [
  {
    setA: { label: "Designers", count: 85 },
    setB: { label: "Developers", count: 120 },
    intersection: { count: 32 }
  },
  {
    setA: { label: "Mobile Users", count: 200 },
    setB: { label: "Desktop Users", count: 180 },
    intersection: { count: 95 }
  },
  {
    setA: { label: "Frontend", count: 150 },
    setB: { label: "Backend", count: 130 },
    intersection: { count: 45 }
  }
]

export function VennDemo() {
  const [selectedData, setSelectedData] = React.useState(0)
  const [size, setSize] = React.useState<"sm" | "md" | "lg" | "xl" | "2xl">("lg")
  const [theme, setTheme] = React.useState<"default" | "blue" | "green" | "purple" | "orange">("default")
  const [showLabels, setShowLabels] = React.useState(true)
  const [showCounts, setShowCounts] = React.useState(true)
  const [animated, setAnimated] = React.useState(true)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Elegant Venn Diagram</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A beautiful, simple Venn diagram component with perfect 4:3 aspect ratio. 
          Clean, elegant design that fits perfectly in any card layout.
        </p>
      </div>

      {/* Controls */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Customization Options</CardTitle>
          <CardDescription>Fine-tune the Venn diagram appearance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Data Set</label>
              <select
                value={selectedData}
                onChange={(e) => setSelectedData(Number(e.target.value))}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sampleData.map((_, index) => (
                  <option key={index} value={index}>
                    {index === 0 ? "Design vs Dev" : index === 1 ? "Mobile vs Desktop" : "Frontend vs Backend"}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700">Size</label>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value as "sm" | "md" | "lg" | "xl" | "2xl")}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">Extra Large</option>
                <option value="2xl">2XL</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Theme</label>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as "default" | "blue" | "green" | "purple" | "orange")}
                className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-lg bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="default">Default</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Display</label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={showLabels}
                    onChange={(e) => setShowLabels(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Labels
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={showCounts}
                    onChange={(e) => setShowCounts(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Counts
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={animated}
                    onChange={(e) => setAnimated(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Animations
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Venn Diagram Display */}
      <Card className="overflow-hidden border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
          <CardTitle className="text-gray-800">Interactive Venn Diagram</CardTitle>
          <CardDescription className="text-gray-600">
            {sampleData[selectedData].setA.label} vs {sampleData[selectedData].setB.label}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="flex justify-center">
            <VennDiagram
              data={sampleData[selectedData]}
              size={size}
              theme={theme}
              showLabels={showLabels}
              showCounts={showCounts}
              animated={animated}
            />
          </div>
        </CardContent>
      </Card>

      {/* Data Summary */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="text-gray-800">Data Summary</CardTitle>
          <CardDescription>Breakdown of the selected data set</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
              <div className="text-2xl font-bold text-blue-600">
                {sampleData[selectedData].setA.count}
              </div>
              <div className="text-sm text-blue-600 font-medium">
                {sampleData[selectedData].setA.label}
              </div>
            </div>
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
              <div className="text-2xl font-bold text-green-600">
                {sampleData[selectedData].intersection.count}
              </div>
              <div className="text-sm text-green-600 font-medium">Overlap</div>
            </div>
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/20">
              <div className="text-2xl font-bold text-purple-600">
                {sampleData[selectedData].setB.count}
              </div>
              <div className="text-sm text-purple-600 font-medium">
                {sampleData[selectedData].setB.label}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
