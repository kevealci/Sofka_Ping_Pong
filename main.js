import { Board } from './Board';
import { BoardView } from './BoardView';

window.addEventListener('load', main);

function main() {
  let board = new Board(800, 400);
  let canvas = document.getElementById('canvas');
  let board_view = new BoardView(canvas, board);
}
