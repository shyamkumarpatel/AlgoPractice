/* 

  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).   -> O(N)
 * - Space: O(?).  -> O(N)
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {
    var rtArr = [];

    if(nums.length < 1){
        return null;
    }
    rtArr.push(nums[0]);
    for(var i = 1; i < nums.length; i++){
        //console.log("nums[i]", nums[i], "rtArr[i-1]", rtArr[i-1]);
        if(nums[i] != rtArr[rtArr.length - 1]){
            rtArr.push(nums[i]);
        }
    }

    return rtArr;

}

console.log("Result  :",dedupeSorted(nums1));
console.log("Expected:", expected1);

console.log("Result  :",dedupeSorted(nums2));
console.log("Expected:", expected2);

console.log("Result  :",dedupeSorted(nums3));
console.log("Expected:", expected3);

console.log("Result  :",dedupeSorted(nums4));
console.log("Expected:", expected4);