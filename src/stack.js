class Stack {
  constructor() {
    this.stack = [];
  }
  add(...args) {
    this.stack.push(...args);
  }
  remove(...args) {
    return this.stack.pop(...args);
  }
  get size() {
    return this.stack.length;
  }
}

module.exports = Stack;

// * Should have the methods: `add`, `remove`, and a getter for the property `size`
// * `add` should accept a value and place it on top of the stack.
// * `remove` should remove and return the top value off of the stack.
// * `size` should return how many items are on the stack.
