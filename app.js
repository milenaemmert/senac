const etiquetasPrioridade = document.querySelectorAll('.etiqueta__prioridade')
// ⚠️Pensar sobre isso: posso usar outro tipo de lógica? usando método includes, organizando meus dados de forma diferente...
etiquetasPrioridade.forEach(prioridade => {
    if(prioridade.textContent === 'Baixa') {
        prioridade.classList.add('etiqueta--baixa')
    } else if(prioridade.textContent === 'Média') {
        prioridade.classList.add('etiqueta--media')
    } else {
        prioridade.classList.add('etiqueta--alta')
    }
})