let cards = [
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://static.corinthians.com.br/uploads/17340952198d8818c8e140c64c743113f563cf750f.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://www.meutimao.com.br/fotos-do-corinthians/w941/2025/01/15/dayana_rodriguez_no_treino_da_pre-temporada_vqbo.jpg",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://cdn.acritica.net/upload/dn_arquivo/2025/04/174318471777c67132097f9b1ff028aed0eca8d21b.png",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://static.corinthians.com.br/uploads/17509469717a68443f5c80d181c42967cd71612af1.png",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "https://cdn.meutimao.com.br/fotos-do-corinthians/w941/2025/01/10/leticia_teles_durante_a_pre-temporada_c40q.jpg",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
]

// Inicialização
window.onload = function() {
    loadCards();
    displayCards();

    document.getElementById('cardForm').addEventListener('submit', addCard); 
    document.getElementById('postList').addEventListener('click', handlePostListClick);
};

// Função para salvar no LocalStorage
function saveCards() {
    localStorage.setItem("posts", JSON.stringify(cards));
}
// Função para carregar os posts do LocalStorage
function loadCards() {
    const storedCards = localStorage.getItem("cards");
    if (storedCards) {
        cards = JSON.parse(storedCards);
    }
}

// Função para exibir os cards
function displayCards() {
    const cardList = document.getElementById('cardList');
    cardList.innerHTML = '';

    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        cardElement.innerHTML = `
            <img src="${card.foto}" alt="Foto de ${card.nome}">
            <h3>${card.nome}</h3>
            <p><strong>Posição:</strong> ${card.posicao}</p>
            <p><strong>Clube:</strong> ${card.clube}</p>
            <p><strong>Gols:</strong> ${card.gols}</p>
            <p><strong>Assistências:</strong> ${card.assistencias}</p>
            <p><strong>Jogos:</strong> ${card.jogos}</p>
            <button data-action="toggleFavorite" data-index="${index}">
                ${card.favorita ? '<i class="fa-solid fa-star"></i> Favorita' : '<i class="fa-regular fa-star"></i> Favorita'}
            </button>
            <hr style="margin:30px;">
        `;

        cardList.appendChild(cardElement);
    });
}
