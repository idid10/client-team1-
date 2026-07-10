interface MissionHeaderProps {
  title: string
  description: string
}

function MissionHeader({ title, description }: MissionHeaderProps) {
  return (
    <div className="px-4 pt-4 pb-4">
      <h1 className="font-['Pretendard'] text-[28px] font-bold leading-[135%] text-[#252525]">
        {title}
      </h1>
      <p className="mt-1 font-['Pretendard'] text-[13px] font-medium leading-[135%] text-[#494949]">
        {description}
      </p>
    </div>
  )
}

export default MissionHeader
