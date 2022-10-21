// Array de objetos contendo os produtos:

const data = [
  {
    id: 1,
    img: "./img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante...",
    value: 149.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "./img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 59.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "./img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 29.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "./img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 79.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "./img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um mais grosso...",
    value: 79.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "./img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 149.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 7,
    img: "./img/sapato-social-masculino.jpg",
    nameItem: "Sapato Social Masculino",
    description:
      "Feito de couro, este é o sapato ideal para compor seu look...",
    value: 199.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
  },
  {
    id: 8,
    img: "./img/tenis-masculino-preto.jpg",
    nameItem: "Tênis Masculino",
    description:
      "Tênis masculino estiloso ideal para corrida e academia...",
    value: 199.90,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
  },
];

// Array de objetos contendo os produtos que compõem o carrinho de compras:

let itemsAddedToCart = [];

// Variáveis globais que recebem o valor total e quantidade dos produtos 
// adicionados ao carrinho:

let total = 0;

let quantity = 0;


// Função geral que inicia a lógica e adição dinâmica de produtos:

function general(data) {

  search(data);

  addingEventToCategoryButtons(data);

  createCart();

  addProducsToShowcase(data);

}

function search(data) {

  let userInputButton = document.querySelector(".search-button");

  userInputButton.addEventListener("click", function (event) {

    event.preventDefault();

    let searchInput = document.querySelector(".search-input");

    let searchInputValue = searchInput.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    console.log(searchInputValue);

    let filteredSearch = [];

    for (let i = 0; i < data.length; i++) {

      if (data[i].nameItem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(searchInputValue) === true ||
        data[i].nameItem.toLowerCase().includes(searchInputValue) === true ||
        data[i].description.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(searchInputValue) === true ||
        data[i].description.toLowerCase().includes(searchInputValue) === true ||
        data[i].tag[0].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(searchInputValue) === true ||
        data[i].tag[0].toLowerCase().includes(searchInputValue) === true) {

        console.log(filteredSearch);

        filteredSearch.push(data[i]);

      }

      addProducsToShowcase(filteredSearch);
      
    }

  });

}

function addingEventToCategoryButtons(data) {

  let all = document.querySelector(".all");

  all.addEventListener("click", function () {

    console.log(data);

    addProducsToShowcase(data);

  });

  let accessories = document.querySelector(".accessories");

  accessories.addEventListener("click", function () {

    let filteredAcessories = [];

    for (let i = 0; i < data.length; i++) {

      if (data[i].tag[0] === "Acessórios") {

        filteredAcessories.push(data[i]);

      }

    }

    console.log(filteredAcessories);

    addProducsToShowcase(filteredAcessories);

  });

  let shoes = document.querySelector(".shoes");

  shoes.addEventListener("click", function () {

    let filteredShoes = [];

    for (let i = 0; i < data.length; i++) {

      if (data[i].tag[0] === "Calçados") {

        filteredShoes.push(data[i]);

      }

    }

    console.log(filteredShoes);

    addProducsToShowcase(filteredShoes);

  });

  let shirt = document.querySelector(".shirt");

  shirt.addEventListener("click", function () {

    let filteredShirts = [];

    for (let i = 0; i < data.length; i++) {

      if (data[i].tag[0] === "Camisetas") {

        filteredShirts.push(data[i]);

      }

    }

    console.log(filteredShirts);

    addProducsToShowcase(filteredShirts);

  });

}

// Chamando a função general e passando o array com os produtos:

general(data);

// Adiciona os produtos do array de objetos 'data' a vitrine:

