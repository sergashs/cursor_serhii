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
  <p>Min number - <strong>${minValue}</strong></p>
  <p>Total - <strong>${totalPrice}</strong></p>
  <p>Integer part of product price - <strong>${integerTotalPrice}</strong></p>
  <p>Price sume ceiled to hundreds - <strong>${ceiledToHundred}</strong></p>
  <p>${evenOddPrice} % 2 = ${evenOdd} is <strong>odd</strong></p>
  <p>Rest from 500uah is - <strong>${rest}uah</strong></p>
  <p>Everage number ${totalPrice}/3 = <strong>${everageValue}</strong></p>
  <p>The sale is -  <strong>${salePercent}%</strong></p>
  <p>Price with sale -  <strong>${priceWithSale}uah</strong></p>
  <p>The lost profit price is: ${everageCheckPrice} - ${salePrice} = <strong>${lostProfit}</strong></p>
`;
document.writeln(message);
console.log(message);

