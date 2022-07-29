// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = "abcabcbb"; // abc, bca, cab
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew"; // pw, 
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

const str5 = "d";
const expected5 = 1;
// Explanation: "vadf"
/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
    let maxLen = 1;

    for(let i = 1; i < str.length; i++){
        //if (str.charAt(i-1) != str.charAt(i)) maxLen += 1;
        if(str.substring(i,i+maxLen).includes(str.substring(i-1,i+maxLen-1))){
            i+=maxLen;
        }
        //console.log("maxLen",maxLen,"i",i);
    }

    return maxLen;
}

console.log("Expected: ", expected1);
console.log("Acutal:   ", lengthOfLongestSubString(str1));
console.log("");
console.log("Expected: ", expected2);
console.log("Acutal:   ", lengthOfLongestSubString(str2));
console.log("");
console.log("Expected: ", expected3);
console.log("Acutal:   ", lengthOfLongestSubString(str3));
console.log("");
console.log("Expected: ", expected4);
console.log("Acutal:   ", lengthOfLongestSubString(str4));
console.log("");
console.log("Expected: ", expected5);
console.log("Acutal:   ", lengthOfLongestSubString(str5));
console.log("");
/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const heightsexpected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const heightsexpected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const heightsexpected3 = 16;

const heights4 = [1, 2, 1];
const heightsexpected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {}