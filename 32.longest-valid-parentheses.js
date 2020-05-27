/*
 * @Author: Austin
 * @Date: 2020-02-13 18:54:25
 * @LastEditors  : Austin
 * @LastEditTime : 2020-02-14 18:56:46
 */
/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 *
 * https://leetcode.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (25.87%)
 * Likes:    2743
 * Dislikes: 119
 * Total Accepted:    247.3K
 * Total Submissions: 907.4K
 * Testcase Example:  '"(()"'
 *
 * Given a string containing just the characters '(' and ')', find the length
 * of the longest valid (well-formed) parentheses substring.
 *
 * Example 1:
 *
 *
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 *
 *
 * Example 2:
 *
 *
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let main_stack = [];
  let cal_result = new Array(s.length);
  let max_result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      main_stack.push({ index: i, sign: s[i] });
    } else {
      let last = main_stack.pop();
      if (last != undefined) {
        if (last.sign === "(") {
          index_of_last_check = last.index;
          cal_result[index_of_last_check] = 2;
          cal_result[i] = 0;
        }
      }
    }
  }
  let this_result = 0;
  for (let i = 0; i < cal_result.length; i++) {
    if (cal_result[i] != undefined) {
      this_result += cal_result[i];
      if (max_result < this_result) {
        max_result = this_result;
      }
    } else {
      this_result = 0;
    }
  }
  return max_result;
};
// @lc code=end
