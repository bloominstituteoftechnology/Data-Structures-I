/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.storage = [];
  }
  add(value) {
    this.storage.push(value);
  }
  remove(value) {
    return this.storage.pop();
  }
  get size() {
    return this.storage.length;
  }
}
module.exports = Stack;
const stack = new stack();
/* 
what is get size and example-
stack.add(5);
stack.add(10);
stack.add(15);
console.log(stack.size); 
*/

module.exports = Stack;
