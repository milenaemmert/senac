import { Field, ErrorMessage } from 'formik'
import s from './textarea.module.css'

export function Textarea({ id, rotulo, placeholder }) {
  return (
    <div className={s.container}>
      <label className={s.rotulo} htmlFor={id}>
        {rotulo}
      </label>

      <Field
        id={id}
        className={s.textarea}
        name={id}
        as='textarea'
        placeholder={placeholder}
      />

      <ErrorMessage className={s.erro} name={id} component='span' />
    </div>
  )
}
