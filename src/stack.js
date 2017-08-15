class Stack {
  constructor(options) {
    this.newArr = [];
  }
  add(value) {
    return this.newArr.push(value);
  }
  remove() {
    return this.newArr.pop();
  }
  get size() {
    return this.newArr.length;
  }
}

module.exports = Stack;

// const newObj = new Stack()
// newObj.add(77)
// newObj.add(null)
// newObj.add(null)
// newObj.add(null)
// newObj.add(null)
// newObj.remove()
// const a = newObj.size()
// // console.log(a);
// // console.log(newObj.newArr)
