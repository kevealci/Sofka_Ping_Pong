export class Bar {
  // Declaracion de los atributos
  x;
  y;
  width;
  height;
  speed;
  // Inicializacion de los atributos
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 10;
  }
  // Getters y setters
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
  // Funciones que actualizan la posicion de la barra
  down() {
    this.y += this.speed;
  }

  up() {
    this.y -= this.speed;
  }
}
