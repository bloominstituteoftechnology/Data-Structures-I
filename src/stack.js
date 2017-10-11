/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.maxSize = 100;
    this.stack = new Array(this.maxSize);
    this.top = -1;
  }

  push(element) {
      if(this.top < 100) {
        this.stack[this.top + 1] = element;
        this.top++; 
      }
  }

  pop(element) {
    let ret = null;
    if(this.top >= 0) {
       ret = this.stack[this.top];
       this.top--; 
    }
    return ret;
  }

  get size() {
    return this.top + 1;
  }
}

module.exports = Stack;