function addProducsToShowcase(database) {

  let contentFirstColumn = document.querySelector(".content-first-column");

  contentFirstColumn.innerText = "";

  let ulProducts = document.createElement("ul");

  ulProducts.classList.add("products-list");

  contentFirstColumn.appendChild(ulProducts);

  // Percorre o array de objetos com os produtos e pra cada um deles cria 
  // uma <li>:

  for (let i = 0; i < database.length; i++) {

    let li = document.createElement("li");

    li.classList.add("product-card");

    ulProducts.appendChild(li);

    // Chama a função para criar o card do produto passando o <li> recém criado,
    // a posição do índice 'i' e o array de objetos com os produtos:

    createProductCard(database, li, i);
  }

  if (database.length === 0) {

    let contentFirstColumn = document.querySelector(".content-first-column");

    let emptySearch = document.createElement("h2");

    emptySearch.classList.add("empty-search");

    emptySearch.innerText = "Nada por aqui :(";

    contentFirstColumn.appendChild(emptySearch);

  }

}

function createProductCard(database, li, i) {

  let figBox = document.createElement("div");

  figBox.classList.add("fig-box");

  li.appendChild(figBox);


  let figure = document.createElement("figure");

  figure.classList.add("figure");

  figBox.appendChild(figure);


  let img = document.createElement("img");

  img.classList.add("product-image");

  figure.appendChild(img);

  img.setAttribute("src", database[i].img);

  img.setAttribute("alt", database[i].nameItem);


  let figcaption = document.createElement("figcaption");

  figcaption.classList.add("figcaption");

  figure.appendChild(figcaption);


  let productDescription = document.createElement("div");

  productDescription.classList.add("product-description");

  li.appendChild(productDescription);


  let h2 = document.createElement("h2");

  h2.classList.add("product-category");

  productDescription.appendChild(h2);

  h2.innerText = database[i].tag[0];


  let h3 = document.createElement("h3");

  h3.classList.add("product-name");

  productDescription.appendChild(h3);

  h3.innerText = database[i].nameItem;


  let p = document.createElement("p");

  p.classList.add("product-resume");

  productDescription.appendChild(p);

  p.innerText = database[i].description;


  let h4 = document.createElement("h4");

  h4.classList.add("product-price");

  productDescription.appendChild(h4);

  h4.innerText = `R$ ${database[i].value.toFixed(2)}`;


  let button = document.createElement("button");

  button.classList.add("add-to-cart-button");

  productDescription.appendChild(button);

  button.setAttribute("id", database[i].id);

  button.innerText = database[i].addCart;

  // Adiciona um evento para cada botão de adicionar ao carrinho:

  button.addEventListener('click', function () {

    // Adiciona o produto ao array de objetos itemsAddedToCart:

    itemsAddedToCart.push(database[i]);

    console.log(itemsAddedToCart);

    // Chama a função que atualiza o valor total e quantidade:

    addItemsToCart(itemsAddedToCart);

    updateTotalAndQuantity(itemsAddedToCart);


  });

}

function createCart() {

  let contentSecondColumn = document.querySelector(".content-second-column");

  let cart = document.createElement("div");

  cart.classList.add("cart")

  contentSecondColumn.appendChild(cart);


  let CartTitle = document.createElement("h3");

  CartTitle.classList.add("cart-title");

  cart.appendChild(CartTitle);

  CartTitle.innerText = "Carrinho de Compras";


  let cartItems = document.createElement("div");

  cartItems.classList.add("cart-items");

  cart.appendChild(cartItems);



  let cartSummary = document.createElement("div");

  cartSummary.classList.add("cart-summary");

  cart.appendChild(cartSummary);


  let divTotalQuantity = document.createElement("div");

  cartSummary.appendChild(divTotalQuantity);

  divTotalQuantity.classList.add("div-total-quantity");


  let totalQuantityTitle = document.createElement("h3");

  totalQuantityTitle.classList.add("total-quantity-title");

  divTotalQuantity.appendChild(totalQuantityTitle);

  totalQuantityTitle.innerText = "Quantidade:";


  let totalQuantity = document.createElement("h3");

  totalQuantity.classList.add("total-quantity");

  divTotalQuantity.appendChild(totalQuantity);

  totalQuantity.innerText = quantity;



  let divTotalPrice = document.createElement("div");

  cartSummary.appendChild(divTotalPrice);

  divTotalPrice.classList.add("div-total-price");


  let totalPriceTitle = document.createElement("h3");

  totalPriceTitle.classList.add("total-price-title");

  divTotalPrice.appendChild(totalPriceTitle);

  totalPriceTitle.innerText = "Total:";


  let totalPrice = document.createElement("h3");

  totalPrice.classList.add("total-price");

  divTotalPrice.appendChild(totalPrice);

  totalPrice.innerText = `R$ ${total.toFixed(2)}`;

}

