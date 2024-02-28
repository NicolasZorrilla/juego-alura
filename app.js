let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarElementoTexto(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  
  if (numeroDeUsuario === numeroSecreto) {
    asignarElementoTexto('p', `¡Has acertado el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }!`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarElementoTexto('p', 'El número secreto es menor.');
    } else {
      asignarElementoTexto('p', 'El número secreto es mayor.');
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor((Math.random()*numeroMaximo)+1);

  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarElementoTexto('p', 'Ya se sortearon todos los números posibles.');
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarElementoTexto('h1', 'Juego del número secreto');
  asignarElementoTexto('p', `Indica un número entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();