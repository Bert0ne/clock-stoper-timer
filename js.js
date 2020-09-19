let clockS = document.querySelector('.clock__hands--secondHand');
let clockM = document.querySelector('.clock__hands--minuteHand');
let clockH = document.querySelector('.clock__hands--hourHand');

//Download time from new Date and put into css
setInterval(() => {
    const time = new Date();
    let secondNum = time.getSeconds() * 6;
    let minuteNum = time.getMinutes() * 6;
    let hourNum = time.getHours() * 12;
    clockS.style.transform = "rotate("+ secondNum +"deg)";
    clockM.style.transform = "rotate("+ minuteNum +"deg)";
    clockH.style.transform = "rotate("+ hourNum+"deg)";
    console.log();
}, 50);


/* //adding time " by hand " withouy new Date
function seconds() {
    clockS.style.transform = "rotate("+ secondNum +"deg)";
}
function minutes() {
    clockM.style.transform = "rotate("+ minuteNum +"deg)";
    if (minuteNum % 360 == 0 ) {
        hourNum += 15;
        hours()
       // console.log(hourNum);
    }
}
function hours() {
    clockH.style.transform = "rotate("+ hourNum +"deg)";
}
*/
/* setInterval(() => {
    secondNum += 6;
    //console.log(secondNum);
    seconds();

    if (secondNum % 360 == 0) {
        minuteNum += 6;
        minutes();
        //console.log(minuteNum);
    }    
}, 1000);
*/


/*
const clock = () => {
    const time = new Date();
    // console.log(time.toLocaleString());
    // console.log(time.toLocaleDateString());
    const secondsB = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    const minutesB = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const hoursB = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
   console.log(time.getSeconds());
    //document.querySelector('.clock span').textContent = `${hours}:${minutes}:${seconds}`
   }
   
   setInterval(clock, 1000);
   */