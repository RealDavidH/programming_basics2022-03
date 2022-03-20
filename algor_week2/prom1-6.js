//1
function one() {
    for (let i = 1; i <= 255; i++) {
        console.log(i);
    }
}
one();

//2
function two() {
    for (let i = 1; i <= 255; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
two();

//3
function three() { 
    let sum = 0;
    for (let i = 1; i <= 255; i++) {
        sum = sum + i;
        console.log(i, 'int');
        console.log(sum, 'sum')
    }
}
three();

//4
function four(arr) {
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
four([1,2,3,4,5]);

//5
function five(arr) { 
    let big = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(big < arr[i]){
            big = [arr[i]];
        }
    }
    console.log(big);
}
five([5,-2,14,12])

//6
function six(arr){
    let avg = 0;
    for(let i = 0; i < arr.length; i++){
        avg = avg+arr[i];
    }
avg = avg / arr.length;
console.log(avg);
}
six([13,6,9,-2,22])
