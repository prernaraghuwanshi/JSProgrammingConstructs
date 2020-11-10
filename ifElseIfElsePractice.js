// 1. Read a single digit number and write number in word
{
    const prompt = require('prompt-sync')();
    let number = prompt('Enter number (between 0 and 9)');
    if (number == 0) {
        console.log("ZERO");
    } else if (number == 1) {
        console.log("ONE");
    } else if (number == 2) {
        console.log("TWO");
    } else if (number == 3) {
        console.log("THREE");
    } else if (number == 4) {
        console.log("FOUR");
    } else if (number == 5) {
        console.log("FIVE");
    } else if (number == 6) {
        console.log("SIX");
    } else if (number == 7) {
        console.log("SEVEN");
    } else if (number == 8) {
        console.log("EIGHT");
    } else if (number == 9) {
        console.log("NINE");
    } else {
        console.log("ERROR! Not a single digit number");
    }
}

// 2. Display Weekday
{
    const prompt = require('prompt-sync')();
    let day = prompt('Enter day in number ( betwwen 1 and 7) ');
    if (day == 1) {
        console.log('MONDAY');
    } else if (day == 2) {
        console.log("TUESDAY");
    } else if (day == 3) {
        console.log("WEDNESDAY");
    } else if (day == 4) {
        console.log("THURSDAY");
    } else if (day == 5) {
        console.log("FRIDAY");
    } else if (day == 6) {
        console.log("SATURDAY");
    } else if (day == 7) {
        console.log("SUNDAY");
    } else {
        console.log("ERROR! Enter correct number");
    }
}

// 3. Unit, tens, hundreds etc..
{
    const prompt = require('prompt-sync')();
    let number = parseInt(prompt("Enter a number in tenth's power : "));
    let numInWords;
    if (number == 1) {
        numInWords = 'Unit';
    } else if (number == 10) {
        numInWords = 'Ten';
    } else if (number == 100) {
        numInWords = 'Hundred'
    } else if (number == 1000) {
        numInWords = 'Thousand'
    } else if (number == 10000) {
        numInWords = 'Ten Thousand'
    } else {
        console.log("ERROR! Enter correct number");
    }
    console.log("Number in Word: " + numInWords);
}

// 4. Minimum and maximum from operations
{
    const prompt = require('prompt-sync')();
    let number1 = prompt("Enter Number 1: ");
    let number2 = prompt('Enter Number 2: ');
    let number3 = prompt('Enter Number 3: ');
    let operation1 = number1 + number2 * number3;
    let operation2 = number1 % number2 + number3;
    let operation3 = number3 + number1 / number2;
    let operation4 = number1 * number2 + number3;
    let minimum = operation1;
    let maximum = operation1;
    if (operation2 < minimum) {
        minimum = operation2;
    } else if (operation3 < minimum) {
        minimum = operation3;
    } else {
        minimum = operation4;
    }
    if (operation2 > maximum) {
        maximum = operation2;
    } else if (operation3 > maximum) {
        maximum = operation3;
    } else {
        maximum = operation4;
    }
    console.log("Maximum = " + maximum + " Minimum = " + minimum);
}