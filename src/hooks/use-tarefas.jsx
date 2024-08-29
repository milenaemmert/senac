import axios from "axios"
import { useState } from "react"

export function UseTarefas() {
    const [tarefas, setTarefas] = useState([]) 
    const [paginacao, setpaginacao] = useState(null)
    const[paginaAtual, setPaginaAtual] = useState(1)


    function pegarTarefasDaAPi(tarefasPorPagina = 3) {
        try {
            const resposta = axios.get('http://localhost:3000/tarefas', {
                params: {_page: paginaAtual, _per_page: tarefasPorPagina}
            })

            console.log(resposta.data)

            const {data, ...restoDaResposta} = resposta.data
            setTarefas(data)
            setpaginacao(restoDaResposta)
        } catch(erro) {
            window.alert(erro)
        }
    }

    function criarTarefaNaAPi() {
        try {
            const resposta = axios.post('')
        } catch(erro) {

        }
    }

    function deletarTarefasDaAPi() {
        try {
            const resposta = axios.delete('')
        } catch(erro) {

        }
    }
}