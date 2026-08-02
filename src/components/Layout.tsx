import { useState } from 'react'
import { Score } from '../components/Score'
import GameLayout from '../components/GameLayout'
import RulesPapper from './RulesPapper'
import { WinnerBoard } from './WinnerBoard'

const Layout = () => {
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(true)
  const [textResult, setTextResult] = useState('')
  const [playAgain, setPlayAgain] = useState(true)
  const [showRules, setShowRules] = useState(false)
  const [machineMove, setMachineMove] = useState(0)
  const [playerMove, setPlayerMove] = useState(0)

  const logic = (player: number, machine: number) => {

    const playerOneWins = (player === 1 && machine === 2) ||
      (player === 1 && machine === 4) ||

      (player === 2 && machine === 3) ||
      (player === 2 && machine === 4) ||

      (player === 3 && machine === 1) ||
      (player === 3 && machine === 5) ||

      (player === 4 && machine === 3) ||
      (player === 4 && machine === 5) ||

      (player === 5 && machine === 1) ||
      (player === 5 && machine === 2);

    if (player === machine) {
      setTextResult('Draw')
      return
    }

    if (playerOneWins) {
      setTextResult('You Win')
      setScore(prev => prev + 1)
      return
    }

    setTextResult('You Lose')
    setScore(prev => prev - 1)

  }

  const remate = () => {
    setPlayAgain(!playAgain)
  }

  const player = (num: number) => {
    const maxMoves = level ? 3 : 5
    const random = Math.floor(Math.random() * maxMoves) + 1

    setPlayerMove(num)
    setMachineMove(random)
    logic(num, random)
    remate()
  }

  const changeRules = () => setShowRules(!showRules)
  const LevelUp = () => setLevel(!level)


  return (
    <main className='flex flex-col items-center p-5 xl:px-60 xl:py-10'>
      <Score ScoreResult={score} level={level} />
      {
        playAgain ? <GameLayout level={level} player={player} /> :
          <WinnerBoard level={level} player={playerMove}
            machine={machineMove} remate={remate} textResult={textResult} />
      }
      <div className='fixed bottom-10 w-full flex flex-row justify-between px-12 xxl:px-65'>
        <button onClick={changeRules} className='outline-2 hover:bg-white hover:text-black hover:font-bold rounded-md w-25 p-2 text-white outline-white'>Rules</button>
         <button onClick={LevelUp} className='outline-2 hover:bg-white hover:text-black hover:font-bold rounded-md w-25 p-2 text-white outline-white'>{level ? 'level 1': 'level 2'}</button>
      </div>
      {showRules && <RulesPapper level={level} changeRules={changeRules} />}
    </main>
  )
}

export default Layout