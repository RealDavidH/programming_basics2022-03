var sum = 0;
for (var miles = 0; miles <= 6; miles++){
    sum = sum + miles;
    console.log(sum)
    }
    
    function greet(name){
        if(name == 'Count Dooku'){
            console.log("I'm Coming for you Dooku!")
        }
        console.log("Good day "+name);
        console.log(new Date())
    
    }
    greet(name = 'Anakin')

    let a = 5;
    for(var i = 1; i<2; i++){
        console.log(a)
    }
    function n(){
        console.log('a');
    }
    n(a)

    function greet(name){
        if(name == 'Count Dooku'){
            console.log("I'm Coming for you Dooku!")
        }
        else{
        console.log("Good day "+name);
        console.log(new Date())
        }
    }
    greet('Anakin')

    function d(){
    for(let i = 0; i < 4; i++){
        let sum = 0;
        sum = sum + i;
        console.log(sum);
    }
    console.log(i); //this doesn't work because it is not in the scope of i
}
d();

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
for(var i = 1; i < arr.length; i = i + 2) {
    sum = sum + arr[i];
    console.log(arr[i]);
    console.log(sum);
}



const months2 = ['Jan2', 'March2', 'April2', 'June2'];
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 4, months2);
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

function SetTo5(varString) { //I don't understand this 
    var newValue = 5;
    eval(varString + " = " + newValue);
}
SetTo5();

function nest(){
var sum = 0;
for(let i = 2; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        for(let x = 1; x <= 3; x++){
            sum++;
        }
    }
}
return sum;
}
console.log(nest());

var tom = 1
function one(tom){
tom = tom + 1;

}
console.log(one(tom));
let sum = 0;
for(let x = 1; x <= 3; x++){
    sum = sum + 1;
    sum += 1;
    sum++; //these are all the same
}
console.log(sum);


sum = sum + 1;
sum += 1




















for(var start = 0; start < 20; start = start + 1){
    console.log()
}


