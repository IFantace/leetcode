/*
 * @Author: Austin
 * @Date: 2019-12-06 19:30:36
 * @LastEditors  : Austin
 * @LastEditTime : 2020-02-12 21:38:54
 */
/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 *
 * https://leetcode.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (25.47%)
 * Likes:    3331
 * Dislikes: 611
 * Total Accepted:    364.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '"aa"\n"a"'
 *
 * Given an input string (s) and a pattern (p), implement regular expression
 * matching with support for '.' and '*'.
 *
 *
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 *
 * The matching should cover the entire input string (not partial).
 *
 * Note:
 *
 *
 * s could be empty and contains only lowercase letters a-z.
 * p could be empty and contains only lowercase letters a-z, and characters
 * like . or *.
 *
 *
 * Example 1:
 *
 *
 * Input:
 * s = "aa"
 * p = "a"
 * Output: false
 * Explanation: "a" does not match the entire string "aa".
 *
 *
 * Example 2:
 *
 *
 * Input:
 * s = "aa"
 * p = "a*"
 * Output: true
 * Explanation: '*' means zero or more of the preceding element, 'a'.
 * Therefore, by repeating 'a' once, it becomes "aa".
 *
 *
 * Example 3:
 *
 *
 * Input:
 * s = "ab"
 * p = ".*"
 * Output: true
 * Explanation: ".*" means "zero or more (*) of any character (.)".
 *
 *
 * Example 4:
 *
 *
 * Input:
 * s = "aab"
 * p = "c*a*b"
 * Output: true
 * Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore,
 * it matches "aab".
 *
 *
 * Example 5:
 *
 *
 * Input:
 * s = "mississippi"
 * p = "mis*is*p*."
 * Output: false
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s.length === 0 && p.length === 0) {
    return true;
  }
  if (s[0] === p[0] || p[0] === ".") {
    if (p[1] === "*") {
      this_result = s.length >= 1 ? isMatch(s.substring(1), p) : false;
      if (this_result) {
        return this_result;
      }
      this_result =
        s.length >= 0 && p.length >= 2
          ? isMatch(s.substring(0), p.substring(2))
          : false;
      if (this_result) {
        return this_result;
      }
    } else {
      this_result =
        s.length >= 1 && p.length >= 1
          ? isMatch(s.substring(1), p.substring(1))
          : false;
      if (this_result) {
        return this_result;
      }
    }
  } else {
    if (p[1] === "*") {
      this_result =
        s.length >= 0 && p.length >= 1
          ? isMatch(s.substring(0), p.substring(2))
          : false;
      if (this_result) {
        return this_result;
      }
    } else {
      return false;
    }
  }
  return false;
};
// let result = isMatch("aaaaaaaaaaaaab", "a*a*a*a*a*a*a*a*a*a*c");
// result;
// @lc code=end
