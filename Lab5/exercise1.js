// function sum(arr){
//     let nums = arr.filter(function(element){
//         return element>20;
//     });

//     let sum = 0;

//     for(let i=0; i<nums.length; i++){
//         sum += nums[i];
//     }
//     return sum;
    
// }

function sum(numArr){
    return numArr.filter(elem => elem > 20).reduce((accum, elem) => accum + elem );
}

console.log(sum([40, 50, 10]));