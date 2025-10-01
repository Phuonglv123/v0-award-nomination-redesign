"use client"

import { useState } from "react"
import { NominationHeader } from "@/components/nomination-header"
import { NomineeGrid } from "@/components/nominee-grid"
import { StatsSection } from "@/components/stats-section"
import { MonthTabs } from "@/components/month-tabs"
import { NominationModal } from "@/components/nomination-modal"
import { dataMonth, dataNominee } from "@/data/data"

// Tạo danh sách các tháng có dữ liệu nominees
const getAvailableMonths = () => {
  const monthsWithData = [...new Set(dataNominee.map(nominee => nominee.month))]
  
  console.log("Months with data:", monthsWithData) // Debug line
  return dataMonth
    .filter(month => monthsWithData.includes(month.value))
    .map(month => ({
      value: month.value,
      label: month.label,
      nominees: dataNominee.filter(nominee => nominee.month === month.value)
    }))
}

// Chuyển đổi dữ liệu nominee thành format phù hợp với component hiện tại
const formatNomineeForDisplay = (nominee: any) => ({
  id: nominee.name + nominee.department, // Tạo id duy nhất
  name: nominee.name,
  department: nominee.department,
  image: nominee.img ? `https://drive.google.com/thumbnail?id=${nominee.img}` : "/placeholder-user.jpg",
  achievements: [nominee.achive, nominee.title].filter(Boolean),
  description: nominee.desc || ""
})

export default function NominationPage() {
  const availableMonths = getAvailableMonths()
  const [selectedMonth, setSelectedMonth] = useState(availableMonths.length > 0 ? availableMonths[0].value : "05")
  const [isNominationModalOpen, setIsNominationModalOpen] = useState(false)

  // Lấy nominees cho tháng được chọn
  const currentNominees = dataNominee
    .filter(nominee => nominee.month === selectedMonth)
    .map(formatNomineeForDisplay)

  return (
    <div className="min-h-screen">
      <NominationHeader
        selectedMonth={selectedMonth}
        nomineeCount={currentNominees.length}
        onNominateClick={() => setIsNominationModalOpen(true)}
      />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <MonthTabs 
          selectedMonth={selectedMonth} 
          onMonthChange={setSelectedMonth} 
          availableMonths={availableMonths}
        />
      </div>

      <StatsSection />
      <NomineeGrid nominees={currentNominees} />

      <NominationModal isOpen={isNominationModalOpen} onClose={() => setIsNominationModalOpen(false)} />
    </div>
  )
}
