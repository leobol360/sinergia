import robotImg from '../assets/robot.png'

function EndScreen({ status, maxMistakes, onRestart }) {
  const isWin = status === 'won'

  return (
    <div className={`end-card${isWin ? ' end-card--win' : ' end-card--lose'}`}>
      <div className="end-card__robot" aria-hidden="true">
        <img src={robotImg} alt="" className="end-card__robot-img" />
        {isWin ? <span className="sparkle">✨</span> : <span className="tear">💧</span>}
      </div>

      {isWin ? (
        <>
          <h2 className="end-card__title">¡Activaste tu SinergÍA! 🎉</h2>
          <p className="end-card__message">
            Encontraste a los 3 robots: tu SinergÍA con la IA está al máximo.
          </p>
          <p className="end-card__prize">🏆 ¡Ganaste! Ya puedes reclamar tu premio 🎁</p>
        </>
      ) : (
        <>
          <h2 className="end-card__title">¡Te quedaste sin energÍA! 💔</h2>
          <p className="end-card__message">
            Agotaste la batería del robot tras {maxMistakes} respuestas incorrectas: tu SinergÍA
            se desconectó.
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
