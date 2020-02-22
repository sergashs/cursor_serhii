function getpercent() {
  let namber = Number(document.getElementById("fun-2").value);
  let prcnt = Number(document.getElementById("fun-22").value);

  namber = Number(parseInt(namber));
  pow = Number(parseInt(prcnt));

  let temp = (namber / 100) * prcnt;

  document.getElementById("fun-2-label").innerHTML = Math.floor(temp).toFixed();
}

// function count() {
//   for (let i = 10; i > 0; i--) {
//     if (i % 2 == 0) {
//       console.log("hello " + i);
//     }
//   }
// }

// count();
