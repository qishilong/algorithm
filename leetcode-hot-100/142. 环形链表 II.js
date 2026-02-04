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
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//   if (!head || !head.next) {
//     return null;
//   }

//   const set = new Set();

//   while (head !== null) {
//     if (set.has(head)) {
//       return head;
//     }

//     set.add(head);
//     head = head.next;
//   }

//   return null;
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }

  let fast = head,
    slow = head;

  while (fast !== null) {
    slow = slow.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }

    if (fast === slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};
