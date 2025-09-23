import { TrendingUp, Users, Award, Target } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "15",
      label: "Ứng viên được đề cử",
      description: "Từ các phòng ban khác nhau",
    },
    {
      icon: Award,
      value: "8",
      label: "Phòng ban tham gia",
      description: "Đại diện toàn công ty",
    },
    {
      icon: TrendingUp,
      value: "150%",
      label: "Tăng trưởng trung bình",
      description: "So với tháng trước",
    },
    {
      icon: Target,
      value: "95%",
      label: "Hoàn thành mục tiêu",
      description: "Vượt kỳ vọng đề ra",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-white">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl font-serif font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-white">{stat.label}</div>
              <div className="mt-1 text-xs text-white">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
