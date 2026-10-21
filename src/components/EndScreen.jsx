import robotImg from '../assets/robot.png'

function EndScreen({ status, winReason, onRestart }) {
  const isWin = status === 'won'
  const winMessage =
    winReason === 'question'
      ? 'Respondiste correctamente y activaste tu SinergÍA con la IA.'
      : 'Encontraste a los 3 robots: tu SinergÍA con la IA está al máximo.'

  return (
    <div className={`end-card${isWin ? ' end-card--win' : ' end-card--lose'}`}>
      <div className="end-card__robot" aria-hidden="true">
        <img src={robotImg} alt="" className="end-card__robot-img" />
        {isWin ? <span className="sparkle">✨</span> : <span className="tear">💧</span>}
      </div>

      {isWin ? (
        <>
          <h2 className="end-card__title">¡Activaste tu SinergÍA! 🎉</h2>
          <p className="end-card__message">{winMessage}</p>
          <p className="end-card__prize">🏆 ¡Ganaste! Ya puedes reclamar tu premio 🎁</p>
        </>
      ) : (
        <>
          <h2 className="end-card__title">¡Te quedaste sin energÍA! 😢</h2>
          <p className="end-card__message">
            Fallaste la pregunta y tu SinergÍA con el robot se desconectó.
          </p>
        </>
      )}

      <button type="button" className="end-card__restart" onClick={onRestart}>
        Reiniciar juego
      </button>
    </div>
  )
}

export default EndScreen
