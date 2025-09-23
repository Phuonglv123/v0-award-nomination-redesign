import { Award, Star } from "lucide-react"
import Image from "next/image"

interface NominationHeaderProps {
  selectedMonth: number
  nomineeCount: number
}

export function NominationHeader({ selectedMonth, nomineeCount }: NominationHeaderProps) {
  const monthNames = {
    5: "tháng 5",
    6: "tháng 6",
    7: "tháng 7",
    8: "tháng 8",
    9: "tháng 9",
  }

  const quarterInfo = {
    5: "Q2",
    6: "Q2",
    7: "Q3",
    8: "Q3",
    9: "Q3",
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
            <span className="brand-green">STAR</span>
            <br />
            <span className="text-white">AWARD </span>
            <span className="brand-pink">2025</span>
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl mt-4 block">
              Danh sách đề cử {monthNames[selectedMonth as keyof typeof monthNames]}
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
                {monthNames[selectedMonth as keyof typeof monthNames]} -{" "}
                {quarterInfo[selectedMonth as keyof typeof quarterInfo]}/2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
