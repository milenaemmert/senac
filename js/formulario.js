export function pegarDadosDoFormulario(e) {
    e.preventDefault()
    const tituloTarefa = document.querySelector('#tituloTarefaForm').value
    const prioridadeTarefa = document.querySelector('#prioridadeTarefaForm').value
    const dataTarefa = document.querySelector('#dataTarefaForm').value
    const descricaoTarefa = document.querySelector('#descricaoTarefaForm').value

    //querySelectorAll('.classe') -> para o checkbox
    
    console.log(tituloTarefa, prioridadeTarefa, dataTarefa, descricaoTarefa)
}