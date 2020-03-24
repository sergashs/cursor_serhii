// const length = 4;
// const ms = 50;

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// const generateSign = () => {
//   const sign = Date.now();
//   const char = String.fromCharCode(sign);
//   return char;
// };

// const getRandomChinese = async length => {
//   const arr = Array.from({ length });
//   const promises = arr.map(async function(cur, index) {
//     await delay(index * ms);
//     return generateSign();
//   });
//   const chars = await Promise.all(promises);
//   return chars.join("");
// };

// getRandomChinese(length).then(
//   el => (document.getElementById("result").innerText = el)
// );

let result = axios.get("https://swapi.co/api/starships/9/");

result.then(res => {
  console.log("films: ", res.data);
});
