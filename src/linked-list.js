/* Should have the methods: `addToTail`, `removeHead`, and `contains`.
* `addToTail` replaces the tail with a new value that is passed in.
* `removeHead` removes and returns the head node.
* `contains` should searth through the linked list and return true if a
matching value is found.
* The `head` property is a reference to the first node and the
`tail` property is a reference to the last node.
These are the only two properties that you need to keep track of an
infinite number of nodes.
Build your nodes with objects.*/

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  class Node {
    constructor(val) {
      this.node = val;
      this.node.next = null;
    }
  }
}

module.exports = LinkedList;
