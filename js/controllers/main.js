import { servicesProducts } from "../services/products-services.js";

const productosContenedor = document.querySelector("[data-producto]");
const formulario = document.querySelector("[data-form]");

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
            <button data-eliminar class="boton-eliminar" id-data="${id}">
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

formulario.addEventListener("submit", ()=> {
    event.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

   /*  console.log(nombre)
    console.log(precio)
    console.log(imagen)  */

    servicesProducts.crearProductos(nombre, precio, imagen).then((res) => console.log(res)).catch((err) => console.log(err))

    limpiarForm();
});

render();

const limpiarForm = () => {
    document.querySelector("[data-titulo]").value = "";
    document.querySelector("[data-precio]").value = "";
    document.querySelector("[data-imagen]").value = "";
  };
  