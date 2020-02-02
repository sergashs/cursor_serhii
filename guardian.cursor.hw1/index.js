const milkPrice = 15.678; 
const winePrice = 123.965; 
const showergelPrice = 90.2345; 
const money = 500;
let maxPrice = Math.max(milkPrice, winePrice, showergelPrice); // максимальне число
let minPrice = Math.min(milkPrice, winePrice, showergelPrice); // мінімальне число
const totalPrice = (milkPrice + winePrice + showergelPrice); // загальна ціна
let integersTotalPrice = Math.floor(milkPrice + winePrice + showergelPrice) // загальна ціна цілим числом
const ceilprice = (Math.ceil((totalPrice)*100)/100);
// bulevoe -
const dealing = (money - totalPrice); // здача
//------advanced part-------------------------------------
let message = `
  <h1>Advanced part</h1>
  <p>Max number - <strong>${maxPrice}</strong></p>
  <p>Min number - <strong>${minPrice}</strong></p>
  <p>Total - <strong>${totalPrice}</strong></p>
  <p>Integer part of product price - <strong>${integersTotalPrice}</strong></p>
  <p>Price sume ceiled to hundreds - <strong>${ceilprice}</strong></p>
`;
document.writeln(message);
console.log(message);