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


let message = `
  <h1>Advanced part</h1>
  <p>Max number - <b>${maxPrice}</b></p>
  <p>Min number - <b>${minPrice}</b></p>
  <p>Total - <b>${totalPrice}</b></p>
 `;
document.writeln(message);
console.log(message);

