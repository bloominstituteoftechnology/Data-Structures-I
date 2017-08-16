// 1. Instructions
// Should have addToTail, removeHead, contains methods.
// addToTail replaces the tail with a new value that is passed in.
// removeHead removes and returns the head node.
// contains should search through the linked list and return true if matching value is found.
//
// this.head and this.tail should each only be pointing at a single node.
// Use objects, not arrays!

// 2. Visualizing the linked list
//  1) { value: '1.Ada - At The Gate', next: null }                      { head: Ada, tail: Ada }
//
//  2) { value: '1.Ada - At The Gate', next: '2. Jamie XX - Gosh' }      { head: Ada, tail: —— }
//     { value: '2. Jamie XX - Gosh', next: null }                       { head: ——,  tail: Jamie XX }
//
//  3) { value: '1. Ada - At The Gate', next: '2. Jamie XX - Gosh' }      { head: Ada, tail: —— }
//     { value: '2. Jamie XX - Gosh', next: '3. Four Tet - Kool FM' }     { head: ——,  tail: —— }
//     { value: '3. Four Tet - Kool FM', next: null }                     { head: ——,  tail: Four Tet }
//
//  4) { value: '1.Ada - At The Gate', next: '2. Jamie XX - Gosh' }       { head: Ada, tail: —— }
//     { value: '2. Jamie XX - Gosh', next: '3. Four Tet - Kool FM' }     { head: ——,  tail: —— }
//     { value: '3. Four Tet - Kool FM', next: '4. Autechre - Leterel' }  { head: ——,  tail: —— }
//     { value: '4. Autechre - Leterel', next: null }                     { head: ——,  tail: Autechre }


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(value) {
    const node = { value, next: null };   // { value: value, next: null }
    if (this.head === null) {             // first item passed
      this.head = node;                   // Object.head = { value: 1. Ada - At The Gate, next: null }
      this.tail = node;                   // Object.tail = { value: 1. Ada - At The Gate, next: null }
    } else if (this.head.next === null) { // second item passed
      this.tail = node;                   // Object.tail = { value: 2. Jamie XX - Gosh, next: null }
      this.head.next = node;              // Object.head.next = { value: 2. Jamie XX - Gosh, next: null }
    } else {                              // and so on...
      this.tail.next = node;              // Object.tail.next = { value: 3. Four Tet - Kool FM, next: null }
      this.tail = node;                   // Object.tail = { value: 3. Four Tet - Kool FM, next: null
    }
    // console.log(`head: ${this.head.value}`)
    // console.log(`tail: ${this.tail.value}`)
  }
  removeHead() {
    if (this.head) {
      const temp = this.head.value;              // set temp to current Object.head.value
      this.head = this.head.next;                // set Object.head to the value of Object.head.next
      // console.log(`removeHead():  ${temp}`);     // return temp
      return temp;
    }
  }
  contains(value) {
    let current = this.head;                     // current = Object.head = { value: value, next: null }
    while (current) {                            // while loop
      if (current.value === value) return true;  // if Object.head.value === value
      current = current.next;                    // break the while loop
    }
    return false;                                // else false
  }
}

module.exports = LinkedList;

// const newObj = new LinkedList();
// newObj.addToTail('1. Ada - At The Gate');
// newObj.addToTail('2. Jamie XX - Gosh');
// newObj.addToTail('3. Four Tet - Kool FM');
// newObj.addToTail('4. Autechre - Leterel');
// newObj.addToTail('5. Venetian Snares - Öngyilkos Vasárnap');
// newObj.removeHead();
// newObj.removeHead();
// newObj.removeHead();
// newObj.contains('1. Ada - At The Gate');
// newObj.contains('2. Jamie XX - Gosh');
