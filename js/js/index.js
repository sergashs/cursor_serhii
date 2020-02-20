//2 = pow function

// while(isNaN(namber)) {
//   alert('Ви ввели не число');

// function onInputHandler(e) {
//   if (isNaN(e.target.value)) {
//     e.target.classList.add("invalid");
//   } else {
//     e.target.classList.remove("invalid");
//   }
// }

// function getpercent() {
//   let namber = document.getElementById("fun-2").value;
//   let prcnt = document.getElementById("fun-22").value;

//   namber = parseInt(namber);
//   pow = parseInt(prcnt);

//   let temp = (namber / 100) * prcnt;

//   document.getElementById("fun-2-label").innerHTML = temp.toFixed();
//   getpercent();
// }

function count() {
  for (let i = 10; i > 0; i--) {
    console.log("hello " + i);
  }
}

count();
