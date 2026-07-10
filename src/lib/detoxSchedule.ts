import type { TimeValue } from '../components/TimeCard'

const STORAGE_KEY = 'detoxStartAt'

export function scheduleDetoxStart(time: TimeValue) {
  let hour24 = time.hour % 12
  if (time.period === '오후') hour24 += 12

  const target = new Date()
  target.setHours(hour24, time.minute, 0, 0)
  if (target.getTime() <= Date.now()) {
    target.setDate(target.getDate() + 1)
  }

  localStorage.setItem(STORAGE_KEY, target.toISOString())
}

export function consumeDueDetoxStart(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return false

  if (Date.now() >= new Date(stored).getTime()) {
    localStorage.removeItem(STORAGE_KEY)
    return true
  }

  return false
}
