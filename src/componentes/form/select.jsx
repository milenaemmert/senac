import { Field } from "formik";
import s from './select.module.css'

export function Select(options) {
    console.log(options)
    return (
        <div className={s.container}>
            <label htmlFor="id" className={s.rotulo}>Prioridade</label>
            {/* trocar o field por select, caso não queira usar Formik */}
            <select>
                {/* repetir essas options 3x com map, mas quero que vocês recebam as options das propriedades por props! */}
                <option>
                    Alta
                </option>
                <option>
                    Média
                </option>
                <option>
                    Baixa
                </option>

            </select>
        </div>
    )
}