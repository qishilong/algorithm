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
/**
 * 双指针
 * @param head
 */
// function reverseList(head: ListNode | null): ListNode | null {
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
// }

/**
 * 递归（从前往后）
 * @param head
 */
// function reverseList(head: ListNode | null): ListNode | null {
// 	const reverse = (pre: ListNode | null, head: ListNode | null): ListNode | null => {
// 		if (!head) {
// 			return pre;
// 		}
// 		const temp = head.next;
// 		head.next = pre;
// 		pre = head;
// 		return reverse(pre, temp);
// 	};
// 	return reverse(null, head);
// }

/**
 * 递归（从后往前）
 * @param head
 */
function reverseList(head: ListNode | null): ListNode | null {
	if (!head || !head.next) {
		return head;
	}
	let cur: ListNode | null;
	const reverse = (head: ListNode | null, pre: ListNode | null) => {
		if (!head.next) {
			cur = head;
			cur.next = pre;
		} else {
			reverse(head.next, head);
			head.next = pre;
		}
	};
	reverse(head, null);
	return cur;
}
