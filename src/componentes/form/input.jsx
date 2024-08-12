import s from './input.module.css'

export function Input({ tipo, textoPlaceholder}) {
    return (
        <div className={s.container}>
            <label className={s.rotulo}>Label!</label>
            <input className={s.inputContainer} type={tipo} placeholder={textoPlaceholder} />
        </div>
    )
}