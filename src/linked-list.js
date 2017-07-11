/*eslint no-console: ["error", { allow: ["warn", "error"] }] */


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    this.tail = value;

    const node = {
      value: value,
      next: null
    }

    if (!this.head) {
      this.head = node;
    }
    else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  removeHead() {
    console.log('this.next: ' + this.next);
    console.log('this.head: ' + this.head)
  }

  contains() {

  }
}
const list = new LinkedList;
list.addToTail(1);
list.addToTail(2);
console.log(list);
list.removeHead();
console.log(list);
module.exports = LinkedList;
