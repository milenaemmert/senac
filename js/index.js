import { criarTarefa } from "./listaDeTarefas.js";
import { pegarDadosDoFormulario } from "./formulario.js";

criarTarefa()

document.querySelector('#formularioTarefas').addEventListener('submit', pegarDadosDoFormulario)