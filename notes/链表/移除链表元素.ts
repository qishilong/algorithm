// 1. 在原链表上直接删除
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

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

export const removeElements = (head: ListNode | null, val: number): ListNode | null => {
	if (head === null) {
		return head;
	}
	// 删除头部节点
	while (head !== null && head.val === val) {
		head = head.next;
	}
	let pre: ListNode = head,
		cur: ListNode = head.next;
	// 删除非头部节点
	while (cur) {
		if (cur.val === val) {
			pre.next = cur.next;
		} else {
			pre = pre.next as ListNode;
		}
		cur = cur.next;
	}
	return head;
};

// 2. 使用（虚拟头节点）
export function _removeElements(head: ListNode | null, val: number): ListNode | null {
	const dummyNode = new ListNode(undefined, head);
	let pre = dummyNode,
		cur = dummyNode.next;
	while (cur) {
		if (cur.val === val) {
			pre.next = cur.next;
		} else {
			pre = cur;
		}
		cur = cur.next;
	}
	return pre.next;
}
