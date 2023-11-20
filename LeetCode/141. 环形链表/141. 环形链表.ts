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
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// 快慢指针
function hasCycle(head: ListNode | null): boolean {
    if (head === null || head.next === null) return false;
    let first: ListNode = head;
    while (first !== null && first.next !== null) {
        first = first.next.next!;
        head = head!.next;
        if (first === head) {
            return true;
        }
    }
    return false;
};