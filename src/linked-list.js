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
    const newNode = {
      value,
      next: null,
    };

    if (!this.head) {
      this.head = newNode; // {value: 1, next: null}
      this.tail = newNode;
    } else {
      //         console.log('line 31 --> ', newNode) //this.tail.next = newNode; // {value: 1, next: {value: 2, next null}}, tail {value: 2, next null
      this.tail.next = newNode; // 1 TAIL NEXT  TAIL IS POINT TO 1, || TAIL IS POINT 2, TAIL.NEXT
      this.tail = newNode;
    }
  }

  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (!this.head) return null;
    if (!this.head.next) this.tail = null;
    const returnValue = this.head.value;
    this.head = this.head.next;
    return returnValue;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let tempValue = this.head;
    while (tempValue.next !== null) {
      if (tempValue.value === value) {
        return true;
      }
      tempValue = tempValue.next;
    }
    return false;
  }
}

const x = new LinkedList();

module.exports = LinkedList;
