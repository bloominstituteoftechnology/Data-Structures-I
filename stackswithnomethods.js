class Stack {
  constructor() {
    this.storage = [];
    this.count = 0;
  }
  get size() {
    return this.count;
  }
  push(input) {
    const l = this.size;
    this.storage[l] = input;
    this.count++;
    return this.count;
  }
  pop() {
    const l = this.size;
    if (l === 0) return null;
    const popped = this.storage[l - 1];
    this.storage[l - 1] = null;
    this.count--;
    return popped;
  }
}