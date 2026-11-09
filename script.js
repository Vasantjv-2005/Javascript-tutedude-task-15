// Dummy array
let numbers = [4, 8, 2, 11, 6, 7, 10];

// 1. Find the maximum number (Normal Function)
function findMaximum(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// 2. Calculate the sum (Arrow Function)
const calculateSum = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
};

// 3. Count odd numbers (Anonymous Function)
const countOdd = function (arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }

    return count;
};

// Display the results
console.log("Array:", numbers);
console.log("Maximum Number:", findMaximum(numbers));
console.log("Sum of All Elements:", calculateSum(numbers));
console.log("Count of Odd Numbers:", countOdd(numbers));
