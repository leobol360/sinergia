import Cell from './Cell.jsx'

function Board({ board, revealedIds, gameOver, onCellClick }) {
  return (
    <div className="board" role="grid" aria-label="Tablero de buscaminas de robots">
      {board.map((cell) => {
        const playerRevealed = revealedIds.has(cell.id)
        // Al terminar la partida se muestran todos los robots, aunque no se hayan encontrado.
        const isRevealed = playerRevealed || (gameOver && cell.type === 'robot')
        const isMissedRobot = gameOver && cell.type === 'robot' && !playerRevealed

        return (
          <Cell
            key={cell.id}
            cell={cell}
            isRevealed={isRevealed}
            isMissedRobot={isMissedRobot}
            isDisabled={gameOver || playerRevealed}
            onClick={() => onCellClick(cell)}
          />
        )
      })}
    </div>
  )
}

export default Board
