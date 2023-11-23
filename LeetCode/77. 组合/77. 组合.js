/**
 * 回溯
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const path = [];

  const backTracking = (n, k, startIndex) => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      backTracking(n, k, i + 1);
      path.pop();
    }
  };
  backTracking(n, k, 1);

  return result;
};

const result = combine(4, 2);
console.log(result);
