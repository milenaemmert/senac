import { useEffect } from 'react'
import { useTarefas } from '../hooks'
import { Pesquisa, ListaDeTarefas } from '../componentes'
import s from './tarefas.module.css'

export function TarefasTela() {
  const {
    tarefas,
    carregando,
    paginacao,
    paginaAtual,
    pegarTarefasPaginadas,
    mudarPagina
  } = useTarefas() //utilização do hook criado para lidar com as requisições API

  useEffect(() => {
    atualizarTarefas()
  }, [paginaAtual])

  async function atualizarTarefas() {
    await pegarTarefasPaginadas()
  }

  return (
    <main className={s.tarefasTela}>
      <div className={s.container}>
        <Pesquisa />

        <ListaDeTarefas
          tarefas={tarefas}
          carregando={carregando}
          paginacao={paginacao}
          paginaAtual={paginaAtual}
          aoMudarPagina={(pagina) => mudarPagina(pagina)}
          aoDeletarTarefa={atualizarTarefas}
        />
      </div>
    </main>
  )
}
