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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    // 关键点：使用 BigInt 格式处理大数字
    if (l1 === null || l2 === null) return null;
    let result: any = BigInt(traverseList(l1)!.join("")) + BigInt(traverseList(l2)!.join(""));
    result = result.toString().split("").reverse();
    let listNode: ListNode = new ListNode(Number(result[0]));
    let head: ListNode | null = listNode;
    console.log(result);
    for (let i = 0; i < result.length; i++) {
        if (!result[i + 1]) break;
        // listNode = new ListNode(+result[i]);
        // listNode.next = new ListNode(+result[i + 1]);
        head.next = new ListNode(Number(result[i + 1]));
        head = head?.next;
    }
    console.log(listNode);
    return listNode;
};

const traverseList = (list: ListNode | null): number[] | null => {
    if (list === null) return null;
    let result: any = [];
    const traverse = (list: ListNode | null) => {
        if (list === null) return null;
        result.unshift(list.val);
        traverse(list.next);
    };
    traverse(list);
    return result;
};
/**
 * 生成连续单向链表
 */
// let listNode: ListNode = new ListNode(Number(result[0]));
// let head: ListNode | null = listNode;
// for (let i = 0; i < result.length; i++) {
//     if (!result[i + 1]) break;
//     head.next = new ListNode(Number(result[i + 1]));
//     head = head?.next;
// }
// return ListNode;


/**
 * 以下代码为测试
 */
const L1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], L2 = [5, 6, 4];
let L1Node: ListNode = new ListNode(Number(L1[0]));
let L2Node: ListNode = new ListNode(Number(L2[0]));

const createList = (result: string[] | Number[], headNode: ListNode): ListNode => {
    const length = result.length;
    let head = headNode;
    for (let i = 0; i < length; i++) {
        if (result[i + 1] === undefined) break;
        head.next = new ListNode(Number(result[i + 1]));
        head = head.next;
    };
    return headNode;
};

const L1List: ListNode = createList(L1, L1Node);
const L2List: ListNode = createList(L2, L2Node);

const resultList = addTwoNumbers(L1List, L2List);
console.log(resultList);

