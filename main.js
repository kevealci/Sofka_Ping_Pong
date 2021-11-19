import { Bar } from './Bar.mjs';
import { Board } from './Board.mjs';
import { BoardView } from './BoardView.mjs';

window.addEventListener('load', main);

function main() {
  let board = new Board(800, 400);
  let bar1 = new Bar(20, 100, 40, 100);
  let bar2 = new Bar(80, 100, 40, 100);
  board.addBar(bar1, bar2);
  let canvas = document.getElementById('canvas');
  let board_view = new BoardView(canvas, board);
  board_view.graficar();
  //console.log(board_view);
  //console.log(board);
  //console.log(bar1);
}
