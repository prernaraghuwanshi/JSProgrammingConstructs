// 1. Table of powers
{
    const prompt = require('prompt-sync')();
    let power = prompt('Enter number to be the maximum power ');
    for (let index = 0; index <= power; index++) {
        console.log(2 ** index);
    }
}

// 2. Print nth harmonic number
{
    const prompt = require('prompt-sync')();
    let n = parseInt(prompt("Enter the number: "));
    let harmonicNumber = 0.0;
    for (let index = 1; index <= n; index++) {
        harmonicNumber += 1 / index;
    }
    console.log("Harmonic number " + harmonicNumber);
}

// 3. Prime or not
{
    const prompt = require('prompt-sync')();
    let number = parseInt(prompt("Enter the number: "));
    let isPrimeNumber = true;
    if (number == 1) {
        isPrimeNumber = false;
    }
    for (let index = 2; index <= number / 2; index++) {
        if (number % index == 0) {
            isPrimeNumber = false;
            break;
        }
    }
    console.log("Is Prime Number: " + isPrimeNumber);
}

// 4. Prime numbers in given range
{
    const prompt = require('prompt-sync')();
    let start = parseInt(prompt("Enter the lower number of range: "));
    let end = parseInt(prompt("Enter the higher number of range: "));
    for (let number = start; number <= end; number++) {
        let isPrimeNumber = true;
        if (number == 1 || number == 0) {
            continue;
        }
        for (let index = 2; index <= number / 2; index++) {
            if (number % index == 0) {
                isPrimeNumber = false;
                break;
            }
        }
        if (isPrimeNumber) {
            console.log("Prime Number: " + number);
        }
    }
}