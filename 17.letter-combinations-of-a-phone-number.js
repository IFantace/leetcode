/*
 * @Author: Austin
 * @Date: 2020-02-14 13:40:16
 * @LastEditors  : Austin
 * @LastEditTime : 2020-02-14 14:26:10
 */
/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (42.24%)
 * Likes:    3092
 * Dislikes: 362
 * Total Accepted:    519.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 *
 *
 *
 * Example:
 *
 *
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * Note:
 *
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 *
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const result = [""];
  const mapping_table = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  };
  for (let i = 0; i < digits.length; i++) {
    const this_digit = digits[i];
    const this_result_length = result.length;
    for (let j = 0; j < this_result_length; j++) {
      const current_result_string = result.shift();
      for (let k = 0; k < mapping_table[this_digit].length; k++) {
        result.push(current_result_string + mapping_table[this_digit][k]);
      }
    }
  }
  if (result.length === 1) {
    return [];
  }
  return result;
};
// letterCombinations("23");
// @lc code=end
