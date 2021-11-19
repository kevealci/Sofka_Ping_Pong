export class Board {
  // Declaracion de los atributos
  width;
  height;
  playing;
  game_over;
  bars;
  ball;
  // Inicializacion de los atributos
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.game_over = false;
    this.bars = [];
    this.ball = null;
  }
  // Getters y setters
  getPlaying() {
    return this.playing;
  }

  setPlaying(playing) {
    this.playing = playing;
  }

  getBars() {
    return this.bars;
  }

  getBall() {
    return this.ball;
  }
  // Funciones para agregar las barras y la pelota al board
  addBar(...bar) {
    this.bars.push(bar);
  }

  addBall(ball) {
    this.ball = ball;
  }
}
