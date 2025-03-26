var firstName = "Alper";
var lastName = "Berk";
var old = 25;
var boy = 1.75;
var ogrencı = true;
console.log("Hello my name is ".concat(firstName, " lastname ").concat(lastName, " I am ").concat(old, " years old I am ").concat(boy, " tall \u0131 am student ").concat(ogrencı));
// let rewies: any = ["a", 1, 2, 3, "berk", true];
// // for (let i = 0; i < rewies.length; i++) {
// //   console.log(i);
// // }
var numbers = [1, 2, 3, 4, 5];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    total += numbers[i];
}
var ort = total / numbers.length;
console.log("Ortalama =".concat(ort));
var sports = ["golf", "tennis", "f1", "boks"];
// for (let i = 0; i < sports.length; i++) {
//   console.log(sports[i]);
// }
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempSports = sports_1[_i];
    if (tempSports == "f1") {
        console.log("My favorite ".concat(tempSports));
    }
    else {
        console.log(tempSports);
    }
}
sports.push("Basketball");
sports.push("Fubol");
for (var _a = 0, sports_2 = sports; _a < sports_2.length; _a++) {
    var tempSports = sports_2[_a];
    console.log(tempSports);
}
