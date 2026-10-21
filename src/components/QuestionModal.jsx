import { useState } from 'react'

function QuestionModal({ question, onAnswer }) {
  const [selected, setSelected] = useState(null)

  const handleConfirm = () => {
    if (selected === null) return
    onAnswer(selected === question.correctIndex)
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="question-title">
      <div className="modal">
        <div className="modal__eyebrow">
          <span className="modal__eyebrow-text">SinergIA Challenge</span>
        </div>
        <h2 id="question-title" className="modal__question">{question.question}</h2>

        <ul className="modal__options">
          {question.options.map((option, index) => (
            <li key={index}>
              <button
                type="button"
                className={`modal__option${selected === index ? ' modal__option--selected' : ''}`}
                onClick={() => setSelected(index)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="modal__confirm"
          disabled={selected === null}
          onClick={handleConfirm}
        >
          Confirmar respuesta
        </button>
      </div>
    </div>
  )
}

export default QuestionModal
