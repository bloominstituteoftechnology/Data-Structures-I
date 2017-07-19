class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const node = { // New node object
      value,
      next: null
    };
    if (this.head == null) { // If there is no first node, point the head to this new node that is being added
      this.head = node;
    } else {
      this.tail.next = node; // Otherwise, assign this node to the 'next' property of the last (aka tail) node.
    }
    this.tail = node;
  }
  removeHead() {
    const oldHead = this.head;
    this.head = this.head.next;
    return oldHead.value;
  }
  contains(value) {
    let current = this.head;
    while (current.value && current.next !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = LinkedList;


// * Should have the methods: `addToTail`, `removeHead`, and `contains`.
// * `addToTail` replaces the tail with a new value that is passed in.
// * `removeHead` removes and returns the head node.
// * `contains` should searth through the linked list and return true if a matching value is found.
// * The `head` property is a reference to the first node and the `tail` property is a reference to the last node.  These are the only two properties that you need to keep track of an infinite number of nodes.  Build your nodes with objects.
