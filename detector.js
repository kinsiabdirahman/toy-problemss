function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointsPerKmph = 5;
    const maxDemeritPoints = 12;
  
    if (speed < speedLimit) {
      console.log("Ok");
      return;
    }
  
    const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerKmph);
  
    if (demeritPoints > maxDemeritPoints) {
      console.log("License suspended");
    } else {
      console.log("Points: " + demeritPoints);
    }
  }
  
  speedDetector(200);
  