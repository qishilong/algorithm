/**
 * 移动匹配
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (!s || typeof s !== "string") {
    return false;
	}
	let t = s + s;
	t = t.substring(1);
	t = t.substring(0, t.length - 1)
	if (t.indexOf(s) !== -1) {
		return true
	}
	return false
};

const s = "abab";
const result = repeatedSubstringPattern(s);
console.log(result);
