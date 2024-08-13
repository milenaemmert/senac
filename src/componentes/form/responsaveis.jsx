import { Field } from 'formik'
import s from './responsaveis.module.css'

export function Responsaveis() {
  return (
    <div className={s.container}>
      <label className={s.rotuloContainer}>Responsáveis</label>

      
      <div className={s.responsaveis}>
        {/* aqui vai um map: */}
        <Field id="" name="" type="checkbox" value="" />

        <label className={s.rotuloResponsavel} htmlFor="">
          {/* nome do responsavel, que vem do parametro do map */}
        </label>
      </div>
    </div>
  )
}
