window.addEventListener('load', function(){
    document.forms[0].addEventListener('submit', function(evento){

        evento.preventDefault();

        textoLargo=document.querySelector("p").innerHTML;
        terminoBusqueda=termino.value;

        nuevoTexto=textoLargo.replace(terminoBusqueda, "<mark>"+terminoBusqueda+"</mark>");

        document.querySelector("p").innerHTML=nuevoTexto;
    })
})