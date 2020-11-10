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