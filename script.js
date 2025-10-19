const products = [
    { id: 1, name: "Limpeza de Pele", price: 79.99,image: "./img/LIMPEZA DE PELE 2.0.jpg" },
    { id: 2, name: "Esmaltaria Simples", price: 49.99, image: "./img/unhas esmaltadas roxa.jpeg" },
    { id: 3, name: "Alongamento de Cílios", price: 119.99, image: "./img/FAZENDO CILIOS.jpeg" },
    { id: 4, name: "Escova Simples", price: 19.99, image: "./img/escova no cabelo loiro.jpeg" },
    { id: 5, name: "Alongamento Tips", price: 49.99, image: "./img/unhas esmaltadas nude.jpeg" },
    { id: 6, name: "Lavagem das Madeixas", price: 49.99, image: "./img/lavando cabelo.jpeg" },
];
let cart = [];

function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="100%">
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById("cart-count").innerText = cart.length;
    alert(`${product.name} adicionado ao carrinho!`);
}

document.addEventListener("DOMContentLoaded", renderProducts);