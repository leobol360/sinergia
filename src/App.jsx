import { useMemo, useState } from 'react'
import Board from './components/Board.jsx'
import QuestionModal from './components/QuestionModal.jsx'
import EndScreen from './components/EndScreen.jsx'
import Confetti from './components/Confetti.jsx'
import { generateBoard, ROBOT_COUNT } from './game/generateBoard.js'
import { questions } from './data/questions.js'
import robotImg from './assets/robot.png'
import './App.css'

function App() {
  const [board, setBoard] = useState(() => generateBoard())
  const [revealedIds, setRevealedIds] = useState(() => new Set())
  const [foundRobots, setFoundRobots] = useState(0)
  const [status, setStatus] = useState('playing') // 'playing' | 'won' | 'lost'
  const [winReason, setWinReason] = useState(null) // 'robots' | 'question'
  const [activeCell, setActiveCell] = useState(null)

  const activeQuestion = useMemo(
    () => (activeCell ? questions[activeCell.questionIndex] : null),
    [activeCell],
  )

  const revealCell = (id) => {
    setRevealedIds((prev) => new Set(prev).add(id))
  }

  const handleCellClick = (cell) => {
    if (status !== 'playing' || revealedIds.has(cell.id)) return

    if (cell.type === 'robot') {
      revealCell(cell.id)
      const nextFound = foundRobots + 1
      setFoundRobots(nextFound)
      if (nextFound === ROBOT_COUNT) {
        setWinReason('robots')
        setStatus('won')
      }
      return
    }

    // Casilla sin robot: hay que responder una pregunta para seguir.
    setActiveCell(cell)
  }

  const handleAnswer = (isCorrect) => {
    revealCell(activeCell.id)
    setActiveCell(null)
    if (isCorrect) {
      setWinReason('question')
      setStatus('won')
    } else {
      setStatus('lost')
    }
  }

  const handleRestart = () => {
    setBoard(generateBoard())
    setRevealedIds(new Set())
    setFoundRobots(0)
    setStatus('playing')
    setWinReason(null)
    setActiveCell(null)
  }

  return (
    <div className="app">
      <header className="app__header">
        <h1>
          Sinerg<span className="app__ia">IA</span>{' '}
          <img src={robotImg} alt="Robot" className="app__title-emoji" />
        </h1>
        <p className="app__subtitle">
          Busca tu robot y activa la SinergIA...
        </p>
        <div className="app__status" role="status" aria-live="polite">
          <span className="app__status-label">Robots encontrados</span>
          <span className="app__status-dots" aria-hidden="true">
            {Array.from({ length: ROBOT_COUNT }, (_, i) => (
              <span
                key={i}
                className={`app__status-dot${i < foundRobots ? ' app__status-dot--filled' : ''}`}
              />
            ))}
          </span>
          <span className="app__status-count">
            {foundRobots}/{ROBOT_COUNT}
          </span>
        </div>
      </header>

      {status !== 'playing' && (
        <EndScreen status={status} winReason={winReason} onRestart={handleRestart} />
      )}

      <main>
        <Board
          board={board}
          revealedIds={revealedIds}
          gameOver={status !== 'playing'}
          onCellClick={handleCellClick}
        />
      </main>

      {activeQuestion && (
        <QuestionModal question={activeQuestion} onAnswer={handleAnswer} />
      )}

      {status === 'won' && <Confetti />}

      <footer className="app__footer">Creado con Claude Code</footer>
    </div>
  )
}

export default App
