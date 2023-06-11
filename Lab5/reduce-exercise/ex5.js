const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];

//   let result = [].concat(... input);
//   console.log(result);

  const output = input.flat().reduce((accum, value) => {
      if(!accum[value]){
          accum[value] = 1;
      }else{
          accum[value]++;
      }
      return accum;
  }, {});

  console.log(output);