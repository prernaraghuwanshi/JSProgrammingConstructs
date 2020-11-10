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