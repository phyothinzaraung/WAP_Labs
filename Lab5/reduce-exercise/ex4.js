const input = 6;
const inputArr = [];
for(let i=input; i>0; i--){
    inputArr.push(i);
}

const result = inputArr.reduce((accum, value, index, arr)=> accum * value, 1);
console.log(result);
