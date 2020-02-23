const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = [
  "Дифференциальные уравнения",
  "Теория автоматов",
  "Алгоритмы и структуры данных"
];
const marks = [4, 5, 5, 3, 4, 5];

// const studentsPairs = [
//   students[0],
//   students[3],
//   students[1],
//   students[2],
//   students[4],
//   students[5]
// ];

// document.writeln(`
// <p><b>Студенты:</b>  ${students}</p>

// <b>Пары:</b>
// <p>1. ${studentsPairs[0]} + ${studentsPairs[3]}</p>
// <p>2. ${studentsPairs[1]} + ${studentsPairs[2]}</p>
// <p>3. ${studentsPairs[4]} + ${studentsPairs[5]}</p>
// `);

let pairsStudent = [];

for (let i = 0; i < students.length; i += 2) {
  pairsStudent.push(students.slice(i, i + 2));
}

console.log(pairsStudent);

document.write("<b>Pairs:</b>");
for (let i = 0; i < pairsStudent.length; i++) {
  document.write(`<li>Пара ${i + 1}: ${pairsStudent[i]}</li>`);
}

themesStudent = [];
for (let i = 0; i < themes.length; i += 2) {
  themesStudent.push(themes.slice(i, i + 2));
}

console.log(themesStudent);
