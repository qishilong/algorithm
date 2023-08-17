function countSubstrings(s: string): number {
    if (!s) {
        return 0;
    }
    const length = s.length;
    let result = length;

    function counter(start: number, end: number) {
        while (start >= 0 && end < length && s[start] === s[end]) {
            start--;
            end++;
        }
        result += Math.floor((end - start - 1) / 2);
    }

    for (let i = 0; i < length; i++) {
        counter(i, i);	// 找偶数位的
        counter(i, i + 1);	// 找奇数位的
    }
    return result;
};