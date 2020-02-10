const milkPrice = 15.678;
const winePrice = 123.965;
const showergelPrice = 90.2345;
const money = 500;
const maxPrice = Math.max(milkPrice, winePrice, showergelPrice); // максимальне число
const minPrice = Math.min(milkPrice, winePrice, showergelPrice); // мінімальне число
const totalPrice = milkPrice + winePrice + showergelPrice; // загальна ціна
const integersTotalPrice = Math.floor(milkPrice + winePrice + showergelPrice); // загальна ціна цілим числом
const ceilprice = Math.ceil(totalPrice * 100) / 100;
const bul = integersTotalPrice % 2 === 0;
const dealing = money - totalPrice; // здача
const averagePrice = ((milkPrice + winePrice + showergelPrice) / 3).toFixed(2);
const discount = Math.floor(Math.random() * 50);

const needbuy =
  integersTotalPrice - (integersTotalPrice / 100) * discount.toFixed(2);

const discountforpureStaff = (integersTotalPrice / 100) * discount;

let pureStuffing = integersTotalPrice / 2 - discountforpureStaff;
//------advanced part-------------------------------------

message = `
  <h1>HW#1 Serhii Demchyshyn</h1>
  <p>Milk price - <strong>${milkPrice}</strong></p>
  <p>Wine Price - <strong>${winePrice}</strong></p>
  <p>Shower gel price - <strong>${showergelPrice}</strong></p>
  <br>
  <p>Max number - <strong>${maxPrice}</strong></p>
  <p>Min number - <strong>${minPrice}</strong></p>
  <p>Total - <strong>${totalPrice}</strong></p>
  <p>Integer part of product price - <strong>${integersTotalPrice}</strong></p>
  <p>Price sume ceiled to hundreds - <strong>${ceilprice}</strong></p>
  <p>Dealing - <strong>${dealing}</strong></p>
  <p>Boolean value - <strong>${bul}</strong></p>
  <p>Average Price - <strong>${averagePrice}</strong></p>
  <p>Your discount - <strong>${discount}</strong></p>
  <p>Need buy - <strong>${needbuy}</strong></p>
  <p>pureStuffing - <strong>${pureStuffing}</strong></p>
`;
document.writeln(message);
console.log(message);
