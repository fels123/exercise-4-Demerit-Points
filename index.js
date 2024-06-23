// speed limit = 70
// above speed limit by 5 > 1 point
// math.floor(1.3)
//if more than 12 points license suspended
function checkSpeed(speed) {
  const speedLimit = 70;
  const aboveSpeedLimit = 5;

  if (speed < speedLimit + aboveSpeedLimit) {
    console.log("OK");
    return;
  }
  const points = Math.floor((speed - speedLimit) / aboveSpeedLimit);
  if (points >= 12) console.log("License Suspended");
  else console.log("points", points);
}

checkSpeed(180);
