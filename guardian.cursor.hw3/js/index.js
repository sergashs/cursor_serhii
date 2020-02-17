// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// } // Робимо першу букву великою

// function myFunction() {
//   var x = Math.floor(Math.random() * 10 + 1);
//   document.getElementById("demo").innerHTML = x;
// }

// document.write(`
// <p><strong>Функція 1:<strong> <b>${ucFirst("вася")}</b>, <b>${ucFirst(
//   "іван "
// )}</b></p>
// <p>${maxDigit(59)}</p>

// `);

// const func1 = document.getElementById("f1-btn");
// func1.addEventListener("click", function() {
//   const number = document.getElementById("f1-1");
//   const result = document.getElementById("f1-lbl");
//   number.value = number.value || 12345;
//   result.textContent = Number(number.value)
//     ? `--> ${getMaxDigit(number.value)}`
//     : "you need to insert a number in the input";
// });

// //1 - max digit
// function getMaxDigit(number) {
//   return Math.max(...number.toString().split(""));
// }

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

const getRandomNumber = function(min, max) {
  const rnd = Math.floor(Math.random() * (m - n + 1) + n);
  return rnd;
};

function five() {
  let n = document.getElementById("n").value;
  let m = document.getElementById("m").value;
  n = parseFloat(n);
  m = parseFloat(m);
  const temp = `Нагенеровано от що: ${getRandomNumber(n, m)}`;
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
  countLetter();
}
