import { TAREFAS } from '../constantes/tarefa'
import { ListaDeTarefas } from '../componentes'
import { Pesquisa } from '../componentes/pesquisa'
import s from './tarefas.module.css'

export function TarefasTela() {
  return (
    <main className={s.tarefasTela}>
      <div className={s.container}>
        <Pesquisa />
        <ListaDeTarefas tarefas={TAREFAS} />
      </div>
    </main>
  )
}