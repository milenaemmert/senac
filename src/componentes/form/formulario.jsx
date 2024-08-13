import s from './formulario.module.css'
import { PRIORIDADES } from '../../constantes/prioridades'
import { Select } from './select'
import { Input } from './input'
import { Responsaveis } from './responsaveis'
import { Textarea } from './textarea'
import { Formik, Form } from 'formik'

export function Formulario() {
  const valoresIniciais = {
    titulo: '',
    prioridade: 'Selecione',
    data: '',
    descricao: '',
    responsaveis: []
  }

  return (
    <Formik
      initialValues={valoresIniciais}
    >
      <Form className={s.formulario}>
        <div className={s.campos}>
          <Input
            id="titulo"
            rotulo="Título"
            textoPlaceholder="Digite o rótulo da tarefa."
          />
          <Select id="prioridade" rotulo="Prioridade" options={PRIORIDADES} />
          <Input id="data" rotulo="Data" tipo="date" />
        </div>

        <div className={s.campos}>
          <Textarea id="descricao" rotulo="Descrição" placeholder="Digite a descrição da tarefa" />
          <Responsaveis id="responsaveis" />
        </div>
      </Form>
    </Formik>
  )
}
