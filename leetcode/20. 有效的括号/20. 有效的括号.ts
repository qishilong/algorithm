function isValid(s: string): boolean {
    if (!s) return false;
    const stack: string[] = [];
    for (let i of s) {
        if (i === '(') {
            stack.push(')');
        } else if (i === '{') {
            stack.push('}');
        } else if (i === '[') {
            stack.push(']');
        } else if (i === stack[stack.length - 1]) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};