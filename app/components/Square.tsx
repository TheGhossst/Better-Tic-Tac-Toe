import { motion } from 'framer-motion'

interface SquareProps {
    value: string | null
    onClick: () => void
    moveOrder: number | null
}

export default function Square({ value, onClick, moveOrder }: SquareProps) {
    const variants = {
        initial: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.95 },
    }

    return (
        <motion.button
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-lg shadow-md text-2xl sm:text-3xl md:text-4xl font-bold focus:outline-none relative overflow-hidden"
            onClick={onClick}
            variants={variants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
        >
            {value && (
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`absolute inset-0 flex items-center justify-center ${value === 'X' ? 'text-blue-500' : 'text-red-500'
                        }`}
                >
                    {value}
                </motion.div>
            )}
            {moveOrder && (
                <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 text-[8px] sm:text-xs font-semibold text-gray-500">
                    {moveOrder}
                </div>
            )}
        </motion.button>
    )
}