let indice=0;

window.addEventListener("load", function(){

    document.forms[0].addEventListener("submit", function(evento){

        evento.preventDefault();

        textoLargo=texto.value;
        terminoBusqueda=termino.value;

        resultado=textoLargo.indexOf(terminoBusqueda, indice);

        document.querySelector("p").innerHTML=resultado>=0?"Aparece en la posición: "+(resultado+1):"No aparece";

        indice=resultado+1;
    })
})