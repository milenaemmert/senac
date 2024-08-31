import { seta } from '../assets/icones'
import s from './paginacao.module.css'

export function Paginacao({
  paginaAtual,
  totalDePaginas,
  paginaAnterior,
  proximaPagina,
  aoMudarPagina,
}) {
  return (
    <div className={s.paginacao}>
      <button
        className={s.botaoNav}
        type='button'
        title='Página anterior'
        disabled={!paginaAnterior}
        onClick={() => aoMudarPagina(paginaAnterior)}
      >
        {seta(s.botaoNavIcone)}
      </button>

      <div className={s.botoesPaginas}>
        {Array.from({ length: totalDePaginas }, (_, index) => {
          const pagina = index + 1

          const definirBotaoAtual =
            pagina === paginaAtual ? s.botaoPaginaAtual : null

          return (
            <button
              key={pagina}
              className={`${s.botaoPagina} ${definirBotaoAtual}`}
              type='button'
              title={`Ir para a página ${pagina}`}
              onClick={() => aoMudarPagina(pagina)}
            >
              {pagina}
            </button>
          )
        })}
      </div>

      <button
        className={s.botaoNav}
        type='button'
        title='Próxima página'
        disabled={!proximaPagina}
        onClick={() => aoMudarPagina(proximaPagina)}
      >
        {seta(`${s.botaoNavIcone} ${s.botaoNavIconeAvancar}`)}
      </button>
    </div>
  )
}
