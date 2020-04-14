class Student {
  constructor(course, university, fullName) {
    this.course = course;
    this.university = university;
    this.fullName = fullName;
    this.studMarks = [5, 4, 4, 5];
    this.isDismiss = false;
  }
  /*1*/
  getInfo() {
    return `${this.course} ${this.university} ${this.fullName}`;
  }

  /*2*/
  get marks() {
    if (this.isDismiss) {
      return null;
    }
    return this.studMarks;
  }

  /*3*/
  set marks(mark) {
    if (!isNaN(parseInt(mark)) && !this.isDismiss) {
      this.studMarks.push(mark);
    }
  }

  /*4*/
  getAverageMark() {
    if (this.isDismiss) {
      return null;
    }

    const averageMark =
      this.studMarks.reduce((sum, cur) => {
        return sum + cur;
      }) / this.studMarks.length;

    return averageMark;
  }

  /*5*/
  dismiss() {
    this.isDismiss = true;
  }

  /*6*/
  recover() {
    this.isDismiss = false;
  }
}

class BudgetStudent extends Student {
  constructor(course, university, fullName) {
    super(course, university, fullName);
    this.studMarks = [5, 5, 5, 3];
    this.isDismiss = false;
    setInterval(() => {
      this.getScholarship();
    }, 1000);
  }

  getScholarship() {
    if (this.getAverageMark() >= 4 && !this.isDismiss) {
      console.log(`Вы получили 1400 грн. стипендии`);
    } else {
      console.log(`Стипендии нет :с`);
    }
  }
}

//тест для базового завдання
const ostap = new Student(
  "Студент 1го курса",
  "Высшей Школы Мошенничества г.Одесса",
  "Остап Родоманський Бендер"
);

console.log(ostap.getInfo());

console.log(ostap.marks);
ostap.marks = 5;
console.log(ostap.marks);

console.log(ostap.getAverageMark());

ostap.dismiss();
console.log(ostap.marks);

ostap.recover();
console.log(ostap.marks);
