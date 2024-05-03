/**
 * 解法可行，但力扣会超出时间限制
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  if (!tickets || !tickets.length) {
    return [];
  }
  if (tickets.length === 1) {
    return tickets[0];
  }

  const result = ["JFK"],
    map = {},
    length = tickets.length;

  for (const [from, to] of tickets) {
    if (!map[from]) {
      map[from] = [];
    }
    map[from].push(to);
  }

  for (const city in map) {
    if (Object.hasOwnProperty.call(map, city)) {
      // 对到达城市排序
      map[city].sort();
    }
  }

  const backtracking = () => {
    if (result.length === length + 1) {
      return true;
    }
    if (!map[result[result.length - 1]] || !map[result[result.length - 1]].length) {
      return false;
    }

    for (let i = 0; i < map[result[result.length - 1]].length; i++) {
      // 拿到当前出发城市到达所有城市的引用
      const cur = map[result[result.length - 1]];
      const city = cur[i];
      // 删除已走航线，防止死循环
      cur.splice(i, 1);
      result.push(city);
      if (backtracking()) {
        return true;
      }
      result.pop();
      cur.splice(i, 0, city);
    }
  };
  backtracking();

  return result;
};
