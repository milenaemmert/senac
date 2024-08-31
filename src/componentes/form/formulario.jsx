import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { PRIORIDADES } from '../../constantes'
import { useTarefas } from '../../hooks'
import { Input, Select, Textarea, Responsaveis, Carregando } from '../'
import s from './formulario.module.css'

export function Formulario({ aoAdicionarTarefa }) {
  const { carregando, adicionarTarefa } = useTarefas()

  const valoresIniciais = {
    titulo: '',
    prioridade: 'Alta',
    data: '',
    descricao: '',
    responsaveis: []
  }

  const validacoes = Yup.object({
    titulo: Yup.string().required('O título é obrigatório.'),
    prioridade: Yup.string().oneOf(
      ['Alta', 'Média', 'Baixa'],
      'Prioridade inválida.'
    ),
    data: Yup.date().required('A data é obrigatória.'),
    descricao: Yup.string().required('A descrição é obrigatória.'),
    responsaveis: Yup.array().min(1, 'Escolha pelo menos um responsável.')
  })

  async function pegarDadosDoFormulario(valoresForm, { resetForm }) {
    const id = Date.now().toString() // id setado de forma provisória, podem procurar usar uuid
    const dataConvertida = valoresForm.data.split('-').reverse().join('/')

    const valoresTarefa = { ...valoresForm, id, data: dataConvertida }

    await adicionarTarefa(valoresTarefa)
    aoAdicionarTarefa()
    resetForm()
  }

  return (
    <Formik
      initialValues={valoresIniciais}
      validationSchema={validacoes}
      onSubmit={pegarDadosDoFormulario}
    >
      {({ resetForm }) => (
        <Form className={s.formulario}>
          <div className={s.campos}>
            <Input
              id='titulo'
              rotulo='Título'
              placeholder='Digite o título da tarefa'
            />

            <Select id='prioridade' rotulo='Prioridade' options={PRIORIDADES} />

            <Input id='data' rotulo='Data' tipo='date' />
          </div>

          <div className={s.campos}>
            <Textarea
              id='descricao'
              rotulo='Descrição'
              placeholder='Digite a descrição da tarefa'
            />

            <Responsaveis id='responsaveis' />
          </div>

          <div className={s.controles}>
            <button
              className={`${s.botao} ${s.botaoLimpar}`}
              type='button'
              title='Limpar o formulário'
              onClick={resetForm}
            >
              Limpar
            </button>

            <button
              className={`${s.botao} ${s.botaoAdicionar}`}
              type='submit'
              title='Adicionar tarefa'
              disabled={carregando}
            >
              {carregando ? (
                <Carregando className={s.carregando} />
              ) : (
                'Adicionar'
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
