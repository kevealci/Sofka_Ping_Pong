export class BoardView {
  // Declaracion de los atributos
  canvas;
  board;
  ctx;
  // Inicializacion de los atributos
  constructor(canvas, board) {
    this.canvas = canvas;
    this.canvas.width = board.width;
    this.canvas.height = board.height;
    this.board = board;
    this.ctx = canvas.getContext('2d');
  }
  // Funcion que detecta la colision entre la pelota y las barras
  checkCollisions() {
    let [bars] = this.board.getBars();
    for (let i = 0; i < bars.length; i++) {
      let bar = bars[i];
      if (this.hit(bar, this.board.getBall())) {
        this.board.getBall().collision(bar);
      }
    }
  }
  // Funcion que retorna si un elementoA golpea a un elementoB
  hit(elementoA, elementoB) {
    // Revisa si a colisiona con b
    let hit = false;
    // Colisiones horizontales
    if (
      elementoB.getX() + elementoB.getWidth() >= elementoA.getX() &&
      elementoB.getX() < elementoA.getX() + elementoA.getWidth()
    ) {
      // Colisiones verticales
      if (
        elementoB.getY() + elementoB.getHeight() >= elementoA.getY() &&
        elementoB.getY() < elementoA.getY() + elementoA.getHeight()
      ) {
        hit = true;
      }
    }

    // Colision de a con b
    if (
      elementoB.getX() <= elementoA.getX() &&
      elementoB.getX() + elementoB.getWidth() >= elementoA.getX() + elementoA.getWidth()
    ) {
      if (
        elementoB.getY() <= elementoA.getY() &&
        elementoB.getY() + elementoB.getHeight() >= elementoA.getY() + elementoA.getHeight()
      ) {
        hit = true;
      }
    }

    // Colision de b con a
    if (
      elementoA.getX() <= elementoB.getX() &&
      elementoA.getX() + elementoA.getWidth() >= elementoB.getX() + elementoB.getWidth()
    ) {
      if (
        elementoA.getY() <= elementoB.getY() &&
        elementoA.getY() + elementoA.getHeight() >= elementoB.getY() + elementoB.getHeight()
      ) {
        hit = true;
      }
    }
    return hit;
  }
  // Funcionalidades del juego
  play() {
    if (this.board.getPlaying()) {
      this.clean();
      this.graficar();
      this.checkCollisions();
      this.board.getBall().move();
    }
  }
  // Grafica los elementos del board
  graficar() {
    let [elementos] = this.board.getBars();
    for (let i = 0; i < elementos.length; i++) {
      let elemento = elementos[i];
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
  // Resetea los graficos al momento que se detecta un cambio en las barras
  clean() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
