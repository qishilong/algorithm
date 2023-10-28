/**
 * 合并两个数组
 * @param {*} arrA
 * @param {*} arrB
 */
const mergeArray = (arrA, arrB) => {
	const lengthA = arrA.length - 1,
		lengthB = arrB.length - 1,
		resultArr = [];
	let indexA = 0,
		indexB = 0,
		indexMerge = 0;
	while (indexA <= lengthA && indexB <= lengthB) {
		// 先比较两个数组的等长部分，谁的元素较小，谁就先合并
		resultArr[indexMerge++] = arrA[indexA] > arrB[indexB] ? arrB[indexB++] : arrA[indexA++];
	}

	while (indexA <= lengthA) {
		// 可能是 B 数组先遍历完，此时 A 数组还有剩余
		resultArr[indexMerge++] = arrA[indexA++];
	}
	while (indexB <= lengthB) {
		// 可能是 A 数组先遍历网，此时 B 数组还有剩余
		resultArr[indexMerge++] = arrB[indexB++];
	}
	return resultArr;
};
module.exports = {
	mergeArray,
};

const arrA = [1, 2, 34, 2, 1];
const arrB = [1, 3, 2, 4, 45, 324, 2, 34, 2, 3];

const result = mergeArray(arrA, arrB);

console.log(result);
