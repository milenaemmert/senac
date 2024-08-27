import { Formik, Form } from 'formik'
import { Input } from './'

export function Pesquisa() {
  function pegarValorDaPesquisa(values) {
    if (!values.pesquisa) return
    //console.log(values.pesquisa)
  }

  return (
    <Formik initialValues={{ pesquisa: '' }} onSubmit={pegarValorDaPesquisa}>
      {() => (
        <Form>
          <Input
            id='pesquisa'
            rotulo='Pesquise tarefas por título ou descrição'
            placeholder='Digite aqui a sua pesquisa'
            tipo='search'
          />
        </Form>
      )}
    </Formik>
  )
}