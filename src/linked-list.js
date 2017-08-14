// * Should have the methods: `addToTail`, `removeHead`, and `contains`.
// * `addToTail` replaces the tail with a new value that is passed in.
// * `removeHead` removes and returns the head node.
// * `contains` should searth through the linked list and return true if
// * a matching value is found.
// * The `head` property is a reference to the first node and the `tail`
// * property is a reference to the last node.  These are the only two properties
// * that you need to keep track of an infinite number of nodes.  Build your nodes with objects.

class Node {
  constructor(element) {
    this.value = element;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
   // Do not modify anything inside of the constructor
  }
  addToTail(element) {
    const currentNode = new Node(element);
    if (!this.head) this.head = currentNode;
    else {
      this.tail.next = currentNode;
      currentNode.prev = this.tail;
    }
    this.tail = currentNode;
  }
  removeHead() {
    if (!this.head) return;
    if (!this.head.next) {
      const prevHead = this.head.value;
      this.head = null;
      this.tail = null;
      return prevHead;
    }
    const prevHead = this.head.value;
    this.head = this.head.next;
    if (this.head.prev) this.head.prev = null;
    return prevHead;
  }
  contains(element) {
    let currentNode = this.head;
    if (currentNode.value === element) return true;
    while (currentNode.next) {
      if (currentNode.value === element) return true;
      currentNode = currentNode.next;
    }
    return false;
  }
  // print() {
  //   let currentNode = this.head;
  //   while (currentNode.next) {
  //     console.log(currentNode);
  //     currentNode = currentNode.next;
  //   }
  //   console.log(currentNode);
  // }
}

module.exports = LinkedList;
