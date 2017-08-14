class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(value) {
  //   // Add the new node that contains `value` and directs to `null`.
  //   // Modify previous tail to instead point to the new node.
    const newNode = {
      value,
      next: null,
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  removeHead() {
    // head has a value
    if (this.head) {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }

  contains(val) {
    // Search through the linked list (how?) and return true if a matching value is found.
    // Linear search:
    let currentNode = this.head;
    // check to see if currentNode is null. If not, proceed.
    while (currentNode) {
      if (currentNode.value === val) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;

// Should have the methods: addToTail, removeHead, and contains.
// addToTail replaces the tail with a new value that is passed in.
// removeHead removes and returns the head node.
// contains should searth through the linked list and return true if a matching value is found.
// The head property is a reference to the first node and the tail property is a reference to the last node.
// These are the only two properties that you need to keep track of an infinite number of nodes. Build your nodes with objects.
