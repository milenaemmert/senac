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
    responsaveis: [],
  }

  function pegarDadosDoFormulario(valores, {resetForm}) {
    console.log(valores)
  }

  return (
    <Formik 
      initialValues={valoresIniciais}
      onSubmit={pegarDadosDoFormulario}
    >
      <Form className={s.formulario}>
        <div className={s.campos}>
          <Input
              id='titulo'
              rotulo='Título'
              placeholder='Digite o título da tarefa'
            />
          <Select id="prioridade" rotulo="Prioridade" options={PRIORIDADES} />
          
          <Input id='data' rotulo='Data' tipo='date' />
        </div>

        <div className={s.campos}>
          <Textarea
            id="descricao"
            rotulo="Descrição"
            placeholder="Digite a descrição da tarefa"
          />
          <Responsaveis id="responsaveis" />
        </div>

        <div className={s.controles}>
          <button
            className={`${s.botao} ${s.botaoLimpar}`}
            type="button"
            title="Limpar o formulário"
          >
            Limpar
          </button>

          <button
            className={`${s.botao} ${s.botaoAdicionar}`}
            type="submit"
            title="Adicionar tarefa"
          >
            Adicionar
          </button>
        </div>
      </Form>
    </Formik>
  )
}
