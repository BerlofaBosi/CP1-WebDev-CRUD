let cards = [
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "https://static.corinthians.com.br/uploads/17340952198d8818c8e140c64c743113f563cf750f.jpg",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": true
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
window.onload = function () {
  loadCards();
  saveCards();
  displayCards();

  document.getElementById('cardForm').addEventListener('submit', addCard);
  document.getElementById('cardList').addEventListener('click', handleCardListClick);
};

// Função para salvar no LocalStorage
function saveCards() {
  localStorage.setItem("cards", JSON.stringify(cards));
}
// Função para carregar os posts do LocalStorage
function loadCards() {
  const storedCards = localStorage.getItem("cards");
  if (storedCards) {
    cards = JSON.parse(storedCards);
  }
}

// Exibição dos Cards
function displayCards() {
  const cardList = document.getElementById('cardList');
  cardList.innerHTML = '';

  cards.forEach((card, index) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    cardElement.innerHTML = `
            <div class="card-buttons">
              <button data-action="delete" data-index="${index}"><i class="fa-solid fa-eraser"></i> Apagar</button>
              <button data-action="edit" data-index="${index}"><i class="fa-solid fa-pen-to-square"></i> Editar</button>
              <button data-action="toggleFavorite" data-index="${index}">
                  ${card.favorita ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>'}
              </button>
            </div>
            <h1>${card.nome}</h1>
            <img src="${card.foto}" alt="Foto de ${card.nome}">
            <p><strong>Posição:</strong> ${card.posicao}</p>
            <p><strong>Clube:</strong> ${card.clube}</p>
            <p><strong>Gols:</strong> ${card.gols}</p>
            <p><strong>Assistências:</strong> ${card.assistencias}</p>
            <p><strong>Jogos:</strong> ${card.jogos}</p>
            <hr style="margin:30px;">
        `;

    cardList.appendChild(cardElement);
  });
}

// Criar um novo Card
function addCard(event) {
  console.log(event);
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Pega todos os valores do formulário
  const cardName = document.getElementById('cardName').value;
  const cardPosition = document.getElementById('cardPosition').value;
  const cardClub = document.getElementById('cardClub').value;
  const cardStatistcsGols = document.getElementById('cardStatistcsGols').value;
  const cardStatistcsAssist = document.getElementById('cardStatistcsAssist').value;
  const cardStatistcsGames = document.getElementById('cardStatistcsGames').value;
  const cardPhoto = document.getElementById('cardPhoto').value;

  // Novo objeto card
  const card = {
    nome: cardName,
    posicao: cardPosition,
    clube: cardClub,
    foto: cardPhoto,
    gols: cardStatistcsGols,
    assistencias: cardStatistcsAssist,
    jogos: cardStatistcsGames,
    favorita: false
  };

  cards.unshift(card); // Adiciona o objeto no início da array
  saveCards(); // salva no localStorage

  document.getElementById('cardForm').reset(); // Reseta o formulário
  displayCards(); // Atualiza a exibição dos cards
  alert("Card adicionado com sucesso!");
}

// Função para lidar com cliques na lista de cards
function handleCardListClick(event) {
    const clickedElement = event.target.closest("button"); // garante que pega o botão
    if (!clickedElement) return;

    const action = clickedElement.dataset.action;
    const index = clickedElement.dataset.index;

    if (action === "edit") {
        // editCard(index);
    } else if (action === "delete") {
        deleteCard(index);
    } else if (action === "toggleFavorite") {
        cardFavorite(index);
    }
}

// Atualiza um Card existente
function editCard(index) {
    const novoNome = prompt("Editar nome:", cards[index].text);

    if (novoTexto !== null) {
        posts[index].text = novoTexto;
        savePosts();
        displayPosts();
    }
    alert("Card editado com sucesso!");
}
// Deleta um Card existente
function deleteCard(index) {
    const confirma = confirm("Deseja realmente excluir esse card?");
    if (confirma) { // Se o usuário clicar em "OK"
        cards.splice(index, 1); // Remove o card do array
        saveCards(); // Salva a atualização no LocalStorage
        displayCards(); // Atualiza a exibição dos cards
        alert("Card excluído com sucesso!");
    }
}

// Atualiza se é favorito ou não
function cardFavorite(index) {
    cards[index].favorita = !cards[index].favorita; // Alterna o status de favorito
    saveCards(); // Salva a atualização no LocalStorage
    displayCards(); // Atualiza a exibição dos cards
}
