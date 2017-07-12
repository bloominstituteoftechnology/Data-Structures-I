/* eslint-disable */
class Stack {
  constructor() {
    this.storage = [];
  }
<<<<<<< HEAD
  get size() { return this.storage.length; }
  add(anItem) { return this.storage.push(anItem); }
  remove() { return this.storage.pop(); }
=======

  get size() {
    return this.storage.length;
  }

  add(item) {
    this.storage.push(item);
  }

  remove() {
    return this.storage.pop();
  }
>>>>>>> 60f93e1fefd6497836edc0d1ca7a4d3dda614f50
}

// Drew: to run this, uncomment the following line, cd into the /src/ directory and type `node stack.js` into your console
// const test = new Stack;
// console.log(test);
// console.log(test.size);
// // console.log(test.size());
// test.add('poop');
// console.log(test.size);
// console.log(test.storage);
// console.log(test.remove());
// console.log(test.size);
// console.log(test.storage);
// console.log(test.remove());
// console.log(test.size);
// console.log(test.storage);

module.exports = Stack;
