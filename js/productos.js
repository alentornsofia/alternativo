var arrayProductos;
var minPiezas;
var maxPiezas;
var buscar;

function sortproductos(criterio, array) {
    let result = [];

    if (criterio === 1) {
        result = array.sort(function (a, b) { 
            if (a.piezas < b.piezas) { return -1; } 
            if (a.piezas > b.piezas) { return 1; } 
            return 0;
        });

    }

    return result;
}

function showproductos(array) {

    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        let libro = array[i];

        if ((minPiezas == undefined || libro.piezas >= minPiezas) &&
            (maxPiezas == undefined || libro.piezas <= maxPiezas)) {

                if (buscar == undefined || libro.nombre.toLowerCase().indexOf(buscar) != -1){

                    contenido += `  <div class="col-lg-3 col-md-2 col-sm-6 col-12">
                 
                    <img class="bd-placeholder-img card-img-top style_prevu_kit"  src="`+ libro.imgSrc +`">
                    
                    
                    <div class="card-body" >
                    <h5>`+ libro.nombre +`</h5>
                    <small>` + libro.medidas + `</small>
                    <p class="card-text">` + libro.piezas + ` piezas </p>
                    <p class="mb-1"><strong>` + libro.precio + ` </strong></p>
                      
                    </div>
                  </a>
                </div>`
            }
                
        }
        document.getElementById("listaProductos").innerHTML = contenido;
    }
}


function verLibro(id){
    localStorage.setItem('libro', JSON.stringify({ libroId: id}));
    window.location = 'ver-libro.html';
}


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTOS).then(function (resultObj) {
        if (resultObj.status === "ok") {
            arrayProductos = resultObj.data.productos;
            
            arrayProductos = sortproductos(1, arrayProductos);

            showproductos(arrayProductos);
        }
    });

    document.getElementById("buscador").addEventListener('input', function(){

        buscar = document.getElementById("buscador").value.toLowerCase();

        showproductos(arrayProductos);

    });

    document.getElementById("limpBusc").addEventListener("click", function () {
        document.getElementById("buscador").value = "";

        buscar = undefined;
        
        showproductos(arrayProductos);
    });




});

function limpiarBuscador (){
    document.getElementById("buscador").value = "";

    buscar = undefined;
    
    showproductos(arrayProductos);
}

document.getElementById("todos").addEventListener("click", function () {

    showproductos(arrayProductos);
    
})

document.getElementById("25").addEventListener("click", function () {

    document.getElementById("listaProductos").innerHTML = "";
    const piezas = arrayProductos.filter(producto => producto.piezas == "25");
    showproductos(piezas)
    
})

document.getElementById("60").addEventListener("click", function () {

    document.getElementById("listaProductos").innerHTML = "";
    const piezas = arrayProductos.filter(producto => producto.piezas == "60");
    showproductos(piezas)
    
})
document.getElementById("100").addEventListener("click", function () {

    document.getElementById("listaProductos").innerHTML = "";
    const piezas = arrayProductos.filter(producto => producto.piezas == "100");
    showproductos(piezas)
    
})
document.getElementById("1000").addEventListener("click", function () {

    document.getElementById("listaProductos").innerHTML = "";
    const piezas = arrayProductos.filter(producto => producto.piezas == "1000");
    showproductos(piezas)
    
})
document.getElementById("1500").addEventListener("click", function () {

    document.getElementById("listaProductos").innerHTML = "";
    const piezas = arrayProductos.filter(producto => producto.piezas == "1500");
    showproductos(piezas)
    
})
document.getElementById("2000").addEventListener("click", function () {

    document.getElementById("listaProductos").innerHTML = "";
    const piezas = arrayProductos.filter(producto => producto.piezas == "2000");
    showproductos(piezas)
    
})




/*


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTOS).then(function (resultObj) {      
        if (resultObj.status === "ok") {

            lista = resultObj.data.productos
            mostrarProductos (lista)

                                     
        }
    });


});

function mostrarProductos(productos) {

    

    for (i = 0; i < productos.length; i++){

      let producto =  productos[i]
       
      listado = ""

      productos.forEach(function (producto) {
      listado += 

    
    `   

                <div class="col-lg-4 col-md-4 col-sm-6 col-12" style=" width: 25rem; margin:10px">
                 
                    <img class="bd-placeholder-img card-img-top"  src="`+ producto.imgSrc +`">
                    <h5>`+ producto.nombre +`</h5>
                    
                    <div class="card-body" >
                    <small>` + producto.medidas + `</small>
                    <p class="card-text">` + producto.piezas + ` piezas </p>
                    <p class="mb-1"><strong>` + producto.precio + ` </strong></p>
                      
                    </div>
                  </a>
                </div>`
                
            })
            document.getElementById("listaProductos").innerHTML = listado;    
        } }*/