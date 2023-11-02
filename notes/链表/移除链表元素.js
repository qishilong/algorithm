/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
	const pre = new ListNode(undefined, head);
	let cur = pre;
	while (cur.next) {
		if (cur.next.val === val) {
			cur.next = cur.next.next;
			continue;
		}
		cur = cur.next;
	}
	return pre.next;
};
