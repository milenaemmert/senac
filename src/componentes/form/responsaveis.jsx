import { Field, ErrorMessage } from 'formik'
import { RESPONSAVEIS } from '../../constantes'
import s from './responsaveis.module.css'

export function Responsaveis({ id }) {
  return (
    <div className={s.container}>
      <label className={s.rotuloContainer}>Responsáveis</label>

      <div className={s.responsaveis}>
        {RESPONSAVEIS.map((responsavel) => (
          <div key={responsavel} className={s.responsavel}>
            <Field
              id={responsavel}
              name={id}
              type='checkbox'
              value={responsavel}
            />

            <label className={s.rotuloResponsavel} htmlFor={responsavel}>
              {responsavel}
            </label>
          </div>
        ))}
      </div>

      <ErrorMessage className={s.erro} name={id} component='span' />
    </div>
  )
}
