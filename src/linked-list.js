// What is a linked list.

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(val) {
    const newNode = {
      value: val,
      next: null
    };

    const cachedTail = this.tail;

    if (this.head) {
      if (this.head.next) {
        cachedTail.next = newNode;
      } else {
        this.head.next = newNode;
      }
    } else {
      this.head = newNode;
      // this.tail = newNode;
    }
    this.tail = newNode;
  }

  removeHead() {
    const cachedHead = this.head;
    // Check to see if there is a head.
    if (cachedHead) {
      // Check to see if the head has a next value.
      if (cachedHead.next) {
        this.head = cachedHead.next;
      } else {
        this.head = null;
        this.tail = null;
      }
    }
    return cachedHead.value;
  }

  contains(checkValue, node = this.head) {
    while (node !== null) {
      if (node.value === checkValue) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}

module.exports = LinkedList;


/* * Should have the methods: `addToTail`, `removeHead`, and `contains`.
 * `addToTail` replaces the tail with a new value that is passed in.
 * `removeHead` removes and returns the head node.
 * `contains` should search through the linked list and return true if a matching value is found.
 * The `head` property is a reference to the first node and the `tail` property is a reference to the last node.  These are the only two properties that you need to keep track of an infinite number of nodes.  Build your nodes with objects. */
