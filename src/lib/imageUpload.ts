import { apiPost } from './api'

interface PresignedUrlData {
  uploadUrl: string
  imageUrl: string
  expiresIn: number
}

export async function uploadImage(file: File): Promise<string> {
  const presigned = await apiPost<PresignedUrlData>('/api/images/presigned-url', {
    fileName: file.name,
    contentType: file.type,
  })

  if (!presigned.success) {
    throw new Error(presigned.message || '이미지 업로드 URL 발급에 실패했습니다.')
  }

  const { uploadUrl, imageUrl } = presigned.data

  const putRes = await fetch(uploadUrl, {
    method: 'PUT',
    headers: { 'Content-Type': file.type },
    body: file,
  })

  if (!putRes.ok) {
    throw new Error('이미지 업로드에 실패했습니다.')
  }

  return imageUrl
}
