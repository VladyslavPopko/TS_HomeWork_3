interface IFigure {
  readonly __name: string;
  readonly color: string;
  calculateArea(): number;
}
interface IAreaCalculation {
  print(): string;
}
abstract class Figure implements IFigure {
  constructor(
    readonly __name: string,
    readonly color: string
  ) {}

  abstract calculateArea(): number;
}

abstract class AreaCalculationFigure extends Figure implements IFigure, IAreaCalculation {
  abstract print(): string;
}

class Circle extends Figure {
  radius: number;
  constructor(radius: number, color: string) {
    super('Circle', color);
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * (this.radius * this.radius);
  }
}

class Triangle extends Figure {
  base: number;
  height: number;

  constructor(base: number, height: number, color: string) {
    super('Triangle', color);
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return (this.base * this.height) / 2;
  }
}

class Rectangle extends AreaCalculationFigure {
  length: number;
  width: number;

  constructor(length: number, width: number, color: string) {
    super('Rectangle', color);
    this.length = length;
    this.width = width;
  }

  calculateArea(): number {
    return this.length * this.width;
  }

  print(): string {
    return `Result is ${this.calculateArea()}`;
  }
}

class Square extends AreaCalculationFigure {
  length: number;

  constructor(length: number, color: string) {
    super('Rectangle', color);
    this.length = length;
  }

  calculateArea(): number {
    return Math.pow(this.length, 2);
  }

  print(): string {
    return `Result is ${this.calculateArea()}`;
  }
}
