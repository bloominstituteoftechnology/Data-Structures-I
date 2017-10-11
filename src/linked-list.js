class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(item) {
    const node = {
      value: item,
      next: null
    };
    if (this.head === null) {
      this.head = node; // pointer; not making a whole new node, pointing to the node object
      this.tail = node; // pointer
      // return;
    } else {
      // if (this.head.next === null) {
      //   this.head.next = node;
      //   this.tail = node;
      // } Fixed during solution lecture.
      // needed -.next first
      this.tail.next = node;
      this.tail = node;
    }
  }
  removeHead() {
    const oldHead = this.head.value;
    this.head = this.head.next;
    // this.tail = this.tail.next; removed during solution lecture
    return oldHead;
  }
  contains(newItem) {
    const checkNode = function checkNode(node, criterion) {
      if (node.next === null) return false;
      if (node.value === criterion) return true;
      return checkNode(node.next, criterion);
    };
    return checkNode(this.head, newItem);
    // let node1 = this.head;
    // while (node1) {
    //   if (node1.value === newItem) {
    //     return true;
    //   }
    //   node1 = node1.next;
    // }
    // return false;
  }
  // class has head and tail and all the nodes; making a list of nodes
}

module.exports = LinkedList;
