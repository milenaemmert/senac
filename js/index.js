import { criarTarefa } from './listaDeTarefas.js'
import { criarPrioridades, pegarDadosDoFormulario, limparFormulario } from './formulario.js'

criarPrioridades()
criarTarefa()

document.querySelector('#formularioTarefas').addEventListener('submit', pegarDadosDoFormulario)
document.querySelector('#botaoLimpar').addEventListener('click', limparFormulario)
