interface SquareProps {
  value?: string | null
  onSquareClick?: () => void
}

interface BoardProps {
  size?: number
  xIsNext?: boolean
  squares: (string | null)[]
  onPlay: (nextSquares: (string | null)[]) => void
}
