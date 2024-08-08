import s from './header.module.css'

export function Header() {
  return (
    <header className={s.header}>
      <nav>
        <ul>
          <li>
            <a href="#">Tarefas</a>
          </li>
          <li>
            <a href="#">Criar Tarefa</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}