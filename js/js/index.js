// function getpercent() {
//   let namber = Number(document.getElementById("fun-2").value);
//   let prcnt = Number(document.getElementById("fun-22").value);

//   namber = Number(parseInt(namber));
//   pow = Number(parseInt(prcnt));

//   let temp = (namber / 100) * prcnt;

//   document.getElementById("fun-2-label").innerHTML = temp;
// }

// function count() {
//   for (let i = 10; i > 0; i--) {
//     if (i % 2 == 0) {
//       console.log("hello " + i);
//     }
//   }
// }

// count();

/* вибираєм який суп варити, рандом
// function getRandsup(max, min) {
//   let soups = ["борщ", "гречаний", "сосиками"];
//   min = 0;
//   max = soups.length;
//   return soups[Math.floor(Math.random() * (max - min)) + min];
// }
// function getRandsupPrint() {
//   let temp = getRandsup();
//   document.getElementById("fun-3-label").innerHTML = temp;
// }
/* кінець рандом функції */

/* робимо тварин прекрасними
// let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i] + " прекрасное животное");
// }
/* кінець прекрасних тварин */

/* генератор стрічки з рандомними буквами */

// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let randomString = "";
// let counter = 0;

// while (counter < 6) {
//   let bukva = alphabet[Math.floor(Math.random() * alphabet.length)];
//   randomString += bukva;
//   counter++;
// }

// console.log(randomString);

function hackertextmade(input) {
  let output = "";
  for (i = 0; i < input.length; i++) {
    if (input[i] == "a") {
      output += 4;
    } else if (input[i] == "e") {
      output += 3;
    } else if (input[i] == "i") {
      output += "l";
    } else if (input[i] == "o") {
      output += "0";
    } else {
      output += input[i];
    }
  }
  return output;
}

function hackertextmadePrint() {
  let input = document.getElementById("funcget4").value.toLowerCase();
  let temp = hackertextmade(input);
  document.getElementById("function4").innerHTML += temp;
}

// const input = document.getElementById("funcget4");
// input.addEventListener("input", function(e) {
//   const lastChar = e.target.value[e.target.value.length - 1];
//   const isEnLetterRegEx = /[a-zA-Z]/;
//   if (!isEnLetterRegEx.test(lastChar)) {
//     return alert("plz print on eng");
//   }
// });
