class Students {
  constructor(studentName, yearOfStart) {
    this.studentName = studentName;
    this.yearOfStart = yearOfStart;
  }
}

class ManualStudents extends Students {
  constructor(studentName, yearOfStart, gender) {
    super(studentName, yearOfStart);
    this.gender = gender;
  }
}
let student = new ManualStudents('Petr Petrov', 2020, 'male');
console.log(student);
