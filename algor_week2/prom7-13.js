//7
function seven() {
    let arr = [];
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 1) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(seven());

//8
function eight(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}
console.log(eight([4, 5, 6, 7]));

//9
function nine(arr, y) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            console.log(arr[i]);
        }
    }
}
nine([1, 5, 12, 4, 6, 10], 5);

//10
function ten(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (0 > arr[i]) {
            arr[i] = 0;
        }
    }
return arr;
}
console.log(ten([4,-3,2,-2,6]));

//11 
function eleven(arr){
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
eleven([3,5,10,-2,0]);

//12




function twelve(arr){
    let newarr = [];
    for (let i = 0; i < arr.length; i++){
        newarr[i] = arr[i + 1];
    }
    newarr[newarr.length-1] = 0;
return newarr;
}
console.log(twelve([1,5,12,4,9]))


//13
function thirteen(arr)  {
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
return arr;
}
console.log(thirteen([1,-2,-3,1,9]))