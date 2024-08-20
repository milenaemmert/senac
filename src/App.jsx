import { Routes, Route } from 'react-router-dom'
import { Header } from './componentes/header'
import { AdicionarTarefa } from './telas/adicionar-tarefa.tela'
import { TarefasTela } from './telas/tarefas.tela'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<TarefasTela />} />
        <Route path='/adicionar-tarefa' element={<AdicionarTarefa />} />
        <Route path='*' element={<TarefasTela />} />
      </Routes>
    </>
  )
}

export default App
