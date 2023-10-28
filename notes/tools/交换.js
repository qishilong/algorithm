/**
 * 方法一
 * 适用于大多数类型
 * @param {*} n1
 * @param {*} n2
 */
const swap = (arr, n1, n2) => {
	const temp = arr[n1];
	arr[n1] = arr[n2];
	arr[n2] = temp;
};

/**
 * 方法二
 * 适用于整数
 * @param {*} n1
 * @param {*} n2
 */
const swap1 = (arr, n1, n2) => {
	arr[n1] = arr[n1] + arr[n2];
	arr[n2] = arr[n1] - arr[n2];
	arr[n1] = arr[n1] - arr[n2];
};

/**
 * 方法三
 * 适用于整数
 * @param {*} n1
 * @param {*} n2
 */
const swap2 = (arr, n1, n2) => {
	arr[n1] = arr[n1] ^ arr[n2];
	arr[n2] = arr[n1] ^ arr[n2];
	arr[n1] = arr[n1] ^ arr[n2];
};

module.exports = {
	swap,
	swap1,
	swap2,
};
