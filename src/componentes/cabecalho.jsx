import { NavLink } from 'react-router-dom'
import s from './cabecalho.module.css'

export function Cabecalho() {
  return (
    <header className={s.cabecalho}>
      <div className={s.container}>
        <nav>
          <ul className={s.links}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${s.link} ${s.linkAtivo}` : s.link
                }
                to='/'
              >
                Tarefas
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${s.link} ${s.linkAtivo}` : s.link
                }
                to='/adicionar-tarefa'
              >
                Adicionar Tarefa
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
