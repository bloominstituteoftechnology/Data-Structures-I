class LinkedList {
  /*
  * Should have the methods: `addToTail`, `removeHead`, and `contains`.
  * `addToTail` replaces the tail with a new value that is passed in.
  * `removeHead` removes and returns the head node.
  * `contains` should search through the linked list and return true if a matching value is found.
  * The `head` property is a reference to the first node and the `tail` property is a reference to the last node.  These are the only two properties that you need to keep track of an infinite number of nodes.  Build your nodes with objects.
  */
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(itemToInsert) {
    // v1 - nope
    // const newNode = null;
    // const current = this.tail;
    // newNode.next = current.next;
    // current.next = newNode;
    const node = {
      value: itemToInsert,
      next: null
    };

    if (this.head === null) {
      // console.log('inserting head:', itemToInsert);
      this.head = node;
    } else {
      // console.log('inserting head next:', itemToInsert);
      this.head.next = node.value;
    }
    // console.log('inserting tail:', itemToInsert);
    this.tail = node;
  }
  removeHead() {
    // v1 - nope
    // const prevNode = this.head;
    // if (prevNode.next === null) {
    //   prevNode.next = prevNode.next.next;
    // }
    return this.head;
  }
  contains(item) {
    let currNode = this.head;
    console.log(currNode);
    console.log('Next node:', currNode.next);
    console.log('Item:', item);
    console.log('currNode element:', currNode.value);
    while (currNode.value !== item) {
      currNode = currNode.next;
    }
    return true;
  }
}

module.exports = LinkedList;
