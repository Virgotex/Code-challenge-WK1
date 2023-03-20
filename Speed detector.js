function checkSpeed() {
  
    let speed = document.getElementById("speed").value;

    let points = 0;
    if (speed > 70) {
      points = Math.floor((speed - 70) / 5);
    }
  
    if (points > 0 && points < 12) {
      document.getElementById("result").textContent = "Points: " + points;
    } else if (points >= 12) {
      document.getElementById("result").textContent = "License suspended";
    } else {
      document.getElementById("result").textContent = "OK";
    }
  }












