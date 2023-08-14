// 실습
class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // 메소드
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  // 대각선 메소드
  getDiagonal() {
    return Math.sqrt(this.width * this.width + this.height * this.height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (this.height * this.width) / 2;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

let rec = new Rectangle(3, 4);
let tri = new Triangle(3, 4);
let cir = new Circle(1, 1, 3);

console.log("사각형 넓이 : ", rec.getArea()); // 12
console.log("사각형 대각선 길이 : ", rec.getDiagonal()); // 5
console.log("삼각형 넓이 : ", tri.getArea()); // 6
console.log("원 넓이 : ", cir.getArea());
