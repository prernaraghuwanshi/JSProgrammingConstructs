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

// 3. Flip coin till condition
{
    const prompt = require('prompt-sync')();
    let HEADS = 0;
    let headsWin = 0;
    let tailsWin = 0;
    while (headsWin != 11 && tailsWin != 11) {
        let coinFlip = Math.floor(Math.random() * 10) % 2;
        if (coinFlip == HEADS) {
            headsWin++;
        }
        else {
            tailsWin++;
        }
    }
    if (headsWin == 11) {
        console.log('HEADS WINS');
    } else {
        console.log('TAILS WINS');
    }
}

// 4. Gambler
{
    let moneyWithGambler = 100;
    let WIN = 1;
    let numberOfWins = 0;
    let numberOfBets = 0;
    while (moneyWithGambler > 0 && moneyWithGambler < 200) {
        let betOutcome = Math.floor(Math.random() * 10) % 2;
        if (betOutcome == WIN) {
            moneyWithGambler++;
            numberOfWins++;
        }
        else {
            moneyWithGambler--;
        }
        numberOfBets++;
    }
    console.log("Number of Bets: " + numberOfBets);
    console.log("Number of Wins: " + numberOfWins);
}
