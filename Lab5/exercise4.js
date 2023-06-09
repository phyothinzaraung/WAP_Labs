const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

  //get all the students whose grades are greater than or equal to 90.

  const result = students.filter(student => student.grade >=90);
  console.log(result);