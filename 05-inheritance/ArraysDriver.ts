import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 20);
let recTangle = new Rectangle(10, 20, 30, 40);

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(recTangle);
theShapes.push(new Shape(10, 20));
for (let tempShape of theShapes) {
  console.log(tempShape.getInfo());
}
