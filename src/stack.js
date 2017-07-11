class Stack {
  constructor() {
    this.storage = [];
  }
  get size() { return this.storage.length; }
  add(x) { return this.storage.push(x); }
  remove() { return this.storage.pop(); }
}


// GIT PULL TEST

// Drew: to run this, uncomment the following line, cd into the /src/ directory and type `node stack.js` into your console
// const x = new Stack;
// console.log(x);
// console.log(x.size);
// x.add('poop');
// console.log(x.size);
// console.log(x.storage);
// console.log(x.remove());
// console.log(x.size);
// console.log(x.storage);
// console.log(x.remove());
// console.log(x.size);
// console.log(x.storage);

module.exports = Stack;
