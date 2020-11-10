// 1. Random function to get single digit
{
    let digit = Math.floor(Math.random() * 10);
    console.log("Random digit: " + digit);
}

// 2. Random function to get dice value
{
    let dice = Math.ceil(Math.random() * 10) % 6;
    console.log("Dice: " + dice);
}

// 3. Add two random dice numbers
{
    let diceNum1 = Math.floor(Math.random() * 6) + 1;
    let diceNum2 = Math.floor(Math.random() * 6) + 1;
    let sum = diceNum1 + diceNum2;
    console.log("First Number: " + diceNum1 + " Second Number: " + diceNum2 + " Sum: " + sum);
}

// 4. Sum and Average of 5 Random 2 digit numbers
{
    let sum = 0;
    for (let index = 0; index < 5; index++) {
        sum += Math.floor(Math.random() * 90) + 10;
    }
    console.log("Sum: " + sum + " Average: " + sum / 5);
}

// 5. Unit Conversion
{
    let inchToFt = 1 / 12;
    console.log("42 inch = " + inchToFt * 42 + " ft");
    let feetToMeter = 0.3048;
    let length = 60;
    let breadth = 40;
    let area = length * feetToMeter * breadth * feetToMeter;
    console.log("Area in meters square: " + area);
    console.log("Area of 25 such plots: " + 25 * area);
}
