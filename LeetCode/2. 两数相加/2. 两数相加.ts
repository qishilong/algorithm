/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from '../../notes/链表/单链表链表的构造函数';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const pre: ListNode = new ListNode(null);
	let cur: ListNode = pre;
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
}
