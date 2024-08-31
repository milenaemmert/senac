import s from './rodape.module.css'

export function Rodape() {
  return (
    <footer className={s.rodape}>
      <div className={s.container}>
        <p className={s.texto}>
          Eu represento o footer da aplicação e, caso você deseje, pode colocar
          alguma coisa aqui!
        </p>
      </div>
    </footer>
  )
}
