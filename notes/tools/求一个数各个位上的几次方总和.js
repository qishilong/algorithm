/**
 * 求一个数各个位上的几次方总和
 * @param {*} num 要求的数
 * @param {*} pow 次方数
 */
const getPowSum = (num, pow) => {
  let sum = 0;
  while (num) {
    sum += Math.pow(num % 10, pow);
    num = Math.floor(num / 10);
  }
  return sum;
};

module.exports = {
  getPowSum
};
