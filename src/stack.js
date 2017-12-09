/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/
class Stack {

  constructor() {
    this.storage = [];
    this.size = 0;
  }

  size() {
    return this.storage.length;
  }

  push(item) {
    this.size += 1;
    return this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }
}

const test = new Stack();

console.log(test.size);

// console.log(Object.getPrototypeOf(test).hasOwnProperty('push'));
// console.log(Object.getPrototypeOf(test).hasOwnProperty('pop'));
// console.log(Object.getPrototypeOf(test).hasOwnProperty('size'));

// test.push(null);
// test.push(null);
// test.push(null);
// test.push(null);
// test.push(null);
// test.push(null);
// test.push(null);
// test.push(null);
// test.push(null);
// test.push(null);
// console.log(test.size);

// console.log(test.pop());

// console.log(test.storage);

// test.pop();
// test.pop();
// test.pop();
// console.log(test.size);

// test.push(1);
// console.log(test.pop());

// test.push(true);
// test.push('hi');
// test.push(null);
// test.push(77);
// console.log(test.pop());

// test.push(true);
// test.push('hi');
// test.push(null);
// test.push(77);
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());
// console.log(test.pop());
module.exports = Stack;
