/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 1. 哈希集合
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function (headA, headB) {
//   if (!headA || !headB) {
//     return null;
//   }

//   const set = new Set();

//   let temp = headA;
//   while (temp !== null) {
//     set.add(temp);
//     temp = temp.next;
//   }

//   temp = headB;
//   while (temp !== null) {
//     if (set.has(temp)) {
//       return temp;
//     }
//     temp = temp.next;
//   }

//   return null;
// };

/**
 * 2. 双指针
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let pA = headA,
    pB = headB;

  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }

  return pA;
};
