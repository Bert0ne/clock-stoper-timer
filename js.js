let clockS = document.querySelectorAll('.clock__hands--secondHand');
let clockM = document.querySelectorAll('.clock__hands--minuteHand');
let clockH = document.querySelectorAll('.clock__hands--hourHand');

//Download time from new Date and put into css
setInterval(() => {
    const time = new Date();
    let secondNum = time.getSeconds() * 6;
    let minuteNum = time.getMinutes() * 6;
    let hourNum = time.getHours() * 12;


    for (let i = 0; i < 3; i++) {

    clockS[i].style.transform = "rotate("+ secondNum +"deg)";
    clockM[i].style.transform = "rotate("+ minuteNum +"deg)";
    }

    clockH[0].style.transform = "rotate("+ (hourNum + 84)+"deg)"; //TOKIO
    clockH[1].style.transform = "rotate("+ hourNum+"deg)"; //WARSAW
    clockH[2].style.transform = "rotate("+ (hourNum - 72)+ "deg)"; // NEW YORK

    
    console.log();


}, 50);




//Number's clock inside a big clock
const clock = () => {
    const time = new Date();

    const secondsB = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    const minutesB = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const hoursB = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let watch = document.querySelectorAll('.clock-inside');
    watch[0].textContent = `${hoursB + 7}:${minutesB}:${secondsB}`;
    watch[1].textContent = `${hoursB}:${minutesB}:${secondsB}`;
    watch[2].textContent = `${hoursB - 6}:${minutesB}:${secondsB}`;
    
    

   }
   
   setInterval(clock, 100);
   