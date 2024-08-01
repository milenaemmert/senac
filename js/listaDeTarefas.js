import { pegarTarefasDaApi, deletarTarefaDaApi } from "./api.js"

export function criarTarefa(id, titulo, descricao, prioridade, data, responsaveis) {
  console.log(responsaveis)
  const li = document.createElement('li')
  li.classList = 'container__tarefa'
  li.id = id

  li.innerHTML = `
      <div class="conteudo__tarefa">
        <div class="tarefas__etiquetas">
          <div class="etiqueta__prioridade">${prioridade}</div>
          <div class="etiqueta">${data}</div>
          ${responsaveis
            .map((resp) => `<div class="etiqueta">${resp}</div>`)
            .join('')}
        </div>

        <div class="container__tarefa--descricao">
          <h2 class="descricao__tarefa--titulo">${titulo}</h2>
          <p>${descricao}</p>
        </div>
      </div>

      <button class="tarefa__botao-deletar">
          <svg class="tarefa__botao-deletar__icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.32568 5.8335H16.659" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.32568 9.1665V14.1665" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.6587 9.1665V14.1665" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4.15869 5.8335L4.99202 15.8335C4.99202 16.2755 5.16762 16.6994 5.48018 17.012C5.79274 17.3246 6.21666 17.5002 6.65869 17.5002H13.3254C13.7674 17.5002 14.1913 17.3246 14.5039 17.012C14.8164 16.6994 14.992 16.2755 14.992 15.8335L15.8254 5.8335" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.49219 5.83333V3.33333C7.49219 3.11232 7.57999 2.90036 7.73627 2.74408C7.89255 2.5878 8.10451 2.5 8.32552 2.5H11.6589C11.8799 2.5 12.0918 2.5878 12.2481 2.74408C12.4044 2.90036 12.4922 3.11232 12.4922 3.33333V5.83333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>
    `

  const deleteButton = li.querySelector('.tarefa__botao-deletar')
  deleteButton.addEventListener('click', () => deletarTarefa(id))

  const etiquetaPrioridade = li.querySelector('.etiqueta__prioridade')
  alterarCorDaEtiquetaPorPrioridade(etiquetaPrioridade)
  
  return li
}

export async function listarTarefasNaTela() {
  const listaDeTarefasElemento = document.getElementById('listaDeTarefas')
  listaDeTarefasElemento.innerHTML = ''

  const tarefasDaApi = await pegarTarefasDaApi()

  ordenarListaDeTarefasPorData(tarefasDaApi)
  ordenarListaDeTarefasPorPrioridade(tarefasDaApi)

  tarefasDaApi.forEach((tarefa) => {
    const tarefaElemento = criarTarefa(
      tarefa.id,
      tarefa.titulo,
      tarefa.descricao,
      tarefa.prioridade,
      tarefa.data,
      tarefa.responsavel
    )
    listaDeTarefasElemento.appendChild(tarefaElemento)
  })
}

async function deletarTarefa(id) {
  await deletarTarefaDaApi(id)
  listarTarefasNaTela()
}

function alterarCorDaEtiquetaPorPrioridade(etiqueta) {
  if (etiqueta.textContent.includes('Baixa')) {
    etiqueta.classList.add('etiqueta__prioridade--baixa')
  } else if (etiqueta.textContent.includes('Média')) {
    etiqueta.classList.add('etiqueta__prioridade--media')
  } else {
    etiqueta.classList.add('etiqueta__prioridade--alta')
  }
}

function ordenarListaDeTarefasPorPrioridade(tarefas) {
  const prioridadeMapeamento = {
    Alta: 1,
    Média: 2,
    Baixa: 3,
  }

  tarefas.sort((a, b) => {
    return (
      prioridadeMapeamento[a.prioridade] - prioridadeMapeamento[b.prioridade]
    )
  })
}

function ordenarListaDeTarefasPorData(tarefas) {
  tarefas.sort((a, b) => {
    return converterData(a.data) - converterData(b.data)
  })
}

function converterData(data) {
  const [dia, mes, ano] = data.split('/').map(Number)
  return new Date(ano, mes - 1, dia)
}
