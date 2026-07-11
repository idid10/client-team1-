import type { TimeValue } from "../components/TimeCard";

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

const END_TIME_KEY = 'detoxEndTime'

/** 새로고침해도 유지되도록 router state 대신 localStorage에도 저장 */
export function saveDetoxEndTime(detoxEndTime: string) {
  localStorage.setItem(END_TIME_KEY, detoxEndTime)
}

export function loadDetoxEndTime(): string | null {
  return localStorage.getItem(END_TIME_KEY)
}

export function clearDetoxEndTime() {
  localStorage.removeItem(END_TIME_KEY)
}
