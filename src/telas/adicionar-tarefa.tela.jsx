import { useEffect } from 'react'
import { useTarefas } from '../hooks'
import { Formulario, ListaDeTarefas } from '../componentes'
import s from './adicionar-tarefa.module.css'

export function AdicionarTarefaTela() {
  const { tarefas, carregando, pegarTarefasRecentes } = useTarefas()

  //chamar dentro do useEffect com o array de dependência vazio, para que na montagem do componente as tarefas sejam mostradas na tela
  useEffect(() => {
    atualizarTarefas()
  }, [])

  async function atualizarTarefas() {
    await pegarTarefasRecentes()
  }

  return (
    <main className={s.adicionarTarefaTela}>
      <div className={s.container}>
        <Formulario aoAdicionarTarefa={atualizarTarefas} /> {/* Sempre que ocorre um submit do formilário, a função atualizarTarefas será chamada */}

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
