// console.log(Math.PI);
// console.log(Math.E);

// Math.round - rounds a number to the nearest int
console.log("Math.round() --------------");
console.log(Math.round(8.2));
console.log(Math.round(10.51));

// Math.floor - rounds down to the nearest integer
console.log("Math.floor() --------------");
console.log(Math.floor(8.99));
console.log(Math.floor(8.78));

// Math.ceil - rounds up to the nearest integer
console.log("Math.ceil() --------------");
console.log(Math.ceil(1.1));
console.log(Math.ceil(2.9));

// Math.max and Math.min find the largest and the smallest number
console.log('Math.max() ------------');
console.log("Math.max(11, 3, 8, 45, 24, 63)", Math.max(11, 3, 8, 45, 24, 63));

console.log('Math.min() ------------');
console.log("Math.min(11, 3, 8, 45, 24, 63)", Math.min(11, 3, 8, 45, 24, 63));

const nums = [1, 6, 7, 56, 75, 100, 315];
console.log(nums);
console.log("Math.min(...nums)", Math.min(...nums));
console.log("Math.max(...nums)", Math.max(...nums));

// Math.abs() - Gets the absolute value of a number
// converts negative numbers to positive

console.log("Math.abs(-10)", Math.abs(-10));
console.log("Math.abs(10)", Math.abs(10));

// Math.pow() power of a number
console.log('Math.pow() ------------');
console.log("Math.pow(2, 3)", Math.pow(2, 3));
console.log("Math.pow(5, 2)", Math.pow(5, 2));

console.log('9 ** 9', 9 ** 9);
console.log('10 ** 10', 10 ** 10);

// Math.sqrt()
console.log("Math.sqrt() -------------");
console.log("Math.sqrt(56)", Math.sqrt(56));

// check if a number is a perfect square

// const num = 16;
// if(Math.sqrt(num) % 1 === 0) {
//     console.log('is perfect square');
// } else {
//     console.log("It's not perfect.")
// }

console.log('function to see if a number is a perfect square');

function isPerfectSquare(num) {
    if(Math.sqrt(num) % 1 === 0) return true;
    return false;
}

console.log("isPerfectSquare(12)", isPerfectSquare(12));
console.log("isPerfectSquare(15)", isPerfectSquare(15));
console.log("isPerfectSquare(49)", isPerfectSquare(49));
console.log("isPerfectSquare(64)", isPerfectSquare(64));
console.log("isPerfectSquare(121)", isPerfectSquare(121));


