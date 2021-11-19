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

window.requestAnimationFrame(controller);

document.addEventListener('keydown', function (ev) {
  ev.preventDefault();
  if (ev.key === 'ArrowUp') {
    bar2.up();
  } else if (ev.key === 'ArrowDown') {
    bar2.down();
  } else if (ev.key === 'w') {
    bar1.up();
  } else if (ev.key === 's') {
    bar1.down();
  }
});

function controller() {
  board_view.play();
  window.requestAnimationFrame(controller);
}
