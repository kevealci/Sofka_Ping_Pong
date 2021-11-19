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

  addBar(...bar) {
    this.bars.push(bar);
  }

  addBall(ball) {
    this.ball = ball;
  }
}
