// Should have the methods: `add`, `remove`, and a getter for the property `size`
 // `add` should accept a value and place it on top of the stack.
 // `remove` should remove and return the top value off of the stack.
 // `size` should return how many items are on the stack.

class Stack {
  constructor() {
    this.stack = [];
  }
  get size() {
    return this.stack.length;
  }
  add(val) {
    this.stack.push(val);
  }
  remove(val) {
    return this.stack.pop(val);
  }
}

module.exports = Stack;
