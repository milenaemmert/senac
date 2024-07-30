// index.js
import { criarTarefa } from './listaDeTarefas.js';
import { criarPrioridades, pegarDadosDoFormulario, limparFormulario } from './formulario.js';

document.addEventListener('DOMContentLoaded', () => {
    criarPrioridades();
    fetchTarefas();

    document.querySelector('#formularioTarefas').addEventListener('submit', pegarDadosDoFormulario);
    document.querySelector('#botaoLimpar').addEventListener('click', limparFormulario);
});

function fetchTarefas() {
    fetch('http://localhost:3000/tarefas')
        .then(response => response.json())
        .then(data => {
            criarTarefa(data);
        })
        .catch(error => console.error('Erro ao buscar tarefas:', error));
}
