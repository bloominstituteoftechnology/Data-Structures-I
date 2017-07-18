class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(value) {
    // Add the new node that contains `value` and directs to `null`.
    // Modify previous tail to instead point to the new node.
    if (this.head === null) { // If there are no nodes in the list,
      this.tail = { // Add a tail
        value,
        next: null
      };
      this.head = this.tail; // Set the head equal to the tail because there is only one node.
    } else {
      // If there are existing nodes, we want to add a new tail and modify old tail.
      this.node = {
        value: this.tail.value,
        next:
      };

      this.tail = { // Otherwise, if there is already a head, set the tail equal to given value.
        value,
        next: null
      };
      // HOW DO ACCESS OLD TAIL !!  ??
    }
  }

  removeHead() {
    // Remove and return the head node. Nothing else.
    const oldHead = this.head;
    if (this.head === this.tail) { // If there is only one node.
      // Remove head AND tail.
      this.head = null;
      this.tail = null;
    } else { // If there is more than one node.
      this.head = this.head.next;
      // Also remove the next node so there isn't a copy.
      this[this.head.next] = null; // How to actually access the next node? By using the reference from head?
    }
    return oldHead.value;
  }

  contains(value) {
    // Search through the linked list (how?) and return true if a matching value is found.
    // Linear search:
    while (true) {
      if (value === this.node.value) {
        return true;
      }
      let node = this.next; // Iterate thru linked list?
    }
  }
}

module.exports = LinkedList;

// Should have the methods: addToTail, removeHead, and contains.
// addToTail replaces the tail with a new value that is passed in.
// removeHead removes and returns the head node.
// contains should searth through the linked list and return true if a matching value is found.
// The head property is a reference to the first node and the tail property is a reference to the last node.
// These are the only two properties that you need to keep track of an infinite number of nodes. Build your nodes with objects.
