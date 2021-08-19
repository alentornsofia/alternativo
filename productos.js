const listadoProductos = "https://alentornsofia.github.io/alternativo/productos.json";

document.addEventListener("DOMContentLoaded", function (e) {

    function cargarProductos(url) {

        fetch(url)
            .then(respuesta => respuesta.json())

            .then(datos => {
                for (i = 0; i < datos.length; i++) {

                    let productos = document.getElementById("listaproductos");
                    productos.innerHTML += `

                <p>Precio: `+ datos[i].precio + ` </p>;
                <p>Nombre:  `+ datos[i].nombre + `</p>;
                <p>Descripción:  `+ datos[i].tema + `</p>;
                `

                }
                
            });
           
    }
    cargarProductos(listadoProductos);
});