/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums
span a consecutive range.
*/

const nums1 = [1, 13, 14, 15, 37, 38, 70];
const expected1 = "1, 13-15, 37-38, 70";

const nums2 = [5, 6, 7, 8, 9];
const expected2 = "5-9";

const nums3 = [1, 2, 3, 7, 9, 15, 16, 17];
const expected3 = "1-3, 7, 9, 15-17";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).   --> O(N)
 * - Space: O(?).  --> O(N)
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */
 //const nums1 = [1, 13, 14, 15, 37, 38, 70];
 //const expected1 = "1, 13-15, 37-38, 70";
function bookIndex(nums) {

    var lastNum = [];  // hold the current nums value being checked
    var rtStr = "";    // hold the returning string

    if(nums.length < 2) return String(nums); // if the nums is empty or only has 1 value, then return that value

    for(var i =0; i < nums.length; i++){
        lastNum.push(nums[i]);         // Push the current index of nums into lastNum arr.
        if(nums[i]+1 == nums[i+1]){    // Check the current index + 1 to the next element within the lastNum arr.
            lastNum.push(nums[i]);
        }
        else{
            if(lastNum.length < 2){
                rtStr += nums[i]+", ";
                lastNum = [];
            }
            else{
                rtStr += lastNum[0] +"-"+ lastNum[lastNum.length-1] + ", ";
                lastNum = [];
            }
        }
    }
    return rtStr.substring(0,rtStr.length-2);
}

console.log("Returned: ", bookIndex(nums1));
console.log("Expected: ",expected1);

console.log("Returned: ",bookIndex(nums2));
console.log("Expected: ",expected2);

console.log("Returned: ",bookIndex(nums3));
console.log("Expected: ",expected3);

console.log("Returned: ",bookIndex([1]));
console.log("Expected: ",1);