import { ErrorMessage, Field } from 'formik'
import { lupa } from '../../assets/icones'
import s from './input.module.css'

export function Input({ id, rotulo, textoPlaceholder, tipo = 'text' }) {
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
          placeholder={textoPlaceholder}
          type={tipo}
        />

        {tipo === 'search' ? (
            <button>
              {lupa(s.botaoPesquisaIcone)}
            </button>
          )
          :
          null
        }

        
      </div>

      <ErrorMessage className={s.erro} name={id} component='span' />
    </div>
  )
}
