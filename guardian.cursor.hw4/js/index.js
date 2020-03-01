const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = [
  "Дифференциальные уравнения",
  "Теория автоматов",
  "Алгоритмы и структуры данных"
];
const marks = [4, 5, 5, 3, 4, 5];

let pairsStudent = [];

for (let i = 0; i < students.length; i += 2) {
  pairsStudent.push(students.slice(i, i + 2));
}

console.log(pairsStudent);

document.write("<b>Pairs:</b>");
for (let i = 0; i < pairsStudent.length; i++) {
  document.write(`<p>Пара ${i + 1}: ${pairsStudent[i]}</p>`);
}

// themesStudent = [];
// for (let i = 0; i < themes.length; i += 2) {
//   themesStudent.push(themes.slice(i, i + 2));
// }

// console.log(themesStudent);

const pairswithThemes = (pairsStudent, themes) => {
  const pairsandThemes = [];
  for (let i = 0; i < pairsStudent.length; i++) {
    pairsandThemes.push([pairsStudent[i].join(" и "), themes[i]]);
  }
  return pairsandThemes;
};

console.log(pairswithThemes(pairsStudent, themes));
const pairsandThemes = pairswithThemes(pairsStudent, themes);

document.write("<b>Pairs and themes:</b>");
for (let i = 0; i < pairsandThemes.length; i++) {
  document.write(`<p>Пара ${i + 1}: ${pairsandThemes[i]}</p>`);
}

/////////////////////

const getMarksforStudents = (students, marks) => {
  const studentsMarks = [];
  for (let i = 0; i < students.length; i++) {
    studentsMarks.push([students[i], marks[i]]);
  }
  return studentsMarks;
};
console.log(getMarksforStudents(students, marks));

const studentsMarks = getMarksforStudents(students, marks);

document.write(`<b>Students and marks: </b>`);
for (let i = 0; i < studentsMarks.length; i++) {
  document.write(`<p> ${studentsMarks[i]} </p>`);
}

const getRandomMforPairsandThemes = pairsandThemes => {
  const pairThemeMark = [];
  const n = 1;
  const m = 5;
  for (let i = 0; i < pairsandThemes.length; i++) {
    let randomMark = Math.floor(Math.random() * (m - n + 1) + n);
    pairThemeMark[i] = [...pairsandThemes[i], randomMark];
  }

  return pairThemeMark;
};
console.log(getRandomMforPairsandThemes(pairsandThemes));
const pairThemeMark = getRandomMforPairsandThemes(pairsandThemes);

document.write(`<b>Pairs with themes and marks: </b>`);
for (let i = 0; i < pairThemeMark.length; i++) {
  document.write(`<p> ${pairThemeMark[i]} </p>`);
}
