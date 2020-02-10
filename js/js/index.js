//2 = pow function

function two() {
  let namber = document.getElementById("fun-2").value;
  let prcnt = document.getElementById("fun-22").value;

  namber = parseInt(namber);
  pow = parseInt(prcnt);
  let temp = (namber / 100) * prcnt;
  document.getElementById("fun-2-label").innerHTML = temp;
  document.getElementById("fun-2-label").innerHTML = temp;
  two();
}
