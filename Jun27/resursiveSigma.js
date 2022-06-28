/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;

/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num) {
    num = Math.floor(num);
    if(num <=0) return 0;
    else{
        return num + recursiveSigma(num - 1)
    }
}


console.log("Result  :",recursiveSigma(num1));
console.log("Expected:", expected1);

console.log("Result  :",recursiveSigma(num2));
console.log("Expected:", expected2);

console.log("Result  :",recursiveSigma(num3));
console.log("Expected:", expected3);