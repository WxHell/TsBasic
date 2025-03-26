import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 10, 20);
let recTangle = new Rectangle(10, 20, 30, 40);

let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(recTangle);

for (let tempShape of theShapes) {
  console.log(tempShape.getInfo());
  console.log(tempShape.calculateArea());
  console.log();
}
