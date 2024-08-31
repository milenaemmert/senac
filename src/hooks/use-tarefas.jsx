import { useState } from 'react'
import axios from 'axios'

export function useTarefas() {
  const [tarefas, setTarefas] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [paginacao, setPaginacao] = useState(null)
  const [paginaAtual, setPaginaAtual] = useState(1)

  async function pegarTarefasPaginadas(tarefasPorPagina = 3) {
    setCarregando(true)

    try {
      const resposta = await axios.get('http://localhost:3000/tarefas', {
        params: { _page: paginaAtual, _per_page: tarefasPorPagina }
      })

      console.log(resposta.data)

      const { data, ...restoDaResposta } = resposta.data

      setTarefas(data)
      setPaginacao(restoDaResposta)
    } catch (erro) {
      window.alert(erro.response?.data?.message || erro.message)
    } finally {
      setCarregando(false)
    }
  }

  async function pegarTarefasRecentes(quantidade = 2) {
    setCarregando(true)

    try {
      const resposta = await axios.get('http://localhost:3000/tarefas', {
        params: { _sort: '-id', _limit: quantidade }
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
