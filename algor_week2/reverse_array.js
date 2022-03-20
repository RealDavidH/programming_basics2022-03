//First solution:
function reverseArray(arr){
arr.reverse();
return arr;
}
console.log(reverseArray([5,10,15,20]));

//Second solution using for loop

function reverseArray(arr){
    let newArr = [];
    sub = -1;
    for(var i = 0; i < arr.length; i++){
        newArr[i] = arr[arr.length+sub];
        sub--;
    }
    return newArr;
}
let a2 = reverseArray([5,10,15,20]);
console.log(a2);

//Outlook Negative: Given an array, create and return a new one containing all the values of the provided array made negative. Not simply multiplied by negative one. Given [ 1, -3, 5 ], return [ -1, -3, -5 ]
function negArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = -arr[i];
        }
    }
return arr;
}
console.log(negArray([5, 10, -20, 15]));
