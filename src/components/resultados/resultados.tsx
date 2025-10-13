import './resultados.css'
import { preguntasVocacional } from '../../data/preguntasVocacionales'

interface ResultadoVocacionalProps {
  respuestas: number[]
}

export function ResultadoVocacional({ respuestas }: ResultadoVocacionalProps) {
  // Usaremos un mapa de puntuación por carrera y sumaremos el valor de la respuesta
  const puntuacion: Record<string, number> = {
    'Bachiller en Computación': 0,
    'Diseño Gráfico': 0,
    'Biológicas': 0,
    'Perito Contador': 0,
  }

  // Contadores de preguntas por carrera para normalizar
  const contadorPreguntas: Record<string, number> = {
    'Bachiller en Computación': 0,
    'Diseño Gráfico': 0,
    'Biológicas': 0,
    'Perito Contador': 0,
  }

  respuestas.forEach((r, idx) => {
    const pregunta = preguntasVocacional[idx]
    if (!pregunta) return

    // Mapear el campo `carrera` del dataset a la etiqueta de visualización
    let key = ''
    switch (pregunta.carrera) {
      case 'Computacion':
        key = 'Bachiller en Computación'
        break
      case 'Diseno':
        key = 'Diseño Gráfico'
        break
      case 'Biologicas':
        key = 'Biológicas'
        break
      case 'PeritoContador':
        key = 'Perito Contador'
        break
      default:
        return
    }

    // Añadir la respuesta (valor) como peso a la puntuación de esa carrera
    const val = typeof r === 'number' ? r : 0
    puntuacion[key] = (puntuacion[key] || 0) + val
    contadorPreguntas[key] = (contadorPreguntas[key] || 0) + 1
  })

  // Calcular promedio por carrera (puntuación / # preguntas) para evitar sesgos
  const promedios: Record<string, number> = {}
  Object.keys(puntuacion).forEach((k) => {
    const suma = puntuacion[k] || 0
    const cantidad = contadorPreguntas[k] || 0
    promedios[k] = cantidad > 0 ? suma / cantidad : 0
  })

  // Seleccionar la carrera con mayor promedio
  const carrera = Object.keys(promedios).reduce((a, b) =>
    promedios[a] >= promedios[b] ? a : b
  )

  let descripcion = ''
  switch (carrera) {
    case 'Bachiller en Computación':
      descripcion = 'Te interesa la lógica, la tecnología y resolver problemas. Un bachiller en computación es ideal para ti.'
      break
    case 'Diseño Gráfico':
      descripcion = 'Tienes inclinación por lo visual y creativo. Diseño Gráfico encaja con tu perfil.'
      break
    case 'Biológicas':
      descripcion = 'Te interesa la ciencia, la investigación y la vida. Biológicas es tu camino.'
      break
    case 'Perito Contador':
      descripcion = 'Te gusta la organización, los números y la administración. Perito Contador es tu opción.'
      break
  }

  return (
    <div className="resultado-container">
      <div className="resultado-card">
        <h2 className="resultado-titulo">🎓 Resultado del Test Vocacional</h2>
        <h3 className="resultado-carrera">{carrera}</h3>
        <p className="resultado-descripcion">{descripcion}</p>
      </div>
    </div>
  )
}
