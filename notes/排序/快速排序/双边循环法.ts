/**
 * 双边循环法
 * @param {number[]} arr
 * @param {number} startIndex
 * @param {number} endIndex
 */
const quickSort_bilateral = (arr: number[], startIndex: number, endIndex: number) => {
    if (arr.length === 0 || arr === null) return;
    if (startIndex >= endIndex) {
        return;
    }

    const positionIndex = getPosition(arr, startIndex, endIndex);

    // 递归排序
    quickSort_bilateral(arr, startIndex, positionIndex - 1);
    quickSort_bilateral(arr, positionIndex + 1, endIndex);
};

/**
 * 得到基准元素的位置，并进行数组内元素交换
 * @param {number[]} arr
 * @param {number} startIndex
 * @param {number} endIndex
 */
const getPosition = (arr: number[], startIndex: number, endIndex: number) => {
    // 获得一个随机的基准元素
    let standard = arr[getRandom_bilateral(startIndex, endIndex)];
    let left = startIndex;
    let right = endIndex;
    while (left !== right) {
        // 控制右指针左移
        while (left < right && arr[right] > standard) {
            right--;
        }
        // 控制左指针右移
        while (left < right && arr[left] <= standard) {
            left++;
        }

        // 交换
        if (left < right) {
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }

    // 基准元素和指针重合点交换
    const temp = arr[left];
    arr[left] = standard;
    standard = temp;
    return left;
};

/**
 * 得到一个随机数，可取到最大值
 * @param {number} min
 * @param {number} max
 */
const getRandom_bilateral = (min: number, max: number) => Math.floor(Math.random() * (max + 1 - min) + min);

const arr: number[] = [1, 3, 4, 2, 5, 6, 8, 4, 7, 3, 1, 3, 4, 6, 5, 4, 2, 34, 4, 4, 5, 8, 9, 5, 3, 2, 11, 6, 4, 6, 7, 8, 4, 35, 3, 2, 5, 3, 3];
// const arr: number[] = [11, 22, 33, 66, 44, 55];


quickSort_bilateral(arr, 0, arr.length - 1);

console.log(arr);
