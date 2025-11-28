/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=30204
 *
 * [23] 合并 K 个升序链表
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
 * 1. 先将所有链表的节点值放入一个数组中
 * 2. 对数组进行排序
 * 3. 创建一个新的链表，将排序后的值依次插入新链表中
 * （方法丑陋，极其不优雅）
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function (lists) {
//   if (!lists || !Array.isArray(lists) || lists.length === 0) {
//     return;
//   }

//   if (lists.length === 1) {
//     return lists[0];
//   }

//   const arr = [];

//   for (const list of lists) {
//     let curr = list;
//     while (curr) {
//       arr.push(curr.val);
//       curr = curr.next;
//     }
//   }

//   arr.sort((a, b) => a - b);

//   const res = new ListNode(arr[0]);
//   let pre = res;

//   const arrLength = arr.length;

//   for (let i = 1; i < arrLength; i++) {
//     const node = new ListNode(arr[i]);
//     pre.next = node;
//     pre = pre.next;
//   }

//   return res;
// };

/**
 * 2. 顺序合并
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const length = lists.length;

  if (!lists || !Array.isArray(lists)) {
    return;
  }

  if (length === 1) {
    return lists[0];
  }

  /**
   * 合并两个顺序列表
   * @param {ListNode} a
   * @param {ListNode} b
   */
  const mergeTwoList = (a, b) => {
    if (a === null || b === null) {
      return a !== null ? a : b;
    }

    const head = new ListNode(0);
    let tail = head,
      listA = a,
      listB = b;

    while (listA !== null && listB !== null) {
      if (listA.val < listB.val) {
        tail.next = listA;
        listA = listA.next;
      } else {
        tail.next = listB;
        listB = listB.next;
      }
      tail = tail.next;
    }

    tail.next = listA !== null ? listA : listB;

    return head.next;
  };

  let res = null;

  for (let i = 0; i < length; i++) {
    res = mergeTwoList(res, lists[i]);
  }

  return res;
};
// @lc code=end

/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */
