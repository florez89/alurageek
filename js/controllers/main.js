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

    const botonBorrar = card.querySelector("[data-eliminar]");
    botonBorrar.addEventListener("click", async () => {
      try {
        await servicesProducts.borrarProducto(id);
        card.remove();
      } catch (error) {
        console.error("Error al borrar el producto:", error);
      }
    });

    productosContenedor.appendChild(card);
    return card;
}

const render = async () => {
    try {
        const listProducts = await servicesProducts.productList();
        // console.log(listProducts);
        
        listProducts.forEach((product) => {
    
                createCard(
                    product.name,
                    product.price,
                    product.imagen,
                    product.id
                );
        
        });

    } catch (error) {
        console.error("Error al cargar los productos:", error);
    }
};

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

   /*  console.log(nombre)
    console.log(precio)
    console.log(imagen)  */

    try {
        const nuevoProducto = await servicesProducts.crearProductos(
          nombre,
          precio,
          imagen
        );

        createCard(
            nuevoProducto.name,
            nuevoProducto.price,
            nuevoProducto.imagen,
            nuevoProducto.id
          );
        } catch (error) {
            console.error("Error al crear el producto:", error);
          }
        
          
          limpiarForm();
        });
    

render();

const limpiarForm = () => {
    document.querySelector("[data-nombre]").value = "";
    document.querySelector("[data-precio]").value = "";
    document.querySelector("[data-imagen]").value = "";
  };
