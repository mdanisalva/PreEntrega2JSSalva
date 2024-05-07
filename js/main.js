let opcion;
let cantidadPersonas;
let precioTotal;
let respuesta;
const precioRioDeJaneiro=100000;
const precioCancun=500000;
const precioSalta=30000;

//Definiendo un array de objetos con el nombre y el puntaje mas alto del jugador
const listaJugadores = [
    { nombre: 'LAR', puntajeMasAlto: 1 },
    { nombre: 'LuAL', puntajeMasAlto: 4 },
    { nombre: 'Kevin93', puntajeMasAlto: 5 },
  ];


//funcion para encontrar un asiento ocupado en el array
function consultarAsiento(numAsiento) {
    return listaJugadores.find((jugador) => {
      console.log(`Compare: ${jugador.nombre}, ${nombreJugador}`);
      return jugador.nombre === nombreJugador;
    });
  }


//Función para asignar un asiento de manera aleatoria
function asignarAsiento() {
    //número aleatorio entre 1 y 100
    let randomNumber = Math.random() * (100 - 1) + 1;
    return Math.floor(randomNumber);
}

do{
    alert("Bienvenido a Aerolíneas Payaso");
    alert("Por favor elija su destino");
    opcion = parseInt(prompt("Destinos: \n\n1. Río de Janeiro \n2. Cancún \n3. Salta"));
    cantidadPersonas=parseInt(prompt("Ingrese la cantidad de pasajeros"));
    switch (opcion) {
        case 1:
            precioTotal=precioRioDeJaneiro*cantidadPersonas;
            break;
        case 2:
            precioTotal=precioCancun*cantidadPersonas;
            break;
        case 3:
            precioTotal=precioSalta*cantidadPersonas;
            break;
        default:
            alert("Opción inválida, por favor seleccione de nuevo su opción");
            break;
    }
    alert("El precio total es de "+precioTotal);
    
    alert("Sus asientos van a ser seleccionados aleaotoriamente");
    for (let i=0;i<cantidadPersonas;i++){
        alert("Su asiento número "+(i+1)+" es "+asignarAsiento())
    }
    respuesta=confirm("Desea seleccionar otro viaje");
} while (respuesta);







