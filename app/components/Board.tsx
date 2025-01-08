import Square from './Square'
import { motion } from 'framer-motion'

interface BoardProps {
    squares: (string | null)[]
    onClick: (i: number) => void
    xMoves: number[]
    oMoves: number[]
}

export default function Board({ squares, onClick, xMoves, oMoves }: BoardProps) {
    const renderSquare = (i: number) => {
        const xIndex = xMoves.indexOf(i)
        const oIndex = oMoves.indexOf(i)
        const moveOrder = xIndex !== -1 ? xIndex + 1 : oIndex !== -1 ? oIndex + 1 : null

        return (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                <Square
                    value={squares[i]}
                    onClick={() => onClick(i)}
                    moveOrder={moveOrder}
                />
            </motion.div>
        )
    }

    return (
        <div className="grid grid-cols-3 gap-1 sm:gap-2 bg-gray-200 p-1 sm:p-2 rounded-lg shadow-lg">
            {Array(9)
                .fill(null)
                .map((_, i) => (
                    <div key={i}>{renderSquare(i)}</div>
                ))}
        </div>
    )
}