/* eslint-disable class-methods-use-this */
// --------------------------------------------
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    // Do not modify anything inside of the constructor
  }
  // -------------------------------------------
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  // -------------------------------------------
  /*
  adddToTail(value) {
   }
  }
  */
  // -------------------------------------------
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  // -------------------------------------------
  removeHead() {
    const headVal = this.head.value;
    this.head = this.head.next;
    this.size--;
    return headVal;
  }
  // -------------------------------------------
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  // -------------------------------------------
  contains(value) {
    let current = this.head;
    for (; current !== null;) {
      if (current.value === value) { return true; }
      current = current.next;
    }
    return false;
  }
  // -------------------------------------------
  // Returns node 'index' if the the value is found, -1 otherwise
  // -------------------------------------------
  getIndex(value) {
    let current = this.head;
    let i = 0;
    for (; current !== null; i++) {
      if (current.value === value) { return i; }
      current = current.next;
    }
    return -1;
  }
}
// ---------------------------------------------
// [!]Singly2 currently doesn't work (needs more custom functions):
class Singly2LinkedList extends LinkedList {
  consturctor() {
  }
  addToTail(value) {
    const node = {
      value,
      next: null,
    };
    // -----------------------------------------
    this.size++;
    let current = this.head;
    // -----------------------------------------
    // If empty list:
    if (!current) {
      this.head = node;
      current.next = node;
    }
    // -----------------------------------------
    // If unempty list
    for (; current.next !== null;) {
      current = current.next;
    }
    // -----------------------------------------
    current.next = node;
  }
}
// ---------------------------------------------
class SinglyLinkedList extends LinkedList {
  consturctor() {
  }
  addToTail(value) {
    const node = {
      value,
      next: null,
    };
    // -----------------------------------------
    this.size++;
    let current = this.tail;
    // -----------------------------------------
    // If empty list:
    if (!current) {
      this.head = node;
      this.tail = node;
    } else {
      // ---------------------------------------
      // If unempty list
      for (; current.next !== null;) {
        current = this.next;
      }
      // ---------------------------------------
      this.tail.next = node;
      this.tail = node;
    }
  }
}
// ---------------------------------------------
class CircularLinkedList extends LinkedList {
  consturctor() {
  }
  addToTail(value) {
    const node = {
      value,
      next: null,
      previous: null,
    };
    this.size++;
    // -----------------------------------------
    // If empty list:
    if (!this.tail) {
      this.head = node;
      node.previous = node;
      this.tail = node;
    } else {
      // ---------------------------------------
      let current = this.tail;
      // ---------------------------------------
      // If unempty list
      for (; current.next !== null;) {
        current = this.next;
      }
      // ---------------------------------------
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
  }
}
// ---------------------------------------------
class DoublyLinkedList extends LinkedList {
  consturctor() {
  }
  addToTail(value) {
    const node = {
      value,
      next: null,
      previous: null,
      headTmp: this.head,
      current: this.head,
    };
    // -----------------------------------------
    this.size++;
    // -----------------------------------------
    // If empty list:
    if (!node.headTmp) {
      this.head = { value: node.value, previous: null, next: null, };
    } else {
      // ---------------------------------------
        // If unempty list
      for (; node.current !== null && node.current.next !== null;) {
        node.previous = node.current;
        node.current = node.current.next;
      }
      // ---------------------------------------
      node.current.next = { value: node.value, previous: node.current, next: null, };
    }
  }
}
// ---------------------------------------------
/*
// ---------------------------------------------
const singlyList = new SinglyLinkedList();
// ---------------------------------------------
singlyList.addToTail(1);
singlyList.addToTail(2);
singlyList.addToTail(3);
singlyList.addToTail(44);
singlyList.addToTail(55);
// ---------------------------------------------
console.log(singlyList);
// ---------------------------------------------
console.log('<< Contains 0?:', singlyList.contains(0));
console.log('<< Contains 3?:', singlyList.contains(3));
console.log(singlyList.removeHead());
console.log('<< Removed head Value?:', singlyList);
console.log('=======================================');
// ---------------------------------------------
const circularList = new CircularLinkedList();
// ---------------------------------------------
circularList.addToTail(1);
circularList.addToTail(2);
circularList.addToTail(3);
circularList.addToTail(44);
circularList.addToTail(55);
// ---------------------------------------------
console.log(circularList);
// ---------------------------------------------
console.log('<< Contains 0?:', circularList.contains(0));
console.log('<< Contains 3?:', circularList.contains(3));
console.log(circularList.removeHead());
console.log('<< Removed head Value?:', circularList);
console.log('=======================================');
// ---------------------------------------------
const doublyList = new DoublyLinkedList();
// ---------------------------------------------
doublyList.addToTail(1);
doublyList.addToTail(2);
doublyList.addToTail(3);
doublyList.addToTail(44);
doublyList.addToTail(55);
// ---------------------------------------------
console.log(doublyList);
// ---------------------------------------------
console.log('<< Contains 0?:', doublyList.contains(0));
console.log('<< Contains 3?:', doublyList.contains(3));
console.log(doublyList.removeHead());
console.log('<< Removed head Value?:', doublyList);
console.log('=======================================');
*/
// ---------------------------------------------
module.exports = LinkedList;
