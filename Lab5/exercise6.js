var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
//shows how many times each string appears in the array. 

var result = pets.reduce((obj, pet) => {
    if(!obj[pet]){
        obj[pet] = 1;
    }else{
        obj[pet]++;
    }
    return obj;
}, {});

console.log(result);