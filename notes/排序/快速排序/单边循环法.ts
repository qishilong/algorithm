/**
 * 单边循环法
 * @param {number[]} arr
 * @param {number} startIndex
 * @param {number} endIndex
 */
const quickSort_unilateral = (arr: number[], startIndex: number, endIndex: number) => {
    if (arr.length === 0 || arr === null) return;
    if (startIndex >= endIndex) return;

    // 得到基准元素
    const positionIndex = getPositionIndex(arr, startIndex, endIndex);

    quickSort_unilateral(arr, startIndex, positionIndex - 1);
    quickSort_unilateral(arr, positionIndex + 1, endIndex);
};

/**
 * 得到基准元素
 * @param {number[]} arr
 * @param {number} startIndex
 * @param {number} endIndex
 */
const getPositionIndex = (arr: number[], startIndex: number, endIndex: number) => {
    // 随机得到一个基准元素
    let standard = arr[getRandom_unilateral(startIndex, endIndex)];
    let mark = startIndex;

    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (arr[i] < standard) {
            mark++;
            const temp = arr[mark];
            arr[mark] = arr[i];
            arr[i] = temp;
        }
    }

    const temp = arr[mark];
    arr[mark] = standard;
    standard = temp;
    return mark;
};

/**
 * 得到一个随机数，可取到最大值
 * @param {number} min
 * @param {number} max
 */
const getRandom_unilateral = (min: number, max: number) => Math.floor(Math.random() * (max + 1 - min) + min);

const arr1: number[] = [1, 3, 4, 2, 5, 6, 8, 4, 7, 3, 1, 3, 4, 6, 5, 4, 2, 34, 4, 4, 5, 8, 9, 5, 3, 2, 11, 6, 4, 6, 7, 8, 4, 35, 3, 2, 5, 3, 3];
// const arr1: number[] = [2, 1, 3];

quickSort_unilateral(arr1, 0, arr1.length - 1);
console.log(arr1);