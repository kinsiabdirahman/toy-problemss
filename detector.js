function speedDetector(speed) {
  // Const for speed limits and demerit points
  const speedLimit = 70;
  const demeritPointsPerKmph = 5;
  const maxDemeritPoints = 12;

  // Check if the speed is below the speed limit
  if (speed < speedLimit) {
    console.log("Ok"); // Output "Ok" if within the speed limit
    return;
  }

  // Calculate demerit points based on the difference between speed and speed limit
  const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPerKmph);

  // Check if demerit points exceed the maximum allowed
  if (demeritPoints > maxDemeritPoints) {
    console.log("License suspended"); // Output "License suspended" if demerit points exceed the maximum
  } else {
    console.log("Points: " + demeritPoints); // Output the calculated demerit points
  }
}

// Test the function with a speed value of 200
speedDetector(200);
