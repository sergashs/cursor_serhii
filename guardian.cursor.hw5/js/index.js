function getRandomArray(length, n, m) {
  const randomarray = [];
  for (let i = 0; i < length; i++) {
    randomarray.push(Math.floor(Math.random() * (m - n + 1) + n));
  }
  return randomarray;
}

function getRandomArrayPrint() {
  const length = document.getElementById("length").value;
  const n = document.getElementById("min").value;
  const m = document.getElementById("max").value;
  const temp = `${getRandomArray(length, n, m)}`;
  document.getElementById("RandomArray").innerHTML = temp;
}
///////////////////////////////////
///////////////////////////////////
function getAverage(...numbers) {
  const getSum = numbers.reduce((previus, current) =>
    Math.round(previus + current)
  );
  const result = getSum / numbers.length;
  return result;
}

function averagePrint() {
  let numbers = document.getElementById("numerics").value;
  const arr = numbers.split(" ");
  document.getElementById("averageinArray").innerHTML = `${getAverage(...arr)}`;
}
//////////////////////////////////////////
//////////////////////////////////////////
function filterEvenNumbers(...numbers) {
  return numbers.filter((numbers) => numbers % 2 !== 0);
}

function filterEvenNumbersPrint() {
  let numbers = document.getElementById("evenNumbers").value;
  const temp = `${filterEvenNumbers(...numbers).join(" ")}`;
  document.getElementById("EvenNumbers").innerHTML = temp;
  console.log(filterEvenNumbers(...numbers));
}
//////////////////////////////////////////
//////////////////////////////////////////
function countPositiveNumbers(...arr) {
  let newArr = arr;
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
  const temp = `${countPositiveNumbers(...arr.split(" "))}`;
  document.getElementById("positiveNumbers").innerHTML = temp;
}
// //////////////////////////////////////////
// //////////////////////////////////////////
function getDividedByFive(...numbers) {
  return numbers.filter((numbers) => numbers % 5 == 0);
}

function getDividedByFivePrint() {
  let numbers = document.getElementById("GetDividedByFive").value;
  const temp = `${getDividedByFive(...numbers.split(" ")).join(" ")}`;
  document.getElementById("getDividedByFive").innerHTML = temp;
}
// // //////////////////////////////////////////
// // //////////////////////////////////////////

function getMedian(...numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  const lowMiddleIndex = Math.floor((sortedNumbers.length - 1) / 2);
  const highMiddleIndex = Math.ceil((sortedNumbers.length - 1) / 2);
  return Math.round(
    (sortedNumbers[lowMiddleIndex] + sortedNumbers[highMiddleIndex]) / 2
  );
}

function getMedianPrint() {
  let arr = document.getElementById("GetMedian").value;
  const temp = `${getMedian(...arr.split(" "))}`;
  document.getElementById("getMedian").innerHTML = temp;
}
