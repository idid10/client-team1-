const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

export interface ApiResponse<T> {
  success: boolean
  status: number
  code: string
  message: string
  data: T
  timestamp: string
}

export async function apiPost<TData, TBody = unknown>(
  path: string,
  body: TBody,
): Promise<ApiResponse<TData>> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!res.ok) {
    throw new Error(`API request failed: ${res.status} ${res.statusText}`)
  }

  return res.json() as Promise<ApiResponse<TData>>
}
