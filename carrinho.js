let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += Number(preco.toFixed(2));  // Arredonde para dois decimais antes de adicionar ao total

    // Atualize o carrinho e o total
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalElement = document.getElementById('total');

    // Limpe a lista antes de atualizar
    listaCarrinho.innerHTML = '';

    // Adicione itens ao carrinho
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
    });

    // Atualize o total
    totalElement.textContent = total.toFixed(2);
}
