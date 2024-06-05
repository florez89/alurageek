const productList = () => {
    return fetch("https://666029155425580055b28af9.mockapi.io/productos")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};


const crearProductos =(name, price, imagen) => {
    return fetch ("https://666029155425580055b28af9.mockapi.io/productos", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            imagen,
        }),
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};


const borrarProducto = (id) => {
    return fetch(`https://666029155425580055b28af9.mockapi.io/productos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };



export const servicesProducts = {
    productList,
    crearProductos,
    borrarProducto,
};