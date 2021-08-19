const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";

document.addEventListener("DOMContentLoaded", function (e) {

    function cargarProductos(url) {

        fetch(url)
            .then(respuesta => respuesta.json())

            .then(datos => {
                for (i = 0; i < datos.length; i++) {

                    let productos = document.getElementById("listaproductos");
                    productos.innerHTML += `

                <p>Precio: `+ datos[i].cost + ` </p>;
                <p>Nombre:  `+ datos[i].name + `</p>;
                <p>Descripción:  `+ datos[i].description + `</p>;
                `

                }
                
            });
           
    }
    cargarProductos(PRODUCTS_URL);
});