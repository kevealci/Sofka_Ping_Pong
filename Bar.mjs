export class Bar {
  x;
  y;
  width;
  height;
  speed;

  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 10;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  down() {
    this.y += this.speed;
  }

  up() {
    this.y -= this.speed;
  }
}
