import { useState } from 'react'
import DigitalDetox from './screens/DigitalDetox'
import Home from './screens/Home'
import NameEmailForm from './screens/NameEmailForm'

type Step = 'form' | 'detox' | 'home'

function App() {
  const [step, setStep] = useState<Step>('form')

  if (step === 'detox') {
    return <DigitalDetox onNext={() => setStep('home')} />
  }

  if (step === 'home') {
    return <Home />
  }

  return <NameEmailForm onNext={() => setStep('detox')} />
}

export default App
