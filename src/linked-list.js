/*
* 1) Should have the methods: `addToTail`, `removeHead`, and `contains`.
* 2) `addToTail` replaces the tail with a new value that is passed in.
* 3) `removeHead` removes and returns the head node.
* 4) `contains` should searth through the linked list and return true if a matching value is found.
* 5) The `head` property is a reference to the first node and the `tail` property is a reference to
* the last node.  These are the only two properties that you need to keep track of an infinite number
* of nodes.  Build your nodes with objects.
*/

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

  // Conditions to check to Add to tail
  // 1) nothing in the list?
  // 2) 1 other in the list?
  // 3) more than 1?
  // replace the tail with a new value that is passed in
  addToTail(fromOutside) {
    const node = {
      value: fromOutside, // <--- e.g. 'The Godfather'
      next: null
    };
    if (this.head === null) {
      this.head = node;
    } else if (this.head.next === null) {
      this.head.next = node;
    } else { this.tail.next = node; }
    this.tail = node;
  }
  // removes and returns the head node.
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
  // should searth through the linked list and return true if a matching value is found.
  contains(anObject) {
    if (this.head === null) return false;
    const searchLinkedList = (node) => {
      if (node.value === anObject) return true;
      if (node.next === null) return false;
      return searchLinkedList(node.next);
    };
    return searchLinkedList(this.head);
  }
}
// // TEST SUITE
// // LinkedList class construction
// const test = new LinkedList;
// console.log(test);
// // addToTail()
// test.addToTail('The Godfather');
// console.log(test);
// test.addToTail('The Matrix');
// console.log(test);
// test.addToTail('Ex Machina');
// console.log(test);
// test.addToTail('Casablanca');
// console.log('AFTER FOUR CALLS TO addToTail');
// // removeHead()
// test.removeHead();
// console.log(`REMOVING "The Godfather":\n${console.log(test)}`);
// test.removeHead();
// console.log(`REMOVING "The Matrix":\n${console.log(test)}`);
// test.removeHead();
// console.log(`REMOVING "Ex Machina":\n${console.log(test)}`);
// test.removeHead();
// console.log(`REMOVING "Casablance":\n${console.log(test)}`);
// // contains()
// const test2 = new LinkedList;
// test2.addToTail('The Godfather');
// test2.addToTail('The Matrix');
// test2.addToTail('Ex Machina');
// test2.addToTail('Casablanca');
// console.log('AFTER FOUR CALLS TO addToTail');
// console.log(test2.contains('The Godfather')); // <-- true
// console.log(test2.contains('The Matrix'));    // <-- true
// console.log(test2.contains('Ex Machina'));    // <-- true
// console.log(test2.contains('Casablanca'));    // <-- true
// console.log(`Removing: ${test2.removeHead()}`);
// console.log(test2.contains('The Godfather')); // <-- false
// console.log(test2.contains('Casablanca'));    // <-- true
// console.log(`Removing: ${test2.removeHead()}`);
// console.log(`Removing: ${test2.removeHead()}`);
// console.log(`Removing: ${test2.removeHead()}`);
// console.log(test2.contains('Casablanca'));    // <-- false
// console.log(`Removing ???: ${test2.removeHead()}`); // <--- undefined

module.exports = LinkedList;
