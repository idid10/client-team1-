interface TeamProgressBarProps {
  current: number
  total: number
}

function TeamProgressBar({ current, total }: TeamProgressBarProps) {
  const percent = total > 0 ? Math.min((current / total) * 100, 100) : 0

  return (
    <div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-[#EFEFEF]">
        <div
          className="h-full rounded-full bg-[#00CF76] transition-[width]"
          style={{ width: `${percent}%` }}
        />
      </div>
      <p className="mt-1 text-right font-['Pretendard'] text-xs font-medium text-[#9B9B9B]">
        {current}/{total}
      </p>
    </div>
  )
}

export default TeamProgressBar
