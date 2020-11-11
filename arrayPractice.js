// 1.
{
    let array = new Array();
    for (let count = 0; count < 10; count++) {
        let number = Math.floor(Math.random() * 900) + 100;
        array.push(number);
    }
    console.log("Array is: " + array);

    let largest = array[0];
    let secondLargest = array[0];

    for (let index = 0; index < array.length; index++) {
        largest = Math.max(largest, array[index]);
    }
    for (let index = 0; index < array.length; index++) {
        if (array[index] != largest)
            secondLargest = Math.max(secondLargest, array[index]);
    }
    console.log("Second largest = " + secondLargest);

    let smallest = array[0];
    let secondSmallest = array[0];

    for (let index = 0; index < array.length; index++) {
        if (array[index] < smallest) {
            secondSmallest = smallest;
            smallest = array[index];
        }
        else if (array[index] < secondSmallest && array[index] != smallest)
            secondSmallest = array[index];
    }
    console.log("Second smallest = " + secondSmallest);

    //2.
    let arraySort = array.slice(0).sort();
    console.log("Second largest after sorting: " + arraySort[arraySort.length - 2]);
    console.log("Second smallest after sorting: " + arraySort[1]);
}
// 3.
{
    const prompt = require('prompt-sync')();
    let number = parseInt(prompt("Enter the number: "));
    function getPrimeFactors(number) {
        let factorArray = new Array();
        while (number % 2 == 0) {
            factorArray.push(2);
            number /= 2;
        }
        for (let index = 3; index * index <= number; index += 2) {
            while (number % index == 0) {
                factorArray.push(index);
                number = number / index;
            }
        }
        if (number > 2) {
            factorArray.push(number);
        }
        return factorArray;
    }
    let factorArray = getPrimeFactors(number);
    console.log("Prime Factors of " + number + " are " + factorArray);
}
// 4.
{
    const prompt = require('prompt-sync')();
    function getTripletsWithSumZero(array) {
        for (let i = 0; i < array.length - 2; i++) {
            for (let j = i + 1; j < array.length - 1; j++) {
                for (let k = j + 1; k < array.length; k++) {
                    if (array[i] + array[j] + array[k] == 0) {
                        console.log("[" + array[i] + ", " + array[j] + ", " + array[k] + "]\n");
                    }
                }
            }
        }
    }

    let arraySize = parseInt(prompt("Enter the number of elements in an array: "));
    let arrayAdd = new Array();
    for (let index = 0; index < arraySize; index++) {
        arrayAdd.push(parseInt(prompt("Enter the number: ")));
    }
    getTripletsWithSumZero(arrayAdd);
}

//5.
{
    const prompt = require('prompt-sync')();
    let start = parseInt(prompt("Enter the starting range: "));
    let end = parseInt(prompt("Enter the ending range: "));
    let sameDigitArr = new Array();

    if (start < 0 || start > 100 || end < start || end > 100) {
        console.log("Invalid Inputs. Please enter numbers between 0 and 100");
        return;
    }
    for (let index = start; index <= end; index++) {
        if (index % 11 == 0 && index != 0) {
            sameDigitArr.push(index);
        }
    }
    console.log("Numbers are: " + sameDigitArr);
}
