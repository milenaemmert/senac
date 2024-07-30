// formulario.js
import { PRIORIDADES } from "./constantes.js";
import { criarTarefa } from "./listaDeTarefas.js";

export function criarPrioridades() {
    const prioridadeSelect = document.getElementById('prioridadeTarefaForm');

    PRIORIDADES.forEach(prioridade => {
        const optionElemento = document.createElement('option');
        optionElemento.value = prioridade;
        optionElemento.textContent = prioridade;

        prioridadeSelect.appendChild(optionElemento);
    });
}

export function pegarDadosDoFormulario(e) {
    e.preventDefault();
    const tituloTarefa = document.querySelector('#tituloTarefaForm').value;
    const prioridadeTarefa = document.querySelector('#prioridadeTarefaForm').value;
    const dataTarefa = formatarData(document.querySelector('#dataTarefaForm').value);
    const descricaoTarefa = document.querySelector('#descricaoTarefaForm').value;

    const checkboxes = document.querySelectorAll('[data-responsavel]');
    const checkboxSelecionados = [];

    checkboxes.forEach(checkbox => {
        if(checkbox.checked) {
            const labelCheckbox = document.querySelector(`label[for=${checkbox.id}]`).textContent;
            checkboxSelecionados.push(labelCheckbox);
        }
    });

    const novaTarefa = {
        titulo: tituloTarefa,
        descricao: descricaoTarefa,
        prioridade: prioridadeTarefa,
        data: dataTarefa,
        responsavel: checkboxSelecionados,
    };

    fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaTarefa)
    })
    .then(response => response.json())
    .then(() => {
        criarTarefa(); // Atualiza a lista de tarefas
        limparFormulario();
    })
    .catch(error => console.error('Erro ao adicionar tarefa:', error));
}

function formatarData(data) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

export function limparFormulario() {
    const tituloTarefa = document.querySelector('#tituloTarefaForm');
    const prioridadeTarefa = document.querySelector('#prioridadeTarefaForm');
    const dataTarefa = document.querySelector('#dataTarefaForm');
    const descricaoTarefa = document.querySelector('#descricaoTarefaForm');

    tituloTarefa.value = '';
    prioridadeTarefa.value = 'Alta';
    dataTarefa.value = '';
    descricaoTarefa.value = '';

    const checkboxes = document.querySelectorAll('[data-responsavel]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}
