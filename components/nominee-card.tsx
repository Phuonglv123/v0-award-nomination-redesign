import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import Image from "next/image"

interface Nominee {
  id: number
  name: string
  department: string
  image: string
  achievements: string[]
}

interface NomineeCardProps {
  nominee: Nominee
  index: number
}

export function NomineeCard({ nominee, index }: NomineeCardProps) {
  return (
    <Card className="nominee-card group overflow-hidden border-0 bg-white/95 backdrop-blur-sm shadow-xl">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={`https://drive.usercontent.google.com/download?id=${nominee.image}` || "/placeholder.svg"}
          alt={ nominee.name }
          layout="fill"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="h-4 w-4 text-[#f97316]" />
            <Badge className="bg-[#f97316]/20 text-[#f97316] border-[#f97316]/30 hover:bg-[#f97316]/30">
              Đề cử #{index + 1}
            </Badge>
          </div>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 text-balance">{nominee.name}</h3>
        <p className="text-sm text-gray-600 mb-4 text-pretty">{nominee.department}</p>

        <div className="space-y-2">
          {nominee.achievements.map((achievement, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f97316] flex-shrink-0" />
              <span className="text-sm text-gray-600 text-pretty">{achievement}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
