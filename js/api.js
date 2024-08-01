export async function pegarTarefasDaApi() {
    const resposta = await fetch('http://localhost:3000/tarefas') // fetch -> busca
    const dadosConvertidos = await resposta.json(resposta)

    return dadosConvertidos
}

export async function postarTarefaNaApi(tituloTarefa, descricaoTarefa, prioridadeTarefa, dataTarefa, checkboxSelecionados) {
    const resposta = await fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            titulo: tituloTarefa,
            descricao: descricaoTarefa,
            prioridade: prioridadeTarefa,
            data: dataTarefa,
            responsavel: checkboxSelecionados
        })
    })
}

export async function deletarTarefaDaApi(id) {
    await fetch(`http://localhost:3000/tarefas/${id}`, {
        method: 'DELETE'
    })
}