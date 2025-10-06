import './resultados.css'

interface ResultadoVocacionalProps {
  respuestas: number[]
}

export function ResultadoVocacional({ respuestas }: ResultadoVocacionalProps) {
  // Contador de respuestas por carrera
  const conteo: Record<string, number> = {
    "Bachiller en Computación": 0,
    "Diseño Gráfico": 0,
    "Biológicas": 0,
    "Perito Contador": 0,
  }

  respuestas.forEach((r) => {
    switch (r) {
      case 1:
        conteo["Bachiller en Computación"] += 1
        break
      case 2:
        conteo["Diseño Gráfico"] += 1
        break
      case 3:
        conteo["Biológicas"] += 1
        break
      case 4:
        conteo["Perito Contador"] += 1
        break
    }
  })

  // Carrera con más respuestas
  const carrera = Object.keys(conteo).reduce((a, b) =>
    conteo[a] >= conteo[b] ? a : b
  )

  let descripcion = ''
  switch (carrera) {
    case "Bachiller en Computación":
      descripcion =
        "Te interesa la lógica, la tecnología y resolver problemas. Un bachiller en computación es ideal para ti."
      break
    case "Diseño Gráfico":
      descripcion =
        "Tienes inclinación por lo visual y creativo. Diseño Gráfico encaja con tu perfil."
      break
    case "Biológicas":
      descripcion =
        "Te interesa la ciencia, la investigación y la vida. Biológicas es tu camino."
      break
    case "Perito Contador":
      descripcion =
        "Te gusta la organización, los números y la administración. Perito Contador es tu opción."
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
