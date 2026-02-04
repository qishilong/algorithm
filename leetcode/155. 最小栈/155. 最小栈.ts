class MinStack {
    private preMin: number[];
    private stack: number[];

    constructor() {
        this.preMin = [];
        this.stack = [];
    }

    push(val: number): void {
        this.preMin.push(this.stack.length === 0 ? val : Math.min(val, this.preMin[this.preMin.length - 1]));
        this.stack.push(val);
    }

    pop(): void {
        this.preMin.pop();
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.preMin[this.preMin.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */