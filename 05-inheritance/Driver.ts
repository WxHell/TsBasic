import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());
let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());
let recTangle = new Rectangle(10, 20, 30, 40);
console.log(recTangle.getInfo());
console.log(recTangle.getAlan());
