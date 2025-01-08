import { motion } from 'framer-motion'

interface GameInfoProps {
    winner: string | null
    xIsNext: boolean
    onReset: () => void
    board: (string | null)[]
}

export default function GameInfo({ winner, xIsNext, onReset, board }: GameInfoProps) {
    let status
    if (winner) {
        status = `Winner: ${winner}`
    } else if (board.every((square) => square !== null)) {
        status = 'Draw'
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`
    }

    return (
        <div className="mt-4 sm:mt-6 md:mt-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-black"
            >
                {status}
            </motion.div>
            <motion.button
                className="px-3 py-1 sm:px-4 sm:py-2 bg-blue-500 text-white text-sm sm:text-base rounded-full hover:bg-blue-600 focus:outline-none"
                onClick={onReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Reset Game
            </motion.button>
        </div>
    )
}