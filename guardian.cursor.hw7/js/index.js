const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
  return this.tax * salary;
}

console.log(getMyTaxes.call(ukraine, 1000));

document.writeln(
  `<p>В Украине вы заплатите <b>${getMyTaxes.call(
    ukraine,
    1000
  )}$</b> налога при зарплате в <b>1000$</b></p>`
);

function getMiddleTaxes(country) {
  return this.tax * this.middleSalary;
}

console.log(getMiddleTaxes.call(ukraine));

document.writeln(
  `<p>В среднем IT-специалистсы платят налог <b>${getMiddleTaxes.call(
    ukraine
  )}$</b> в Украине при средней зарплате <b>${ukraine.middleSalary}$</b></p>`
);

console.log(getMiddleTaxes.call(latvia));

document.writeln(
  `<p>В среднем IT-специалистсы платят налог <b>${getMiddleTaxes.call(
    latvia
  )}$</b> в Латвии при средней зарплате <b>${latvia.middleSalary}$</b></p>`
);

console.log(getMiddleTaxes.call(litva));

document.writeln(
  `<p>В среднем IT-специалистсы платят налог <b>${getMiddleTaxes.call(
    litva
  )}$</b> в Литве при средней зарплате <b>${litva.middleSalary}$</b></p>`
);

function getTotalTaxes(country) {
  return this.tax * this.middleSalary * this.vacancies;
}

console.log(getTotalTaxes.call(ukraine));

document.writeln(
  `<p>Всего налогов платят IT-специалистсы <b>${getTotalTaxes.call(
    ukraine
  )}$</b> в Украние</p>`
);

console.log(getTotalTaxes.call(latvia));

document.writeln(
  `<p>Всего налогов платят IT-специалистсы <b>${getTotalTaxes.call(
    latvia
  )}$</b> в Латвии</p>`
);

console.log(getTotalTaxes.call(litva));

document.writeln(
  `<p>Всего налогов платят IT-специалистсы <b>${getTotalTaxes.call(
    litva
  )}$</b> в Литве</p>`
);

function getMySalary(country) {
  setInterval(() => {
    const min = 1500;
    const max = 2000;
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    console.log({
      number: number,
      taxes: Math.floor(country.tax * number),
      profit: number - Math.floor(country.tax * number),
    });
  }, 1000);
}

getMySalary(ukraine);
