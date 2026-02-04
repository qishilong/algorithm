/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 1. 将值复制到数组中后用双指针法
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function (head) {
//   if (!head) {
//     return false;
//   }

//   if (!head.next) {
//     return true;
//   }

//   const arr = [];

//   while (head) {
//     arr.push(head.val);
//     head = head.next;
//   }

//   const length = arr.length;

//   for (let i = 0, j = length - 1; i < j; i++, j--) {
//     if (arr[i] !== arr[j]) {
//       return false;
//     }
//   }

//   return true;
// };

/**
 * 2. 递归
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head) {
    return false;
  }

  if (!head.next) {
    return true;
  }

  let frontPoint = null;

  const recursionCheck = currentNode => {
    if (currentNode !== null) {
      if (!recursionCheck(currentNode.next)) {
        return false;
      }

      if (currentNode.val !== frontPoint.val) {
        return false;
      }

      frontPoint = frontPoint.next;
    }

    return true;
  };

  frontPoint = head;

  return recursionCheck(head);
};
