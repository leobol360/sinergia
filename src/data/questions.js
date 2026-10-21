// Banco de preguntas de selección múltiple — Sinergia Challenge:
// Innovación, Automatización e Inteligencia Artificial.
//
// El juego usa 6 casillas de pregunta por partida, una por cada entrada
// de este arreglo (índices 0 a 5).
export const questions = [
  {
    id: 0,
    question: '¿Cuántas causaciones ha realizado el BOT a la fecha?',
    options: ['Menos de 500', 'Entre 600 y 800', 'Entre 1000 y 1500', 'Más de 1600'],
    correctIndex: 3,
  },
  {
    id: 1,
    question:
      '¿Qué herramientas de automatización se utilizaron en la implementación del BOT de causaciones?',
    options: ['Excel y Outlook', 'Power Automate y RPA', 'Power BI y Forms', 'YouTube y TikTok'],
    correctIndex: 1,
  },
  {
    id: 2,
    question:
      '¿Cuánto tiempo logró optimizar la herramienta de cierre de compra de aceites desarrollada en Power Automate?',
    options: ['2 horas', '4 horas', '7 horas', '10 horas'],
    correctIndex: 2,
  },
  {
    id: 3,
    question: '¿Para qué se utilizó la herramienta Claude en el área de Contabilidad?',
    options: [
      'Aprobar pagos',
      'Realizar conciliaciones bancarias',
      'Realizar informe de vueltas tránsito',
      'Ninguna de las anteriores',
    ],
    correctIndex: 2,
  },
  {
    id: 4,
    question: '¿Para qué se utiliza Simetrik?',
    options: [
      'Generar presentaciones automáticas',
      'Conciliar grandes volúmenes de datos mediante inteligencia artificial',
      'Gestionar correos electrónicos',
      'Crear formularios digitales',
    ],
    correctIndex: 1,
  },
  {
    id: 5,
    question:
      '¿Cuánto tiempo logró optimizar Simetrik en el proceso de conciliación de bases de datos con Autecos?',
    options: ['1 día', '2 días', '3 días', '5 días'],
    correctIndex: 3,
  },
]
