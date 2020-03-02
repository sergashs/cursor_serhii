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
// ///////////////////////////////////
// ///////////////////////////////////
// function average() {
//   let len = arguments.length;
//   let sum = 0;
//   for (let i = 0; i < len; i++) {
//     sum += +arguments[i];
//   }
//   return sum / len;
// }

// function averagePrint() {
//   let arguments = document.getElementById("numerics").value;
//   const arr = arguments.split(" ");
//   document.getElementById("averageinArray").innerHTML = ` ${average(...arr)}`;
//   console.log(average(...arr));
// }
// //////////////////////////////////////////
// //////////////////////////////////////////
// function filterEvenNumbers(...numbers) {
//   return numbers.filter(numbers => numbers % 2 !== 0);
// }

// function filterEvenNumbersPrint() {
//   let numbers = document.getElementById("evenNumbers").value;
//   let temp = `${filterEvenNumbers(...numbers).join(" ")}`;
//   document.getElementById("EvenNumbers").innerHTML = temp;
//   console.log(filterEvenNumbers(...numbers));
// }
// //////////////////////////////////////////
// //////////////////////////////////////////

// function countPositiveNumbers(...arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       count++;
//     }
//     return count;
//   }
// }

// console.log(countPositiveNumbers(1, 2, 3, -5));

// var arr = [1, 2, -3, -2];

function countPositiveNumbers(...arr) {
  let newArr = arr.join().split(",");
  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > 0) {
      count++;
    }
  }
  return count;
}

function countPositiveNumbersPrint() {
  let arr = document.getElementById("PositiveNumbers").value;
  let temp = `${countPositiveNumbers(...arr)}`;
  document.getElementById("positiveNumbers").innerHTML = temp;
  console.log(countPositiveNumbers(1, -2, 5, -6));
}
