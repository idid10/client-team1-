import { useEffect, useState, type ReactNode } from 'react'
import Button from './Button'

interface MissionPopupProps {
  icon: ReactNode
  title: string
  description: string
  durationSeconds?: number
  onStart: () => void
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

function MissionPopup({
  icon,
  title,
  description,
  durationSeconds = 600,
  onStart,
}: MissionPopupProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(31, 31, 31, 0.60)' }}
    >
      <div className="flex w-87.5 flex-col items-center gap-2.5 rounded-3xl bg-white p-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F9F0] text-3xl">
          {icon}
        </div>

        <h2 className="text-center font-['Pretendard'] text-[22px] font-bold leading-[135%] text-[#1F1F1F]">
          {title}
        </h2>

        <p className="text-center font-['Pretendard'] text-[17px] font-medium leading-[150%] text-[#616161]">
          {description}
        </p>

        <span className="rounded-xl bg-[#FFDADD] px-13.5 py-1 font-['Pretendard'] text-base font-semibold leading-[135%] text-[#FF4D6A]">
          {formatTime(remaining)}
        </span>

        <div className="mt-2.5 w-full">
          <Button active onClick={onStart}>
            미션하러 가기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MissionPopup
