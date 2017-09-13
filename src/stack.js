class Stack {
  constructor() {
    this.contents = [];
  }


  push(item) {
    this.contents.push(item);
  }

  pop() {
    const popped = this.contents[this.contents.length - 1];
    this.contents.pop();
    return popped;
  }


  get size() {
    return this.contents.length;
  }
}

module.exports = Stack;
