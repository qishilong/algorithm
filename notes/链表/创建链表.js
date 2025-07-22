// 链表节点类
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 链表类
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // 在链表尾部添加节点
  append(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // 在链表头部添加节点
  prepend(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // 删除指定值的第一个节点
  delete(value) {
    if (!this.head) return null;

    let deletedNode = null;

    // 如果头节点是要删除的节点
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.length--;

      if (this.length === 0) {
        this.tail = null;
      }
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      // 遍历链表查找要删除的节点
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
          this.length--;

          if (this.tail === deletedNode) {
            this.tail = currentNode;
          }
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    return deletedNode;
  }

  // 查找指定值的节点
  find(value) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  // 转换为数组
  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return nodes;
  }
}

// 使用示例
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
console.log(linkedList.toArray()); // 输出: [0, 1, 2]
linkedList.delete(1);
console.log(linkedList.toArray()); // 输出: [0, 2]
console.log(linkedList.find(2)); // 输出: ListNode { value: 2, next: null }
