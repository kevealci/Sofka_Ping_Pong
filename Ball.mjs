export class Ball {
  x;
  y;
  radius;
  speedY;
  speedX;
  direction;

  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = 3;
    this.speedY = 0;
    this.direction = 1;
  }

  move() {
    this.x += this.speedX * this.direction;
    this.y += this.speedY * this.direction;
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
