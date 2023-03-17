// 1. Write a JavaScript program which accept a number as input 
// and insert dashes (-) between each two even numbers. 
// For example if you accept 025468 the output should be 0-254-6-8.

solution

let inputNumbers = function(a){
    const a = prompt("Enter a big number: ");
    const strNum = a.toString();
    const result = [strNum[0]];

    for(let y=1;y<strNum.length;y++){
        if(strNum[x-1]%2===0 && strNum[x]%2 ===0){
            console.log(result.push("-",strNum[x]))
        }
        else{
            console.log(result.push(strNum[x]))
        }
    }
    console.log(result.join(" "))

};

inputNumbers()

//2.  Write a JavaScript program to sort the items of an array. Go to the editor
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

let sortArray = function(){
    const number = prompt("Enter a big number: ");
    const strNumber = number.toString();
    const endResult = [];

    console.log(endResult.push(strNumber.sort().join(",")))
};
sortArray()

