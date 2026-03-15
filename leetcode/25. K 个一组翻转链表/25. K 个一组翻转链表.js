/*
 * @lc app=leetcode.cn id=25 lang=javascript
 * @lcpr version=30204
 *
 * [25] K 个一组翻转链表
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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * 1. 先将链表转换为数组，然后将数组按照k个一组翻转，最后将翻转后的数组转换为链表
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup = function (head, k) {
//   if (!head || typeof k !== 'number' || k <= 0) {
//     return;
//   }

//   if (!head.next) {
//     return head;
//   }

//   const listArr = [];
//   // 将链表转换为数组
//   while (head) {
//     listArr.push(head.val);
//     head = head.next;
//   }

//   let listReverseArr = [];

//   const length = listArr.length;

//   let path = [];

//   for (let i = 0; i < length; i++) {
//     const val = listArr[i];
//     path.push(val);

//     if (path.length === k) {
//       listReverseArr = [...listReverseArr, ...path.reverse()];
//       path = [];
//     }
//   }

//   if (path.length > 0) {
//     listReverseArr = [...listReverseArr, ...path];
//   }

//   const resultHead = new ListNode(listReverseArr[0], null);
//   let tail = resultHead;

//   const listReverseArrLength = listReverseArr.length;

//   for (let i = 1; i < listReverseArrLength; i++) {
//     tail.next = new ListNode(listReverseArr[i], null);
//     tail = tail.next;
//   }

//   return resultHead;
// };

/**
 * 2. 链表模拟翻转
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || typeof k !== 'number' || k <= 0) {
    return;
  }

  if (!head.next) {
    return head;
  }

  /**
   * 获取每一组要翻转链表的最后一个链表
   * @param {ListNode} groupList
   * @param {number} k
   */
  const getGroupListEndNode = (groupList, k) => {
    while (groupList && k - 1) {
      --k;
      groupList = groupList.next;
    }

    return groupList;
  };

  /**
   * 翻转一组链表
   * 当前节点和上一个节点交换（本质上是两个节点交换）
   * @param {ListNode} groupListHead
   * @param {ListNode} groupListEnd
   */
  const reverseGroupList = (groupListHead, groupListEnd) => {
    if (groupListHead === groupListEnd) {
      return;
    }

    let prev = groupListHead;
    groupListHead = groupListHead.next;

    while (groupListHead !== groupListEnd) {
      const temp = groupListHead.next;
      groupListHead.next = prev;
      prev = groupListHead;
      groupListHead = temp;
    }

    groupListEnd.next = prev;
  };

  let prev = new ListNode(0, head);
  let tail = prev; // 初始值 tail = prev（哨兵节点），指向已处理链表的最后一个节点。tail 就是一个拼接指针，负责把每次反转好的子链表缝合回主链表。没有它，各组之间就断开了。

  while (head) {
    const groupListEndNode = getGroupListEndNode(head, k);
    if (!groupListEndNode) {
      break;
    }

    const nextGroupListHead = groupListEndNode.next;

    // 翻转一组链表
    reverseGroupList(head, groupListEndNode);
    // 每次反转一组后，通过 tail.next = groupListEndNode 将上一组的尾部连接到当前反转组的新头部（即 groupListEndNode）。
    tail.next = groupListEndNode;
    head.next = nextGroupListHead;

    // 反转完成后，tail = head 更新为当前组反转后的尾节点（原来的 head 在反转后变成了这组的最后一个节点），为下一轮拼接做准备。
    tail = head;
    head = nextGroupListHead;
  }

  return prev.next;
};

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n2\n
// @lcpr case=end

 */
