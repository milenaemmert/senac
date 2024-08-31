import { Carregando, Tarefa, Paginacao } from './'
import s from './lista-de-tarefas.module.css'

export function ListaDeTarefas({
  titulo = 'Lista de Tarefas',
  tarefas,
  carregando,
  paginacao,
  paginaAtual,
  aoMudarPagina,
  aoDeletarTarefa
}) {
  function renderizarTarefas() {
    if (carregando) {
      return <Carregando />
    }

    if (tarefas.length > 0) {
      return (
        <>
          <ul className={s.tarefas}>
            {tarefas.map((tarefa) => (
              <Tarefa
                key={tarefa.id}
                id={tarefa.id}
                titulo={tarefa.titulo}
                descricao={tarefa.descricao}
                prioridade={tarefa.prioridade}
                data={tarefa.data}
                responsaveis={tarefa.responsaveis}
                aoDeletarTarefa={aoDeletarTarefa}
              />
            ))}
          </ul>

          {paginacao ? (
            <Paginacao
              paginaAtual={paginaAtual}
              totalDePaginas={paginacao.pages}
              paginaAnterior={paginacao.prev}
              proximaPagina={paginacao.next}
              aoMudarPagina={aoMudarPagina}
            />
          ) : null}
        </>
      )
    }

    return <p className={s.nenhumaTarefa}>Nenhuma tarefa encontrada.</p>
  }

  return (
    <div className={s.listaDeTarefas}>
      <h1 className={s.titulo}>{titulo}</h1>

      {renderizarTarefas()}
    </div>
  )
}
