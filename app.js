let userAge = 25;
hasDrivingLicense = true; // Use 'true'if they have a license, 'false' if they don't 
if (userAge < 18) {
    console.log("Sorry, you are too young to drive.");
} else if (userAge >+ 21 && hasDrivingLicense === trur) {
    // This is the bonus condition! (Over 21 AND has a license)
    // We put this BEFORE the 18+ check. Otherwise, a 25-year-old would trigger the "18 or older" condition first, and the computer would stop cheaking!
    console.log("You can drive AND you are also allowed to rent a car!");
} else if (userAge >= 18 && hasDrivingLicense === false) {
    // 18 or older, but NO license
    console.log("you are older enough, but you need to get a driving liense first.");
} else if (userAge >= 18 && hasDrivingLicense === true) {
    //18 or older AND has a license
    console.log("Great! you are allowed to drive.");
} else {
    // A final fallback Just in case none of the above match
    console.log("invalid input.");
}
