  // Countdown Timer Functionality
  function startCountdown() {
    const deadline = new Date("Nov 24, 2024 00:00:00").getTime(); // Set the target date and time

    const timer = setInterval(function() {
      const now = new Date().getTime();
      const timeLeft = deadline - now;

      if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "EXPIRED";
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
      }
    }, 1000);
  }

  // Start the countdown when the page loads
  window.onload = startCountdown;