// 1. Minimum and maximum
{
    let min = 1000;
    let max = 99;
    for (let index = 0; index < 5; index++) {
        let number = Math.floor(Math.random() * 900) + 100;
        console.log("Number : " + number);
        if (number < min) {
            min = number;
        }
        if (number > max) {
            max = number;
        }
    }
    console.log("Max is " + max + " Min is " + min);
}

// 2. Day in between
{
    const prompt = require('prompt-sync')();
    let day = prompt('Enter day ');
    let month = prompt('Enter month ');
    let result = false;
    if (month == 'March' && day > 20) {
        result = true;
    }
    if (month == 'April' || month == 'May') {
        result = true;
    }
    if (month == 'June' && day < 20) {
        result = true;
    }
    console.log("Day in between? " + result);
}