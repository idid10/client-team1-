import { useEffect, useState, type ReactNode } from 'react'

interface MissionCardProps {
  icon: ReactNode
  title: string
  description: ReactNode
  durationSeconds?: number
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function MissionCard({
  icon,
  title,
  description,
  durationSeconds = 600,
}: MissionCardProps) {
  const [remaining, setRemaining] = useState(durationSeconds)

  useEffect(() => {
    const id = window.setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          window.clearInterval(id)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => window.clearInterval(id)
  }, [])

  return (
    <div
      className="mx-4 flex h-100.5 flex-col items-center justify-center gap-4 rounded-3xl border border-[#EFEFEF] bg-white px-6 py-8"
      style={{ boxShadow: '0 3px 1px rgba(0,0,0,0.01), 0 1px 2px rgba(0,0,0,0.04)' }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F9F0] text-3xl">
        {icon}
      </div>

      <h2 className="text-center font-['Pretendard'] text-[17px] font-bold leading-[135%] text-[#1F1F1F]">
        {title}
      </h2>

      <p className="text-center font-['Pretendard'] text-[13px] font-medium leading-[135%] text-[#9B9B9B]">
        {description}
      </p>

      <span className="rounded-xl bg-[#FFDADD] px-13.5 py-1 font-['Pretendard'] text-base font-semibold leading-[135%] text-[#FF4D6A]">
        {formatTime(remaining)}
      </span>
    </div>
  )
}

export default MissionCard
