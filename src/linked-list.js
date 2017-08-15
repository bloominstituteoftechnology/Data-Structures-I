class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(node) {
    if (this.tail === null && this.head === null) {
      this.tail = {};
      this.head = {};
      this.tail.contents = [node];
      this.tail.value = this.tail.contents[this.tail.contents.length - 1];
      this.head.value = this.tail.contents[0];
    } else {
      this.tail.contents.push(node);
      this.tail.value = this.tail.contents[this.tail.contents.length - 1];
    }
  }
  removeHead() {
    const temp = this.head.value;
    this.tail.contents.shift();
    this.head.value = this.tail.contents[0];
    return temp;
  }
  contains(x) {
    return this.tail.contents.includes(x);
  }
}

module.exports = LinkedList;

// const newObj = new LinkedList();
// newObj.addToTail(1);
// newObj.addToTail(2);
// newObj.addToTail(3);
// newObj.addToTail(4);
// newObj.addToTail(5);
// newObj.addToTail('hello')
// console.log(newObj.removeHead())
// console.log(newObj.removeHead())
// console.log(newObj.removeHead())
// console.log(newObj.removeHead())
// console.log(newObj.removeHead())
// console.log(`contents: ${newObj.tail.contents}`);
