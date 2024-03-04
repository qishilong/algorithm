/**
 * 1. 利用 map+对数组排序获取众数（前序遍历）
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  if (!root) {
    return [];
  }
  const map = new Map();
  const traverse = (node) => {
    // 确定递归终止条件
    if (!node) {
      return;
    }

    // 单层递归逻辑
    map.set(node.val, map.get(node.val) === 0 || map.get(node.val) ? map.get(node.val) + 1 : 1); // 中
    traverse(node.left); // 左
    traverse(node.right); // 右
  };

  traverse(root);

  const mapToArr = [];

  // 把 map 中数据转换成双层数组的形式
  for (const item of map.entries()) {
    mapToArr.push(item);
  }

  // 对数组中的数据进行排序
  mapToArr.sort((a, b) => b[1] - a[1]);
  const result = [mapToArr[0][0]];

  // 遍历其余数据，如果其余数据有和经过排序后的数组中的第一个数据一样大的，将其 push 到结果数组中
  for (let i = 1, len = mapToArr.length; i < len; i++) {
    if (mapToArr[i][1] === mapToArr[0][1]) {
      result.push(mapToArr[i][0]);
    }
  }
  return result;
};

/**
 * 2. 利用 map+比较最大值获取众数（前序遍历）
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  if (!root) {
    return [];
  }
  const map = new Map();
  const traverse = (node) => {
    // 确定递归终止条件
    if (!node) {
      return;
    }

    // 单层递归逻辑
    map.set(node.val, map.get(node.val) === 0 || map.get(node.val) ? map.get(node.val) + 1 : 1); // 中
    traverse(node.left); // 左
    traverse(node.right); // 右
  };

  traverse(root);

  // 初始化最大出现次数
  let maxVal = map.get(root.val);
  // 定义一个存放结果的数组
  let result = [];
  for (const [key, val] of map.entries()) {
    // 如果当前的值的出现次数等于当前最大出现次数，将结果 push 到结果数组中
    if (maxVal === val) {
      result.push(key);
    }
    // 如果当前值的出现次数大于当前最大出现次数
    if (val > maxVal) {
      result = []; // 清空数组
      maxVal = val; // 更新最大值
      result.push(key); // 将当前为最大出现次数的 key push 到结果数组中
    }
  }
  return result;
};

/**
 * 3. 利用中序遍历+比较最大数获取众数
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  if (!root) {
    return [];
  }
  let prev = null, // 记录上一个节点
    result = [],
    count = 0, // 统计频率
    maxCount = 0; // 最大频率
  const traverse = (cur) => {
    if (!cur) {
      return;
    }
    traverse(cur.left); // 左

    // 中
    // 第一个节点
    if (!prev) {
      count = 1;
    } else if (prev.val === cur.val) {
      // 当前节点与上一个节点数值相同
      count++;
    } else {
      // 当前节点与上一个节点数值不同
      count = 1;
    }

    prev = cur; // 更新上一个节点

    if (count === maxCount) {
      // 如果当前的计数和最大计数相同，则将当前节点的值 push 到结果数组中
      result.push(cur.val);
    }
    if (count > maxCount) {
      // 如果当前的计数大于最大计数
      result = []; // 清空结果数组
      maxCount = count; // 更新最大计数
      result.push(cur.val); // 将当前节点的值 push 到新结果数组中
    }
    traverse(cur.right); // 右

    return;
  };

  traverse(root);
  return result;
};

/**
 * 4. 利用迭代法+比较最大数获取众数
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  if (!root) {
    return [];
  }
  let prev = null, // 记录上一个节点
    cur = root, // 当前节点
    result = [],
    count = 0, // 统计频率
    maxCount = 0; // 最大频率
  const stack = [];
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      cur = cur.left; // 左
    } else {
      cur = stack.pop(); // 中

      // 第一个节点
      if (!prev) {
        count = 1;
      } else if (prev.val === cur.val) {
        // 当前节点与上一个节点数值相同
        count++;
      } else {
        // 当前节点与上一个节点数值不同
        count = 1;
      }

      prev = cur; // 更新上一个节点

      if (count === maxCount) {
        // 如果当前的计数和最大计数相同，则将当前节点的值 push 到结果数组中
        result.push(cur.val);
      }
      if (count > maxCount) {
        // 如果当前的计数大于最大计数
        result = []; // 清空结果数组
        maxCount = count; // 更新最大计数
        result.push(cur.val); // 将当前节点的值 push 到新结果数组中
      }

      cur = cur.right; // 右
    }
  }

  return result;
};
