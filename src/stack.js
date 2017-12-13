/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
// const Stack = () => {
//   this.count = 0;
//   this.storage = {};
// };
//
// Stack.prototype.push = (value) => {
//   this.storage[this.count] = value;
//   this.count++;
// };
//
// Stack.prototype.pop = () => {
//   if (this.count === 0) {
//     return undefined;
//   }
//   const popped = this.storage[this.count];
//   this.count--;
//   delete this.storage[this.count];
//   return popped;
// };
//
// Stack.prototype.size = () => {
//   return this.count;
// };

class Stack {
  constructor() {
    this.storage = [];
  }
  push(value) {
    this.storage.push(value);
  }
  pop() {
    if (!this.storage.length) {
      return 0;
    }
    return this.storage.pop();
  }
  get size() {
    return this.storage.length;
  }
}
// stack = new Stack()
module.exports = Stack;
