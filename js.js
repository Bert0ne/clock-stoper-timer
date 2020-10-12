
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
      document.title = getTime();

    } 
  })

  function run() {
    stopWatchEl.textContent = getTime();
    document.title = getTime();

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

} else if (document.querySelector('.index__timer')) {

  let hoursInterval ;
  let isOnlyTime = false;
  let endTime ;
//!switch radio inside modal

function checkModal() {
  if (document.querySelector('input[name="radioSel"]')) {
    document.querySelectorAll('input[name="radioSel"]').forEach((elem) => {
      elem.addEventListener("change", function(event) {
        var item = event.target.value;
        if(item == "Hours") {
          isOnlyTime = true;

          displayHours();

        } else {
          displayDays();
          isOnlyTime = false;

        }
      });
    });
  }
}
  setInterval(() => {
    checkModal();
  }, 10);

  function displayDays() {
    document.querySelector('.counting__day__hours').style.display = "none";
    document.querySelector('.counting__hours').style.display = "flex";
  }

  function displayHours() {
    document.querySelector('.counting__day__hours').style.display = "flex";
    document.querySelector('.counting__hours').style.display = "none";

  }





  //! modal window

  document.querySelector('.btn__modal__cancel').addEventListener('click', closeModal);
  //document.querySelector('.modal__background').addEventListener('click', closeModal);
  document.querySelector('.modal__top svg').addEventListener('click', closeModal);

  function closeModal() {
    document.querySelector('.modal__background').style.display = "none";

    document.querySelector('.nav').style.filter = "blur(0)";
    document.querySelector('.timer__buttons').style.filter = "blur(0)";
    document.querySelector('.timer__display').style.filter = "blur(0)";


  }
  window.onclick = function(event) {
    if (event.target == document.querySelector('.modal__background')) {
      document.querySelector('.modal__background').style.display = "none";
      document.querySelector('.nav').style.filter = "blur(0)";
      document.querySelector('.timer__buttons').style.filter = "blur(0)";
      document.querySelector('.timer__display').style.filter = "blur(0)";
    }
  }
  document.querySelector('.timer__btn__edit').addEventListener('click', openModal);
  document.querySelector('.timer__btn__reset').addEventListener('click', resetCounting);


  function openModal() {
    document.getElementById("countingDay").checked = true;
    displayHours();
    document.querySelector('.modal__background').style.display = "flex";
    isOnlyTime = true;


    document.querySelector('.nav').style.filter = "blur(10px)";
    document.querySelector('.timer__buttons').style.filter = "blur(10px)";
    document.querySelector('.timer__display').style.filter = "blur(10px)";
}

  let modalStart = document.querySelector('.btn__modal__start');

  modalStart.addEventListener('click', startCounting);

  document.querySelector('.timer__btn__stop').addEventListener('click', stopCounting)

  document.querySelector('.timer__btn__start').addEventListener('click', unStopCounting)

  function stopCounting() {
    clearInterval(hoursInterval);
  }
  function unStopCounting() {
    countingInterval() 
  }

function countingInterval() {
  hoursInterval = setInterval(() => {
    countingDate(endTime);
  }, 400);
}


  function startCounting() {

    if(!isOnlyTime == true) {
      endTime = 0;
      let hourH = document.querySelector('#HoursH').value;
      let minutesH = document.querySelector('#MinutesH').value;
      let secondsH = document.querySelector('#SecondsH').value;

       endTime = (hourH * 60 * 60 * 1000) + (minutesH * 60 * 1000) + (secondsH * 1000);

       closeModal();
      countingInterval()


    } else {
      let modalDate = document.querySelector('input[type="date"]').value;
      let modalTime = document.querySelector('input[type="time"]').value;
      let strModalDateTime = modalDate + ' ' + modalTime;
      endTime = new Date(strModalDateTime).getTime();
      closeModal();
      countingInterval()
    }
  }




  function resetCounting() {
    clearInterval(hoursInterval);
    document.querySelector('.timer_display__counting').innerHTML = "00:00:00"
  }


  function countingDate(timeC) {
      console.log(timeC);
      endTime = timeC;
      const nowTime = new Date().getTime();
      // const time = Math.floor((endTime - nowTime) / 1000);
      const time = endTime - nowTime;
      const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
     
      let hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
      // Przykład - dodanie 0 przeg godziną 
      hours = hours < 10 ? `0${hours}` : hours;
     
      const minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
     
      const secs = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
     
      document.querySelector('.timer_display__counting').innerHTML = `${days == 1 ? days + ' Day' : days + ' Days'}  ${hours == 1 ? hours + ' Hour' : hours + ' Hours'}  ${minutes == 1 ? minutes + ' Minute' : minutes + ' minutes'}  ${secs == 1 ? secs + ' Second' : secs + ' Seconds'} `;

      let testOfTitle = document.querySelector('.inputTitle').value;
      document.querySelector('.timer_display__title').innerHTML = testOfTitle;
  } 

}

