class Stack {
  constructor() {
    this.storage = [];
  }
  add(value) {
    this.storage.push(value);
  }
  remove() {
    return this.storage.pop();
  }
  get size() {
    return this.storage.length;
  }
}

module.exports = Stack;


/*
  Should have the methods: add, remove, and a getter for the property size
add should accept a value and place it on top of the stack.
remove should remove and return the top value off of the stack.
size should return how many items are on the stack.
*/
