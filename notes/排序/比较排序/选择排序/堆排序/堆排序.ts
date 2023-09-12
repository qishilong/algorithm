/**
 * “下沉”调整
 * @param {number[]} array 操作的数组
 * @param {number} parentIndex  父节点
 * @param {number} length   数组长度
 */
const downAdjust = (array: number[], parentIndex: number, length: number) => {
    // 保存 temp 的值，用于最后的赋值
    const temp = array[parentIndex];
    let childIndex = parentIndex * 2 + 1;
    while (childIndex < length) {
        if (childIndex + 1 < length && array[childIndex + 1] < array[childIndex]) {
            childIndex++;
        }
        if (temp <= array[childIndex]) {
            break;
        }
        // 交换，直接赋值就行，不用进行真正的交换
        array[parentIndex] = array[childIndex];
        parentIndex = childIndex;
        childIndex = childIndex * 2 + 1;
    }
    array[parentIndex] = temp;
};

/**
 * 堆排序（升序）
 * @param {number[]} array
 */
const heapSort = (array: number[]) => {
    // 构建最大堆
    const length = array.length;
    for (let i = Math.floor((length - 2) / 2); i >= 0; i--) {
        downAdjust(array, i, length);
    }
    // 循环删除堆顶元素，并将元素移到集合尾部
    for (let i = length - 1; i > 0; i--) {
        const temp = array[i];
        array[i] = array[0];
        array[0] = temp;
        downAdjust(array, 0, i);
    }
};

const arr = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0];

heapSort(arr);
console.log(arr);
