/*
 * @lc app=leetcode id=2 lang=java
 *
 * [2] Add Two Numbers
 */
/**
 * Definition for singly-linked list. public class ListNode { int val; ListNode
 * next; ListNode(int x) { val = x; } }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int inc = 0;
        ListNode start = null;
        ListNode last = null;
        do {
            int this_digit = 0;
            if (l1 != null) {
                this_digit += l1.val;
                l1 = l1.next;
            }
            if (l2 != null) {
                this_digit += l2.val;
                l2 = l2.next;
            }
            this_digit += inc;
            inc = this_digit / 10;
            if (start == null) {
                start = new ListNode(this_digit % 10);
                last = start;
            } else {
                last.next = new ListNode(this_digit % 10);
                last = last.next;
            }
        } while (l2 != null || l1 != null || inc != 0);
        // ListNode start = new ListNode(Integer.valueOf(s_sum.substring(s_sum.length()
        // - 1, s_sum.length())));
        // ListNode linkedNode = start;
        // for (int i = s_sum.length() - 1; i > 0; i--) {
        // linkedNode.next = new ListNode(Integer.valueOf(s_sum.substring(i - 1, i)));
        // linkedNode = linkedNode.next;

        // }
        return start;
    }
    /**
     * [9,9,9,9,9,9,9,9,9,9]\n[9,9,9,9,9,9,9,9,9,9]
     */
}
