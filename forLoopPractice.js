// 1. Table of powers
{
    const prompt = require('prompt-sync')();
    let power = prompt('Enter number to be the maximum power ');
    for (let index = 0; index <= power; index++) {
        console.log(2 ** index);
    }
}