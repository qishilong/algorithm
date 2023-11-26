const { getPowSum } = require("../../notes/tools/对一个数求各个位上的几次方总和.js");

/**
 * 哈希表 Set
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  while (true) {
    const sum = getPowSum(n, 2);
    if (sum === 1) {
      return true;
    }
    if (set.has(sum)) {
      return false;
    } else {
      set.add(sum);
    }
    n = sum;
  }
};

const n = 19;
const result = isHappy(n);
console.log(result);

// const n = 2;
// const result = isHappy(n);
// console.log(result);
