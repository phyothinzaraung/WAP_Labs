const input = [
    {
      name: "John",
      age: 13,
    },
    {
      name: "Mark",
      age: 56,
    },
    {
      name: "Rachel",
      age: 45,
    },
    {
      name: "Nate",
      age: 67,
    },
    {
      name: "Jennifer",
      age: 65,
    },
  ];

  let ages = input.map(person => person.age);
  console.log(ages);
  let maxAge = Math.max(...ages);
  let minAge = Math.min(...ages);
  console.log(maxAge, minAge);