// 1. Temperature Conversion
{
    const prompt = require('prompt-sync')();
    let unit = prompt('Unit: ');

    function checkCorrectInput(temperature) {
        if (unit == 'degreeF') {
            if (temperature < 32 || temperature > 212) {
                console.log('INVALID');
                return false;
            } else {
                return true;
            }
        } else if (unit == 'degreeC') {
            if (temperature < 0 || temperature > 100) {
                console.log('INVALID');
                return false;
            } else {
                return true;
            }
        }
    }

    function celciusToFahrenheit(temperature) {
        return (temperature * (9 / 5)) + 32;
    }

    function fahrenheitToCelcius(temperature) {
        return (temperature - 32) * (5 / 9);
    }

    switch (unit) {
        case 'degreeF':
            let valueF = parseFloat(prompt('Enter the temperature: '));
            if (checkCorrectInput(valueF)) {
                console.log("Temprature in celcius is " + fahrenheitToCelcius(valueF));
            }
            break;
        case 'degreeC':
            let valueC = parseFloat(prompt('Enter the temperature: '));
            if (checkCorrectInput(valueC)) {
                console.log("Temperature in Fahrenheit is " + celciusToFahrenheit(valueC));
            }
            break;
        default:
            console.log('Invalid unit');
    }
}

// 2. Palindromes check
{
    const prompt = require('prompt-sync')();
    let number1 = parseInt(prompt("Enter a number: "));
    let number2 = parseInt(prompt("Enter a number: "));

    function checkPalindrome(number1, number2) {
        let palindrome = 0;
        while (number1 > 0) {
            palindrome = palindrome * 10 + (number1 % 10);
            number1 = Math.floor(number1 / 10);
        }
        return palindrome == number2;
    }

    if (checkPalindrome(number1, number2)) {
        console.log("Palindromes!");
    } else {
        console.log("Not Palindromes!");
    }
}

// 3. Check for prime and check for palindrome also prime
{
    const prompt = require('prompt-sync')();

    function isPrimeNumber(number) {
        for (let index = 2; index < number; index++) {
            if (number % index == 0) {
                return false;
            }
        }
        return true;
    }

    function getPalindrome(number) {
        let palindrome = 0;
        while (number > 0) {
            palindrome = palindrome * 10 + (number % 10);
            number = Math.floor(number / 10);
        }
        return palindrome;
    }

    let number = parseInt(prompt('Enter a number: '));
    if (isPrimeNumber(number)) {
        if (isPrimeNumber(getPalindrome(number))) {
            console.log('Palindome of prime number is also prime');
        } else {
            console.log('Palindrome of prime number is not prime');
        }
    } else {
        console.log('Number is NOT prime');
    }
}