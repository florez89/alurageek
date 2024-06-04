import { servicesProducts } from "../services/products-services.js";

const productosContenedor = document.querySelector("[data-producto]");

function createCard (name, price, imagen, id) {
    const card = document.createElement("div");
    //card.classList.add("card"); (esta línea coloca doble mi clase)

    card.innerHTML= `
    <div class="card">
        <figure>
            <img class="img-contenedor" src="${imagen}" alt="${name}">
        <figcaption class="card-contenedor--info">${name}</figcaption>
        </figure>
        <div class="card-contenedor--precio">
            <p>$${price}</p>
            <button class="boton-eliminar" id-data="${id}">
                <img src="./img/trash-2.svg" alt="img-eliminar" class="img-trash">
            </button>
        </div>
    </div>  

    `;

    productosContenedor.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProducts = await servicesProducts.productList();
        // console.log(listProducts);
        
        listProducts.forEach(product => {
            productosContenedor.appendChild(
                createCard(
                    product.name,
                    product.price,
                    product.imagen,
                    product.id
                )
            )
        });

    } catch (error) {
        console.log(error)
    }
};

render();