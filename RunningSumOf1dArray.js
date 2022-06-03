/*  Given an array nums.
 *   We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 *   Return the running sum of nums. */

function runningSums(nums) {
    var runningSums = [];

    if (nums.length <= 1 || Array.isArray(nums) == false) {
        return nums;
    } else {
        runningSums.push(nums[0]);
        for (var i = 1; i < nums.length; i++) {
            runningSums.push(nums[i] + runningSums[i - 1]);
        }
        return runningSums;
  }
}

var nums = [1, 2, 3, 4];
console.log(nums);
console.log(runningSums(nums));