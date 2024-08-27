import s from './carregando.module.css'

export function Carregando({ className = '' }) {
  return <div className={`${s.carregando} ${className}`} />
}
