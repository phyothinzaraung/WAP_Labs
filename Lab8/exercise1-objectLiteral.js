const student = {
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade: function(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade: function(){
        let average = this.grades.reduce((accum, elem, i, arr) => accum + elem/arr.length, 0);
        return average;
    }
}

let student1 = Object.create(student);
student1.firstName = "John";
student1.lastName = "Smith";
student1.inputNewGrade(90);
student1.inputNewGrade(98);
student1.inputNewGrade(89);

let student2 = Object.create(student);
student1.firstName = "William";
student1.lastName = "Smith";
student1.inputNewGrade(85);
student1.inputNewGrade(88);
student1.inputNewGrade(92);

let studentArr = [student1, student2];
let averageGrade = studentArr.reduce((accum, elem, i, arr) => accum + elem.computeAverageGrade()/arr.length, 0);
console.log(averageGrade);