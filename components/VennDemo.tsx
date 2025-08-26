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

    </div>
  )
}
