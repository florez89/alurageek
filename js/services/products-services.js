const productList = () => {
    return fetch("http://localhost:3000/productos")
        .then((res) => res.json())
        .catch((err) => console.log(err));
};


const crearProductos =(name, price, imagen) => {
    return fetch ("http://localhost:3000/productos", {
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

export const servicesProducts = {
    productList,
    crearProductos,
};