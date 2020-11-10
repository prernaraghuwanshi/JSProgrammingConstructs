// 1. Write number in words
{
    const prompt = require('prompt-sync')();
    let number = parseInt(prompt('Enter number (between 0 and 9) '));
    switch (number) {
        case 0:
            console.log('ZERO');
            break;
        case 1:
            console.log("ONE");
            break;
        case 2:
            console.log("TWO");
            break;
        case 3:
            console.log("THREE");
            break;
        case 4:
            console.log("FOUR");
            break;
        case 5:
            console.log("FIVE");
            break;
        case 6:
            console.log("SIX");
            break;
        case 7:
            console.log("SEVEN");
            break;
        case 8:
            console.log("EIGHT");
            break;
        case 9:
            console.log("NINE");
            break;
        default:
            console.log("ERROR! Not a single digit number");
    }
}