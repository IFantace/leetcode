/*
 * @Author: Austin
 * @Date: 2020-02-13 12:49:48
 * @LastEditors  : Austin
 * @LastEditTime : 2020-02-13 13:35:46
 */
/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (37.14%)
 * Likes:    1679
 * Dislikes: 331
 * Total Accepted:    232.6K
 * Total Submissions: 589.5K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, reverse the nodes of a linked list k at a time and
 * return its modified list.
 *
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes in the end should remain as it is.
 *
 *
 *
 *
 * Example:
 *
 * Given this linked list: 1->2->3->4->5
 *
 * For k = 2, you should return: 2->1->4->3->5
 *
 * For k = 3, you should return: 3->2->1->4->5
 *
 * Note:
 *
 *
 * Only constant extra memory is allowed.
 * You may not alter the values in the list's nodes, only nodes itself may be
 * changed.
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let current_point = head;
  let current_point_font = current_point;
  let remain = 0;
  while (true) {
    if (current_point === null) {
      break;
    }
    if (remain === 0) {
      current_point_font = current_point;
    }
    current_point = current_point.next;
    remain++;
    if (remain === k) {
      remain = 0;
      for (let i = 0; i < parseInt(k / 2); i++) {
        let current_point_tail = current_point_font;
        for (let j = 0; j < k - 1 - i * 2; j++) {
          current_point_tail = current_point_tail.next;
        }
        let font_value = current_point_font.val;
        current_point_font.val = current_point_tail.val;
        current_point_tail.val = font_value;
        current_point_font = current_point_font.next;
      }
    }
  }
  return head;
};
// @lc code=end
