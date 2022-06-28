/* 
  Recursively sum an arr of ints
*/

const twoNums1 = [1, 2, 3];
const twoExpected1 = 6;

const twoNums2 = [1];
const twoExpected2 = 1;

const twoNums3 = [];
const twoExpected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums){
    if(nums.length <=0) return 0;
    else{
        return nums[nums.length - 1] + sumArr(nums.slice(0,nums.length - 1));
    }
}


console.log("Result  :",sumArr(twoNums1));
console.log("Expected:", twoExpected1);

console.log("Result  :",sumArr(twoNums2));
console.log("Expected:", twoExpected2);

console.log("Result  :",sumArr(twoNums3));
console.log("Expected:", twoExpected3);