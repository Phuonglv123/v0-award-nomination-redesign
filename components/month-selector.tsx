"use client"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const months = [
  { value: 5, label: "Tháng 5", quarter: "Q2" },
  { value: 6, label: "Tháng 6", quarter: "Q2" },
  { value: 7, label: "Tháng 7", quarter: "Q3" },
  { value: 8, label: "Tháng 8", quarter: "Q3" },
  { value: 9, label: "Tháng 9", quarter: "Q3" },
]

interface MonthSelectorProps {
  selectedMonth: number
  onMonthChange: (month: number) => void
}

export function MonthSelector({ selectedMonth, onMonthChange }: MonthSelectorProps) {
  const currentMonth = months.find((m) => m.value === selectedMonth)

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-white/80">Chọn tháng:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="min-w-[140px] justify-between bg-[#f97316] hover:bg-[#ea580c] text-white border-0">
            {currentMonth?.label}
            <ChevronDown className="h-4 w-4 opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          {months.map((month) => (
            <DropdownMenuItem
              key={month.value}
              onClick={() => onMonthChange(month.value)}
              className="flex items-center justify-between"
            >
              <span>{month.label}</span>
              <span className="text-xs text-muted-foreground">{month.quarter}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
