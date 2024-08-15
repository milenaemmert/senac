import { ErrorMessage, Field } from 'formik'
import s from './textarea.module.css'

export function Textarea({ id, rotulo, placeholder }) {
  return (
    <div className={s.container}>
      <label className={s.rotulo}>
        {rotulo}
      </label>

      <Field
        as='textarea'
        className={s.textarea}
        name={id}
        placeholder={placeholder}
      />

      {/* <ErrorMessage name=''/> */}
    </div>
  )
}
