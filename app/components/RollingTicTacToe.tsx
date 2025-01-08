'use client'

import { useState, useEffect } from 'react'
import Board from './Board'
import GameInfo from './GameInfo'
import { checkWinner } from '../utils/checkWinner'
import confetti from 'canvas-confetti'

export default function RollingTicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [xMoves, setXMoves] = useState<number[]>([])
    const [oMoves, setOMoves] = useState<number[]>([])

    const handleClick = (i: number) => {
        if (board[i] || checkWinner(board)) return

        const newBoard = board.slice()
        const currentPlayer = xIsNext ? 'X' : 'O'
        newBoard[i] = currentPlayer

        const currentMoves = xIsNext ? xMoves : oMoves
        const newMoves = [...currentMoves, i]

        if (newMoves.length > 3) {
            const oldestMove = newMoves.shift()
            if (oldestMove !== undefined) {
                newBoard[oldestMove] = null
            }
        }

        setBoard(newBoard)
        setXIsNext(!xIsNext)
        if (xIsNext) {
            setXMoves(newMoves)
        } else {
            setOMoves(newMoves)
        }
    }

    const winner = checkWinner(board)

    useEffect(() => {
        if (winner) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            })
        }
    }, [winner])

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setXIsNext(true)
        setXMoves([])
        setOMoves([])
    }

    return (
        <div className="flex flex-col items-center">
            <Board
                squares={board}
                onClick={handleClick}
                xMoves={xMoves}
                oMoves={oMoves}
            />
            <GameInfo
                winner={winner}
                xIsNext={xIsNext}
                onReset={resetGame}
                board={board}
            />
        </div>
    )
}