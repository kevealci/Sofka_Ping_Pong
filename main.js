import { Ball } from './Ball.mjs';
import { Bar } from './Bar.mjs';
import { Board } from './Board.mjs';
import { BoardView } from './BoardView.mjs';

const width = 800;
const height = 400;

const board = new Board(width, height);
const bar1 = new Bar(width * 0.05, height * 0.35, 30, 100);
const bar2 = new Bar(width * 0.92, height * 0.35, 30, 100);
const ball = new Ball(width * 0.5, height * 0.5, 10);
board.addBar(bar1, bar2);
board.addBall(ball);
let canvas = document.getElementById('canvas');
let board_view = new BoardView(canvas, board);
board_view.graficar();

window.requestAnimationFrame(controller);

document.addEventListener('keydown', function (ev) {
  //console.log(ev);
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

function controller() {
  board_view.play();
  window.requestAnimationFrame(controller);
}
