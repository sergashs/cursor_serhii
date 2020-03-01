// first function start
const maxOfNumber = function(number) {
  return Math.max(...number.toString().split(""));
};

function one() {
  const number = document.getElementById("fun-1").value;
  if (!isNaN(number)) {
    const temp =
      "You entered " +
      number +
      ". The largest digit of the number: " +
      maxOfNumber(number);
    document.getElementById("fun-1-label").innerHTML = temp;
  } else {
    const temp = "ERROR, Try again";
    document.getElementById("fun-1-label").innerHTML = temp;
  }
}

//// first function end

// second function start
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
    const temp =
      namber + " in degree " + pow + " equal " + calculatePow(namber, pow);
    document.getElementById("fun-2-label").innerHTML = temp;
  } else {
    const temp = "You made a mistake. Please try again";
    document.getElementById("fun-2-label").innerHTML = temp;
  }
}

// secondfunction end

/// third function start
const firstbiglet = function(name) {
  let bigname = name;
  bigname = bigname[0].toUpperCase() + bigname.substring(1);
  return bigname;
};

function firstbigletter() {
  const name = document.getElementById("fun-3").value;
  if (name) {
    const temp = firstbiglet(name);
    document.getElementById("fun-3-label").innerHTML = temp;
  }
}

/// third function end

////////////////////////// fourth function start

let amountaftertaxClear = function getprcnt(namber, prcnt) {
  let resulttax = namber - (namber / 100) * prcnt;
  return resulttax;
};

function amountaftertax() {
  let namber = document.getElementById("fun-4").value;
  namber = parseInt(namber);
  const prcnt = 20;
  const temp = amountaftertaxClear(namber, prcnt);
  document.getElementById("fun-4-label").innerHTML = temp.toFixed();
}

/////////////////////////  fourth function end

///////////////////////  fifth function start

const getRandomNumber = function(n, m) {
  const rnd = Math.floor(Math.random() * (m - n + 1) + n);
  return rnd;
};

function five() {
  const n = document.getElementById("min").value;
  const m = document.getElementById("max").value;

  const temp = `${getRandomNumber(n, m)}`;
  document.getElementById("fun-5-label").innerHTML = temp;
}

////////////////////// fifth function end

///// sixth function start

function countLetter(word, letter) {
  let count = 0;
  letter = letter.toLowerCase();
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    word[i] === letter ? count++ : count;
  }
  return count;
}

function countLetterPrint() {
  const word = document.getElementById("getword").value;
  const letter = document.getElementById("getletter").value;
  const temp = countLetter(word, letter);
  document.getElementById("fun-6-label").innerHTML = temp;
}

//////////// sixth function end

/////// seventh function start

let randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function randompass() {
  const temp = randomNumber(10000000, 80000008);
  document.getElementById("fun-7-label").innerHTML = temp;
}
///// seventh function end

// eighth function start

function deleteLetters(word, bukva) {
  let pureStr = "";
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== bukva) {
      pureStr += word[i];
    }
  }
  return pureStr;
}

function deleteLettersClick() {
  const word = document.getElementById("message").value;
  const bukva = document.getElementById("deleteLetter").value;

  const temp = deleteLetters(word, bukva);
  document.getElementById("fun-8-label").innerHTML = temp;
}

// eighth function end
