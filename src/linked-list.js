class Node {
  constructor() {
    this.value = undefined;
    this.next = null;
  }
}

const nodeA = new Node;
console.log('nodeA:');
console.log(nodeA);
const nodeB = new Node;
console.log('nodeB:');
console.log(nodeB);


class LinkedList {
  constructor() {
    this.head = null;
    /* to infinity and beyond! */
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(nodeParameter) { /* replaces the tail with a new value that is passed in. */
    this.tail = nodeParameter;
  }
  removeHead() { /* removes and returns the head node. */
    return this.tail;
  }
  contains(x) { /* should searth through the linked list and return true if a matching value is found. */
    if (this.includes(x)) { return true; }
    return false;
  }
}

// const test = new LinkedList;
// test.addToTail('argument');
// console.log(test);
// test.addToTail('heated conversation');
// console.log(test);
/*

* 1) Should have the methods: `addToTail`, `removeHead`, and `contains`.
* 2) `addToTail` replaces the tail with a new value that is passed in.
* 3) `removeHead` removes and returns the head node.
* 4) `contains` should searth through the linked list and return true if a matching value is found.
* 5) The `head` property is a reference to the first node and the `tail` property is a reference to
* the last node.  These are the only two properties that you need to keep track of an infinite number
* of nodes.  Build your nodes with objects.
*/

// class ExampleLinkedList {
//   constructor() {
//     this.head = {
//       value: 'something',
//       next: {}
//     };
//     this.tail = null;
//   }
// }

module.exports = LinkedList;
