/* eslint-disable class-methods-use-this */
/* eslint-disable no-trailing-spaces */
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
      next: null,
      value, 
    };

    // Check if the current head is null.  If so, the list is empty and we are setting the new node
    // to be both the tail and head as it will be the only node on the list.
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    } 

    // If the list isn't empty
      /*
        (1) list.addToTail(1); // first call to addToTail
        First item on linked list has a next value of null and a data value of 1
        (2) list.addToTail(2); // second call to addToTail
        First item (now the head) on linked list has a next value of 2nd object and a data value of 1 (this.tail.next)
        Second item (now the tail) on linked list has a next value of null and a data value of 2 (this.tail)

        This is referring to the linkedlist object (named list in previous lines)
      */
    this.tail.next = newNode;
    this.tail = newNode;
  }

  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    // Checks if head is null.  If that is the case, the linked list is empty and the function
    // returns without doing anything.
    if (this.head === null) return;
    // Checks if head next is null.  If so, the linked list is a single item and both head and tail 
    // need to be set to null.
    if (this.head.next === null) {
      const value = this.head.value;  // the head's value
      this.head = null;  // as it was the only value, set both head and tail to null
      this.tail = null;  // as it was the only value, set both head and tail to null
      return value;  // return the value of the removed node per the instructions
    }
    const value = this.head.value; // the head's value
    this.head = this.head.next; // this.head.next refers to the next node, sets the next node to the current head
    return value;  // return the value of the removed node per the instructions
  }

  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    // Checks if head is null.  If that is the case, the linked list is empty and the function
    // returns false because the linked list has nothing to check.
    if (this.head === null) return false;
    // Recursive function if the linked list is populated
    const searchLinkedList = (node) => {
      // Checks if the current node's value matches the value we are seaching for.
      if (node.value === value) return true;
      // If the value doesn't match, and the current node points to null, it is the last node
      if (node.next === null) return false;
      // Recursive call to the the next node (node.next points to the next node)
      return searchLinkedList(node.next);
    };
    // returns Recursive function that searches the length list starting at the head
    return searchLinkedList(this.head);
  }
}

module.exports = LinkedList;
