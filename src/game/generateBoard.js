export const GRID_SIZE = 9 // cuadrícula 3x3
export const ROBOT_COUNT = 3
export const QUESTION_COUNT = 6 // GRID_SIZE - ROBOT_COUNT

function shuffledIndexes(length) {
  const arr = Array.from({ length }, (_, i) => i)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Crea un tablero de 9 casillas: 3 con cara de robot y 6 con pregunta.
// Cada casilla de pregunta queda ligada a un índice de pregunta (0-5) del
// banco de preguntas, para poder mapear 1 a 1 cuando existan 6 preguntas
// distintas.
export function generateBoard() {
  const positions = shuffledIndexes(GRID_SIZE)
  const robotPositions = new Set(positions.slice(0, ROBOT_COUNT))
  const shuffledQuestionIndexes = shuffledIndexes(QUESTION_COUNT)

  const board = new Array(GRID_SIZE)
  let questionCursor = 0

  for (let i = 0; i < GRID_SIZE; i++) {
    if (robotPositions.has(i)) {
      board[i] = { id: i, type: 'robot' }
    } else {
      board[i] = {
        id: i,
        type: 'question',
        questionIndex: shuffledQuestionIndexes[questionCursor++],
      }
    }
  }

  return board
}
