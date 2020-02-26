function getRandomArray(length, n, m) {
  const randomarray = [];
  for (let i = 0; i < length; i++) {
    randomarray.push(Math.floor(Math.random() * (m - n + 1) + n));
  }
  return randomarray;
}

function getRandomArrayPrint() {
  let length = document.getElementById("length").value;
  let n = document.getElementById("min").value;
  let m = document.getElementById("max").value;
  const temp = `${getRandomArray(length, n, m)}`;
  document.getElementById("RandomArray").innerHTML = temp;
}

///////
function average() {
  let len = arguments.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += +arguments[i];
  }
  return sum / len;
}

function averagePrint() {
  let arguments = document.getElementById("numerics").value;
  const arr = arguments.split(" ");
  document.getElementById("averageinArray").innerHTML = ` ${average(...arr)}`;
  console.log(average(...arr));
}
