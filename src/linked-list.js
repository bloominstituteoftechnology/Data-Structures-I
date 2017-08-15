class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(val) {
    const node = new Node(val);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  removeHead() {
    const temp = this.head;
    this.head = this.head.next;
    return temp.value;
  }
  contains(val) {
    let currentNode = this.head;
    while (currentNode) {
      if (val === currentNode.value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;

/* const li = new LinkedList();
li.addToTail(1);
console.log(li.tail.value)
li.addToTail(2)
console.log(li.tail.value);
console.log(li.head.value);
li.addToTail(3);
li.removeHead()
li.addToTail(4)
console.log(li.head.value, li.tail.value);
li.removeHead()
li.addToTail(8)
console.log(li.head.value,li.tail.value)
console.log(li.contains(8)) */

/* addToTail(node) {
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
  const temp = this.tail.contents.shift();
  this.head.value = this.tail.contents[0];
  return temp;
}
contains(x) {
  return this.tail.contents.includes(x);
} */
