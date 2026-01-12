/*
 * @lc app=leetcode.cn id=21 lang=javascript
 * @lcpr version=30204
 *
 * [21] 合并两个有序链表
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
 * 1. 模拟遍历列表
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//   if (!list1 && !list2) {
//     return null;
//   }

//   if (!list1) {
//     return list2;
//   }

//   if (!list2) {
//     return list1;
//   }

//   let prevList = new ListNode(0);
//   const resultList = prevList;

//   while (list1 || list2) {
//     if (!list1) {
//       prevList.next = list2;
//       break;
//     }
//     if (!list2) {
//       prevList.next = list1;
//       break;
//     }

//     if (list1.val > list2.val) {
//       prevList.next = list2;
//       prevList = prevList.next;
//       list2 = list2.next;
//     } else if (list1.val < list2.val) {
//       prevList.next = list1;
//       prevList = prevList.next;
//       list1 = list1.next;
//     } else {
//       prevList.next = list1;
//       prevList = prevList.next;
//       list1 = list1.next;
//     }
//   }

//   return resultList.next;
// };

/**
 * 2. 递归
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) {
    return null;
  }

  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
// @lc code=end

/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */
