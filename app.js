//Declarción de variables de trabajo
let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; 
}

function verificarIntento() {
  // numeroDeUsuario = document.querySelector('input');
   numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);   

   //console.log(`Numero iguales: ${numeroDeUsuario == numeroSecreto}`)
   if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Felicidades, acertaste el número en ${intentos} ${(intentos === 1) ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
       // document.getElementById('reiniciar'). attributes('enabled');

   } else {
        //El usuario no acertó 
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número es menor');
        } else {
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja()
    }
   return;
}

function limpiarCaja() {
   //let valorCaja =  document.querySelector('#valorUsuario');
   //valorCaja.value = '';

   document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1; 
   // console.log(`Numero Secreto: ${numeroGenerado}`);
   // console.log(listaNumerosSorteados);

    //Si ya soteamos todos los numero 
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');

    }
    else {
         //Si el numero generado ya existe en la lista debemos volver a generar si no sigue igual 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado; 
        } 
    }   
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número entre el 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    //console.log(`Numero secreto: ${numeroSecreto}`)
    intentos = 1; 
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar el mensaje de intervalo de números    
    //Generar el número aleatorio    
    //Reiniciar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo de juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();