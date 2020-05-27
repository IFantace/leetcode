/*
 * @Author: Austin
 * @Date: 2020-02-13 11:46:37
 * @LastEditors  : Austin
 * @LastEditTime : 2020-02-13 12:33:44
 */
/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (35.22%)
 * Likes:    3333
 * Dislikes: 220
 * Total Accepted:    503.6K
 * Total Submissions: 1.4M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 *
 * Example:
 *
 *
 * Input:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * Output: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let merged_list_header = null;
  let merged_list = null;
  while (true) {
    let have_element = false;
    let index_of_min_list = null;
    for (let i = 0; i < lists.length; i++) {
      if (lists[i] != null) {
        have_element = true;
        if (index_of_min_list === null) {
          index_of_min_list = i;
        } else if (lists[index_of_min_list].val > lists[i].val) {
          index_of_min_list = i;
        }
      }
    }
    if (!have_element) {
      break;
    }
    if (merged_list !== null) {
      merged_list.next = new ListNode(lists[index_of_min_list].val);
      merged_list = merged_list.next;
    } else {
      merged_list_header = new ListNode(lists[index_of_min_list].val);
      merged_list = merged_list_header;
    }
    lists[index_of_min_list] = lists[index_of_min_list].next;
  }
  return merged_list_header;
};
// @lc code=end
