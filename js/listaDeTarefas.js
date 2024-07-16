import { TAREFAS } from './constantes.js'

export function criarTarefa() {
  const listaDeTarefas = document.getElementById('listaDeTarefas')

  ordenarListaDeTarefasPorData()
  ordenarListaDeTarefasPorPrioridade()

  TAREFAS.map((tarefa) => {
    const li = document.createElement('li')
    li.classList = 'container__tarefa'

    li.innerHTML = `
			<div class="tarefas__etiquetas">
				<div class="etiqueta__prioridade">${tarefa.prioridade}</div>
				<div class="etiqueta">${tarefa.data}</div>
				${tarefa.responsavel
          .map((resp) => `<div class="etiqueta">${resp}</div>`)
          .join('')}
			</div>

			<div class="container__tarefa--descricao">
				<h2 class="descricao__tarefa--titulo">${tarefa.titulo}</h2>
				<p>${tarefa.descricao}</p>
			</div>
    `

    listaDeTarefas.appendChild(li)
    alterarCorDaEtiquetaPrioridade()
  })
}

function alterarCorDaEtiquetaPrioridade() {
  const etiquetasPrioridade = document.querySelectorAll('.etiqueta__prioridade')
  etiquetasPrioridade.forEach((prioridade) => {
    if (prioridade.textContent.includes('Baixa')) {
      prioridade.classList.add('etiqueta__prioridade--baixa')
    } else if (prioridade.textContent.includes('Média')) {
      prioridade.classList.add('etiqueta__prioridade--media')
    } else {
      prioridade.classList.add('etiqueta__prioridade--alta')
    }
  })
}

function ordenarListaDeTarefasPorPrioridade() {
  const prioridadeMapeamento = {
    Alta: 1,
    Média: 2,
    Baixa: 3,
  }

  TAREFAS.sort((a, b) => {
    return (
      prioridadeMapeamento[a.prioridade] - prioridadeMapeamento[b.prioridade]
    )
  })
}

function ordenarListaDeTarefasPorData() {
  TAREFAS.sort((a, b) => {
    return converterData(a.data) - converterData(b.data)
  })
}

function converterData(data) {
  const [dia, mes, ano] = data.split('/').map(Number)
  return new Date(ano, mes - 1, dia)
}
