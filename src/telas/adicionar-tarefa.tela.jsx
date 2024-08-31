import { useEffect } from 'react'
import { useTarefas } from '../hooks'
import { Formulario, ListaDeTarefas } from '../componentes'
import s from './adicionar-tarefa.module.css'

export function AdicionarTarefaTela() {
  const { tarefas, carregando, pegarTarefasRecentes } = useTarefas()

  useEffect(() => {
    atualizarTarefas()
  }, [])

  async function atualizarTarefas() {
    await pegarTarefasRecentes()
  }

  return (
    <main className={s.adicionarTarefaTela}>
      <div className={s.container}>
        <Formulario aoAdicionarTarefa={atualizarTarefas} />

        <ListaDeTarefas
          titulo='Tarefas Recentes'
          tarefas={tarefas}
          carregando={carregando}
          aoDeletarTarefa={atualizarTarefas}
        />
      </div>
    </main>
  )
}
