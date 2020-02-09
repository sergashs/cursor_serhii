// function ucFirst(str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// } // Робимо першу букву великою

// function myFunction() {
//   var x = Math.floor(Math.random() * 10 + 1);
//   document.getElementById("demo").innerHTML = x;
// }

// function maxDigit(n) {
//   if (n == 0) {
//     return 0;
//   } else {
//     return Math.max(n % 10, maxDigit(Math.floor(n / 10)));
//   }
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
