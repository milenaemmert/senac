import { Routes, Route } from 'react-router-dom'
import { TarefasTela, AdicionarTarefaTela } from './telas'
import { Cabecalho, Rodape } from './componentes'

export default function App() {
  return (
    <>
      <Cabecalho />

      <Routes>
        <Route path='/' element={<TarefasTela />} />
        <Route path='/adicionar-tarefa' element={<AdicionarTarefaTela />} />
        <Route path='*' element={<TarefasTela />} />
      </Routes>

      <Rodape />
    </>
  )
}
