class Stack {
  constructor(options) {
    this.stack = [];
    this.size = 0;
  }
  add(node) {
    this.stack.push(node);
    this.size = this.stack.length;
  }
  remove() {
    if (this.stack.length >= 1) {
      const popped = this.stack.pop();
      this.size = this.stack.length;
      return popped;
    }
    return 0;
  }
  size() { return this.size };
}
const stack = new Stack();
module.exports = Stack;
