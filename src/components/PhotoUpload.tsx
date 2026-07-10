import type { ChangeEvent, RefObject } from 'react'

interface PhotoUploadProps {
  preview: string | null
  inputRef: RefObject<HTMLInputElement | null>
  onClick: () => void
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function PhotoUpload({ preview, inputRef, onClick, onChange }: PhotoUploadProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mx-4 flex min-h-45 flex-col items-center justify-center gap-3 overflow-hidden rounded-3xl border border-[#EFEFEF] bg-[#F5F5F5]"
      style={{ boxShadow: '0 3px 1px rgba(0,0,0,0.01), 0 2px 1px rgba(0,0,0,0.05)' }}
    >
      {preview ? (
        <img src={preview} alt="선택한 사진" className="h-full w-full object-cover" />
      ) : (
        <>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00CF76]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 3v14M3 10h14"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="font-['Pretendard'] text-base font-semibold text-[#1F1F1F]">
            사진 추가
          </span>
        </>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={onChange}
        className="hidden"
      />
    </button>
  )
}

export default PhotoUpload
