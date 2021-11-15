export class Board {
  width;
  height;
  playing;
  game_over;
  bars;
  ball;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.playing = false;
    this.game_over = false;
    this.bars = [];
    this.ball = null;
  }

  getElements() {
    let elements = this.bars;
    elements.push(this.ball);
    return elements;
  }
}
