import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NameEmailForm from './screens/NameEmailForm'
import DigitalDetox from './screens/DigitalDetox'
import Mission from './screens/Mission'

type Step = 'form' | 'detox'

function OnboardingFlow() {
  const [step, setStep] = useState<Step>('form')

  if (step === 'detox') {
    return <DigitalDetox />
  }

  return <NameEmailForm onNext={() => setStep('detox')} />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingFlow />} />
      <Route path="/mission" element={<Mission />} />
    </Routes>
  )
}

export default App
