import robotImg from '../assets/robot.png'

function Cell({ cell, isRevealed, isMissedRobot, isDisabled, onClick }) {
  const showRobot = isRevealed && cell.type === 'robot'
  const showQuestionMark = isRevealed && cell.type === 'question'

  const label = !isRevealed
    ? 'Casilla oculta'
    : showRobot
      ? isMissedRobot
        ? 'Aquí había un robot (no encontrado)'
        : 'Robot encontrado'
      : 'Casilla de pregunta'

  return (
    <button
      type="button"
      className={`cell${isRevealed ? ' cell--revealed' : ''}${showRobot ? ' cell--robot' : ''}${isMissedRobot ? ' cell--robot-missed' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
      aria-label={label}
    >
      <span className="cell__face">
        {!isRevealed && <span className="cell__mark">?</span>}
        {showRobot && <img src={robotImg} alt="" className="cell__robot-img" />}
        {showQuestionMark && <span className="cell__mark cell__mark--faded">?</span>}
      </span>
    </button>
  )
}

export default Cell
