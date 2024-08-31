import { useState } from 'react'
import axios from 'axios'

export function useTarefas() {
  const [tarefas, setTarefas] = useState([]) //onde as tarefas que forem retornadas pelo endpoint serão guardadas
  const [carregando, setCarregando] = useState(false) //será true enquanto uma requisição está sendo feita 
  const [paginacao, setPaginacao] = useState(null) //
  const [paginaAtual, setPaginaAtual] = useState(1)

  async function pegarTarefasPaginadas(tarefasPorPagina = 3) {
    setCarregando(true)

    try {
      const resposta = await axios.get('http://localhost:3000/tarefas', {
        params: { _page: paginaAtual, _per_page: tarefasPorPagina } //com esses parâmetros o json server entende que a resposta deve ser paginada
      })

      console.log(resposta.data)

      const { data, ...restoDaResposta } = resposta.data //pega a resposta do endpoint e separa em dois: primeiro as tarefas da página, e depois as informações da paginação

      setTarefas(data) //populando o state de tarefas
      setPaginacao(restoDaResposta) //populando o state de paginação
    } catch (erro) {
      window.alert(erro.response?.data?.message || erro.message) //mostrar o erro de requisição (caso exista)
    } finally {
      setCarregando(false)
    }
  }

  async function pegarTarefasRecentes(quantidade = 2) {
    setCarregando(true)

    try {
      const resposta = await axios.get('http://localhost:3000/tarefas', {
        params: { _sort: '-id', _limit: quantidade } //sort é a maneira que o json server permite ordenar uma lista, -id para que seja decrescente
      })

      setTarefas(resposta.data)
    } catch (erro) {
      window.alert(erro.response?.data?.message || erro.message)
    } finally {
      setCarregando(false)
    }
  }

  async function adicionarTarefa(tarefa) {
    setCarregando(true)

    try {
      await axios.post('http://localhost:3000/tarefas', tarefa)
    } catch (erro) {
      window.alert(erro.response?.data?.message || erro.message)
    } finally {
      setCarregando(false)
    }
  }

  async function deletarTarefa(id) {
    setCarregando(true)

    try {
      await axios.delete(`http://localhost:3000/tarefas/${id}`)
    } catch (erro) {
      window.alert(erro.response?.data?.message || erro.message)
    } finally {
      setCarregando(false)
    }
  }

   //quando clicar na seta de mudar a página, a função abaixo é chamada
  function mudarPagina(pagina) {
    setPaginaAtual(pagina)
  }

  return {
    tarefas,
    paginacao,
    paginaAtual,
    carregando,
    pegarTarefasPaginadas,
    pegarTarefasRecentes,
    adicionarTarefa,
    deletarTarefa,
    mudarPagina
  }
}
