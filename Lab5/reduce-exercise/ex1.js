const input = [1, -4, 12, 0, -3, 29, -150];
//compute sum
const result = input.filter(num => num >=0).reduce((accum, num) => accum + num);
console.log(result);