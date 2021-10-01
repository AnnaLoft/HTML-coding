// Timer

function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline = "December 31 2021 15:00:00 GMT+0300";
//   let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);




// Change icons onclick
function changeImage() {
  let button = document.getElementById("mobHeartIcon");
  if (button.src === `https://${window.location.host}/assets/icons/fav-mobile.svg`) {
    document.getElementById("mobHeartIcon").src = `https://${window.location.host}/assets/icons/mob-heart-active.svg`;
  }
  else if (button.src === `https://${window.location.host}/assets/icons/mob-heart-active.svg`)
    button.src = `https://${window.location.host}/assets/icons/fav-mobile.svg`;

}

function changeImageHeartIcon() {
  let destopFav = document.getElementById("destopFav")
  if (destopFav.src === `https://${window.location.host}/assets/icons/heart-iconsvg.svg`) {
    destopFav.src = `https://${window.location.host}/assets/icons/red-heart.svg`;
  }
  else if (destopFav.src === `https://${window.location.host}/assets/icons/red-heart.svg`)
    destopFav.src = `https://${window.location.host}/assets/icons/heart-iconsvg.svg`;

}

function changeSub() {
  let mainBtn = document.getElementById("subBtn");
  let hiddenIcon = document.getElementById("subHidden");
  let subText = document.getElementById("subscrib-text");
  mainBtn.classList.toggle('visible');
  hiddenIcon.classList.toggle('sub-avtive')
  if (subText.innerHTML === "Вы подписаны") {
    subText.innerHTML="Подписаться"
  }
  else { subText.innerHTML="Вы подписаны"

  };
}

function changeFav() {
  let mainBtn = document.getElementById("favBtn");
  let hiddenIcon = document.getElementById("favHidden");
  let favText = document.getElementById("fav-text");

  hiddenIcon.classList.toggle('sub-avtive');
  mainBtn.classList.toggle('visible');

  if (favText.innerHTML === "В избранное") {
    favText.innerHTML="В избранном"
  }
  else { favText.innerHTML="В избранное"

  };
}


function getBorder() {
  let mainFrame = document.getElementById('mainPicture');
  let firstItem = document.getElementById('first-item');
  let secondItem = document.getElementById('second-item');
  let thirdItem = document.getElementById('third-item');
  let fourthItem = document.getElementById('fourth-item');
 document.querySelectorAll('.lot-pic').forEach(item =>{
   item.addEventListener('click', event => {
    Array.from(document.getElementsByClassName("lot-pic")).map(i => {
      i.classList.remove('getBorder'); 
    });
    item.classList.add('getBorder');
   })
 })

 firstItem.addEventListener('click', event => {
  mainFrame.src="./assets/images/lot-img.png";
 });

secondItem.addEventListener('click', event => {
  mainFrame.src="./assets/images/coins.png";
 });

 thirdItem.addEventListener('click', event => {
  mainFrame.src="./assets/images/rublo-ruso-monedas.png.jpg";
 });

 fourthItem.addEventListener('click', event => {
  mainFrame.src="./assets/images/world-coins-assorted-chinese-rmb-taiwan-yuan-india-rupee-mexican-peso-british-pound-euro-us-dollar-47021010.jpg";
 });
}
