# Amigo Secreto

Este é um projeto simples de Amigo Secreto, onde você pode adicionar nomes de amigos, visualizar a lista de amigos e sortear um amigo aleatoriamente.

## Funcionalidades

- Adicionar nomes de amigos a uma lista.
- Visualizar a lista de amigos adicionados.
- Sortear um amigo aleatoriamente da lista.

## Como usar

1. Clone o repositório para o seu ambiente local:
    ```bash
    git clone https://github.com/seu-usuario/amigo-secreto.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd amigo-secreto
    ```

3. Abra o arquivo [index.html](http://_vscodecontentref_/0) em seu navegador.

4. Digite o nome de um amigo no campo de entrada e clique no botão "Adicionar" para adicioná-lo à lista.

5. Para sortear um amigo, clique no botão "Sortear amigo".

## Estrutura do Projeto

- [index.html](http://_vscodecontentref_/1): Contém a estrutura HTML da aplicação.
- [style.css](http://_vscodecontentref_/2): Contém os estilos CSS para a aplicação.
- [app.js](http://_vscodecontentref_/3): Contém a lógica JavaScript para adicionar amigos, atualizar a lista e sortear um amigo.

## Exemplo de Uso

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Amigo Secreto</title>
</head>
<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
        </header>
        
        <section class="input-section">
            <h2 class="section-title">Digite o nome dos seus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Digite um nome">
                <button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
            </div>
           
            <ul id="listaAmigos" class="name-list"></ul>
            <ul id="resultado" class="result-list"></ul>

            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()">Sortear amigo</button>
            </div>
        </section>
    </main>

    <script src="app.js" defer></script>
</body>
</html>
