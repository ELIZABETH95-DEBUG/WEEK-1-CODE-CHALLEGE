function calculateDemeritPoints(speed) {
    const speedlimit = 70;
    let demeritsPoints = 0;

    if (speed > speedlimit) {
        demeritpoints = maths.floor(speed - speedlimit) / 5;
    }
    
    return demeritpints;
 }

 function main() {
    const speed = parseint(prompt("Enter the speed of the car (in km/hr):"));

    const demeritpoints = calculateDemeritpoints(speed);

 if (demeritpoints > 0) {
    console.log("points:",demeritpoints);
    if (demeritpoint > 12) {
        console.log("license suspended");
    }
 } else {
    console.log("ok");
 }

 }

 