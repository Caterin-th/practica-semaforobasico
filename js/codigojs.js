
function encendidoRojo(){
    let circuloRojo = document.getElementById("circulo-rojo");
    circuloRojo.setAttribute("class", "encendido");
}

function apagadoRojo(){
    let circuloRojo = document.getElementById("circulo-rojo");
    circuloRojo.setAttribute("class", "apagado");
}

function encendidoAmarillo(){
    let circuloAmarillo = document.getElementById("circulo-amarillo");
    circuloAmarillo.setAttribute("class", "encendido");
}

function apagadoAmarillo(){
    let circuloAmarillo = document.getElementById("circulo-amarillo");
    circuloAmarillo.setAttribute("class", "apagado");
}

function encendidoVerde(){
    let circuloVerde = document.getElementById("circulo-verde");
    circuloVerde.setAttribute("class", "encendido");
}

function apagadoVerde(){
    let circuloVerde = document.getElementById("circulo-verde");
    circuloVerde.setAttribute("class", "apagado");
}

function iniciarSemaforo(){
    apagadoRojo();
    apagadoAmarillo();
    apagadoVerde();
    setTimeout(encendidoRojo,500)
    setTimeout(encendidoAmarillo,20000)
    setTimeout(apagadoRojo,20000)
    setTimeout(encendidoVerde,23000)    
    setTimeout(apagadoAmarillo,23000)
    setTimeout(apagadoVerde,43000)
    setTimeout(iniciarSemaforo,43000)
}



window.addEventListener('load', iniciarSemaforo)

