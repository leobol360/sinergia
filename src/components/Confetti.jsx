const COLORS = ['#ff5d8f', '#ffd166', '#06d6a0', '#4cc9f0', '#a28bfb', '#ff8c42']
const PIECE_COUNT = 60

// Genera una lluvia de confeti en CSS puro: cada pieza es un <span>
// posicionado al azar con una animación de caída/rotación propia.
function Confetti() {
  const pieces = Array.from({ length: PIECE_COUNT }, (_, i) => {
    const left = Math.random() * 100
    const delay = Math.random() * 0.6
    const duration = 2.2 + Math.random() * 1.6
    const color = COLORS[i % COLORS.length]
    const rotate = Math.random() * 360
    const size = 6 + Math.random() * 6

    return (
      <span
        key={i}
        className="confetti-piece"
        style={{
          left: `${left}%`,
          backgroundColor: color,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          transform: `rotate(${rotate}deg)`,
          width: `${size}px`,
          height: `${size * 0.4}px`,
        }}
      />
    )
  })

  return <div className="confetti" aria-hidden="true">{pieces}</div>
}

export default Confetti
