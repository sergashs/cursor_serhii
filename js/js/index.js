// function getpercent() {
//   let namber = Number(document.getElementById("fun-2").value);
//   let prcnt = Number(document.getElementById("fun-22").value);

//   namber = Number(parseInt(namber));
//   pow = Number(parseInt(prcnt));

//   let temp = (namber / 100) * prcnt;

//   document.getElementById("fun-2-label").innerHTML = temp;
// }

// function count() {
//   for (let i = 10; i > 0; i--) {
//     if (i % 2 == 0) {
//       console.log("hello " + i);
//     }
//   }
// }

// count();

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

function getSubjects(array, search) {
  return array.reduce(function(values, item) {
    if (item.name === search) {
      return Object.keys(item.subjects);
    }
    return values;
  }, []);
}
console.log(getSubjects(students, "Victor"));
