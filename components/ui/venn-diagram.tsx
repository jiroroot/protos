"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const vennDiagramVariants = cva(
  "relative w-full",
  {
    variants: {
      size: {
        sm: "max-w-sm",
        md: "max-w-md", 
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
      },
      theme: {
        default: "",
        blue: "[--venn-primary:theme(colors.blue.500)] [--venn-secondary:theme(colors.blue.300)] [--venn-overlap:theme(colors.blue.200)]",
        green: "[--venn-primary:theme(colors.green.500)] [--venn-secondary:theme(colors.green.300)] [--venn-overlap:theme(colors.green.200)]",
        purple: "[--venn-primary:theme(colors.purple.500)] [--venn-secondary:theme(colors.purple.300)] [--venn-overlap:theme(colors.purple.200)]",
        orange: "[--venn-primary:theme(colors.orange.500)] [--venn-secondary:theme(colors.orange.300)] [--venn-overlap:theme(colors.orange.200)]",
      },
    },
    defaultVariants: {
      size: "md",
      theme: "default",
    },
  }
)

export interface VennData {
  setA: {
    label: string
    count: number
    color?: string
  }
  setB: {
    label: string
    count: number
    color?: string
  }
  intersection: {
    count: number
    color?: string
  }
}

export interface VennDiagramProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof vennDiagramVariants> {
  data: VennData
  showLabels?: boolean
  showCounts?: boolean
  animated?: boolean
}

const VennDiagram = React.forwardRef<HTMLDivElement, VennDiagramProps>(
  ({ className, size, theme, data, showLabels = true, showCounts = true, animated = true, ...props }, ref) => {
    // Use black and white for classic contrast
    const primaryColor = data.setA.color || "#000000" // Black
    const secondaryColor = data.setB.color || "rgba(255,255,255,0.6)" // Semi-transparent white
    const overlapColor = data.intersection.color || "#808080" // Gray for overlap

    return (
      <div
        ref={ref}
        className={cn(vennDiagramVariants({ size, theme }), className)}
        {...props}
      >
        <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
          {/* Set A Circle - Black */}
          <div
            className={cn(
              "absolute rounded-full transition-all duration-500 ease-out",
              animated && "hover:scale-105 hover:shadow-lg",
              "flex items-center justify-center"
            )}
            style={{
              border: `4px solid ${primaryColor}`,
              backgroundColor: `${primaryColor}20`,
              width: "40%",
              height: "40%",
              left: "20%",
              top: "30%",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
          </div>

          {/* Set B Circle - White */}
          <div
            className={cn(
              "absolute rounded-full transition-all duration-500 ease-out",
              animated && "hover:scale-105 hover:shadow-lg",
              "flex items-center justify-center"
            )}
            style={{
              border: `4px solid ${primaryColor}`, // Black border for contrast
              backgroundColor: secondaryColor,
              width: "46%", // 15% bigger than 40%
              height: "46%",
              right: "17%",
              top: "27%",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
          </div>

          {/* Intersection Label - Positioned in the center overlap */}
          {showCounts && (
            <div
              className="absolute flex items-center justify-center text-gray-800 font-bold"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 10,
              }}
            >
              <div className="text-center">
                <div className="text-xl font-bold">{data.intersection.count}</div>
              </div>
            </div>
          )}

          {/* Left Circle Number - Left Aligned */}
          {showCounts && (
            <div
              className="absolute flex items-center text-gray-800 font-bold"
              style={{
                left: "25%",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
            >
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-800 drop-shadow-sm">{data.setA.count}</div>
              </div>
            </div>
          )}

          {/* Right Circle Number - Right Aligned */}
          {showCounts && (
            <div
              className="absolute flex items-center text-gray-800 font-bold"
              style={{
                right: "25%",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
              }}
            >
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800 drop-shadow-sm">{data.setB.count}</div>
              </div>
            </div>
          )}

          {/* Elegant Legend */}
          {showLabels && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-200">
                <div 
                  className="w-3 h-3 rounded-full border-2" 
                  style={{ 
                    backgroundColor: `${primaryColor}20`,
                    borderColor: primaryColor
                  }}
                />
                <span className="font-medium text-gray-700">{data.setA.label}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm border border-gray-200">
                <div 
                  className="w-3 h-3 rounded-full border-2" 
                  style={{ 
                    backgroundColor: "rgba(255,255,255,0.6)",
                    borderColor: primaryColor
                  }}
                />
                <span className="text-gray-700 font-medium">{data.setB.label}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
)
VennDiagram.displayName = "VennDiagram"

export { VennDiagram, vennDiagramVariants }
