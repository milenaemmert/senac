import { NavLink } from 'react-router-dom'
import s from './header.module.css'

export function Header() {
  return (
    <header className={s.cabecalho}>
      <div className={s.container}>
        <nav>
          <ul className={s.links}>
            <li>
              <NavLink 
                className={({ isActive } ) => isActive ? `${s.link} ${s.linkAtivo}` : `${s.link}`} 
                to='/' >
                  Tarefas
              </NavLink>
            </li>

            <li>
              <NavLink 
              to='adicionar-tarefa'
               className={({ isActive }) => isActive ? `${s.link} ${s.linkAtivo}` : `${s.link}`} >Adicionar Tarefa</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}