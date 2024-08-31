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

  //chamar dentro do useEffect com o array de dependência olhando para paginaAtual, para que na montagem desse componente e também quando a página é trocada as tarefas sejam mostradas/atualizadas na tela
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
