export class BoardView {
  canvas;
  board;
  ctx;

  constructor(canvas, board) {
    this.canvas = canvas;
    this.canvas.width = board.width;
    this.canvas.height = board.height;
    this.board = board;
    this.ctx = canvas.getContext('2d');
  }

  graficar() {
    let [elementos] = this.board.getBars();
    //console.log(elementos);
    for (let i = 0; i < elementos.length; i++) {
      let elemento = elementos[i];
      //console.log(elemento);
      this.ctx.fillRect(
        elemento.getX(),
        elemento.getY(),
        elemento.getWidth(),
        elemento.getHeight()
      );
    }
  }
}
