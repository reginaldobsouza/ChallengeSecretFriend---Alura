let amigos = [];

function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const input = document.getElementById('amigo');
    const nomeAmigo = input.value.trim();

    // Validar a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nomeAmigo);

    // Limpar o campo de entrada
    input.value = '';

    // Atualizar a lista de amigos exibida
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    // Obter o elemento da lista
    const lista = document.getElementById('listaAmigos');

    // Limpar a lista existente
    lista.innerHTML = '';

    // Percorrer o array e adicionar elementos à lista
    for (let amigo of amigos) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que há amigos disponíveis
    if (amigos.length === 0) {
        alert('Nenhum amigo disponível para sortear.');
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

// Exemplo de uso: adicionar um botão no HTML para chamar a função
// <input type="text" id="amigo" placeholder="Digite o nome do amigo">
// <button onclick="adicionarAmigo()">Adicionar Amigo</button>
// <ul id="listaAmigos"></ul>
// <ul id="resultado"></ul>
// <button onclick="sortearAmigo()">Sortear Amigo</button>