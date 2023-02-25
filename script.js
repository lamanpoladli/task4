let muddet = 10
let birinci = muddet *1
let ilk_pul = 3
let first = (((muddet-ilk_pul) * 80 ) / 100)+ ilk_pul
let second = (((muddet - 5) * 50) /100 ) + ((2 *80)/100) +ilk_pul
let third = (((muddet - 8) * 25) /100 ) + ((2 *80)/100) +ilk_pul + ((3 *50)/100)
if(muddet>= 1 && muddet <= 3){
    console.log(birinci);
}
else if (muddet == 4 || muddet == 5){
    console.log(first);
}
else if (muddet == 6 || muddet == 7 || muddet == 8){
    console.log(second);
}
else {
    console.log(third);
}