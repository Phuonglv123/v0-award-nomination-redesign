import { TrendingUp, Users, Award, Target } from "lucide-react"
import { useEffect, useState } from "react"

interface NominationRecord {
  id: number
  fields: {
    CreatedAt: string
    UpdatedAt: string | null
    Title: string | null
    nomineeName: string
    nomineeEmail: string
    department: string
    achievements: string
    reason: string
    nominatorEmail: string
    nominatorName: string
    source: string
  }
}

interface ApiResponse {
  records: NominationRecord[]
  nestedNext: string | null
}

export function StatsSection() {
  const [stats, setStats] = useState([
    {
      icon: Users,
      value: "0",
      label: "Ứng viên được đề cử",
      description: "Từ các phòng ban khác nhau",
    },
    {
      icon: Award,
      value: "0",
      label: "Phòng ban tham gia",
      description: "Đại diện toàn công ty",
    },
    {
      icon: TrendingUp,
      value: "0",
      label: "Số lượt bình chọn",
      description: "Tổng số đề cử",
    },
  ])

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          'https://nocodb.ican.vn/api/v3/data/pg6w72dvw3m6mls/ml4g8745sjlhwb5/records',
          {
            method: 'GET',
            headers: {
              'accept': 'application/json',
              'xc-token': 'kZbOLfAfA8RZKBcprOzDaQ-QmPfPLt4WOEu6rrP2'
            }
          }
        )

        if (!response.ok) {
          throw new Error('Failed to fetch nominations')
        }

        const data: ApiResponse = await response.json()
        
        // Calculate stats from API data
        const uniqueNominees = new Set(data.records.map(record => record.fields.nomineeEmail)).size
        const uniqueDepartments = new Set(data.records.map(record => record.fields.department)).size
        const totalVotes = data.records.length

        // Update stats with real data
        setStats([
          {
            icon: Users,
            value: uniqueNominees.toString(),
            label: "Ứng viên được đề cử",
            description: "Từ các phòng ban khác nhau",
          },
          {
            icon: Award,
            value: uniqueDepartments.toString(),
            label: "Phòng ban tham gia",
            description: "Đại diện toàn công ty",
          },
          {
            icon: TrendingUp,
            value: totalVotes.toString(),
            label: "Số lượt bình chọn",
            description: "Tổng số đề cử",
          },
        ])
      } catch (error) {
        console.error('Error fetching nomination stats:', error)
        // Keep default values on error
      }
    }

    fetchStats()
  }, [])

  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl font-serif font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-white">{stat.label}</div>
              <div className="mt-1 text-xs text-muted-white">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
