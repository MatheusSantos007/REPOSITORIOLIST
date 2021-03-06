import itens from './model/dataset.js';
import foodsModel from './model/foods.js';// aqui estamos importando os itens do script dataset e foods

//Para que ao adicionar um novo item no meu cardápio, eu não precise ficar inserido novos conjunto de códigos (cards) no html,
// trazemos a estrutura do card aqui, para o js e utilizamos uma estrutura de repetição.

foodsModel.load(itens);
let foods = foodsModel.readAll();

function initFoodsCard () {
  // o for fará a repetição dos itens do cardápio
  for (let item of foods) {// e também colocamos o item."elemento". , dentro de uma string literals para que apareça o elemento especificado da nossa lista "ITENS".

    const view = createFoodCardItem(item);
  
    //let itensCardapio = document.querySelector('.itens-cardapio');
    let itensCardapio = document.getElementById("itens-cardapio");
    itensCardapio.insertAdjacentHTML('beforeend', view);
  }
}

function createFoodCardItem (item) {
 // foi definida uma variável view, para que posteriormente, possa ser adicionada na tela
  //essa DIV é a estrutura do nosso card.
    const view = `<div class="col-3 card my-1 mx-1 py-1">
                    <img src="${item.imagem}" class="card-img-top" alt="...">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${item.descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`;

    return view;
}


// Captar o evento de submissão do formulário e adicionar o item no cartão (card).
// const foodForm = document.querySelector('#foodForm');
const foodForm = document.getElementById("foodForm");

foodForm.onsubmit = function (event) {
  // Previnir que o modal fique abrindo e fechando em loop.
  event.preventDefault();

  let newFood = Object.fromEntries(new FormData(foodForm));
  foodsModel.create(newFood);
//let itensCardapio = document.querySelector('.itens-cardapio'); // esta é uma outra forma de selecionar o elemento do html
  const foodCard = createFoodCardItem(newFood);
  let itensCardapio = document.getElementById("itens-cardapio");// definimos uma variável para os itens do cardápio e utilizamos o elemento getElementById, para que possa ser selecionado o elemento da div que contém o card.
  itensCardapio.insertAdjacentHTML('beforeend', foodCard);// por fim, é utilizado o itens.Cardapio com o elemento insertAdJacentHTML, que tem a função de fazer com que o item apareça na tela, em seguida nos parentes tem "beforeend", que significa dizer, aparecer antes do fim, o view é o código que será inserido..

}
// resumidamente, este script fará com que os itens do nosso array, apareça nos espaços especificados nque estão contidos
// na variável view, e para que de fato os códigos que estão nesta variável, sejam inseridos, pegamos o id do elemento lá
// no html e inserimos através do insertAdjacentHTML. a cada vez que adicionamos itens lá no array, eles serão executados
// já que declaramos uma estrutura de repetição, o for.

}

initFoodsCard();
