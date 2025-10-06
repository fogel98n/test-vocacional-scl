import { useLocation } from 'react-router-dom'
import { ResultadoVocacional } from '../../components/resultados/resultados'
import { Header } from '../../components/header/header'
export function ResultadosPage() {
  const location = useLocation()
  const respuestas: number[] = location.state?.respuestas || []

  return (
    <div>
        <Header/>
      <ResultadoVocacional respuestas={respuestas} />
    </div>
  )
}
