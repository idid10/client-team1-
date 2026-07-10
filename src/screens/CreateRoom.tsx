import { ArrowLeft, Copy, Send } from "lucide-react";
import { useState } from "react";

const TEXT = {
  title: "\uBC29\uB9CC\uB4E4\uAE30",
  label: "\uBC29 \uC774\uB984",
  placeholder: "\uBC29 \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694.",
  confirm: "\uD655\uC778",
  done: "\uC644\uB8CC",
  completeTitle: "\uBC29\uC774 \uB9CC\uB4E4\uC5B4\uC84C\uC5B4\uC694!",
  completeLine1: "\uAC19\uC774 \uB514\uC9C0\uD138 \uB514\uD1A1\uC2A4\uB97C",
  completeLine2: "\uC2DC\uC791\uD560 \uD300\uC6D0\uC5D0\uAC8C \uBCF4\uB0B4\uBCF4\uC138\uC694!",
  inviteCode: "123456789!",
};

interface CreateRoomProps {
  onBack: () => void;
}

export default function CreateRoom({ onBack }: CreateRoomProps) {
  const [roomName, setRoomName] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const isActive = roomName.trim().length > 0;

  if (isComplete) {
    return (
      <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col bg-[#F7F8FA] text-[#252525]">
        <button
          type="button"
          onClick={onBack}
          aria-label="back"
          className="ml-4 mt-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-[14px] text-[#1F1F1F]"
        >
          <ArrowLeft size={20} strokeWidth={2.4} />
        </button>

        <main className="flex flex-1 flex-col items-center px-4">
          <div className="mt-[130px] flex flex-col items-center gap-4">
            <Send size={90} strokeWidth={2.1} className="-rotate-[8deg] text-[#00CF76]" />
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-center text-[28px] font-bold leading-[135%] text-[#252525]">
                {TEXT.completeTitle}
              </h1>
              <p className="text-center text-[13px] font-normal leading-[150%] text-[#494949]">
                {TEXT.completeLine1}
                <br />
                {TEXT.completeLine2}
              </p>
            </div>
          </div>

          <div className="mt-[66px] flex h-[70px] w-full items-center justify-between rounded-xl bg-[#F9F7E8] p-4">
            <span className="text-[17px] font-medium leading-[150%] text-[#252525]">
              {TEXT.inviteCode}
            </span>
            <button type="button" aria-label="copy" className="flex h-[38px] w-[38px] items-center justify-center rounded-[14px] text-[#252525]">
              <Copy size={20} strokeWidth={2.2} />
            </button>
          </div>
        </main>

        <div className="h-[110px] bg-[#F7F8FA] px-6 pt-[11px]">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 pb-5 pt-4 text-center font-['Roboto'] text-base font-semibold leading-6 text-white"
          >
            {TEXT.done}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col bg-[#F7F8FA] text-[#494949]">
      <button
        type="button"
        onClick={onBack}
        aria-label="back"
        className="ml-4 mt-[18px] flex h-[38px] w-[38px] items-center justify-center rounded-[14px] text-[#1F1F1F]"
      >
        <ArrowLeft size={20} strokeWidth={2.4} />
      </button>

      <main className="flex flex-1 flex-col px-4 pt-[1px]">
        <h1 className="text-[28px] font-bold leading-[135%] text-[#494949]">{TEXT.title}</h1>

        <label className="mt-[32px] text-[17px] font-semibold leading-[135%] text-[#494949]">
          {TEXT.label}
        </label>
        <input
          type="text"
          value={roomName}
          onChange={(event) => setRoomName(event.target.value)}
          placeholder={TEXT.placeholder}
          className="mt-2 h-11 w-full rounded-xl border-0 bg-[rgba(97,97,97,0.1)] px-5 py-3 text-[13px] font-normal leading-[150%] text-[#494949] outline-none placeholder:text-[#949494]"
        />
      </main>

      <div className="h-[110px] bg-[#F7F8FA] px-6 pt-[11px]">
        <button
          type="button"
          disabled={!isActive}
          data-active={isActive}
          onClick={() => setIsComplete(true)}
          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl text-center font-['Roboto'] font-semibold ${
            isActive
              ? "bg-emerald-500 pb-5 pt-4 text-base leading-6 text-white"
              : "bg-[#B7B7B7] pb-[18.5px] pt-[16.5px] text-[17px] leading-[135%] text-[#6E6E6E]"
          }`}
        >
          {TEXT.confirm}
        </button>
      </div>
    </div>
  );
}
