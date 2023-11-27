const shellSort = (arr) => {
	let length = arr.length,
		gaps = [1],
		gap = 1;
	// 生成增量序列 3x+1 --> [1,4,13,...]
	while (true) {
		gap = gap * 3 + 1;
		// 根据定义：增量不能大于数组长度
		if (gap >= length) {
			break;
		}
		gaps.push(gap);
	}
	// 分数组先大范围分，再小范围分
	while ((gap = gaps.pop())) {
		// 对每个子数组进行排序
		for (let g = 0; g < gap; g++) {
			// 正常的插入排序
			for (let i = g + gap; i < length; i += gap) {
				// 从无序区取元素
				const target = arr[i];
				if (target < arr[i - gap]) {
					// 无序区的元素比有序区的小
					let j = i;
					while (j > 0 && arr[j - gap] > target) {
						// 将前面的元素覆盖后面的
						arr[j] = arr[j - gap];
						// 不是 -1 而是 -gap
						j -= gap;
					}
					arr[j] = target;
				}
			}
		}
	}
	return arr;
};

const arr = [
	1, 2, 3, 5, 3, 1, 31, 324, 3354, 53, 41, 3, 4, 53, 53, 3, 2, 3, 5, 4, 2, 3, 3, 45, 345, 35, 6,
	4, 53, 4, 2, 534, 2, 4, 45, 24, 2, 4, 2,
];

// console.log(shellSort(arr));

// 塞奇威克序列
function getSedgewickSeq(n) {
	let startUp1 = 0,
		startUp2 = 2,
		array = [];
	for (let i = 0; i < n; i++) {
		if (n % 2 === 0) {
			array[i] = 9 * Math.pow(4, startUp1) - 9 * Math.pow(2, startUp2) + 1;
			startUp1++;
		} else {
			array[i] = Math.pow(4, startUp2) - 3 * Math.pow(2, startUp2) + 1;
			startUp2++;
		}
		if (array[i] >= n) {
			break;
		}
	}
	return array;
}

function shellSort(arr) {
	let n = arr.length,
		gaps = getSedgewickSeq(n),
		gap = 1;
	// 略
}
