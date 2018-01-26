 /*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() { // this is the constructor
    this.items = []; // this is storage could use linked list or obj
    this.size = 0;
  }
  size() {
    return this.size;
  }
  push(item) {
    this.items.push(item);
    ++this.size;
  }
  pop() {
    if (this.size === 0) { // this.storage.pop();
      return this.size;
    }
    this.size--;
    return this.items.pop();
  }
}

module.exports = Stack;
