import s from './formulario.module.css'
import { Input } from './input'

export function Formulario() {
    return (
        <>
            <Input tipo="email" textoPlaceholder="Digite seu email" />
            <Input tipo="password" textoPlaceholder="Digite sua senha" />
        </>
    )
}