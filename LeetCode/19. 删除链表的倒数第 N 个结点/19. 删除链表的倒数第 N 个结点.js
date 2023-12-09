const { ListNode } = require("./../../notes/链表/单链表链表的构造函数.js");

/**
 * 双指针
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dum = new ListNode(0, head);
  let slow = (fast = dum);
  while (n--) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dum.next;
};
