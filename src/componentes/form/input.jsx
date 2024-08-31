import { Field, ErrorMessage } from 'formik'
import { lupa } from '../../assets/icones'
import s from './input.module.css'

export function Input({ id, rotulo, placeholder, tipo = 'text' }) {
  return (
    <div className={s.container}>
      <label className={s.rotulo} htmlFor={id}>
        {rotulo}
      </label>

      <div className={s.inputContainer}>
        <Field
          id={id}
          className={s.input}
          name={id}
          placeholder={placeholder}
          type={tipo}
        />

        {tipo === 'search' ? (
          <button className={s.botaoPesquisa} type='submit' title='Pesquisar'>
            {lupa(s.botaoPesquisaIcone)}
          </button>
        ) : null}
      </div>

      <ErrorMessage className={s.erro} name={id} component='span' />
    </div>
  )
}
