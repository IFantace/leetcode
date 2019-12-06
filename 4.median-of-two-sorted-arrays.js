/*
 * @Author: Austin
 * @Date: 2019-12-06 14:28:14
 * @LastEditors: Austin
 * @LastEditTime: 2019-12-06 15:15:18
 */
/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (26.80%)
 * Likes:    5460
 * Dislikes: 809
 * Total Accepted:    552.3K
 * Total Submissions: 2M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * 
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 * 
 * You may assume nums1 and nums2 cannot be both empty.
 * 
 * Example 1:
 * 
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * The median is 2.0
 * 
 * 
 * Example 2:
 * 
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * The median is (2 + 3)/2 = 2.5
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let total_length = nums1.length + nums2.length;
    let is_even = total_length % 2 == 0;
    let median_index = Math.floor((total_length - 1) / 2);
    for (i = 1; i <= median_index; i++) {
        if (nums1.length == 0) {
            nums2.shift();
        } else if (nums2.length == 0) {
            nums1.shift();
        } else {
            if (nums1[0] < nums2[0]) {
                nums1.shift();
            } else {
                nums2.shift();
            }
        }
    }
    if (is_even) {
        let sum = 0;
        for (i = 0; i < 2; i++) {
            if (nums1.length == 0) {
                sum += nums2.shift();
            } else if (nums2.length == 0) {
                sum += nums1.shift();
            } else {
                sum += nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
            }
        }
        return sum / 2;
    } else {
        if (nums1.length == 0) {
            return nums2[0];
        } else if (nums2.length == 0) {
            return nums1[0];
        } else {
            return nums1[0] < nums2[0] ? nums1[0] : nums2[0];
        }
    }
};
// @lc code=end