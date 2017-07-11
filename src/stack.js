class Stack {
  constructor() {
    this.storage = [];
  }
  get size() { return this.storage.length; }
  add(x) { return this.storage.push(x); }
  remove() { return this.storage.pop(); }
}

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
