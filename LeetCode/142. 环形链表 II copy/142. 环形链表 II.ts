class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function detectCycle(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return null;
    let fast = head;
    let slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next!;
        slow = slow.next!;
        if (fast === slow) {
            while (head !== slow) {
                head = head!.next;
                slow = slow.next!;
            }
            return head;
        }
    }
    return null;
};