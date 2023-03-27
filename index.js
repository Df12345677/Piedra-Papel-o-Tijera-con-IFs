const botones = document.querySelectorAll(".botones");
const resultadoJugador = document.getElementById("span-eleccion-jugador");
const resultadoEnemigo = document.getElementById("span-eleccion-pc");
const resultadoFinal = document.getElementById("span-resultado-juego");
const parteResultado = document.getElementById("parte-resultado");
const botonResultadoOk = document.getElementById("boton-ok");
const puntosJugador = document.getElementById("puntos-jugador");
const puntosEnemigo = document.getElementById("puntos-enemigo");

const eleccionEnLetras = (numero) => {
  if (numero == 1) return "Piedra";
  if (numero == 2) return "Papel";
  if (numero == 3) return "Tijera";
};

let resultadoEnemigoNumero;
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let puntosJugadorNumero = 0;
let puntosEnemigoNumero = 0;

botones.forEach((eleccionBoton) => {
  eleccionBoton.addEventListener("click", (eleccionEvento) => {
    const eleccionJugador = eleccionEvento.target.innerText;
    resultadoJugador.innerText = eleccionJugador;
    resultadoEnemigoNumero = aleatorio(1, 3);
    const combate = (eleccionJugador, eleccionEnemigo) => {
      if (eleccionEnemigo == eleccionJugador) {
        resultadoFinal.innerText = "Empate";
      } else if (eleccionEnemigo == "Tijera" && eleccionJugador == "Piedra") {
        resultadoFinal.innerText = "Ganaste";
        puntosJugadorNumero++;
        puntosJugador.innerText = puntosJugadorNumero;
      } else if (eleccionEnemigo == "Piedra" && eleccionJugador == "Papel") {
        resultadoFinal.innerText = "Ganaste";
        puntosJugadorNumero++;
        puntosJugador.innerText = puntosJugadorNumero;
      } else if (eleccionEnemigo == "Papel" && eleccionJugador == "Tijera") {
        resultadoFinal.innerText = "Ganaste";
        puntosJugadorNumero++;
        puntosJugador.innerText = puntosJugadorNumero;
      } else {
        resultadoFinal.innerText = "Perdiste";
        puntosEnemigoNumero++;
        puntosEnemigo.innerText = puntosEnemigoNumero;
      }
    };
    const resultadoEnemigoLetra = eleccionEnLetras(resultadoEnemigoNumero);
    resultadoEnemigo.innerText = resultadoEnemigoLetra;
    combate(eleccionJugador, resultadoEnemigoLetra);
    parteResultado.style.display = "flex";
  });
});

botonResultadoOk.addEventListener("click", (eventoBoton) => {
  parteResultado.style.display = "none";
});

window.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    parteResultado.style.display = "none";
  }
});
