class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function arrayToList(arr) {
  if (arr.length === 0) return null;

  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// 使用示例
const arr = [1, 2, 3, 4, 5];
const linkedListHead = arrayToList(arr);

// 辅助函数：将链表转换为数组以便打印查看
function linkedListToArray(head) {
  const result = [];
  let current = head;

  while (current) {
    result.push(current.value);
    current = current.next;
  }

  return result;
}

console.log(linkedListHead, linkedListToArray(linkedListHead)); // 输出: [1, 2, 3, 4, 5]
