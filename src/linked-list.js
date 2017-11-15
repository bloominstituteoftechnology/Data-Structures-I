/* eslint-disable class-methods-use-this */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0; // not need it for this problem, but left in case for future notes
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
    // not set yet
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // change tail value and add tail.next
      this.tail = newNode;
    }
    this.size++;
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    const removedHead = this.head.value;
    this.head = this.head.next;
    this.size--;
    return removedHead;
  /* if (!this.head) return null;
    if (!this.head.next) this.tail = null;
    const headValue = this.head.value;
   this.head = this.head.next;
    return headValue; */
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    let found = false; // guilty until proven true
    let checkedNode = this.head;
    while (checkedNode) {
      if (checkedNode.value === value) {
        found = true;
      }
      checkedNode = checkedNode.next;
      // need checkedNode because we don't wanna change this.head
      // the next next becomes the head
      // Allows to continue checking the list
    } return found;
  }
}
/* if (!this.head) return null;
let currentNode = this.head;

while(currentNode.value !== value) {
  if (!currentNode.next) return false;
  currentNode = currentNode.next;
} return true;
}
}
const checkNode = (node, criterion) => {
  if (node.next === null) return false;  // don't find something 
  if (node.value === criterion) return true; //find something
  return checkNode(node.next, criterion); //end
}; return checkNode(this.head, value); // this is a recursion function
}
}
contains(value) {
    //Set variable that references current node, starting with the head
    // Loop through list until either I find the value or the current node's next is null
    // Within loop, use current node's next property to update current node variable for next loop operation
    // if I find the value, return true
    //If I don't find the value, return false
  */
module.exports = LinkedList;
