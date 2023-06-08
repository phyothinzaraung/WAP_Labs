// const getNewArray = function(strArray){
//     let result = strArray.filter(function(element){
//         return element.length >= 5 && element.includes('a');
//     });
//     return result;
// }

const getNewArray = function(strArr){
    return strArr.filter(elem => elem.length > 5).filter(elem => elem.includes('a'));
}

console.log(getNewArray(["starry", "john", "jackin"]));