const input = [12, 46, 32, 64];
//calculate mean, medium { mean: 38.5, median: 39 }
const result = input.reduce((accum, num, index, arr)=>{
    accum.mean = accum + num/arr.length;
    accum.median = Math.abs(accum + num/arr.length);
    return accum;
}, {mean:0, median: 0});

console.log(result);
