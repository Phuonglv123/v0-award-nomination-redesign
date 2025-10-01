"use client"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface MonthData {
  value: string
  label: string
  nominees: any[]
}

interface MonthSelectorProps {
  selectedMonth: string
  onMonthChange: (month: string) => void
  availableMonths: MonthData[]
}

export function MonthSelector({ selectedMonth, onMonthChange, availableMonths }: MonthSelectorProps) {
  const currentMonth = availableMonths.find((m) => m.value === selectedMonth)

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-medium text-white/80">Chọn tháng:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="min-w-[140px] justify-between bg-[#f97316] hover:bg-[#ea580c] text-white border-0">
            {currentMonth?.label || "Chọn tháng"}
            <ChevronDown className="h-4 w-4 opacity-70" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          {availableMonths.map((month) => (
            <DropdownMenuItem
              key={month.value}
              onClick={() => onMonthChange(month.value)}
              className="flex items-center justify-between"
            >
              <span>{month.label}</span>
              <span className="text-xs text-muted-foreground">
                {month.nominees.length} người
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
