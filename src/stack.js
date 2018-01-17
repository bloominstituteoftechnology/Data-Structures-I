/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {
  constructor() {
    this.topmostNode = null;
  }

  push(item) {
    const newNode = {
      value: item,
      justBeneath: this.topmostNode,
    };
    this.topmostNode = newNode;
  }

  pop() {
    if (this.topmostNode === null) return null;
    const poppedNode = this.topmostNode;
    this.topmostNode = this.topmostNode.justBeneath;
    return poppedNode.value;
  }

  get size() {
    if (this.topmostNode === null) return 0;
    let numOfItems = 1;
    const stackCounter = (item) => {
      if (item.justBeneath === null) return numOfItems;
      numOfItems++;
      return stackCounter(item.justBeneath);
    };
    return stackCounter(this.topmostNode);
  }
}

class ArrayBasedStack {
  constructor() {
    this.contents = [];
  }
  size() {
    return this.contents.length;
  }
  push(item) {
    this.contents.push(item);
  }
  pop() {
    return this.contents.pop();
  }
}

module.exports = Stack;
