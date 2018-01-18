/* eslint-disable class-methods-use-this */
/* eslint-disable */
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
    // build new node using the value
    const newNode = {
      next: null,
      value: value,
    }
    // add new node to tail
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }

  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    // if head is empty then just return nothing;
    if(this.head === null) return;
    // if head's next is null then it means that there's only one node
    // take the value from the head node and assign head and tail to null
    if(this.head.next === null){
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      return value;
    }else{
    // if head's next is not null then it means there's more than one node
    // if there's more than one node, takes the value of the head node then
    // assign the head's next node to the head node
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    // check if linklist is empty
    if(this.head === null) return false;

    const searchLinkList = (node) => {

      //check if head is equal to value
      if(node.value === value) return true;

      // check if there's more than one node
      if(node.next === null) return false;

      // if more than one node, call searchLinkList agian passing in the next node
      return searchLinkList(node.next);
    }
    return searchLinkList(this.head);
  }
}

module.exports = LinkedList;



