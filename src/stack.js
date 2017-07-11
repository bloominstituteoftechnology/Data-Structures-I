class Stack {
  constructor() {
    this.storage = [];
  }
  get size() { return this.storage.length; }
  add(x) { return this.storage.push(x); }
  remove() { return this.storage.pop(); }
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
