const getNewArray = function(strArray){
    let result = strArray.filter(function(element){
        return element.length >= 5 && element.includes('a');
    });
    return result;
}

console.log(getNewArray(["starry", "john", "jackin"]));