import RollingTicTacToe from './components/RollingTicTacToe'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-white text-center">
        Better Tic-Tac-Toe
      </h1>
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md">
        <RollingTicTacToe />
      </div>
    </main>
  )
}