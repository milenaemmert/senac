import s from './header.module.css'

export function Header() {
  return (
    <header className={s.cabecalho}>
      <div className={s.container}>
        <nav>
          <ul className={s.links}>
            <li>
              <a href='#' className={s.link}>Tarefas</a>
            </li>

            <li>
              <a href='#' className={s.link}>Adicionar Tarefa</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}