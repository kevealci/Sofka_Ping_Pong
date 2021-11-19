// Importaciones de los modulos Js
import { Ball } from './Ball.mjs';
import { Bar } from './Bar.mjs';
import { Board } from './Board.mjs';
import { BoardView } from './BoardView.mjs';

// Seteamos el alto y el ancho del canvas
const width = 800;
const height = 400;
// Instanciamos los objetos necesarios
const board = new Board(width, height);
const bar1 = new Bar(width * 0.05, height * 0.35, 30, 100);
const bar2 = new Bar(width * 0.92, height * 0.35, 30, 100);
const ball = new Ball(width * 0.5, height * 0.5, 10, width);
// Se agrega las barras y la pelota al board
board.addBar(bar1, bar2);
board.addBall(ball);
// Se procede a asignar el contenido al canvas del juego
let canvas = document.getElementById('canvas');
let board_view = new BoardView(canvas, board);
board_view.graficar();

// Se declara un funcion que este atentos a los cambios en el juego
window.requestAnimationFrame(controller);

// Se escucha el evento de keydown y se asigna la funcion correspondiente
document.addEventListener('keydown', function (ev) {
  if (ev.code === 'ArrowUp') {
    ev.preventDefault();
    bar2.up();
  } else if (ev.code === 'ArrowDown') {
    ev.preventDefault();
    bar2.down();
  } else if (ev.code === 'KeyW') {
    ev.preventDefault();
    bar1.up();
  } else if (ev.code === 'KeyS') {
    ev.preventDefault();
    bar1.down();
  } else if (ev.code === 'Space') {
    ev.preventDefault();
    board.setPlaying(!board.getPlaying());
  }
});

// Funcion que controla el juego
function controller() {
  board_view.play();
  window.requestAnimationFrame(controller);
}
