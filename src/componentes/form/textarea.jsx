import s from './textarea.module.css'

export function Textarea({ id, placeholder }) {
  return (
    <div className={s.container}>
      <label className={s.rotulo}>
        Label!
      </label>

      <textarea
        className={s.textarea}
        name={id}
        placeholder={placeholder}
      ></textarea>
    </div>
  )
}
