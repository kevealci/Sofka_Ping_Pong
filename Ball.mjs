export class Ball {
  // Declaracion de los atributos
  x;
  y;
  radius;
  speedY;
  speedX;
  direction;
  bounceAngle;
  maxBounceAngle;
  speed;
  width;
  // Inicializacion de los atributos
  constructor(x, y, radius, width) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = 3;
    this.speedY = 0;
    this.direction = 1;
    this.bounceAngle = 0;
    this.maxBounceAngle = Math.PI / 12;
    this.speed = 3;
    this.width = width;
  }
  // Funcion que realiza el efecto de rebote de la pelota y setea la direccion al golpear.
  collision(bar) {
    let relativeIntersectY = bar.getY() + bar.getHeight() / 2 - this.y;
    let normalizedIntersectY = relativeIntersectY / (bar.getHeight() / 2);

    this.bounceAngle = normalizedIntersectY * this.maxBounceAngle;

    this.speedY = this.speed * -Math.sin(this.bounceAngle);
    this.speedX = this.speed * Math.cos(this.bounceAngle);

    if (this.x > this.width / 2) this.direction = -1;
    else this.direction = 1;
  }
  // Funcion que actualiza el valor de la velocidad que tiene la pelota
  move() {
    this.x += this.speedX * this.direction;
    this.y += this.speedY * this.direction;
  }
  // Getters y setters
  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getWidth() {
    return this.radius * 2;
  }

  getHeight() {
    return this.radius * 2;
  }

  getRadius() {
    return this.radius;
  }
}
