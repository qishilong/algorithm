/**
 * 计数排序
 * @param {number[]} arr
 */
const countSort = (arr: number[]) => {
    let min = arr[0];
    let max = arr[0];
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    const d = max - min;
    // 0 ~ 9，10位
    const countArr = new Array(d + 1).fill(0);
    for (let i = 0; i < length; i++) {
        countArr[arr[i] - min]++;
    }

    const countLength = countArr.length;

    // 统计数组做变形，后面的元素等于前面元素之和
    for (let i = 1; i < countLength; i++) {
        countArr[i] += countArr[i - 1];
    }

    const sortResultArr = new Array(length);
    for (let i = length - 1; i >= 0; i--) {
        sortResultArr[countArr[arr[i] - min] - 1] = arr[i];
        countArr[arr[i] - min]--;
    }

    return sortResultArr;
};

const result = countSort([95, 94, 91, 98, 99, 90, 99, 93, 91, 92, 90]);
console.log(result);
