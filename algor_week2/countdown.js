//1
let highNum = 2022;
let lowNum = 2;
let mult = 4;

while(highNum > lowNum){
    highNum -= 4;
    console.log(highNum)
}

//2

function Countdown(highNum, lowNum, mult){
    while(highNum >= lowNum){
        console.log(highNum)
        highNum -= mult;
    }
}
Countdown(9, 3, 3)
//3

function flexibleCountdown(highNum, lowNum, mult, skip) {
  while (highNum >= lowNum) {
    if (highNum != skip && highNum % mult === 0) {
      console.log(highNum);
    }
    highNum--;
  }
}
flexibleCountdown(17, 3, 3, 9,)