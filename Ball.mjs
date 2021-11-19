export class Ball {
  x;
  y;
  radius;
  speedY;
  speedX;

  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = 3;
    this.speedY = 0;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getRadius() {
    return this.radius;
  }
}
