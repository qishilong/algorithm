class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val: number, next: ListNode | null) {
		this.val = val;
		this.next = next;
	}
}

class MyLinkedList {
	private _size: number;
	private _tail: ListNode | null;
	private _head: ListNode | null;
	constructor() {
		this._size = 0;
		this._head = null;
		this._tail = null;
	}

	private getNode(index: number) {
		if (index < 0 || index >= this._size) {
			return null;
		}
		// 创建虚拟头节点
		let node = new ListNode(0, this._head);
		while (index >= 0) {
			node = node.next;
			index--;
		}
		return node;

		// let curNode: ListNode = new ListNode(0, this._head);
		// for (let i = 0; i <= index; i++) {
		//     // 理论上不会出现 null
		//     curNode = curNode.next!;
		// }
		// return curNode;
	}
	/**
	 * int get(int index) 获取链表中下标为 index 的节点的值。如果下标无效，则返回 -1 。
	 * @param index
	 */
	get(index: number): number {
		if (index < 0 || index >= this._size) {
			return -1;
		}
		return this.getNode(index).val;
	}

	/**
	 * void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
	 * @param val
	 */
	addAtHead(val: number): void {
		const node = new ListNode(val, this._head);
		this._head = node;
		if (!this._tail) {
			this._tail = node;
		}
		this._size++;
	}

	/**
	 * void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
	 * @param val
	 */
	addAtTail(val: number): void {
		const node = new ListNode(val, null);
		if (this._tail) {
			this._tail.next = node;
		} else {
			// 还没有尾节点，说明一个节点都没有
			this._head = node;
		}
		this._tail = node;
		this._size++;
	}

	/**
	 * void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
	 * @param index
	 * @param val
	 */
	addAtIndex(index: number, val: number): void {
		if (index > this._size) {
			return;
		}
		if (index <= 0) {
			this.addAtHead(val);
			return;
		}
		if (index === this._size) {
			this.addAtTail(val);
			return;
		}
		// 获取当前 index 的前一个节点
		const pre = this.getNode(index - 1);
		const node = new ListNode(val, pre.next);
		pre.next = node;
		this._size++;
	}

	/**
	 * void deleteAtIndex(int index) 如果下标有效，则删除链表中下标为 index 的节点。
	 * @param index
	 */
	deleteAtIndex(index: number): void {
		// 要保证 node.next.next 有值，所以是在 index >= this._size 时判定
		if (index < 0 || index >= this._size) {
			return;
		}
		// 处理头节点
		if (index === 0) {
			this._head = this._head.next;
			// 如果链表中只有一个元素，删除头节点后，需要处理尾节点
			if (index === this._size - 1) {
				this._tail = null;
			}
			this._size--;
			return;
		}
		// 获取当前 index 的前一个节点
		const node = this.getNode(index - 1);
		node.next = node.next.next;
		// 处理尾节点
		if (index === this._size - 1) {
			this._tail = node;
		}
		this._size--;
	}

	/**
	 * 输出链表
	 */
	put() {
		let cur = this._head;
		const result = [];
		while (cur) {
			result.push(cur.val);
			cur = cur.next;
		}
		return result;
	}
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
