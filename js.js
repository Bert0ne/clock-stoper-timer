let clockS = document.querySelector('.clock__up--secondHand');
let clockM = document.querySelector('.clock__up--minuteHand');
let clockH = document.querySelector('.clock__up--hourHand');

let secondNum = 0;
let minuteNum = 0;
let hourNum = 0;

function seconds() {
    clockS.style.transform = "rotate("+ secondNum +"deg)";
}
function minutes() {
    clockM.style.transform = "rotate("+ minuteNum +"deg)";
    if (minuteNum % 360 == 0 ) {
        hourNum += 15;
        hours()
        console.log(hourNum);
    }
}
function hours() {
    clockH.style.transform = "rotate("+ hourNum +"deg)";
}

setInterval(() => {
    secondNum += 6;
    //console.log(secondNum);
    seconds();

    if (secondNum % 360 == 0) {
        minuteNum += 6;
        minutes();
        console.log(minuteNum);
    }    
}, 1000);

