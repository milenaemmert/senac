import s from './responsaveis.module.css'

export function Responsaveis() {
  return (
    <div className={s.container}>
      <label className={s.rotuloContainer}>Responsáveis</label>

      <div className={s.responsaveis}>
        <input id="" name="" type="checkbox" value="" />

        <label className={s.rotuloResponsavel} htmlFor="">
          Nome!
        </label>
      </div>
    </div>
  )
}
