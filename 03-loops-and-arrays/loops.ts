// let rewies: any = ["a", 1, 2, 3, "berk", true];
// // for (let i = 0; i < rewies.length; i++) {
// //   console.log(i);
// // }
let numbers: number[] = [1, 2, 3, 4, 5];
let total: number = 0;
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  total += numbers[i];
}
let ort: number = total / numbers.length;
console.log(`Ortalama =${ort}`);

let sports: any[] = ["golf", "tennis", "f1", "boks"];
// for (let i = 0; i < sports.length; i++) {
//   console.log(sports[i]);
// }
for (let tempSports of sports) {
  if (tempSports == "f1") {
    console.log(`My favorite ${tempSports}`);
  } else {
    console.log(tempSports);
  }
}
sports.push("Basketball");
sports.push("Fubol");
for (let tempSports of sports) {
  console.log(tempSports);
}
