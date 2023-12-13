/**
 * ”上浮“调整
 * @param {number[]} array
 */
const upAdjust = (array: number[]) => {
    let childIndex = array.length - 1;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    const temp = array[childIndex];
    while (childIndex > 0 && temp < array[parentIndex]) {
        // 无须真正的交换，单向赋值即可
        array[childIndex] = array[parentIndex];
        childIndex = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2);
    }
    array[childIndex] = temp;
};

/**
 *  “下沉”调整
 * @param {number[]} array
 * @param {number} parentIndex
 * @param {number} length
 */
const downAdjust = (array: number[], parentIndex: number, length: number) => {
    const temp = array[parentIndex];
    let childIndex = 2 * parentIndex + 1;
    while (childIndex < length) {
        if (childIndex + 1 < length && array[childIndex + 1] < array[childIndex]) {
            childIndex++;
        }
        if (temp <= array[childIndex]) {
            break;
        }
        // 无须真正的交换，单向赋值即可
        array[parentIndex] = array[childIndex];
        parentIndex = childIndex;
        childIndex = childIndex * 2 + 1;
    }
    array[parentIndex] = temp;
};

// 创建二叉堆
const buildHeap = (array: number[]) => {
    const length = array.length;
    for (let i = Math.floor((length - 2) / 2); i >= 0; i--) {
        downAdjust(array, i, length);
    }
};

const upArr = [1, 3, 2, 6, 5, 7, 8, 9, 10, 0];
const downArr = [7, 1, 3, 10, 5, 2, 8, 9, 6];

upAdjust(upArr);
buildHeap(downArr);

console.log(upArr);
console.log(downArr);
