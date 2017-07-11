/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const node = {
      value,
      next: null
    };
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.tail = node;
  }
  removeHead() {
    const current = this.head;
    if (current.value) {
      this.head = this.head.next;
    }
    return current.value;
  }
  contains(value) {
    let current = this.head;
    while (current.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
const list = new LinkedList();
// list.addToTail(1);
// list.addToTail(2);
// console.log(list);
// //list.removeHead();
// console.log(list);
// console.log(list.contains(1))
// console.log(list.contains(5))
// list.addToTail(1);
// list.addToTail(2);
//
// // console.log(list.tail.value);
// console.log(list);
module.exports = LinkedList;
