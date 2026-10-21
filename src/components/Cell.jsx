import robotImg from '../assets/robot.png'

function Cell({ cell, isRevealed, isMissedRobot, isCorrect, isDisabled, onClick }) {
  const showRobot = isRevealed && cell.type === 'robot'
  const showQuestionMark = isRevealed && cell.type === 'question'
  const questionState = showQuestionMark ? (isCorrect ? 'correct' : 'wrong') : null

  const label = !isRevealed
    ? 'Casilla oculta'
    : showRobot
      ? isMissedRobot
        ? 'Aquí había un robot (no encontrado)'
        : 'Robot encontrado'
      : questionState === 'correct'
        ? 'Respuesta correcta'
        : 'Respuesta incorrecta'

  return (
    <button
      type="button"
      className={`cell${isRevealed ? ' cell--revealed' : ''}${showRobot ? ' cell--robot' : ''}${isMissedRobot ? ' cell--robot-missed' : ''}${questionState === 'wrong' ? ' cell--wrong' : ''}${questionState === 'correct' ? ' cell--correct' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={label}
    >
      <span className="cell__face">
        {!isRevealed && <span className="cell__mark">?</span>}
        {showRobot && <img src={robotImg} alt="" className="cell__robot-img" />}
        {questionState === 'correct' && <span className="cell__mark cell__mark--correct">✓</span>}
        {questionState === 'wrong' && <span className="cell__mark cell__mark--wrong">✕</span>}
      </span>
    </button>
  )
}

export default Cell
