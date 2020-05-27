/*
 * @Author       : Austin
 * @Date         : 2020-02-14 15:51:44
 * @LastEditors  : Austin
 * @LastEditTime : 2020-02-15 20:20:46
 * @Description  : {{Description this}}
 */
/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (43.87%)
 * Likes:    5535
 * Dislikes: 104
 * Total Accepted:    425.3K
 * Total Submissions: 911K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 *
 *
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 *
 * Example:
 *
 *
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  let max_left = 0;
  let max_right = 0;
  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= max_left) max_left = height[left];
      else res += max_left - height[left];
      left++;
    } else {
      if (height[right] >= max_right) max_right = height[right];
      else res += max_right - height[right];
      right--;
    }
  }
  return res;
};

// @lc code=end
