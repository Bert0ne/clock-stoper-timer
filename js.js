
  if (document.querySelector('.index__clock')) {
    let clockS = document.querySelectorAll('.clock__hands--secondHand');
    let clockM = document.querySelectorAll('.clock__hands--minuteHand');
    let clockH = document.querySelectorAll('.clock__hands--hourHand');
    
    //Download time from new Date and put into css
    setInterval(() => {
        const time = new Date();
        let secondNum = time.getSeconds() * 6;
        let minuteNum = time.getMinutes() * 6;
        let hourNum = time.getHours() * 30;
    
    
        for (let i = 0; i < 3; i++) {
    
        clockS[i].style.transform = "rotate("+ secondNum +"deg)";
        clockM[i].style.transform = "rotate("+ minuteNum +"deg)";
        }
    
        clockH[0].style.transform = "rotate("+ (hourNum + 210)+"deg)"; //TOKIO
        clockH[1].style.transform = "rotate("+ hourNum+"deg)"; //WARSAW
        clockH[2].style.transform = "rotate("+ (hourNum - 180)+ "deg)"; // NEW YORK
    
        
        console.log();
    
    
    }, 50);
    
    
    
    
    //Number's clock inside a big clock
    const clock = () => {
        const time = new Date();
        
        const secondsB = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
        const minutesB = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        const hoursB = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
        let watch = document.querySelectorAll('.clock-inside');
        
         //watch[0].textContent = `${hoursB}:${minutesB}:${secondsB}`;
        //watch[1].textContent = `${hoursB}:${minutesB}:${secondsB}`;
       //watch[2].textContent = `${hoursB}:${minutesB}:${secondsB}`;
       
       document.title = `${hoursB}:${minutesB}:${secondsB}`;
       }
       
      setInterval(clock, 100);
    
      clock();









      //! STOPER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
} else if (document.querySelector('.index__stoper')) {
    
  let ms = 0;
  let s = 0; 
  let m = 0;
  let h = 0;
  let timer;
  let checkStart = false;
  let stopWatchEl = document.querySelector('.stoper__time')

  let btnStart = document.querySelector('.btn__start');
  let btnStop = document.querySelector('.btn__stop');
  let btnReset = document.querySelector('.btn__reset');
  let btnLoop = document.querySelector('.btn__loop');

  let ul = document.querySelector('.lap__table');
  

  btnStart.addEventListener('click', function() {
    if (!checkStart) {
      timer = setInterval(run, 10);
      checkStart = !checkStart;
    }
  });


  btnStop.addEventListener('click', function() {
    if(checkStart){
      clearInterval(timer);
      checkStart = !checkStart;
    }
  })

  btnLoop.addEventListener('click', function() {
    if(checkStart){
      addLap();
    }
  })

  btnReset.addEventListener('click', function() {
    if (!checkStart) {
      m = '0';
      s = '0';
      ms = '0';
      stopWatchEl.textContent ="00:00:00"
      
      ul.textContent = '';
    } 
  })

  function run() {
    stopWatchEl.textContent = getTime();
    ms++;
    if(ms == 100) {
      ms = 0;
      s++
    }
    if(s == 60) {
      s = 0;
      m++;

    }
  }
 
  function getTime() {
    return (m < 10 ? "0" + m : m) +  ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
  }



  function addLap() {
  
    let lapRound = document.createElement('li');
    lapRound.innerText = getTime();
  
    ul.appendChild(lapRound);  




}


}