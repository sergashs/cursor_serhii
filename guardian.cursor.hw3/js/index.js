//1 - max digit
const maxOfNumber = function(number) {
  return Math.max(...number.toString().split(""));
};

function one() {
  let number = document.getElementById("fun-1").value;
  if (!isNaN(number)) {
    let temp =
      "You entered " +
      number +
      ". The largest digit of the number: " +
      maxOfNumber(number);
    document.getElementById("fun-1-label").innerHTML = temp;
  } else {
    let temp = "ERROR, Try again";
    document.getElementById("fun-1-label").innerHTML = temp;
    one();
  }
}

//2 = pow function
const calculatePow = function calculatePow(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
};

function two() {
  let namber = document.getElementById("fun-2").value;
  let pow = document.getElementById("fun-22").value;

  if (!isNaN(namber) && !isNaN(pow)) {
    namber = parseInt(namber);
    pow = parseInt(pow);
    let temp =
      namber + " in degree " + pow + " equal " + calculatePow(namber, pow);
    document.getElementById("fun-2-label").innerHTML = temp;
  } else {
    let temp = "You made a mistake. Please try again";
    document.getElementById("fun-2-label").innerHTML = temp;
    two();
  }
}

const firstbiglet = function(name) {
  let bigname = name;
  bigname = bigname[0].toUpperCase() + bigname.substring(1);
  return bigname;
};

function firstbigletter() {
  let name = document.getElementById("fun-3").value;
  if (name) {
    const temp = firstbiglet(name);
    document.getElementById("fun-3-label").innerHTML = temp;
  }
  document.getElementById("fun-3-label").innerHTML = temp;
  firstbigletter();
}

function amountaftertax() {
  let namber = document.getElementById("fun-4").value;
  let prcnt = 20;
  namber = parseInt(namber);
  pow = parseInt(prcnt);
  let temp = namber - (namber / 100) * prcnt;
  document.getElementById("fun-4-label").innerHTML = temp.toFixed();
  amountaftertax();
}

const getRandomNumber = function(n, m) {
  const rnd = Math.floor(Math.random() * (m - n + 1) + n);
  return rnd;
};

function five() {
  let n = document.getElementById("min").value;
  let m = document.getElementById("max").value;

  const temp = `${getRandomNumber(n, m)}`;
  document.getElementById("fun-5-label").innerHTML = temp;
  five();
}

function countLetter() {
  let word = document.getElementById("getword").value;
  let letter = document.getElementById("getletter").value;

  var stringsearch = letter,
    str = word;
  for (
    var i = (count = 0);
    i < str.length;
    count += +(stringsearch === str[i++])
  );

  const temp = count;

  document.getElementById("fun-6-label").innerHTML = temp;
}

////////////
function randompass() {
  var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const temp = randomNumber(10000000, 80000008);

  document.getElementById("fun-7-label").innerHTML = temp;
}
