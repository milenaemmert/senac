import { lixeira } from '../assets/icones'
import { useTarefas } from '../hooks'
import { Carregando } from './'
import s from './tarefa.module.css'

export function Tarefa({
  id,
  titulo,
  descricao,
  prioridade,
  data,
  responsaveis,
  aoDeletarTarefa
}) {
  const { carregando, deletarTarefa } = useTarefas()

  function definirCorEtiqueta() {
    if (prioridade === 'Alta') {
      return s.prioridadeAlta
    } else if (prioridade === 'Média') {
      return s.prioridadeMedia
    } else {
      return s.prioridadeBaixa
    }
  }

  return (
    <li className={s.tarefa}>
      {carregando ? (
        <div className={s.filtro}>
          <Carregando />
        </div>
      ) : null}

      <div className={s.conteudo}>
        <div className={s.etiquetas}>
          <div
            className={`${s.etiqueta} ${s.prioridade} ${definirCorEtiqueta()}`}
          >
            {prioridade}
          </div>

          <div className={s.etiqueta}>{data}</div>

          {responsaveis.map((responsavel) => (
            <div key={responsavel} className={s.etiqueta}>
              {responsavel}
            </div>
          ))}
        </div>

        <div className={s.detalhes}>
          <h2 className={s.titulo}>{titulo}</h2>
          <p className={s.descricao}>{descricao}</p>
        </div>
      </div>

      <button
        className={s.botaoDeletar}
        type='button'
        title='Deletar tarefa'
        onClick={async () => {
          await deletarTarefa(id) //para deletar do "banco"
          aoDeletarTarefa() //para excluir a tarefa da tela
        }}
      >
        {lixeira(s.botaoDeletarIcone)}
      </button>
    </li>
  )
}
