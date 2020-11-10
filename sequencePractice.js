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
