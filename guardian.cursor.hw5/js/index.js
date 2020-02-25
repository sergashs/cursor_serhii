getRandomArray = (length, min, max) => {
  const rarray = [];
  for (let i = 0; i < length; i++) {
    rarray.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return rarray;
};

function getRandomArrayPrint() {
  const length = parseInt(document.getElementById("length").value);
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  // let temp = getRandomArray(length, min, max);
  document.getElementById("RandomArray").innerHTML = `[${getRandomArray(
    length,
    min,
    max
  )}]`;
}

function average(nums) {
  return nums.reduce((a, b) => a + b) / nums.length;
}

// console.log(average(20, 10, 50));
