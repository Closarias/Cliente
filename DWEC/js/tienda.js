let total=0;
let gastos;
let descuento=false;
let tiempo=30000;

window.addEventListener("load", function() {
    sesion=setTimeout(cerrar, tiempo);

    document.querySelectorAll("button")[0].onclick = function() {
        clearTimeout(sesion);
        sesion=setTimeout(cerrar, tiempo);
        anadir("El Quijote", 1, 22);
    }
    document.querySelectorAll("button")[1].onclick = function() {
        clearTimeout(sesion);
        sesion=setTimeout(cerrar, tiempo);
        anadir("Levis", 3, 62);
    }
    document.querySelectorAll("button")[2].onclick = function() {
        clearTimeout(sesion);
        sesion=setTimeout(cerrar, tiempo);
        anadir("Fabada", 2, 2.50);
    }
})

function anadir(producto, iva, precio) {
    total+=precio;

    switch (iva){
        case 1:
            precioBase=precio*0.96
            ivaTotal=precio*0.04;
            tipoIva="4";
            descuento=true;
            break;

        case 2:
            precioBase=precio*0.90;
            ivaTotal=precio*0.1;
            tipoIva="10";
            break;

        case 3:
            precioBase=precio*0.79;
            ivaTotal=precio*0.21;
            tipoIva="21";
            break;
    }

    //template string
    cadena=`<p><span>${producto}</span><span>${precioBase.toFixed(2)}</span><span>${tipoIva}</span><span>${ivaTotal}</span><span>${precio}</span></p>`;

    document.querySelectorAll("article")[0].innerHTML+=cadena;
    gastos=0;
    (total>=50||descuento)?gastos=0:gastos=5.99;
    document.querySelectorAll("article")[1].innerHTML=`<p>Gastos de envío: ${gastos} Total: ${(total + gastos).toFixed(2)}</p>`;
}

function cerrar(){
    total=0;
    descuento=false;
    document.querySelectorAll("section")[1].innerHTML="<p>Tú sesión ha caducado</p><p><button onclick='reiniciar()'>Reiniciar</button></p>";
}

function reiniciar(){
    clearTimeout(sesion);
    sesion=setTimeout(cerrar, tiempo);
    document.querySelectorAll("section")[1].innerHTML="<h2>Mi cesta</h2><article><p><span>Producto</span><span>Precio sin IVA</span><span>Tipo IVA</span><span>IVA</span><span>Importe</span></p></article><article></article>"
}