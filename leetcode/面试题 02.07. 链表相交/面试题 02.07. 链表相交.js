const { ListNode } = require("./../../notes/链表/单链表链表的构造函数.js");

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let curA = headA,
    curB = headB,
    lenA = getListLength(headA),
    lenB = getListLength(headB);
  if (lenA < lenB) {
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }
  let i = lenA - lenB;
  while (i--) {
    curA = curA.next;
  }
  while (curA && curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
};

const getListLength = (head) => {
  let len = 0,
    cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  return len;
};
