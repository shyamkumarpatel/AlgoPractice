/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 25.1;
const expected4 = 7;

const num5 = 251;
const expected5 = 8;

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
  var num_floor = Math.floor(num);

  if(num_floor.toString().length <= 1) return num_floor;
  else{
    //console.log("num_floor:", num_floor, "num_floor%10", num_floor%10, "num_floor/10", num_floor/10);
    return (num_floor%10) + sumToOneDigit(num_floor/10);
  }
}


console.log("Result  :",sumToOneDigit(num1));
console.log("Expected:", expected1);

console.log("Result  :",sumToOneDigit(num2));
console.log("Expected:", expected2);

console.log("Result  :",sumToOneDigit(num3));
console.log("Expected:", expected3);

console.log("Result  :",sumToOneDigit(num4));
console.log("Expected:", expected4);

console.log("Result  :",sumToOneDigit(num5));
console.log("Expected:", expected5);