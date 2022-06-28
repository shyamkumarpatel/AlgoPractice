/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

const nums1 = [];
const expected1 = [];

const nums2 = [1];
const expected2 = [1];

const nums3 = [5, 1, 4];
const expected3 = [];

const nums4 = [5, 1, 4, 1];
const expected4 = [1];

const nums5 = [5, 1, 4, 1, 5];
const expected5 = [5, 1];
//  - order doesn't matter

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
    //rtArr is variable that we are be building to return the results.
    rtArr = [];

    //if the nums array is empty or only has 1 number in it, then it's contents are assigned to rtArr.
   // if(nums.length < 2) rtArr = nums;
    //else we will run through our algorithm
   // else{
        //create to dictionary which will hold the count of occurrence of each distinct number in the nums array.
        new_dict1 = {}
        for (let i = 0; i < nums.length; i++){
            let index = nums[i];
            if (new_dict1.hasOwnProperty(index)){
                new_dict1[index]++;
            } else{
                new_dict1[index] = 1;
            }
        }
        //looping through the dic to get the max count for a particular number
        var maxCount = 0;
        var isNotSameValue = false;
        for (key in new_dict1){
            if (new_dict1[key] > maxCount) maxCount = new_dict1[key];
            //console.log("For key =",key, "Count =", new_dict1[key], "maxCount = ", maxCount)
            if (new_dict1[key] != maxCount || nums.length == 1) isNotSameValue =true;
        }
        if(isNotSameValue){
            //looping through the dic, if value of a distinct number is max value, then push that into rtArr
            for (key in new_dict1){
                if (new_dict1[key] == maxCount) rtArr.push(parseInt(key));
            }
    //    }
    }

    //return the rtArr
    return rtArr;
}

console.log("Result  :",mode(nums1));
console.log("Expected:", expected1);

console.log("Result  :",mode(nums2));
console.log("Expected:", expected2);

console.log("Result  :",mode(nums3));
console.log("Expected:", expected3);

console.log("Result  :",mode(nums4));
console.log("Expected:", expected4);

console.log("Result  :",mode(nums5));
console.log("Expected:", expected5);