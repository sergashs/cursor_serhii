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

/* хакерський текст */
// function hackertextmade(input) {
//   let output = "";
//   for (i = 0; i < input.length; i++) {
//     if (input[i] == "a") {
//       output += 4;
//     } else if (input[i] == "e") {
//       output += 3;
//     } else if (input[i] == "i") {
//       output += "l";
//     } else if (input[i] == "o") {
//       output += "0";
//     } else {
//       output += input[i];
//     }
//   }
//   return output;
// }

// function hackertextmadePrint() {
//   let input = document.getElementById("funcget4").value.toLowerCase();
//   let temp = hackertextmade(input);
//   document.getElementById("function4").innerHTML += temp;
// }

// const input = document.getElementById("funcget4");
// input.addEventListener("input", function(e) {
//   const lastChar = e.target.value[e.target.value.length - 1];
//   const isEnLetterRegEx = /[a-zA-Z]/;
//   if (!isEnLetterRegEx.test(lastChar)) {
//     return alert("plz print on eng");
//   }
// });

/* кінець хакерського тексту */

// var name = prompt("Как вас зовут?");

// if (name == "null") {
//   console.log("Вы отказались назвать свое имя");
// } else if (name == name.replace(/[^0-9.]/g, "")) {
//   console.log("Пишите только буквы на английском");
// } else {
//   console.log("Привет, " + name);
// }

// function areArraysSame(array1, array2) {
//   array1 = [1, 2, 3];
//   array2 = [1, 2, 3];
//   for (let i = 0; i < array2.length; i++) {
//     if (array1 == array2) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(areArraysSame([1, 2, 3], [1, 2, 3]));

// fetch("https://sergashs.github.io/cursor_serhii/stalker22/").then(res => {
//   res document.getElementById("publ-img");
// });

// fetch("https://sergashs.github.io/cursor_serhii/stalker22/")
//   .then(response => {
//     return document.getElementsByClassName("publ-img");
//   })
//   .then(data => {
//     console.log(data);
//   });

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://sergashs.github.io/cursor_serhii/stalker22/", true);
// xhr.send();

// xhr.onreadystatechange = function() {
//   if (this.readyState != 4) return;
//   // по окончании запроса доступны:
//   // status, statusText
//   // responseText, responseXML (при content-type: text/xml)
//   if (this.status != 200) {
//     // обработать ошибку
//     alert("ошибка: " + (this.status ? this.statusText : "запрос не удался"));
//     return;
//   }
//   let htmlpage = this.responseText;

//   console.log(htmlpage);
// };

// getElement(
//   "https://sergashs.github.io/cursor_serhii/stalker2/",
//   ".item-news",
//   function(element) {
//     console.log(element);
//     document.getElementById("get").innerHTML = element.outerHTML;
//   }
// );

// function getElement(url, selector, c) {
//   request(new XMLHttpRequest());

//   function request(xhr) {
//     xhr.open("GET", url, true);
//     xhr.send();
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState == 4) {
//         if (xhr.status == 200) {
//           html = document.createElement("div");
//           html.innerHTML = xhr.responseText;
//           c(html.querySelector(selector));
//         }
//       }
//     };
//   }
// }

function cuntehttp() {
  var sitelink = document.getElementById("link");
  return (document.body.innerHTML = "http://www.residentevil.com/re3".slice(7));
}

cuntehttp();
