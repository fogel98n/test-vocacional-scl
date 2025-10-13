import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { preguntasVocacional } from '../../data/preguntasVocacionales'
import { Boton } from '../../modules/boton/boton'
import './preguntas.css'

export function Testpreguntas() {
  const [indice, setIndice] = useState(0)
  const [respuestas, setRespuestas] = useState<number[]>([])
  const [completado, setCompletado] = useState(false)
  const navigate = useNavigate()

  const preguntas = preguntasVocacional
  const total = preguntas.length
  const preguntaActual = preguntas[indice]
  const progreso = Math.round(((indice + 1) / total) * 100)

  const manejarRespuesta = (valor: number) => {
    const nuevas = [...respuestas]
    nuevas[indice] = valor
    setRespuestas(nuevas)

    if (indice < total - 1) {
      setIndice(indice + 1)
    } else {
      setCompletado(true)
      console.log('Respuestas completadas:', nuevas)
    }
  }

  if (completado) {
    return (
      <div className="test-container">
        <div className="test-card">
          <h2 className="test-title">Test completado ✅</h2>
          <p className="test-text">¡Gracias por completar el test!</p>
          <Boton
            titulo="Ver resultados"
            className="bton-resultados"
            onClick={() =>
              navigate('/resultados', { state: { respuestas } }) // enviamos las respuestas
            }
          />
        </div>
      </div>
    )
  }

  return (
    <div className="test-container">
      <div className="test-card">
        <h2 className="test-pregunta">{preguntaActual.pregunta}</h2>

        <div className="test-barra">
          <div className="test-progreso" style={{ width: `${progreso}%` }} />
        </div>

        <p className="test-progreso-texto">{progreso}% completado</p>

        <div className="test-opciones">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className="test-boton"
              onClick={() => manejarRespuesta(num)}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="test-etiquetas">
          <span>No me interesa</span>
          <span>Poco</span>
          <span>Me interesa</span>
          <span>Totalmente de acuerdo</span>
        </div>

        <p className="test-contador">
          Pregunta {indice + 1} de {total}
        </p>
      </div>
    </div>
  )
}
