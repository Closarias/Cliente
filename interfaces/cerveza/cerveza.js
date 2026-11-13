let mayor = false;
window.addEventListener("load",function(){
    localStorage.getItem("nombre")?(mayor=comprobar(localStorage.getItem("fecha")),entrar()):mostrar('block');
    document.forms[0].onsubmit=function(evento){
        /*18 años son 567648000000 milisegundos*/
        evento.preventDefault();
        mayor = comprobar(nacimiento.value);
        localStorage.setItem("nombre", nombre.value);
        localStorage.setItem("fecha", nacimiento.value);
        mostrar('none');
    }
});

//Función muestra el formulario
function mostrar(visibilidad){
    document.querySelectorAll("div")[0].style.display=visibilidad;
}
//Función muestra el contenido de la wen cuando te registra o ya estabas registrado
function entrar(){
    suFecha.getDate() == new Date().getDate() && suFecha.getMonth() == new Date().getMonth()?felicitar():void(0);

    document.querySelectorAll("div")[1].style.display="block";
    document.querySelectorAll("div")[1].innerHTML+=mayor?"<p>Bebidas</p>":"<p>Menores no</p>";
}
//Esta función comprueba tu edad cuando te registra o cuando entra otra vez
function comprobar(fechita){
    let milisegundos=18*1000*60*60*24*365;
    suFecha=new Date(fechita);
}
function felicitar(){
    alert(`Felicidades, hoy cumples ${new Date().getFullYear()-suFecha.getFullYear()} años`)
}