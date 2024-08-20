import s from './formulario.module.css'
import { PRIORIDADES } from '../../constantes/prioridades'
import { Select, Input, Responsaveis, Textarea } from '..'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

/* 
- Desafio: Colocar mensagem de erro/validação
- Desafio: resetForm
- Listar as tarefas na tela
*/

export function Formulario() {
  const valoresIniciais = {
    titulo: '',
    prioridade: 'Selecione',
    data: '',
    descricao: '',
    responsaveis: [],
  }

  const validacoes = Yup.object({
    titulo: Yup.string().required('O título é obrigatório.'),
    prioridade: Yup.string().oneOf(['Alta', 'Média', 'Baixa'], 'Prioridade inválida.'),
    data: Yup.date().required('A data é obrigatória.'),
    descricao: Yup.string().required('A descrição é obrigatória.'),
    responsaveis: Yup.array().min(1, 'Escolha pelo menos uma pessoa responsável.')
  })

  function pegarDadosDoFormulario(valores, {resetForm}) {
    console.log(valores)
  }

  return (
    <Formik 
      initialValues={valoresIniciais}
      validationSchema={validacoes}
      onSubmit={pegarDadosDoFormulario}
    >
      <Form className={s.formulario}>
        <div className={s.campos}>
          <Input
              id='titulo'
              rotulo='Título'
              textoPlaceholder='Digite o título da tarefa'
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
