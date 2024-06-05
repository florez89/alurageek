const productList = () => {
    return fetch("https://api-fake-geek-cars.vercel.app/productos")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};


const crearProductos =(name, price, imagen) => {
    return fetch ("https://api-fake-geek-cars.vercel.app/productos", {
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
    return fetch(`https://api-fake-geek-cars.vercel.app/productos/${id}`, {
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