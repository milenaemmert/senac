import { TAREFAS } from './constantes.js'

criarTarefa()

const etiquetasPrioridade = document.querySelectorAll('.etiqueta__prioridade')
etiquetasPrioridade.forEach((prioridade) => {
  if (prioridade.textContent.includes('Baixa')) {
    prioridade.classList.add('etiqueta--baixa')
  } else if (prioridade.textContent.includes('Média')) {
    prioridade.classList.add('etiqueta--media')
  } else {
    prioridade.classList.add('etiqueta--alta')
  }
})

function criarTarefa() {
  const listaDeTarefas = document.getElementById('listaDeTarefas')

  TAREFAS.map((tarefa => {
    const li = document.createElement('li')
    li.classList = 'tarefa'

    li.innerHTML = `
        <div class="etiquetas">
            <div class="etiqueta__prioridade">${tarefa.prioridade}</div>
            <div class="etiqueta">${tarefa.data}</div>
            ${tarefa.responsavel.map(resp => `<div class="etiqueta">${resp}</div>`).join('')}
           
        </div>

        <div class="descricao__tarefa">
            <h2 class="descricao__tarefa--titulo">${tarefa.titulo}</h2>
            <p>${tarefa.descricao}</p>
        </div> 
    `
    listaDeTarefas.appendChild(li)
  }))
}