<<<<<<< HEAD
import type { TimeValue } from "../components/TimeCard";

const STORAGE_KEY = "detoxStartAt";
const TIMES_KEY = "detoxTimes";

export interface DetoxTimes {
  sleepTime: TimeValue;
  wakeTime: TimeValue;
}

export function saveDetoxTimes(sleepTime: TimeValue, wakeTime: TimeValue) {
  localStorage.setItem(TIMES_KEY, JSON.stringify({ sleepTime, wakeTime }));
}

export function loadDetoxTimes(): DetoxTimes | null {
  const stored = localStorage.getItem(TIMES_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as DetoxTimes;
  } catch {
    return null;
  }
}

export function scheduleDetoxStart(time: TimeValue) {
  let hour24 = time.hour % 12;
  if (time.period === "\uC624\uD6C4") hour24 += 12;

  const target = new Date();
  target.setHours(hour24, time.minute, 0, 0);
  if (target.getTime() <= Date.now()) {
    target.setDate(target.getDate() + 1);
  }

  localStorage.setItem(STORAGE_KEY, target.toISOString());
}

export function consumeDueDetoxStart(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return false;

  if (Date.now() >= new Date(stored).getTime()) {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  }

  return false;
}
=======
import type { TimeValue } from '../components/TimeCard'

const TIMES_KEY = 'detoxTimes'

export interface DetoxTimes {
  sleepTime: TimeValue
  wakeTime: TimeValue
}

export function saveDetoxTimes(sleepTime: TimeValue, wakeTime: TimeValue) {
  localStorage.setItem(TIMES_KEY, JSON.stringify({ sleepTime, wakeTime }))
}

export function loadDetoxTimes(): DetoxTimes | null {
  const stored = localStorage.getItem(TIMES_KEY)
  if (!stored) return null

  try {
    return JSON.parse(stored) as DetoxTimes
  } catch {
    return null
  }
}
>>>>>>> f65e8f19753e759f8bdc1868fd123e61285d70d1
