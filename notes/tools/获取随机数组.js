/**
 * 获取包含 100 个元素的随机数组
 */
const getRandomArr = () => {
	const arr = [];
	for (let i = 1; i <= 100; i++) {
		arr.push(Math.floor(Math.random() * 100));
	}
	return arr;
};
const randomArray = getRandomArr();

module.exports = {
	randomArray,
};
