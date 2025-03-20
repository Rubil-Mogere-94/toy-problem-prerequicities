function speedDetector() {
    const speed = parseFloat(prompt("Enter the speed of the car (km/h): "));

    if (speed < 70) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints > 12) {
            return "License suspended";
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}

// Example usage
console.log(speedDetector());