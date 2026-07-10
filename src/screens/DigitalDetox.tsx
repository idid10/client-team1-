import { useState } from "react";
import sprout from "../assets/sprout.png";
import Button from "../components/Button";
import TimeCard, { type TimeValue } from "../components/TimeCard";
import { saveDetoxTimes, scheduleDetoxStart } from "../lib/detoxSchedule";

interface DigitalDetoxProps {
  onNext: () => void;
}

export default function DigitalDetox({ onNext }: DigitalDetoxProps) {
  const [sleepTime, setSleepTime] = useState<TimeValue>({
    period: "\uC624\uD6C4",
    hour: 9,
    minute: 0,
  });

  const [wakeTime, setWakeTime] = useState<TimeValue>({
    period: "\uC624\uC804",
    hour: 9,
    minute: 0,
  });

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col bg-[#F7F8FA] px-6 pb-8 pt-14">
      <div className="mx-auto flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#F7FBEF]">
        <img src={sprout} alt="sprout" className="h-[41px] w-[41px]" />
      </div>

      <h1 className="mt-7 text-center text-[24px] font-bold leading-[135%] text-[#2E2E2E]">
        {"\uB514\uC9C0\uD138 \uB514\uD1A1\uC2A4,"}
        <br />
        {"\uC5B8\uC81C \uC2DC\uC791\uD560\uAE4C\uC694?"}
      </h1>

      <p className="mt-4 text-center text-[16px] leading-[170%] text-[#B7B7B7]">
        {"\uB9E4\uC77C\uC758 \uC624\uD504\uB77C\uC778 \uC77C\uC815\uC744 \uC124\uC815\uD558\uACE0"}
        <br />
        {"\uAC74\uAC15\uD55C \uB514\uC9C0\uD138 \uC2B5\uAD00\uC744 \uB9CC\uB4E4\uC5B4\uBCF4\uC138\uC694."}
      </p>

      <div className="mt-auto flex flex-col gap-4">
        <TimeCard
          icon="lower"
          label={"\uD3F0\uC744 \uB0B4\uB824\uB193\uB294 \uC2DC\uAC04"}
          value={sleepTime}
          onChange={setSleepTime}
        />

        <TimeCard
          icon="raise"
          label={"\uB2E4\uC2DC \uD3F0\uC744 \uC4F8 \uC218 \uC788\uB294 \uC2DC\uAC04"}
          value={wakeTime}
          onChange={setWakeTime}
        />
      </div>

      <div className="mt-[34px]">
        <Button
          active
          onClick={() => {
            scheduleDetoxStart(sleepTime);
            saveDetoxTimes(sleepTime, wakeTime);
            onNext();
          }}
        >
          {"\uB514\uC9C0\uD138 \uB514\uD1A1\uC2A4 \uC2DC\uC791\uD558\uAE30"}
        </Button>
      </div>
    </div>
  );
}
