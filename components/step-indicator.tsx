// components/step-indicator.tsx
"use client"

import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type StepIndicatorProps = {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div key={index} className="flex items-center">
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all",
              index < currentStep
                ? "bg-primary border-primary text-primary-foreground"
                : index === currentStep
                ? "bg-primary/20 border-primary text-primary"
                : "bg-background border-muted-foreground/30 text-muted-foreground"
            )}
          >
            {index < currentStep ? (
              <Check className="h-5 w-5" />
            ) : (
              <span className="text-sm font-semibold">{index + 1}</span>
            )}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={cn(
                "w-12 h-0.5 mx-1 transition-all",
                index < currentStep ? "bg-primary" : "bg-muted-foreground/30"
              )}
            />
          )}
        </div>
      ))}
    </div>
  )
}