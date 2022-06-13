/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;
/**
* - Time: O(?).  --> O(N)
* - Space: O(?). --> O(N/2)
**/
function oddOccurrencesInArray(nums) {
    var rtObj = {};

    for(var i = 0; i < nums.length; i++){
        if(rtObj.hasOwnProperty(nums[i])){
            rtObj[nums[i]] += 1;
        }
        else{
            rtObj[nums[i]] = 1;
        }
    }
    
    for(key in rtObj){
        if (rtObj[key]%2 != 0){
            return key;
        }
    }
    return "No Odd value-pair found.";
}

console.log(oddOccurrencesInArray(nums1), "should equal", expected1);
console.log(oddOccurrencesInArray(nums2), "should equal", expected2);
console.log(oddOccurrencesInArray(nums3), "should equal", expected3);
console.log(oddOccurrencesInArray(nums4), "should equal", expected4);