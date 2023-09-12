/**
 * 使用栈实现快速排序
 * @param {number[]} arr
 * @param {number} startIndex
 * @param {number} endIndex
 */
const quickSort_stack = (arr: number[], startIndex: number, endIndex: number) => {
    const stack: any[] = [];
    stack.push({
        'startIndex': startIndex,
        'endIndex': endIndex
    });

    while (stack.length > 0) {
        const param = stack.pop()!;
        const position = getPositionIndex_stack(arr, param['startIndex'], param['endIndex']);
        if (param['startIndex'] < position - 1) {
            stack.push({
                'startIndex': param['startIndex'],
                'endIndex': position - 1
            });
        }
        if (position + 1 < param['endIndex']) {
            stack.push({
                'startIndex': position + 1,
                'endIndex': param['endIndex']
            });
        }
    }
};

/**
 * 得到基准元素
 * @param {number[]} arr
 * @param {number} startIndex
 * @param {number} endIndex
 */
const getPositionIndex_stack = (arr: number[], startIndex: number, endIndex: number) => {
    let standard = arr[getRandom_stack(startIndex, endIndex)];
    let left = startIndex;
    let right = endIndex;
    while (left !== right) {
        while (left < right && arr[right] > standard) {
            right--;
        }
        while (left < right && arr[left] <= standard) {
            left++;
        }
        if (left < right) {
            const temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }

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
const getRandom_stack = (min: number, max: number) => Math.floor(Math.random() * (max + 1 - min) + min);

const arr_stack: number[] = [1, 3, 4, 2, 5, 6, 8, 4, 7, 3, 1, 3, 4, 6, 5, 4, 2, 34, 4, 4, 5, 8, 9, 5, 3, 2, 11, 6, 4, 6, 7, 8, 4, 35, 3, 2, 5, 3, 3, 35];
// const arr1: number[] = [2, 1, 3];

quickSort_stack(arr_stack, 0, arr_stack.length - 1);
console.log(arr_stack);
