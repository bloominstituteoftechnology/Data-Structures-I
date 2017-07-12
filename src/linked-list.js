class LinkedList {
  constructor() {
    this.head = null;
    /* links to nodes - to infinity and beyond! */
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  // [ 'The Godfather', 'The Matrix' ]
  addToTail(fromOutside) {
    const node = {
      value: fromOutside, // <--- e.g. 'The Godfather'
      next: null
    };
    if (this.head === null) {
      this.head = node;
    }
    this.tail = node;
  }

  // Conditions to check to Add to tail
  // 1) nothing in the list?
  // 2) 1 other in the list?
  // 3) more than 1?

  removeHead() { /* removes and returns the head node. */
    return this;
  }
  contains(x) { /* should searth through the linked list and return true if a matching value is found. */
    return this;
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
