/*
 * @Author: Austin
 * @Date: 2019-12-05 18:20:08
 * @LastEditors: Austin
 * @LastEditTime: 2019-12-05 19:48:59
 */
/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (27.61%)
 * Likes:    4021
 * Dislikes: 375
 * Total Accepted:    613.5K
 * Total Submissions: 2.2M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s;
    }
    let max_string = "";
    let odd_find_string = "";
    let even_find_string = "";
    let odd = true;
    let even = true;
    for (let index = 0; index < s.length; index++) {
        odd = true;
        even = true;
        odd_find_string = s[index];
        even_find_string = s[index];
        for (let range = 1; range <= s.length / 2; range++) {
            if (odd) {
                if (!(((index - range) < 0) || ((index + range) > (s.length - 1)))) {
                    let front_word = s[index - range];
                    let back_word = s[index + range];
                    if (front_word === back_word) {
                        odd_find_string = front_word + odd_find_string + back_word;
                    } else {
                        odd = false;
                    }
                } else {
                    odd = false;
                }
            }
            if (even) {
                if (!(((index - range + 1) < 0) || ((index + range) > (s.length - 1)))) {
                    let front_word = s[index - range + 1];
                    let back_word = s[index + range];
                    if (front_word === back_word) {
                        even_find_string = front_word + even_find_string + back_word;
                    } else {
                        even = false;
                    }
                } else {
                    even = false;
                }
            }
            max_string = max_string.length < odd_find_string.length ? odd_find_string : max_string;
            max_string = max_string.length < even_find_string.length ? even_find_string : max_string;
        }
    }
    return max_string;
};
// let result = longestPalindrome("a");
// result;
// @lc code=end