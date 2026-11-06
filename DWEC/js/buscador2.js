window.addEventListener('load', function(){
    document.forms[0].addEventListener('submit', function(evento){

        evento.preventDefault();

        textoLargo=texto.value;
        terminoBusqueda=termino.value;

        nuevoTexto=textoLargo.replace(terminoBusqueda,"<b>"+terminoBusqueda+"</b>");

        document.querySelector("p").innerHTML=nuevoTexto;
    })
})