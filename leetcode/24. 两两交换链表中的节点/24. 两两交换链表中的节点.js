const {ListNode} = require('./../../notes/链表/单链表链表的构造函数.js')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dum = new ListNode(0, head),
    temp = dum;
  while (temp.next && temp.next.next) {
    let cur = temp.next.next,
      pre = temp.next;
    pre.next = cur.next;
    cur.next = pre;
    temp.next = cur;
    temp = pre;
  }
  return dum.next;
};
