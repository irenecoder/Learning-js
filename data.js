// array methods 
// Array.from
let arr1 = ["this","that","these"];
console.log(Array.from(arr1))

// Array.isArray
// used to detect an array 
if (Array.isArray(value)){
    // do something
}

let is_array = function(any){
    let any = prompt("enter anything:");
    console.log(Array.isArray(any))

};
is_array()

// iterator methods
// 1. Array.keys() - returns the indices
// 2. Array.values - returns the elements
// 3. Array.entries - returns the key - value pair

// array.fill
const zeroes = [0,0,0,0];
console.log(zeroes.fill(5))

// array.copy

// iterative methods = array refers to name of array not Array method
// each method accepts two arguments i.e, a function and an optional scope object
// the function then receives three arguments i.e, the item,index and array object itself
// 1. array.every()

const numbers = [1,2,3,4,5];
console.log(numbers.every((item,index,array)=> num>2))
// returns false because only some fit the criteria

// 2.array.some()
const number2 = [1,2,3,4,5];
console.log(number2.some((item,index,array)=> num>2))
// returns true because ata least one fits the criteria

// 3. array.filter()
const number3 = [1,2,3,4,5];
console.log(number3.filter((item,index,array)=>item>3))

// 4. array.map()
const names = [{name:"lisa"},{name:"john"}]
console.log(names.map((item,index,array)=>item.name))
