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
/**
 * 1. 先将链表转换为数组，然后 k 个一组反转数组，最后根据数组创建链表
 * （方法极其丑陋）
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var reverseKGroup = function (head, k) {
//   if (!head) {
//     return null;
//   }

//   if (!head.next) {
//     return head;
//   }

//   if (k <= 1) {
//     return head;
//   }

//   const arr = [];

//   while (head) {
//     arr.push(head.val);
//     head = head.next;
//   }

//   let reverseArr = [];
//   let path = [];

//   const length = arr.length;

//   for (let i = 0; i < length; i++) {
//     path.push(arr[i]);
//     if (path.length === k) {
//       path.reverse();
//       reverseArr = [...reverseArr, ...path];
//       path = [];
//     }
//   }

//   if (path.length > 0) {
//     reverseArr = [...reverseArr, ...path];
//   }

//   /**
//    * 利用数组构建链表
//    * @param {number[]} arr
//    */
//   const createListNode = arr => {
//     const head = new ListNode(0);
//     let tail = head;

//     const length = arr.length;

//     for (let i = 0; i < length; i++) {
//       tail.next = new ListNode(arr[i]);
//       tail = tail.next;
//     }

//     return head.next;
//   };

//   return createListNode(reverseArr);
// };

/**
 * 2. 链表模拟
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head) {
    return null;
  }

  if (!head.next || k <= 0) {
    return head;
  }

  /**
   * 获取一组链表的最后一个节点
   * @param {ListNode} listNode
   * @param {number} k
   */
  const getGroupListEndNode = (listNode, k) => {
    while (listNode && k - 1) {
      --k;
      listNode = listNode.next;
    }

    return listNode;
  };

  /**
   * 反转一组链表
   * @param {ListNode} head
   * @param {ListNode} end
   */
  const reverseGroupList = (head, end) => {
    if (head === end) {
      return;
    }

    let prev = head;
    head = head.next;

    while (head !== end) {
      // 将当前节点和上一个节点交换（本质上是两个节点交换）
      const tempNode = head.next;
      head.next = prev;
      prev = head;
      head = tempNode;
    }

    end.next = prev;
  };

  const prev = new ListNode(0, head);
  let tail = prev;

  while (head) {
    const endNode = getGroupListEndNode(head, k);
    if (!endNode) {
      break;
    }

    const nextGroupListHead = endNode.next;

    reverseGroupList(head, endNode);
    tail.next = endNode;
    head.next = nextGroupListHead;

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
