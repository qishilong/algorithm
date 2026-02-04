/**
 * 1. 解法可行，但力扣会超出时间限制
 * @param {string[][]} tickets
 * @return {string[]}
 */
// var findItinerary = function (tickets) {
//   if (!tickets || !tickets.length) {
//     return [];
//   }
//   if (tickets.length === 1) {
//     return tickets[0];
//   }

//   const result = ["JFK"],
//     map = {},
//     length = tickets.length;

//   for (const [from, to] of tickets) {
//     if (!map[from]) {
//       map[from] = [];
//     }
//     map[from].push(to);
//   }

//   for (const city in map) {
//     if (Object.hasOwnProperty.call(map, city)) {
//       // 对到达城市排序
//       map[city].sort();
//     }
//   }

//   const backtracking = () => {
//     if (result.length === length + 1) {
//       return true;
//     }
//     if (!map[result[result.length - 1]] || !map[result[result.length - 1]].length) {
//       return false;
//     }

//     for (let i = 0; i < map[result[result.length - 1]].length; i++) {
//       // 拿到当前出发城市到达所有城市的引用
//       const cur = map[result[result.length - 1]];
//       const city = cur[i];
//       // 删除已走航线，防止死循环
//       cur.splice(i, 1);
//       result.push(city);
//       if (backtracking()) {
//         return true;
//       }
//       result.pop();
//       cur.splice(i, 0, city);
//     }
//   };
//   backtracking();

//   return result;
// };

/**
 * 2. 使用字典排序解决站点无序问题
 * @param {string[][]} tickets
 * @return {string[]}
 */
// var findItinerary = function (tickets) {
//   if (!tickets || !tickets.length) {
//     return [];
//   }
//   if (tickets.length === 1) {
//     return tickets[0];
//   }

//   const result = ["JFK"],
//     map = {},
//     length = tickets.length;

//   // 处理每个出发站的终点站信息
//   for (const ticket of tickets) {
//     let from = map[ticket[0]];
//     if (!from) {
//       from = {
//         [ticket[1]]: 0
//       };
//       map[ticket[0]] = from;
//     }
//     from[ticket[1]] = (from[ticket[1]] || 0) + 1;
//   }

//   // 按照key字典序对站点排序
//   // const sortMap = (map) => {
//   //   const newMap = {};
//   //   const fromList = Reflect.ownKeys(map);
//   //   fromList.sort((a, b) => (a < b ? -1 : 1));

//   //   fromList.forEach((from) => {
//   //     if (map[from] && typeof map[from] === "object") {
//   //       newMap[from] = sortMap(map[from]);
//   //     } else {
//   //       newMap[from] = map[from];
//   //     }
//   //   });

//   //   return newMap;
//   // };

//   const backtracking = (tickets, map) => {
//     if (result.length === length + 1) {
//       return true;
//     }

//     const target = map[result[result.length - 1]];

//     // 如果没有下一站，返回false即可
//     if (!target) {
//       return false;
//     }

//     // 或者使用提前排好序的，但会在排序map时因为使用递归，而降低性能
//     // const cityList = Reflect.ownKeys(target);

//     // 在使用时再排序
//     const cityList = Reflect.ownKeys(target).sort((a, b) => (a < b ? -1 : 1));

//     for (const city of cityList) {
//       // 判断当前站是否还能飞
//       if (target[city] > 0) {
//         // 当前站使用了一次
//         target[city]--;
//         result.push(city);
//         // 站点有序，此时的行程就是字典序最小的，直接跳出
//         if (backtracking(tickets, map)) {
//           return true;
//         }
//         // 回溯
//         target[city]++;
//         result.pop();
//       }
//     }

//     // 统一返回结果类型
//     return false;
//   };

//   // const newMap = sortMap(map);
//   // backtracking(tickets, newMap);

//   backtracking(tickets, map);

//   return result;
// };

/**
 * 3. 使用Map维护键值对的插入顺序
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

  /**
   * map 实例：
   * {
   *  NRT: Map(1) { 'JFK' => 1 },
   *  JFK: Map(2) { 'KUL' => 1, 'NRT' => 1 }
   * }
   * 这里选择Map数据结构的原因是：
   * 与Object的一个主要差异是，Map实例会维护键值对的插入顺序
   */
  const result = ["JFK"],
    map = {},
    length = tickets.length;

  tickets.sort((a, b) => (a[1] < b[1] ? -1 : 1));

  for (const [from, to] of tickets) {
    if (!map[from]) {
      map[from] = new Map();
    }
    map[from].set(to, (map[from].get(to) || 0) + 1);
  }

  const backtracking = () => {
    if (result.length === length + 1) {
      return true;
    }
    const targetMap = map[result[result.length - 1]];
    if (targetMap) {
      for (const [to, count] of targetMap.entries()) {
        if (count > 0) {
          result.push(to);
          targetMap.set(to, count - 1);
          if (backtracking()) {
            return true;
          }
          result.pop();
          targetMap.set(to, count);
        }
      }
    }

    // 统一返回结果类型
    return false;
  };

  backtracking();

  return result;
};
