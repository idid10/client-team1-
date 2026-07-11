interface TeamFailurePopupProps {
  failedMemberNames: string[]
  onClose: () => void
}

function TeamFailurePopup({ failedMemberNames, onClose }: TeamFailurePopupProps) {
  const namesText = failedMemberNames.map((name) => `${name}님`).join(', ')

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{ background: 'rgba(31, 31, 31, 0.60)' }}
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-80 flex-col items-center gap-2 rounded-3xl bg-white p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center font-['Pretendard'] text-[17px] font-bold leading-[135%] text-[#1F1F1F]">
          {namesText}이 미션을 실패했어요!
        </h2>

        <p className="text-center font-['Pretendard'] text-sm font-medium leading-[150%] text-[#9B9B9B]">
          팀의 벽돌 {failedMemberNames.length}개가 내려갔어요.
          <br />
          내일은 모두 함께 다시 쌓아봐요!
        </p>
      </div>
    </div>
  )
}

export default TeamFailurePopup
