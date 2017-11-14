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
    const newObject = {
      value,
      next: null
    };
    if (!this.head) {
      this.head = newObject;
      this.tail = newObject;
    } else {
      // This will set the previous node object's next property to the new object. Essentially, if there are two node
      // objects, the first created one is now pointed to the second created node object.
      this.tail.next = newObject;
      // Tail will now be equal to the newly created node object.
      this.tail = newObject;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    // saves to variable the current value of head
    const value = this.head.value;
    // move the head value to next property of the next object node in line in order the nodes objects were created.
    // remember that next points to the next node object that was created. The ones created most recently is always
    // the tail.
    this.head = this.head.next;
    // return value of head that was removed
    return value;
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    // set up the head to iterate through list
    let thisNode = this.head;
    // while the head is not equal to null
    while (thisNode) {
      if (thisNode.value === value) {
        return true;
      }
      // move onto the next value in the linked list for testing.
      thisNode = thisNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;
