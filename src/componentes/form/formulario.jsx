import s from './formulario.module.css'
import { PRIORIDADES } from '../../constantes/prioridades'
import { Select } from './select'
import { Input } from './input'
import { Responsaveis } from './responsaveis'
import { Textarea } from './textarea'

export function Formulario() {
  return (
    <form className={s.formulario}>
      <div className={s.campos}>
        <Input id="titulo" textoPlaceholder="Digite o rótulo da tarefa." />
        <Select options={PRIORIDADES} />
        <Input id="data" tipo="date" />
      </div>

      <div className={s.campos}>
        <Textarea
          placeholder="Digite a descrição da tarefa"
        />
        <Responsaveis />
      </div>
    </form>
  )
}
