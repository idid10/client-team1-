import { useState } from 'react'
import sprout from '../assets/sprout.png'
import Button from '../components/Button'
import TimeCard, { type TimeValue } from '../components/TimeCard'

interface DigitalDetoxProps {
  onNext: () => void
}

export default function DigitalDetox({ onNext }: DigitalDetoxProps) {
  const [sleepTime, setSleepTime] = useState<TimeValue>({
    period: '오후',
    hour: 9,
    minute: 0,
  })

  const [wakeTime, setWakeTime] = useState<TimeValue>({
    period: '오후',
    hour: 10,
    minute: 30,
  })

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col bg-[#F7F8FA] px-6 pt-14 pb-8">
      <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#F7FBEF]">
        <img src={sprout} alt="sprout" className="h-[41px] w-[41px]" />
      </div>

      <h1 className="mt-7 text-center text-[24px] font-bold leading-[135%] text-[#2E2E2E]">
        디지털 디톡스
        <br />
        시간을 정해볼까요?
      </h1>

      <p className="mt-4 text-center text-[16px] leading-[170%] text-[#B7B7B7]">
        휴대폰을 내려놓을 시작과 종료 시간을
        <br />
        설정하면 홈 화면에 반영돼요.
      </p>

      <div className="mt-auto flex flex-col gap-4">
        <TimeCard
          icon="lower"
          label="폰을 내려놓는 시간"
          value={sleepTime}
          onChange={setSleepTime}
        />

        <TimeCard
          icon="raise"
          label="다시 폰을 드는 시간"
          value={wakeTime}
          onChange={setWakeTime}
        />
      </div>

      <div className="mt-[34px]">
        <Button active onClick={onNext}>
          디지털 디톡스 시작하기
        </Button>
      </div>
    </div>
  )
}
