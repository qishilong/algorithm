/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 1. 哈希表
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//   if (!head || !head.next) {
//     return false;
//   }

//   const set = new Set();

//   while (head !== null) {
//     if (set.has(head)) {
//       return true;
//     }
//     set.add(head);
//     head = head.next;
//   }

//   return false;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 2. 快慢指针
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }

  let fast = head.next,
    slow = head;

  while (fast !== slow) {
    if (fast === null || fast.next === null) {
      return false;
    }

    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
};
