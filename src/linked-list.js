class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(obj) {
    // Instantiate node to be added to the tail
    // At the root of the solution is that we implement nodes as objects with two props:
    // the value held at that node and a pointer to the following node in the list
    const newNode = {
      value: obj,
      nextNode: null };
    // check if this is the trivial list
    if (this.head === null) {
      // if so, this new node is both the head and the tail
      this.head = newNode;
    } else {
      // otherwise it's a little more complicated
      // we have to find the last node in the list before null
      let thisNode = this.head;
      while (thisNode.nextNode !== null) {
        thisNode = thisNode.nextNode;
      }
      thisNode.nextNode = newNode;
    }
    this.tail = newNode;
  }

  contains(obj) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === obj) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  removeHead() {
    if (this.head !== null) {
      const originalHead = this.head.value;
      this.head = this.head.nextNode;
      return originalHead;
    }
  }
}

module.exports = LinkedList;
