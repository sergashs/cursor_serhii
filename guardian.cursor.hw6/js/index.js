const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }
];

// function getSubjects(array, search) {
//   return array.reduce(function(values, item) {
//     if (item.name === search) {
//       return Object.keys(item.subjects);
//     }
//     return values;
//   }, []);
// }
// console.log(getSubjects(students, "Victor"));

////1
const getSubjects = student => {
  return Object.keys(student.subjects).map(item => {
    return (item.charAt(0).toUpperCase() + item.slice(1)).replace(/_/g, " ");
  });
};
console.log(getSubjects(students[0]));
document.writeln(
  `<p>Список предметов для студента <b>${
    students[0].name
  }</b> -  <b>${getSubjects(students[0])}</b></p>`
);

////
////2
const getAverageMark = student => {
  const average = Object.values(student.subjects).flat();
  return (average.reduce((a, b) => a + b) / average.length).toFixed(2);
};
console.log(getAverageMark(students[0]));
document.writeln(
  `<p>Cредняя оценка по всем предметам студента <b>${
    students[0].name
  }</b> -  <b>${getAverageMark(students[0])}</b></p>`
);

////3
const getStudentInfo = student => {
  const { course, name } = student;
  return { course, name, averageMark: getAverageMark(student) };
};
const studentInfo = getStudentInfo(students[0]);
console.log(getStudentInfo(students[0]));
document.write(
  `<p>Информация о студенте <b>${students[0].name}</b> -  курс: <b>${studentInfo.course}</b>, средняя оценка: <b>${studentInfo.averageMark}</b></p>`
);

/////
////4
const getStudentsNames = students => {
  return students.map((el, i) => students[i].name).sort();
};
console.log(`${getStudentsNames(students)}`);
document.write(
  `<p>Имена студентов в алфавитном порядке: <b>${getStudentsNames(
    students
  )}</b></p>`
);

/////5
const getBestStudents = students => {
  return students.reduce((previus, current) =>
    getAverageMark(current) > getAverageMark(previus) ? current : previus
  ).name;
};
console.log(getBestStudents(students));

document.write(
  `<p>Лучший студент из списка по показателю средней оценки: <b>${getBestStudents(
    students
  )}</b></p>`
);

/////
const calculateWordLetters = string => {
  return string
    .toLowerCase()
    .split("")
    .reduce((acc, el) => {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
};

console.log(calculateWordLetters("Tanya"));
document.write(`<li>6) Кількість літер в слові <b>${word}<b></li>`);
Object.entries(calculateWordLetters(word)).forEach(([key, value]) => {
  document.write(` \n${key}:  ${value}  `);
});
