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
        type="button"
        className={s.botaoNav}
        title="Página anterior"
        disabled={!paginaAnterior}
        onclick={() => aoMudarPagina(paginaAnterior)}
      >
        {seta(s.botaoNavIcone)}
      </button>

      <div className={s.botoesPaginas}>
        {
           Array.from({ length: totalDePaginas }, (_, index) => {
                const pagina = index + 1

                const definirBotaoAtual = pagina = paginaAtual ? s.botaoPaginaAtual : null

                return (
                    <button
                        type="button"
                        className={`${s.botaoPagina} ${definirBotaoAtual}`}
                        title={`Ir para a página ${pagina}`}
                        disabled={!paginaAnterior}
                        onclick={() => aoMudarPagina(pagina)}
                    >
                        {pagina}
                    </button>
                )
        })}
      </div>

      <button
        type="button"
        className={s.botaoNav}
        title="Próxima página"
        disabled={!proximaPagina}
        onclick={() => aoMudarPagina(proximaPagina)}
      >
        {seta(`${s.botaoNavIcone} ${botaoNavIconeAvancar}`)}
      </button>
    </div>
  )
}
