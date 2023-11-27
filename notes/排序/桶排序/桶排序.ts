const bucketSort = (arr: number[]) => {
    let max = 0;
    let min = 0;
    const length = arr.length;
    let resultArr: number[] = [];
    const bucketArr = new Array(length);
    // 取最大值、最小值，创建桶
    for (let i = 0; i < length; i++) {
        max = arr[i] > max ? arr[i] : max;
        min = arr[i] < min ? arr[i] : min;
        bucketArr[i] = [];
    }

    const difference = max - min;

    // 往对应的桶中放入数
    for (let i = 0; i < length; i++) {
        const num = Math.floor((arr[i] - min) * (length - 1) / difference);
        bucketArr[num].push(arr[i]);
    }

    // 给每个桶中的数排序
    for (let i = 0; i < length; i++) {
        bucketArr[i].sort((a: number, b: number) => a - b);
        resultArr = resultArr.concat(bucketArr[i]);
    }

    return resultArr;
};

const arr = [1, 2, 4, 3, 5, 3, 5, 7, 3, 1, 34, 11, 11, 1.23, 2.4, 2, 1];

// const arr = [1, 3, 4, 2];

const result = bucketSort(arr);
console.log(result);
