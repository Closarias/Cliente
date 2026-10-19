window.addEventListener("load", function() {

    if (localStorage.getItem("color")&&localStorage.getItem("tamano")&&localStorage.getItem("tipografia")){
        colorPreferencia=localStorage.getItem("color");
        tamanoPreferencia=localStorage.getItem("tamano");
        tipografiaPreferencia=localStorage.getItem("tipografia");

        contenido.style.color=colorPreferencia;
        contenido.style.fontFamily=tipografiaPreferencia;
        contenido.style.fontSize=tamanoPreferencia+"px";
    }

    document.forms[0].addEventListener("submit", function() {
        event.preventDefault();

        //colorFormulario = document.forms[0].elements[0].value
        colorFormulario = color.value;
        tamanoFormulario = tamano.value;
        tipoFormulario = tipografia.options[tipografia.options.selectedIndex].value;

        console.log(colorFormulario+" /"+tamanoFormulario+" /"+tipoFormulario);

        localStorage.setItem("color",colorFormulario);
        localStorage.setItem("tamano",tamanoFormulario);
        localStorage.setItem("tipografia",tipoFormulario);

        contenido.style.color=colorFormulario;
        contenido.style.fontFamily=tipoFormulario;
        contenido.style.fontSize=tamanoFormulario+"px";
    })
})