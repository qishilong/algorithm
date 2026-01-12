/*
 * @lc app=leetcode.cn id=19 lang=javascript
 * @lcpr version=30204
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 1. 遍历找到要移除的前一个节点，然后对下一个节点进行移除
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//   if (n <= 0) {
//     return head;
//   }
//   if (!head || (!head.next && n === 1)) {
//     return null;
//   }

//   let tail = head;
//   let length = 0;

//   while (tail) {
//     ++length;
//     tail = tail.next;
//   }

//   if (length === n) {
//     tail = head.next;
//     head.next = null;

//     return tail;
//   }

//   if (length === 2 && n === 1) {
//     tail = head;
//     tail.next = null;
//     return head;
//   }

//   let targetPrevIndex = length - n;
//   tail = head;

//   while (targetPrevIndex > 1) {
//     --targetPrevIndex;
//     tail = tail.next;
//   }

//   if (tail.next.next) {
//     tail.next = tail.next.next;
//   } else {
//     tail.next = null;
//     return head;
//   }

//   return head;
// };

/**
 * 2. 双指针
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (n <= 0) {
    return head;
  }
  if (!head || (!head.next && n === 1)) {
    return null;
  }

  const prev = new ListNode(0, head);
  let tail = head;
  let targetPrevNode = prev;

  for (let i = 0; i < n; i++) {
    if (tail) {
      tail = tail.next;
    } else {
      return null;
    }
  }

  while (tail) {
    tail = tail.next;
    // 找到要移除的目标节点的前一个节点
    targetPrevNode = targetPrevNode.next;
  }

  targetPrevNode.next = targetPrevNode.next.next;

  return prev.next;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,6,7,8,9,10]\n7\n
// @lcpr case=end

 */
