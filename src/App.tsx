import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import NameEmailForm from './screens/NameEmailForm'
import DigitalDetox from './screens/DigitalDetox'
import Mission from './screens/Mission'
import DetoxActive from './screens/DetoxActive'
import Home from './screens/Home'
import MissionPopup from './components/MissionPopup'
import { consumeDueDetoxStart } from './lib/detoxSchedule'
import toothbrush from './assets/Toothbrush.svg'

type Step = 'form' | 'detox'

function OnboardingFlow() {
  const [step, setStep] = useState<Step>('form')

  if (step === 'detox') {
    return <DigitalDetox />
  }

  return <NameEmailForm onNext={() => setStep('detox')} />
}

function App() {
  const navigate = useNavigate()
  const [showMissionPopup, setShowMissionPopup] = useState(false)

  useEffect(() => {
    const id = window.setInterval(() => {
      if (consumeDueDetoxStart()) {
        setShowMissionPopup(true)
      }
    }, 1000)

    return () => window.clearInterval(id)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<OnboardingFlow />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/detox-active" element={<DetoxActive />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      {showMissionPopup && (
        <MissionPopup
          icon={<img src={toothbrush} alt="toothbrush" className="h-8 w-8" />}
          title="양치하기 미션"
          description="양치하는 순간을 인증해주세요."
          onStart={() => {
            setShowMissionPopup(false)
            navigate('/mission')
          }}
        />
      )}
    </>
  )
}

export default App