function updateTotalAndQuantity(itemsAddedToCart) {

  // Variáveis que recebem o valor total e quantidade dos produtos 
  // adicionados ao carrinho:

  total = 0;

  quantity = 0;

  // Percorre todos os produtos dentro do array e atualiza as variáveis 
  // total e quantity:

  for (let i = 0; i < itemsAddedToCart.length; i++) {

    total += itemsAddedToCart[i].value;

    quantity = itemsAddedToCart.length;

  }

  console.log(total);

  console.log(quantity);

  let totalQuantity = document.querySelector(".total-quantity");

  totalQuantity.innerText = quantity;


  let totalPrice = document.querySelector(".total-price");

  totalPrice.innerText = `R$ ${total.toFixed(2)}`;

}

function addItemsToCart(itemsAddedToCart) {

  let cartItems = document.querySelector(".cart-items");

  createRemoveButton(cartItems, itemsAddedToCart);

}

function createRemoveButton(cartItems, itemsAddedToCart) {


  cartItems.innerText = "";


  for (let i = 0; i < itemsAddedToCart.length; i++) {


    itemsAddedToCart[i].cartID = i;

    let productAdded = document.createElement("div");

    productAdded.classList.add("product-added");

    cartItems.appendChild(productAdded);


    let productImage = document.createElement("div");

    productImage.classList.add("fig-box-in-cart")

    productAdded.appendChild(productImage);


    let figure = document.createElement("figure");

    figure.classList.add("figure-in-cart");

    productImage.appendChild(figure);


    let img = document.createElement("img");

    img.classList.add("product-image-in-cart");

    figure.appendChild(img);

    img.setAttribute("src", itemsAddedToCart[i].img);

    img.setAttribute("alt", itemsAddedToCart[i].nameItem);


    let figcaption = document.createElement("figcaption");

    figcaption.classList.add("figcaption");

    figure.appendChild(figcaption);


    let productDescription = document.createElement("div");

    productDescription.classList.add("product-description-in-cart")

    productAdded.appendChild(productDescription);


    let productName = document.createElement("h3");

    productName.classList.add("product-name-in-cart");

    productName.innerText = itemsAddedToCart[i].nameItem;

    productDescription.appendChild(productName);


    let productPrice = document.createElement("h3");

    productPrice.classList.add("product-price-in-cart");

    productPrice.innerText = `R$ ${itemsAddedToCart[i].value.toFixed(2)}`;

    productDescription.appendChild(productPrice);


    let removeProduct = document.createElement("button");

    removeProduct.classList.add("remove-product-in-cart", `${itemsAddedToCart[i].id}`);

    removeProduct.setAttribute("id", `${i}`);

    removeProduct.innerText = "Remover produto";

    productDescription.appendChild(removeProduct);



    removeProduct.addEventListener("click", function () {

      console.log("Botão remover produto clicado");

      //console.log(itemsAddedToCart[itemsAddedToCart.length - 1].id);

      //let updatedCart = itemsAddedToCart;

      //let id = document.getElementsByClassName(i);

      console.log(`Removendo item com id: ${itemsAddedToCart[i].cartID}`);


      itemsAddedToCart = removeProductFromCart(itemsAddedToCart, itemsAddedToCart[i].cartID);

      //console.log("Removido 1 item");

      addItemsToCart(itemsAddedToCart);

      updateTotalAndQuantity(itemsAddedToCart);

      //productAdded.remove();

    });

  }

}

function removeProductFromCart(updatedCart, idToRemove) {

  for (let i = 0; i < updatedCart.length; i++) {

    if (idToRemove === i) {

      updatedCart.splice(i, 1);

      console.log("Removido 1 item");

    }

  }

  return updatedCart;

}
