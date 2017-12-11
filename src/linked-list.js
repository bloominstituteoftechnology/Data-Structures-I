/* eslint-disable class-methods-use-this */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    const newVal = {};
    newVal.value = value;
    newVal.next = null;

    if (this.head === null && this.tail === null) {
      this.head = newVal;
      this.tail = newVal;
      this.head.next = this.tail;
      this.tail.next = null;
    } else if (this.head !== null && this.tail !== null) {
      this.head.next = this.tail;
      this.head.next.next = newVal;
      this.tail = newVal;
      this.tail.next = null;
    }
    // this.tail = newVal;
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    const removed = this.head;
    if (this.head !== null) {
      this.head = this.head.next;
    } else if (this.head === null) {
      return null;
    }
    return removed.value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let isFound = false;
    let checker = this.head;
    while (checker) {
      if (checker.value === value) {
        isFound = true;
      }
      checker = checker.next;
    }
    return isFound;
  }
}

const test = new LinkedList();

// test.addToTail(1);
// console.log(test.tail.value);
// test.addToTail(2);
// console.log(test.tail.value);

// test.addToTail(1);
// console.log(test.head.value);
// test.addToTail(2);
// console.log(test.head.value);

test.addToTail(1);
test.addToTail(2);
test.addToTail('hello');
test.addToTail(true);
console.log(test.contains('hello'));
console.log(test.contains('asdf'));

// test.addToTail(1);
// test.addToTail(2);
// console.log(test.head.value);
// test.removeHead();
// console.log(test.head.value);
// test.removeHead();
// console.log(test.head);

// test.addToTail(1);
// console.log(test.removeHead());


module.exports = LinkedList;
