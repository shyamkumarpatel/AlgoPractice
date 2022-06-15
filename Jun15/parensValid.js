/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).   --> O(N)
 * - Space: O(?).  --> O(1)
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    let parensOpen = 0;
    for (let char of str) {
        if (char === '(') {
            parensOpen++;
        } else if (char === ')') {
            parensOpen--;
        }
        if (parensOpen === -1) {
            return false;
        }
    }
    if (parensOpen != 0) {
        return false;
    }
    return true;
}

console.log("Acutal:   ", parensValid(str1));
console.log("Expected: ",expected1);

console.log("Acutal:   ", parensValid(str2));
console.log("Expected: ",expected2);

console.log("Acutal:   ", parensValid(str3));
console.log("Expected: ",expected3);

console.log("Acutal:   ", parensValid(str4));
console.log("Expected: ",expected4);