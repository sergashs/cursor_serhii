function getpercent() {
  let namber = document.getElementById("fun-2").value;
  let prcnt = document.getElementById("fun-22").value;

  namber = parseInt(namber);
  pow = parseInt(prcnt);

  let temp = (namber / 100) * prcnt;

  document.getElementById("fun-2-label").innerHTML = temp.toFixed();
}

// function count() {
//   for (let i = 10; i > 0; i--) {
//     if (i % 2 == 0) {
//       console.log("hello " + i);
//     }
//   }
// }

// count();
