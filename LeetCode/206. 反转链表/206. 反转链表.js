/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
const { ListNode } = require('../../notes/链表/单链表链表的构造函数.js');

/**
 * 双指针
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
// 	if (!head || !head.next) {
// 		return head;
// 	}
// 	let pre = null;
// 	let cur = head;
// 	while (cur) {
// 		const temp = cur.next;
// 		cur.next = pre;
// 		pre = cur;
// 		cur = temp;
// 	}
// 	return pre;
// };

/**
 * 递归（从前往后递归）
 * @param {*} head
 */
// var reverseList = function (head) {
// 	const reverse = (pre, head) => {
// 		if (!head) {
// 			return pre;
// 		}
// 		const temp = head.next;
// 		head.next = pre;
// 		pre = head;
// 		return reverse(pre, temp);
// 	};
// 	return reverse(null, head);
// };

/**
 * 递归（从后往前）
 * @param {*} head
 */
var reverseList = function (head) {
	if (!head || !head.next) {
		return head;
	}
	let cur = head;
	while (cur && cur.next) {
		cur = cur.next;
	}

	const reverse = (head) => {
		if (!head || !head.next) {
			return head;
		}
		// 从后往前翻
		const pre = reverse(head.next);
		head.next = pre.next;
		pre.next = head;
		return head;
	};

	reverse(head);
	return cur;
};
