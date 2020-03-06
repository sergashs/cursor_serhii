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

var myCrazyObject = {
  name: "Нелепый объект",
  "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
  "random animal": "Банановая акула"
};

// console.log(myCrazyObject["some array"]);

console.log(Array.from(myCrazyObject["some array"]));
