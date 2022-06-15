/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const str1 = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";  
const expected1 = true;

const str2 = "D(i{a}l[ t]o)n{e";  
const expected2 = false;

const str3 = "A(1)s[O (n]0{t) 0}k";
const expected3 = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).  --> O(N)
 * - Space: O(?). --> O(N)
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    let openMap = { "(": 1, "[": 1, "{": 1 };
    let closeMap = { ")": "(", "]": "[", "}": "{" };
    let stack = [];
    for (let char of str) {
        if (char in openMap) {
            stack.push(char);
        } else if (char in closeMap) {
            check = stack.pop();
            if (closeMap[char] != check) {
                return false;
            }
        }
    }
    if (stack.length != 0) {
        return false;
    }
    return true;
}

console.log("Acutal:   ", bracesValid(str1));
console.log("Expected: ",expected1);

console.log("Acutal:   ", bracesValid(str2));
console.log("Expected: ",expected2);

console.log("Acutal:   ", bracesValid(str3));
console.log("Expected: ",expected3);