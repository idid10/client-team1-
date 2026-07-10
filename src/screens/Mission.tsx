import { useRef, useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import MissionHeader from '../components/MissionHeader'
import MissionCard from '../components/MissionCard'
import PhotoUpload from '../components/PhotoUpload'
import Button from '../components/Button'
import SecondaryButton from '../components/SecondaryButton'
import toothbrush from '../assets/Toothbrush.svg'

function Mission() {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string | null>(null)

  const openPicker = () => inputRef.current?.click()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setPreview(URL.createObjectURL(file))
  }

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[390px] flex-col bg-[#F7F8FA]">
      <MissionHeader
        title="미션이 도착했어요!"
        description="오늘은 어떤 미션이 도착했을까요?"
      />

      <div className="mt-4 flex flex-col gap-5">
        <MissionCard
          icon={<img src={toothbrush} alt="toothbrush" className="h-8 w-8" />}
          title="양치하기 미션"
          description={
            <>
              미션을 완료했나요?
              <br />
              완료한 순간을 사진으로 남겨주세요!
            </>
          }
          timer="09:40"
        />

        <PhotoUpload
          preview={preview}
          inputRef={inputRef}
          onClick={openPicker}
          onChange={handleChange}
        />
      </div>

      <div className="mx-4 mt-auto flex gap-2.5 pb-8">
        <SecondaryButton onClick={openPicker}>다시 찍기</SecondaryButton>
        <div className="flex-1">
          <Button
            active={preview !== null}
            onClick={() => navigate('/detox-active')}
          >
            업로드
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Mission
