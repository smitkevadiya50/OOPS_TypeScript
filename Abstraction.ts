/*
Here, Shape is an abstract class with an abstract method calculateArea. Circle and Square are concrete subclasses that implement the calculateArea method. This demonstrates abstraction. The code also uses a for loop to iterate over an array of Shape objects.
*/
abstract class Shape {
  abstract calculateArea(): number;
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  calculateArea(): number {
    return this.side * this.side;
  }
}

let shapes: Shape[] = [];
shapes.push(new Circle(5));
shapes.push(new Square(6));

for (let shape of shapes) {
  console.log(`Area: ${shape.calculateArea()}`);
}

/*
Output:

Area: 78.53981633974483
Area: 36
*/