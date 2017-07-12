// // First value passed in to linked list:
// [ {value: 'The Godfather', next: null, STATE {head:Godf, tail: Godf}},]
//
// // Second value added linked list:
// [ {value: 'The Godfather', next: Matrix, STATE {head:Godf,/*tail:nil*/}},
//   {value: 'The Matrix',    next: null,   STATE/*head: nil*/{tail: Matrix}} ]
//
// // Third value added to linked list:
// [ {value: 'The Godfather', next: Matrix, STATE {head:Godf,/*tail:nil*/}},
//   {value: 'The Matrix',    next: Ex Mac,/*STATE head: nil,tail:nil*/},
//   {value: 'Ex Machina',    next: null,   STATE/* head */{tail: Ex}} ]
//
// // Fourth value added to linked list:
// [ {value: 'The Godfather', next: Matrix, STATE {head:Godf,/*tail:nil*/}},
//   {value: 'The Matrix',    next: Ex Mac,/*STATE head:nil,tail:nil*/},
//   {value: 'Ex Machina',    next: OffSpac,/*STATE head:nil,tail:nil*/},
//   {value: 'Office Space',  next: null,    STATE/* head:nil */{tail: OffSpac}} ]

class LinkedList {
  constructor() {
    this.head = null;
    /* links to nodes - to infinity and beyond! */
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

<<<<<<< HEAD
  // Conditions to check to Add to tail
  // 1) nothing in the list?
  // 2) 1 other in the list?
  // 3) more than 1?
  addToTail(fromOutside) {
    const node = {
      value: fromOutside, // <--- e.g. 'The Godfather'
      next: null
    };
    if (this.head === null) {
      this.head = node;
    } else {
      this.head.next = node.value;
    }

    this.tail = node;
  }
  removeHead() { return this; }/* removes and returns the head node. */
  contains(x) { return this; }/* should searth through the linked list and return true if a matching value is found. */
=======
  addToTail(val) {
    const newNode = {
      next: null,
      value: val,
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }
    if (this.head.next === null) {
      this.head.next = newNode;
      this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  }

  removeHead() {
    if (this.head === null) return;
    if (this.head.next === null) {
      const head = this.head;
      this.head = null;
      this.tail = null;
      return head.value;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  contains(val) {
    if (this.head === null) return false;
    const searchLinkedList = (node) => {
      if (node.value === val) return true;
      if (node.next === null) return false;
      return searchLinkedList(node.next);
    };
    return searchLinkedList(this.head);
  }
>>>>>>> 60f93e1fefd6497836edc0d1ca7a4d3dda614f50
}
const test = new LinkedList;
test.addToTail('The Godfather');
// console.log(test);
test.addToTail('The Matrix');
test.addToTail('Ex Machina');
console.log(test);

/*
* 1) Should have the methods: `addToTail`, `removeHead`, and `contains`.
* 2) `addToTail` replaces the tail with a new value that is passed in.
* 3) `removeHead` removes and returns the head node.
* 4) `contains` should searth through the linked list and return true if a matching value is found.
* 5) The `head` property is a reference to the first node and the `tail` property is a reference to
* the last node.  These are the only two properties that you need to keep track of an infinite number
* of nodes.  Build your nodes with objects.
*/

module.exports = LinkedList;
