/*
 * @lc app=leetcode.cn id=2 lang=javascript
 * @lcpr version=30204
 *
 * [2] 两数相加
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 1. 转成数组操作
 * 先取链表中的数，再对链表中的数求和，再将结果转换为链表
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

//   let val1Arr = [],
//     val2Arr = [];

//   while (l1) {
//     val1Arr.push(l1.val);
//     l1 = l1.next;
//   }

//   while (l2) {
//     val2Arr.push(l2.val);
//     l2 = l2.next;
//   }

//   let val1Str = val1Arr.reverse().join("");
//   let val2Str = val2Arr.reverse().join("");

//   /**
//    * 两数相加
//    * @param {string} str1
//    * @param {string} str2
//    * @returns {string}
//    */
//   const twoNumSum = (str1, str2) => {
//     const maxLength = Math.max(str1.length, str2.length);

//     str1 = str1.length < maxLength ? str1.padStart(maxLength, "0") : str1;
//     str2 = str2.length < maxLength ? str2.padStart(maxLength, "0") : str2;

//     const res = new Array(maxLength).fill(0);
//     let carry = 0;
//     for (let i = maxLength - 1; i >= 0; i--) {
//       const val1 = Number(str1[i]);
//       const val2 = Number(str2[i]);

//       const sum = val1 + val2 + carry;

//       if (sum >= 10) {
//         res[i] = sum % 10;
//         carry = Math.floor(sum / 10);
//         if (i === 0) {
//           res.unshift(carry);
//         }
//       } else {
//         res[i] = sum;
//         // 及时重置 carry
//         carry = 0;
//       }
//     }

//     return res;
//   };

//   const arr = twoNumSum(val1Str, val2Str).reverse();

//   // 创建链表
//   const length = arr.length;
//   const head = new ListNode(arr[0]);
//   let tail = head;
//   for (let i = 1; i < length; i++) {
//     tail.next = new ListNode(arr[i]);
//     tail = tail.next;
//   }
//   return head;
// };

/**
 * 2. 链表模拟
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

  let head = null,
    tail = null,
    carry = 0;

  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;

    carry = 0;

    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }

    carry = Math.floor(sum / 10);

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry) {
    tail.next = new ListNode(carry);
  }

  return head;
};
// @lc code=end

/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */
