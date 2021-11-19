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

  play() {
    if (this.board.getPlaying()) {
      this.clean();
      this.graficar();
      this.board.getBall().move();
    }
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

    let ball = this.board.getBall();
    this.ctx.beginPath();
    this.ctx.arc(ball.getX(), ball.getY(), ball.getRadius(), 0, 7);
    this.ctx.fill();
    this.ctx.closePath();
  }

  clean() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
