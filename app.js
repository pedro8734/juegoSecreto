/*let parrafo = document.querySelector('p');
parrafo.innerHTML = `Selecciona un numero del 1 al ${numeroMaximo}`;*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSolteado = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return
}

function verificarIntento() {
    console.log(intentos)
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos ===1 ) ? 'vez' :'veces' }`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acepto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', "el numero secreto es menor")
        } else {
            asignarTextoElemento('p', "el numero secreto es mayor")
        }
    }
    intentos++;
    limpiarCaja();

    return
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generaNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroSolteado);
    //si ya solteamos todos los numeros
    if (listaNumeroSolteado.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se soltearon todos los numeros posibles')
    } else {


        // si el numero generado esta incluido en la lista 
        if (listaNumeroSolteado.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else {
            listaNumeroSolteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', "Juego del numero secreto actualizado");
    asignarTextoElemento(`Selecciona un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpar caja
    limpiarCaja();
    // generar numero aelatorio
    //indicar mensaje de intervalode numeros
    // reiniciar el  numero de intentos 
    condicionesIniciales();
    // desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
condicionesIniciales();