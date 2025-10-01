"use client"

import { Badge } from "@/components/ui/badge"

interface MonthData {
  value: string
  label: string
  nominees: any[]
}

interface MonthTabsProps {
  selectedMonth: string
  onMonthChange: (month: string) => void
  availableMonths: MonthData[]
}

export function MonthTabs({ selectedMonth, onMonthChange, availableMonths }: MonthTabsProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-2">
        <nav className="flex flex-wrap justify-center gap-2" aria-label="Tabs">
          {availableMonths.map((month) => (
            <button
              key={month.value}
              onClick={() => onMonthChange(month.value)}
              className={`
                relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 transform hover:scale-105
                ${
                  selectedMonth === month.value
                    ? 'bg-[#f97316] text-white shadow-lg shadow-orange-500/25'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100/50'
                }
              `}
            >
              <span>{month.label}</span>
              <Badge 
                variant="secondary"
                className={`
                  text-xs font-semibold
                  ${selectedMonth === month.value 
                    ? 'bg-white/20 text-white border-white/30' 
                    : 'bg-gray-200 text-gray-600'
                  }
                `}
              >
                {month.nominees.length}
              </Badge>
              {selectedMonth === month.value && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-2 h-2 bg-[#f97316] rotate-45"></div>
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
