"use client"

import { useState } from "react"
import { NominationHeader } from "@/components/nomination-header"
import { NomineeGrid } from "@/components/nominee-grid"
import { StatsSection } from "@/components/stats-section"
import { MonthSelector } from "@/components/month-selector"
import { NominationModal } from "@/components/nomination-modal" // Added modal import

const nomineesByMonth = {
  5: [
    {
      id: 1,
      name: "Chị Bùi Thị Mai",
      department: "Trung tâm Tuyển sinh Mentor 1-1",
      image: "/professional-asian-woman-with-glasses-holding-pink.jpg",
      achievements: ["Tăng trưởng tuyển sinh 150%", "Mentor xuất sắc Q1"],
    },
    {
      id: 2,
      name: "Chị Đặng Thị Thanh Huyền",
      department: "Phòng Dịch vụ Nội bộ",
      image: "/professional-asian-woman-with-flowers.jpg",
      achievements: ["Cải thiện quy trình 200%", "Dịch vụ khách hàng xuất sắc"],
    },
    {
      id: 3,
      name: "Chị Đoàn Thị Huệ",
      department: "Trung tâm Tuyển sinh FUNIX WAY",
      image: "/professional-asian-woman-smiling.png",
      achievements: ["Đạt target 180%", "Sáng kiến cải tiến"],
    },
    {
      id: 4,
      name: "Chị Nguyễn Thị Thu Hiền",
      department: "B2B Udemy",
      image: "/professional-asian-woman-in-red-blazer.jpg",
      achievements: ["Mở rộng thị trường B2B", "Đối tác chiến lược mới"],
    },
  ],
  6: [
    {
      id: 5,
      name: "Anh Nguyễn Trọng Tú",
      department: "Trung tâm công nghệ và Giáo dục FUNIX",
      image: "/professional-asian-man-in-graduation-gown.jpg",
      achievements: ["Phát triển công nghệ mới", "Giải pháp sáng tạo"],
    },
    {
      id: 6,
      name: "Chị Trần Thị Vân",
      department: "Phòng Dịch vụ Nội bộ",
      image: "/professional-asian-woman-with-medal.jpg",
      achievements: ["Tối ưu hóa quy trình", "Hỗ trợ đội ngũ xuất sắc"],
    },
    {
      id: 7,
      name: "Chị Nguyễn Thị Kim Thanh",
      department: "Trung tâm Học thuật và Phát triển nội dung ICC",
      image: "/professional-asian-woman-in-black-outfit.jpg",
      achievements: ["Nội dung chất lượng cao", "Đổi mới giáo dục"],
    },
  ],
  7: [
    {
      id: 8,
      name: "Chị Nguyễn Thị Ngọc Ánh",
      department: "Gia hạn ICC",
      image: "/professional-asian-woman-with-striped-shirt.jpg",
      achievements: ["Tỷ lệ gia hạn cao", "Chăm sóc khách hàng tận tâm"],
    },
    {
      id: 9,
      name: "Chị Nông Thị Hoài Anh",
      department: "Phát triển Nguồn lực giảng dạy ICC",
      image: "/professional-asian-woman-with-heart-gesture.jpg",
      achievements: ["Phát triển đội ngũ giảng viên", "Chất lượng đào tạo"],
    },
    {
      id: 10,
      name: "Chị Phạm Thị Hằng",
      department: "Trung tâm Tuyển sinh ICC",
      image: "/professional-asian-woman-smiling-warmly.jpg",
      achievements: ["Tuyển sinh vượt chỉ tiêu", "Chiến lược marketing hiệu quả"],
    },
    {
      id: 11,
      name: "Chị Phạm Thị Thu Hương",
      department: "Gia hạn ICC",
      image: "/professional-asian-woman-with-red-accessories.jpg",
      achievements: ["Dịch vụ gia hạn xuất sắc", "Tăng trưởng doanh thu"],
    },
    {
      id: 12,
      name: "Chị Trần Duy Thanh Huyền",
      department: "Quản trị Giáo viên",
      image: "/professional-asian-woman-in-elegant-attire.jpg",
      achievements: ["Quản lý hiệu quả", "Phát triển đội ngũ"],
    },
  ],
  8: [
    {
      id: 13,
      name: "Anh Lê Văn Minh",
      department: "Phòng Kỹ thuật",
      image: "/professional-asian-man-in-graduation-gown.jpg",
      achievements: ["Tối ưu hệ thống", "Bảo mật thông tin"],
    },
    {
      id: 14,
      name: "Chị Hoàng Thị Lan",
      department: "Marketing Digital",
      image: "/professional-asian-woman-with-glasses-holding-pink.jpg",
      achievements: ["Chiến dịch viral", "ROI tăng 300%"],
    },
  ],
  9: [
    {
      id: 15,
      name: "Anh Trần Quốc Việt",
      department: "Phát triển Sản phẩm",
      image: "/professional-asian-man-in-graduation-gown.jpg",
      achievements: ["Sản phẩm mới thành công", "UX/UI xuất sắc"],
    },
    {
      id: 16,
      name: "Chị Nguyễn Thị Hoa",
      department: "Chăm sóc Khách hàng",
      image: "/professional-asian-woman-with-flowers.jpg",
      achievements: ["Satisfaction 98%", "Giải quyết khiếu nại hiệu quả"],
    },
    {
      id: 17,
      name: "Anh Phạm Đức Anh",
      department: "Kinh doanh B2B",
      image: "/professional-asian-man-in-graduation-gown.jpg",
      achievements: ["Hợp đồng lớn", "Mở rộng thị trường"],
    },
  ],
}

export default function NominationPage() {
  const [selectedMonth, setSelectedMonth] = useState(5)
  const [isNominationModalOpen, setIsNominationModalOpen] = useState(false) // Added modal state

  const currentNominees = nomineesByMonth[selectedMonth as keyof typeof nomineesByMonth] || []

  return (
    <div className="min-h-screen">
      <NominationHeader
        selectedMonth={selectedMonth}
        nomineeCount={currentNominees.length}
        onNominateClick={() => setIsNominationModalOpen(true)} // Added nomination click handler
      />

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex justify-center">
          <MonthSelector selectedMonth={selectedMonth} onMonthChange={setSelectedMonth} />
        </div>
      </div>

      <StatsSection />
      <NomineeGrid nominees={currentNominees} />

      <NominationModal isOpen={isNominationModalOpen} onClose={() => setIsNominationModalOpen(false)} />
    </div>
  )
}
