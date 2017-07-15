class Stack {
/*
* Should have the methods: `add`, `remove`, and a getter for the property `size`
* `add` should accept a value and place it on top of the stack.
* `remove` should remove and return the top value off of the stack.
* `size` should return how many items are on the stack.
*/
  constructor() {
    this.dataStore = [];
    this.top = 0;
  }

  add(item) {
    return this.dataStore[this.top++] = item;
  }
  remove() {
    if (this.top === 0) {
      return 0;
    }
    return this.dataStore[--this.top];
  }
  get size() {
    return this.top;
  }

}

module.exports = Stack;
