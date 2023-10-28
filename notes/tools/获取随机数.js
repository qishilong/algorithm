/**
 * 获取随机数
 * @param {*} min
 * @param {*} max
 */
const getRandom = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = {
	getRandom,
};
