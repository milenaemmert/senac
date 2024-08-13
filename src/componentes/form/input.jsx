import s from './input.module.css'

export function Input({ rotulo, tipo, textoPlaceholder }) {
    return (
        <div className={s.container}>
            <label className={s.rotulo}>{rotulo}</label>
            <input className={s.inputContainer} type={tipo} placeholder={textoPlaceholder} />
        </div>
    )
}