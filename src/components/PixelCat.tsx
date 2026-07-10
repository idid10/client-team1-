// 1 = 고양이 모양을 이루는 칸, 0 = 빈 칸(배경)
const CAT_MASK = [
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
] as const

interface PixelCatProps {
  current: number
  total: number
  cellSize?: number
}

function PixelCat({ current, total, cellSize = 16 }: PixelCatProps) {
  const ratio = total > 0 ? Math.min(current / total, 1) : 0

  // 고양이 모양 칸들을 아래쪽 줄부터, 각 줄은 왼쪽부터 채워지는 순서로 정렬
  const shapeCells: string[] = []
  for (let row = CAT_MASK.length - 1; row >= 0; row--) {
    for (let col = 0; col < CAT_MASK[row].length; col++) {
      if (CAT_MASK[row][col] === 1) shapeCells.push(`${row}-${col}`)
    }
  }

  const filledCount = Math.round(ratio * shapeCells.length)
  const filledSet = new Set(shapeCells.slice(0, filledCount))

  const rows = CAT_MASK.length
  const cols = CAT_MASK[0].length

  return (
    <div
      className="grid gap-1"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${cellSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
      }}
    >
      {CAT_MASK.flatMap((rowCells, row) =>
        rowCells.map((cell, col) => {
          const key = `${row}-${col}`
          if (cell === 0) return <div key={key} />

          const isFilled = filledSet.has(key)
          return (
            <div
              key={key}
              className={`rounded-[3px] ${isFilled ? 'bg-[#00CF76]' : 'bg-[#E5E5E5]'}`}
            />
          )
        }),
      )}
    </div>
  )
}

export default PixelCat
