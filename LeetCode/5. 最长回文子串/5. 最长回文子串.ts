function longestPalindrome(s: string): string {
    if (!s) {
        return '';
    }
    let newLeft = 0;
    let newRight = 0;
    let maxLength = 0;

    //设i为中心的索引
    let i = 0;
    const length = s.length;
    while (i < length) {
        let left = i - 1;
        let right = i + 1;
        while (left >= 0 && s[i] === s[left]) {
            left--;
        }
        while (right < length && s[i] === s[right]) {
            right++;
        }
        //这里的right是右边第一个跟中心s[i]不相等的字符索引，保存下来，等会i直接跳到end处，可减少重复中心的计算
        const end = right;
        while (left >= 0 && right < length && s[left] === s[right]) {
            left--;
            right++;
        }
        if (maxLength < right - left - 1) {
            maxLength = right - left - 1;
            newLeft = left + 1;
            newRight = right - 1;
        }
        i = end;
    }
    return s.substring(newLeft, newRight + 1);
};