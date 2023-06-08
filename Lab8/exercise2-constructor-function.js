function Student(firstname, lastname, grades){
    this.firstname = firstname;
    this.lastname = lastname;
    this.grades = grades;
}

Student.prototype.inputNewGrade = function(newGrade){
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function(){
    return this.grades.reduce((accum, elem, i, arr) => accum + elem/arr.length, 0);
}

let student1 = new Student("John", "Smith", []);
student1.inputNewGrade(98);
student1.inputNewGrade(87);
student1.inputNewGrade(99);

let student2 = new Student("William", "Smith", []);
student2.inputNewGrade(97);
student2.inputNewGrade(95);
student2.inputNewGrade(84);

let students = [student1, student2];
let average = students.reduce((accum, elem, i, arr) => accum + elem.computeAverageGrade()/arr.length, 0);
console.log(average);