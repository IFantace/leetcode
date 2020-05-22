/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  if (nums.length < 3) {
    return result;
  }
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  nums;
  for (let i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;
        j++;
        k--;
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else {
        k--;
      }
    }
    while (nums[i] === nums[i + 1]) i++;
  }
  // result.sort(function (a, b) {
  //   if (a[0] < b[0]) {
  //     return -1;
  //   } else if (a[0] > b[0]) {
  //     return 1;
  //   } else {
  //     if (a[1] < b[1]) {
  //       return -1;
  //     } else if (a[1] > b[1]) {
  //       return 1;
  //     } else {
  //       if (a[2] < b[2]) {
  //         return -1;
  //       } else if (a[2] > b[2]) {
  //         return 1;
  //       } else {
  //         return 0;
  //       }
  //     }
  //   }
  // });
  // let new_result = [];
  // if (result.length >= 1) {
  //   new_result.push(result[0]);
  //   for (let i = 1; i < result.length; i++) {
  //     if (
  //       result[i - 1][0] === result[i][0] &&
  //       result[i - 1][1] === result[i][1] &&
  //       result[i - 1][2] === result[i][2]
  //     ) {
  //     } else {
  //       new_result.push(result[i]);
  //     }
  //   }
  // }
  // result;
  return result;
};
// @lc code=end

// threeSum([-1, 0, 1, 2, -1, -4]);
