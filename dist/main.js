const countdown = document.querySelector('#countdown');
// Set Launch Date in Miliseconds
const launchDate = new Date('March 1, 2021 00:00:00').getTime();
const interval = setInterval(function() {
  // Set Today' Date In MILISECONDS
  const now = new Date().getTime();
  const distance = launchDate - now;
 
  // Calculation For Hours, Days, Seconds. --- Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display result
    countdown.innerHTML = `
      <div class="time"><div id="day">${days}</div><span>Days</span></div>
      <div class="time"><div id="hour">${hours}</div><span>Hours</span></div>
      <div class="time"><div id="minutes">${mins}</div><span>Minutes</span></div>
      <div class="time"><div id="seconds">${seconds}</div><span>Seconds</span></div>`;

    // If Launch Date Passed .... 
    if (distance < 0) {
      clearInterval(interval);
      countdown.style.color = '#e8491d';
      countdown.innerHTML = `Website Launched`;        
    }
}, 1000);