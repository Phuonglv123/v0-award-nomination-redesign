"use client"

import { Award, Star, Plus } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { dataMonth } from "@/data/data"

interface NominationHeaderProps {
  selectedMonth: string
  nomineeCount: number
  onNominateClick: () => void
}

export function NominationHeader({ selectedMonth, nomineeCount, onNominateClick }: NominationHeaderProps) {
  // Tìm thông tin tháng từ dữ liệu
  const monthInfo = dataMonth.find(month => month.value === selectedMonth)
  const monthLabel = monthInfo?.label || "Chưa chọn"
  
  // Xác định quý dựa trên tháng
  const getQuarter = (monthValue: string) => {
    const num = parseInt(monthValue)
    if (num >= 1 && num <= 3) return "Q1"
    if (num >= 4 && num <= 6) return "Q2" 
    if (num >= 7 && num <= 9) return "Q3"
    if (num >= 10 && num <= 12) return "Q4"
    if (num === 13) return "Q1"
    if (num === 14) return "Q2"
    if (num === 15) return "Q3"
    if (num === 16) return "Q4"
    return "Q1"
  }

  return (
    <header className="relative overflow-hidden">
      <div className="organic-shape organic-shape-1" />
      <div className="organic-shape organic-shape-2" />
      <div className="hero-pattern absolute inset-0 opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-4 rounded-2xl bg-white/90 backdrop-blur-sm px-8 py-4 shadow-lg border border-white/20">
              <Image
                src="/galaxy-education-logo.webp"
                alt="Galaxy Education"
                width={200}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="text-white">GE </span>
            <span className="text-white">STAR</span>
            <br />
            <span className="text-white">AWARD </span>
            <span className="text-white">2025</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl mt-4 block text-white/90">
              Danh sách đề cử {monthLabel.toLowerCase()}
            </span>
          </h1>

          <p className="mt-8 text-pretty text-lg leading-8 text-white/80 sm:text-xl">
            Chương trình xây dựng nhân tôn vinh các cá nhân, tập thể có thành tích xuất sắc, góp phần vào sự phát triển
            của Galaxy Education
          </p>

          <div className="mt-12 flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-[#f97316] fill-[#f97316]" />
              <span className="text-sm font-medium text-white/80">{nomineeCount} ứng viên xuất sắc</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-white" />
              <span className="text-sm font-medium text-white/80">
                {monthLabel} - {getQuarter(selectedMonth)}/2025
              </span>
            </div>
          </div>

          <div className="mt-8">
            <Button
              onClick={onNominateClick}
              className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Plus className="h-5 w-5 mr-2" />
              Đề cử nhân viên xuất sắc
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
