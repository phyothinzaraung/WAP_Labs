const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] }
  ];

  //calculate the average test score for each student, and then return an array of objects containing only the students 
  //who have an average score above 90


  let averageScoreArr = students.reduce((accum, value)=> {
      let average = value.scores.reduce((average, score, i, arr) => average + score/arr.length, 0);
      if(average > 90){
        accum[value.name] = average;
      }
      return accum;
  }, {});

  

console.log(averageScoreArr);
