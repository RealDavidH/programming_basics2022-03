const arr = [
    [8, 6, 7, 5, 3, 0, 9], 
    [4, 7, 13, 13, 19, 37, -2], 
    [6, 2, 12, 14, -24, 5, 0],
    [13, 45, -2, 5],
];
const numArray = arr.length;
let i = 0;
let countGreaterThanFive = 0;
let store = [];
let storeSum = [];
let greaterThanFive = [];



for(i; i < numArray; i++){
    let temp = [];
    let temp2 = 0;
    let arrstore = arr[i];
    for(let j = 0; j < arrstore.length; j++){
        temp[j] = arrstore[j];
        temp2 = temp2 + arrstore[j];
        if(arrstore[j] > 5){
        greaterThanFive.push(arrstore[j]);
        countGreaterThanFive++;
        }
    }
    greaterThanFive = greaterThanFive;
    storeSum[i] = temp2;
    store[i] = temp;
}




console.log('Array 1 is:',store[0]);
console.log('Array 1 has a sum of:', storeSum[0]);
console.log('Array 2 is:',store[1]);
console.log('Array 2 has a sum of:', storeSum[1]);
console.log('Array 3 is:',store[2]);
console.log('Array 3 has a sum of:', storeSum[2]);
console.log('These are the numbers from every array that are greater than 5:', greaterThanFive)
console.log('There were '+countGreaterThanFive+' numbers greater than 5.')



//var aarp = [1,2,3];
//var twow = [3,4,5];
//aarp = aarp +','+ twow;
//console.log(aarp)

