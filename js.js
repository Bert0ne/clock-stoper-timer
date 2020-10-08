
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
  let n = 0;
  let h = 0;
  let miliSecForLapTime = 0;
  let timer;
  let checkStart = false;
  let stopWatchEl = document.querySelector('.stoper__time')
  let lapA = [0,0];
  let lapMiliSec;
  let btnStart = document.querySelector('.btn__start');
  let btnStop = document.querySelector('.btn__stop');
  let btnReset = document.querySelector('.btn__reset');
  let btnLoop = document.querySelector('.btn__loop');

  let tab = document.querySelector('.lap__table');
  
  function stop() {
    if(checkStart){
      clearInterval(timer);
      checkStart = !checkStart;
    }
  }


  btnStart.addEventListener('click', function() {
    if (!checkStart) {
      timer = setInterval(run, 10);
      checkStart = !checkStart;
    }
  });


  btnStop.addEventListener('click', function() {
    stop();
  })

  btnLoop.addEventListener('click', function() {
    if(checkStart){
      addLap();
    }
  })

  btnReset.addEventListener('click', function() {
    stop();
    if (!checkStart) {
      m = '0';
      s = '0';
      ms = '0';
      stopWatchEl.textContent ="00:00:00"
      n = 0;
      tab.textContent = '';
    } 
  })

  function run() {
    stopWatchEl.textContent = getTime();
    miliSecForLapTime++;
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
    // tab. Parent element
    let lapRound = document.createElement('tr');   // Create new element
    //lapRound.innerText = getTime();

    let test = tab.firstChild; // FIRST CHILD TO PUT LAPROUND ALWAYS ON THE TOP " BEFORE FIRST CHILD"
    n++;
    lapA.unshift(miliSecForLapTime) 
    lapMiliSec = ((lapA[0] - lapA[1]) * 10) ;
    let lapScore = lapCount(lapMiliSec)

    lapRound.innerHTML = `<td>${n}</td><td class="lap__time">${lapScore}</td><td class="whole__time">${getTime()}</td>`
    
    tab.insertBefore(lapRound, test);  
    
   // let wholeTime = document.querySelectorAll('.whole__time');
    //let lapTime = document.querySelectorAll('.lap__time');
}
function lapCount(data) {
  let m, m1, m2, s,s1,s2;
  m = (data / 60000) ;
  m1 = Math.floor(m);
  m2 = data - (m1 * 60000);

  s = m2 / 1000;
  s1 = Math.floor(s);
  s2 = data - (s1 * 1000);

  mm = (data % 1000) / 10;

  //console.log(m1 + ' ' + s1 + '  ' + s2 + '  ' + mm );
  return (m1 < 10 ? "0" + m1 : m1) +  ":" + (s1 < 10 ? "0" + s1 : s1) + ":" + (mm < 10 ? "0" + mm : mm);

}

}

/*
 let dummy = data * 10;
  let ms = (dummy % 100);
  let s = Math.floor(dummy / 100);
  let m = Math.floor(s / 60)
  console.log(dummy);

  return (m < 10 ? "0" + m : m) +  ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
  */