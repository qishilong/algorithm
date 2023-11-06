/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const { ListNode } = require('../../notes/链表/单链表链表的构造函数.js');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	const pre = new ListNode(null);
	let cur = pre;
	// 进位
	let carry = 0;
	while (l1 !== null || l2 !== null) {
		const x = l1 === null ? 0 : l1.val;
		const y = l2 === null ? 0 : l2.val;
		let sum = x + y + carry;

		carry = Math.floor(sum / 10);
		sum = sum % 10;
		cur.next = new ListNode(sum);

		cur = cur.next;
		if (l1 !== null) {
			l1 = l1.next;
		}
		if (l2 !== null) {
			l2 = l2.next;
		}
	}
	if (carry === 1) {
		cur.next = new ListNode(carry);
	}
	return pre.next;
};
