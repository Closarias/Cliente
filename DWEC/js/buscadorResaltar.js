window.addEventListener('load', function(){
    document.forms[0].addEventListener('submit', function(evento){

        evento.preventDefault();

        textoLargo=document.querySelector("p").innerHTML;
        terminoBusqueda=termino.value;

        const expresion=new RegExp(terminoBusqueda, 'g');

        nuevoTexto=textoLargo.replace(expresion, "<mark>"+terminoBusqueda+"</mark>");

        document.querySelector("p").innerHTML=nuevoTexto;
    })
})