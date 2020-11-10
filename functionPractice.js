// 1. Temperature Conversion
{
    const prompt = require('prompt-sync')();
    let unit = prompt('Unit: ');
    let value = parseFloat(prompt('Enter the temperature: '));
    if (unit == 'degreeF') {
        if (value < 32 || value > 212) {
            console.log('INVALID');
            return;
        }
    } else if (unit == 'degreeC') {
        if (value < 0 || value > 100) {
            console.log('INVALID');
            return;
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
            console.log("Temprature in celcius is " + fahrenheitToCelcius(value));
            break;
        case 'degreeC':
            console.log("Temperature in Fahrenheit is " + celciusToFahrenheit(value));
            break;
        default:
            console.log('Invalid unit');
    }
}