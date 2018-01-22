/* eslint-disable */
class LinkedList { // https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSPR/Reference/Linked_Lists -- next is pre-programmed to be written
  constructor() {
    this.head = null; // When the methods below refer to head, the starting value will be null UNLESS this.head is redefined???
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) { // Begins writing at 1:24:20
    const newNode = { // declares new node, which will wrap the given 'value'
      next: null, // Signature of ALL Linked List Nodes -- has a "next pointer", the new "tail" of our list, which is initially empty - null
      value, // short hand for value: value,
    };

    if (this.head === null) { // If there is no head, then newNode becomes the new head AND tail per line 2 of instructions
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    let oldNode = this.tail;
    this.tail.next = newNode; // If there IS a head (e.g. there is at least one element in the list) then newNode is set to become [sets new pointer]
    this.tail = newNode;// the 'old' tail's 'next' (currently = null) reference and becomes the updated "tail" [sets  ]
  // Without this last line, the 'old' tail will still be regarded as the tail - even though it is no longer last in the list.
  }

  // Everything contained within the bracket in the line above this one is a part of the addToTail method; thus, if there IS a tail already
  // that means that this.tail has a value already. 

  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() { // Basically the inverse of addToTail
    if (this.head === null) return; // If there is no head, then return end program
    
    if (this.head.next === null) { // Checks if head has a next because if head is the only element in the list, then head.next = null
      const value = this.head.value; // so that you can return what was deleted // Originally just has return head.value
      this.head = null; // set head = to null, effectively deleted it
      this.tail = null; // set tail = to null etc.
      return value;
    }
    const value = this.head.value; // Store the current reference to the head so that it can be returned after it is removed
    this.head = this.head.next; // Reassigns the value of this.head to this.head.next, effectively removing the current this.head and
    return value;// reassigning the this.head.next as the new this.head.
  }

  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  // contains(value) {
  //  let node = this.head;
  //  while (node !== null) {
  //    if (node.value === value) return true;
  //    node = node.next;
  //  }
  //  return false;
  // }

  contains(value) {
    // check if the linked list is empty
    if (this.head === null) return false;
    // otherwise, define our recursive function
    const searchLinkedList = (node) => { // Sean, "This is going to receive a node" -- so node
      // check if the current node's value matches what we're looking for
      if (node.value === value) return true; // if node.value is equal to the value we are looking for then return true
      // check if we've reached the end of the linked list
      if (node.next === null) return false;
      // make our recursive call
      return searchLinkedList(node.next);
    };
    return searchLinkedList(this.head);
  }
}

module.exports = LinkedList;
