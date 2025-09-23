import { NomineeCard } from "./nominee-card"

interface Nominee {
  id: number
  name: string
  department: string
  image: string
  achievements: string[]
}

interface NomineeGridProps {
  nominees: Nominee[]
}

export function NomineeGrid({ nominees }: NomineeGridProps) {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16 text-white">
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-white">
            Những cá nhân xuất sắc
          </h2>
          <p className="mt-4 text-lg leading-8 text-white">
            Được đề cử dựa trên thành tích và đóng góp nổi bật trong tháng qua
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {nominees.map((nominee, index) => (
            <NomineeCard key={nominee.id} nominee={nominee} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
