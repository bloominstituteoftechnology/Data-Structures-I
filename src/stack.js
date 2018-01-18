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

  push(item) {
    let itemT = [];
    itemT = this.storage.push(item);
    return itemT;
  }

  pop() {
    const topItem = this.storage.pop();
    return topItem;
  }

  get size() {
    return this.storage.length;
  }

}

// let stackObj = new Stack();

// stackObj.push('german');
// stackObj.push('carlos');
// stackObj.push('pedro');
// stackObj.pop();

// console.log(stackObj);

module.exports = Stack;
