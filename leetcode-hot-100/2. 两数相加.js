/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 1. 模拟
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//   if (!l1 && !l2) {
//     return;
//   }

//   if (!l1) {
//     return l2;
//   }

//   if (!l2) {
//     return l1;
//   }

//   let head = null,
//     tail = null,
//     carry = 0;

//   while (l1 || l2) {
//     const n1 = l1 ? l1.val : 0;
//     const n2 = l2 ? l2.val : 0;
//     const sum = n1 + n2 + carry;
//     if (!head) {
//       head = tail = new ListNode(sum % 10);
//     } else {
//       tail.next = new ListNode(sum % 10);
//       tail = tail.next;
//     }

//     carry = Math.floor(sum / 10);

//     if (l1) {
//       l1 = l1.next;
//     }

//     if (l2) {
//       l2 = l2.next;
//     }
//   }

//   if (carry > 0) {
//     tail.next = new ListNode(carry);
//   }

//   return head;
// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 2. 先取链表的值再对这些值求和
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  if (!l1 && !l2) {
    return;
  }

  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  let l1Str = "",
    l2Str = "";

  while (l1 || l2) {
    if (l1) {
      l1Str = l1.val + l1Str; // 逆序取值
      l1 = l1.next;
    }
    if (l2) {
      l2Str = l2.val + l2Str; // 逆序取值
      l2 = l2.next;
    }
  }

  const l1BigInt = BigInt(l1Str),
    l2BigInt = BigInt(l2Str),
    sumArr = (l1BigInt + l2BigInt).toString().split("").reverse().map(Number),
    sumArrLength = sumArr.length;

  let head = new ListNode(Number(sumArr[0])),
    current = head;
  for (let i = 1; i < sumArrLength; i++) {
    current.next = new ListNode(Number(sumArr[i]));
    current = current.next;
  }

  return head;
};
