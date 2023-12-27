let botonElement = document.getElementById('boton-cambiar-cita');
let citaElement = document.getElementById('cita');
let autorElement = document.getElementById('autor');

function generarEnteroRandom(min = 0, max = 0) {
    // Sin incluir max en los valores posibles
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
    let indiceAleatorio = generarEnteroRandom(0, citas.length);
    citaElement.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElement.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElement.addEventListener('click', cambiarCita)