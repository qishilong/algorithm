/*
 * @lc app=leetcode.cn id=61 lang=javascript
 * @lcpr version=30204
 *
 * [61] 旋转链表
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
 * 1. 先成环再循环遍历，最后找到新的尾节点，再断开环
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var rotateRight = function (head, k) {
//   if (!head || !head.next || !k || k < 0) {
//     return head;
//   }

//   // 先计算链表长度为环
//   let n = 1; // 计算链表的长度
//   let tail = head; // 代码尾节点
//   while (tail.next) {
//     tail = tail.next;
//     n++;
//   }

//   // 防止 k 过大
//   k = k % n;
//   if (k === 0) {
//     return head;
//   }

//   // 成环
//   tail.next = head;

//   // 找到新的尾节点（第 n-k-1 个节点）
//   let newTail = head;
//   for (let i = 0; i < n - k - 1; i++) {
//     newTail = newTail.next;
//   }

//   // 新头节点是 newTail 的下一个
//   const newHead = newTail.next;

//   // 断开环
//   newTail.next = null;

//   return newHead;
// };

/**
 * 2. 借助额外数组（数组中保存链表的节点）
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || !k || k < 0) {
    return head;
  }

  const seq = [];
  for (let p = head; p; p = p.next) {
    seq.push(p);
  }

  const length = seq.length;

  if (k % length === 0) {
    return head;
  }

  // 防止 k 过大
  k = k % length;

  // 现在把链表右旋转 k 位
  // 1. 把原尾节点连到原头节点
  seq[length - 1].next = head;

  // 2. 找到新的尾节点（原第 length - k - 1 个节点），断开它的next
  seq[length - k - 1].next = null;

  // 3. 新的头节点是原第 n-k 个节点
  const newHead = seq[length - k];

  return newHead;
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [0,1,2]\n4\n
// @lcpr case=end

 */
