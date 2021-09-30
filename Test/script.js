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
  let hiddenIcon = document.getElementById("subHidden")
  hiddenIcon.classList.toggle('sub-avtive')
}

function changeFav() {
  let hiddenIcon = document.getElementById("favHidden")
  hiddenIcon.classList.toggle('sub-avtive')
}