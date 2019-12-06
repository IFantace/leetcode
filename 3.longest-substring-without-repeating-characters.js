/*
 * @Author: Austin
 * @Date: 2019-12-05 17:34:54
 * @LastEditors: Austin
 * @LastEditTime: 2019-12-05 18:16:09
 */
/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (28.61%)
 * Likes:    5975
 * Dislikes: 342
 * Total Accepted:    1M
 * Total Submissions: 3.6M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: "abcabcbb"
 * Output: 3 
 * Explanation: The answer is "abc", with the length of 3. 
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3. 
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 * 
 * 
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let find_string = "";
    let max_length = 0;
    for (let i = 0; i < s.length; i++) {
        if ((this_index = find_string.indexOf(s[i])) !== -1) {
            find_string = find_string.substr(this_index + 1);
        }
        find_string += s[i];
        max_length = max_length < find_string.length ? find_string.length : max_length;
    }
    return max_length;
};
// @lc code=end