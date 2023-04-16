```typescript
    function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null && l2 === null) {
        return null;
    } else if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    }
    let head = null, tail = null
    let carry = 0;
    while (l1 || l2) {
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;

        const sum = val1 + val2 + carry;

        if (!head) {
            head = tail = new ListNode(sum % 10)
        } else {
            tail.next = new ListNode(sum % 10)
            tail = tail.next
        }

        carry = Math.floor(sum / 10);

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    if (carry) {
        tail.next = new ListNode(carry)
    }

    return head;
};
```