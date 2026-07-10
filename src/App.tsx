function TimeCard({
  label,
  value,
  period,
}: {
  label: string
  value: string
  period: string
}) {
  return (
    <div className="rounded-2xl border border-gray-200 px-4 py-4">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>{label}</span>
        <span className="font-medium text-emerald-500">{period}</span>
      </div>
      <div className="mt-2 text-center text-2xl font-semibold tracking-wide text-gray-900">
        {value}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="flex min-h-[844px] flex-col px-5 pb-8 pt-12">
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-emerald-300 bg-emerald-50 text-2xl">
        🌱
      </div>

      <h1 className="text-center text-xl font-semibold leading-snug text-gray-900">
        디지털 디톡스,
        <br />
        언제 시작할까요?
      </h1>

      <p className="mx-auto mt-3 max-w-[260px] text-center text-sm leading-relaxed text-gray-400">
        매일 오프라인 일정을 설정하고 건강한 디지털 습관을 만들어 보세요.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        <TimeCard
          label="폰을 내려놓는 시간"
          value="오전 : 09 : 00"
          period="오후 9:00"
        />
        <TimeCard
          label="다시 폰을 쓸 수 있는 시간"
          value="오전 : 09 : 00"
          period="오후 9:00"
        />
      </div>

      <button
        type="button"
        className="mt-auto w-full rounded-full bg-emerald-500 py-4 text-base font-medium text-white"
      >
        디지털 디톡스 시작하기
      </button>
    </div>
  )
}

export default App
