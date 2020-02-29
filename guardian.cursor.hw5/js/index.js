// function getRandomArray(length, n, m) {
//   const randomarray = [];
//   for (let i = 0; i < length; i++) {
//     randomarray.push(Math.floor(Math.random() * (m - n + 1) + n));
//   }
//   return randomarray;
// }

// function getRandomArrayPrint() {
//   let length = document.getElementById("length").value;
//   let n = document.getElementById("min").value;
//   let m = document.getElementById("max").value;
//   const temp = `${getRandomArray(length, n, m)}`;
//   document.getElementById("RandomArray").innerHTML = temp;
// }

// // ///////
// // function average() {
// //   let len = arguments.length;
// //   let sum = 0;
// //   for (let i = 0; i < len; i++) {
// //     sum += +arguments[i];
// //   }
// //   return sum / len;
// // }

// // function averagePrint() {
// //   let arguments = document.getElementById("numerics").value;
// //   const arr = arguments.split(" ");
// //   document.getElementById("averageinArray").innerHTML = ` ${average(...arr)}`;
// //   console.log(average(...arr));
// // }

var randomBodyParts = ["аирдотсы", "подсы", "айфон11", "трусы"];
var randomAdjectives = ["бомж", "мажор", "лох", "клевый"];
var randomWords = ["мухи", "выдры", "дубины", "мартышки", "крысы"];
// Выбор случайной части тела из массива randomBodyParts:
var randomBodyPart =
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// Выбор случайного прилагательного из массива randomAdjectives:
var randomAdjective =
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// Выбор случайного слова из массива randomWords:
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
// Соединяем случайные строки в предложение:
// var randomInsult =
//   "У тебя " +
//   randomBodyPart +
//   " еще более " +
//   randomAdjective +
//   " чем " +
//   randomBodyPart +
//   " у " +
//   randomWord;
// randomInsult;

var randomInsult = [
  "Ян купил " + randomBodyPart + ", теперь Ян " + randomAdjective
].join(" ");

console.log(randomInsult);
