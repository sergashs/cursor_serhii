//2 = pow function

// while(isNaN(namber)) {
//   alert('Ви ввели не число');

function getpercent() {
  let namber = document.getElementById("fun-2").value;
  let prcnt = document.getElementById("fun-22").value;

  namber = parseInt(namber);
  pow = parseInt(prcnt);

  let temp = (namber / 100) * prcnt;

  document.getElementById("fun-2-label").innerHTML = temp.toFixed();
  getpercent();
}
