/*
 * @Author: Austin
 * @Date: 2019-12-05 20:47:10
 * @LastEditors: Austin
 * @LastEditTime: 2019-12-05 21:19:36
 */
/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (32.54%)
 * Likes:    1285
 * Dislikes: 3850
 * Total Accepted:    386.2K
 * Total Submissions: 1.1M
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 * 
 * 
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 
 * 
 * And then read line by line: "PAHNAPLSIIGYIR"
 * 
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 * 
 * 
 * string convert(string s, int numRows);
 * 
 * Example 1:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 * 
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) {
        return s;
    }
    let return_string = "";
    for (let i = 0; i < numRows; i++) {
        let times = 0;
        while ((index = (times * ((numRows - 1) * 2) + i)) < s.length) {
            return_string += s[index];
            if (i != 0 && i != (numRows - 1)) {
                index_of_pass = 2 * (numRows - i - 1);
                if (index + index_of_pass < s.length)
                    return_string += s[index + index_of_pass];
            }
            times++;
        }
    }
    return return_string;
};
// @lc code=end