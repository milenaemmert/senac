import { Field, ErrorMessage } from 'formik'
import s from './select.module.css'

export function Select({ id, rotulo, options }) {
  return (
    <div className={s.container}>
      <label className={s.rotulo} htmlFor={id}>
        {rotulo}
      </label>

      <Field id={id} className={s.select} name={id} as='select'>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field>

      <ErrorMessage className={s.erro} name={id} component='span' />
    </div>
  )
}
