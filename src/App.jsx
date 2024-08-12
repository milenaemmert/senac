import { Formulario } from './componentes/form/formulario'
import { Header } from './componentes/header'
import s from './app.module.css'

function App() {
  return (
    <main className={s.adicionarTarefaTela}>
      <div className={s.container}>
        <Header />
        <Formulario />
      </div>
    </main>
  )
}

export default App
