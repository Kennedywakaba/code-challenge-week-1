const prompt = require("prompt-sync")({ sigint: true });
function calculateDemerit(speed) {
    const speedLimit = 70;
    const kmAboveSpeedlimit = 5;

    if (speed <= speedLimit) {
        console.log("OK");       
    }else {
        const kmAboveLimit = speed - speedLimit;
        const demeritPoints = (kmAboveLimit / kmAboveSpeedlimit);

        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
          
}