//1
function Print1To255() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}
Print1To255();


//2
function PrintOdds1To255() {
    for (let i = 1; i <= 255; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
PrintOdds1To255();


//3
function PrintIntsAndSum0To255() { 
    let sum = 0;
    for (let i = 1; i <= 255; i++) {
        sum = sum + i;
        console.log(i, 'int');
        console.log(sum, 'sum')
    }
}
PrintIntsAndSum0To255();


//4
function PrintArrayVals (arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
PrintArrayVals ([1,2,3,4,5]);


//5
function PrintMaxOfArray(arr) { 
    let big = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(big < arr[i]){
            big = [arr[i]];
        }
    }
    console.log(big);
}
PrintMaxOfArray([5,-2,14,12])


//6
function PrintAverageOfArray(arr){
    let avg = 0;
    for(let i = 0; i < arr.length; i++){
        avg = avg+arr[i];
    }
avg = avg / arr.length;
console.log(avg);
}
PrintAverageOfArray([13,6,9,-2,22])


//7
function ReturnOddsArray1To255() {
    let arr = [];
    for (let i = 1; i <= 255; i++) {
        if (i % 2 === 1) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(ReturnOddsArray1To255());


//8
function SquareArrayVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(SquareArrayVals([4, 5, 6, 7]));


//9
function ReturnArrayCountGreaterThanY(arr, y) {
    let greaterThan = 0; 
    let arrGreaterThanY = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            greaterThan++;
            arrGreaterThanY.push(arr[i]);
        }
    }
    console.log('Numbers that are greater than:', arrGreaterThanY);
    return greaterThan;
}
console.log(ReturnArrayCountGreaterThanY([1, 5, 12, 4, 6, 10], 5));


//10
function ZeroOutArrayNegativeVals(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (0 > arr[i]) {
            arr[i] = 0;
        }
    }
return arr;
}
console.log(ZeroOutArrayNegativeVals([4,-3,2,-2,6]));


//11 
function PrintMaxMinAverageArrayVals(arr){
    let big = arr[0];
    let min = arr[0]
    let avg = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(arr[i] > big){
            big = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i]
        }
        avg = avg + arr[i];
    }
    avg = avg / arr.length;
    console.log('min: '+min, 'max: '+big, 'avg: '+avg);
}
PrintMaxMinAverageArrayVals([3,5,10,-2,0]);


//12
function ShiftArrayValsLeft(arr){
    let newarr = [];
    for (let i = 0; i < arr.length; i++){
        newarr[i] = arr[i + 1];
    }
    newarr[newarr.length-1] = 0;
return newarr;
}
console.log(ShiftArrayValsLeft([1,5,12,4,9]));


//13
function SwapStringForArrayNegativeVals(arr) {
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
return arr;
}
console.log(SwapStringForArrayNegativeVals([1,-2,-3,1,9]))