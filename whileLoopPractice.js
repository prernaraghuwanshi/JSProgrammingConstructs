// 1. Table of powers
{
    prompt = require('prompt-sync')();
    let power = parseInt(prompt('Enter power less than 8'));
    let n = 0;
    while (n <= power) {
        let number = 2 ** n;
        if (number <= 256) {
            console.log(number);
            n++;
        } else {
            break;
        }
    }
}

// 2. Magic number
{
    const prompt = require('prompt-sync')();
    let number = 0;
    while (number < 1 || number > 100) {
        number = parseInt(prompt('Enter a number between 1 to 100: '));
    }

    let lower = 1;
    let upper = 100;
    let middle = Math.floor((lower + upper) / 2);

    while (middle != number) {
        if (number < middle) {
            upper = middle;
            middle = Math.floor((lower + upper) / 2);
        } else {
            lower = middle;
            middle = Math.floor((lower + upper) / 2);
        }
    }
    console.log("Magic Number: " + middle);
}