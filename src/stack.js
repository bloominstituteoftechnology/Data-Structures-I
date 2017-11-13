class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  pop() {
    if (this.size > 0) this.count -= 1;
    return this.stack.pop();
  }
  push(value) {
    this.stack.push(value);
    this.size += 1;
  }
  getSize() {
    return this.size;
  }
}
const myStack = new Stack();
console.log(myStack.push('name'));

module.exports = Stack;
