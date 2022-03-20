
//Test by editing 'var speed' to anything. If it's above 5.5 you get candy!



// q1: We need a loop here because if we were to hard code it we'd have to do mile + 1 6 times
// q2: The starting point of the loop is 0 because you start running at 0 miles
// q3: The ending point is 6 miles because that's when we stop giving out candy 
// q4: It'll know to stop when 'var mile' is '<=6'
// q5: 'var mile' is incrementing by 1 each time
// q6: 'var mile' for miles ran, and 'var speed' for the speed of the person running

var mile = 0;
var speed = document.getElementById("speed").value;

for(mile; mile <= 6; mile++){
    num++;
    if(mile > 0){
        document.getElementById(num).innerHTML += "Mile: " +mile + ". ";
        if(mile%2 === 0 && speed > 5.5){
            document.getElementById(num).innerHTML += "Here's a candy for running fast! ";
        }
        else if(mile%2 === 0 && speed < 5.5){
            document.getElementById(num).innerHTML += "Run faster to earn your candy! ";
        }
    }
}
}