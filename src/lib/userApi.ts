import { apiPost } from './api'
import { getDeviceId } from './deviceId'

const USER_ID_KEY = 'userId'

export interface User {
  userId: number
  nickname: string
  status: string
}

export function createUser(nickname: string) {
  return apiPost<User, { deviceId: string; nickname: string }>('/api/users', {
    deviceId: getDeviceId(),
    nickname,
  })
}

export function saveUserId(userId: number) {
  localStorage.setItem(USER_ID_KEY, String(userId))
}

export function getUserId(): number | null {
  const stored = localStorage.getItem(USER_ID_KEY)
  return stored ? Number(stored) : null
}
