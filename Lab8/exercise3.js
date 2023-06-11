Array.prototype.sortMethod = function(){
    return this.sort((x, y) => x-y);
}

const arr = [5, 3, 9, 7, 2, 1];
console.log(arr.sortMethod());