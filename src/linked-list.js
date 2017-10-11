/* eslint-disable class-methods-use-this */
class Node {
  constructor({ value, next = null, prev = null }) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    // Do not modify anything inside of the constructor
  }
  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    const node = new Node({ value });
    if (this.head === null && this.tail === null) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
      this.tail.next = null;
      this.length++;
    }
  }
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    if (this.head !== null) {
      const value = this.head.value;
      if (this.head.next === null) {
        this.head = null;
        this.tail = null;
        this.length--;
        return value;
      }
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return value;
    }
  }
  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {
    if (this.head === null) {
      return false;
    }
    if (this.head.next === null) {
      return this.head === value;
    }

    let next = this.head;
    let found = false;

    while (next !== null) {
      if (next.value === value) {
        next = null;
        found = true;
        break;
      }
      next = next.next;
    }
    return found;
  }
}

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     // Do not modify anything inside of the constructor
//   }
//   // Wraps the given value in a node object and adds the node to the tail of the list
//   // If the list is empty, the new element is considered the tail as well as the head
//   // If there is one element in the list before the new element is added, the new element becomes the tail of the list
//   addToTail(value) {
//     const node = {
//       value,
//       next: null
//     };
//     if (this.head === null) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//   }
//   // Removes the current head node from the list, replacing it with the next element in the list
//   // Returns the value of the removed node
//   removeHead() {
//     if (this.head !== null) {
//       if (this.head.next === null) {
//         this.tail = null;
//       }
//       const value = this.head.value;
//       this.head = this.head.next;
//       return value;
//     }
//   }
//   // Checks the linked list for the given value
//   // Returns true if the the value is found in the list, false otherwise
//   contains(value) {
//     if (this.head === null) {
//       return false;
//     }
//     if (this.head.next === null) {
//       return this.head === value;
//     }

//     let next = this.head;
//     let found = false;

//     while (next !== null) {
//       if (next.value === value) {
//         next = null;
//         found = true;
//         break;
//       }
//       next = next.next;
//     }
//     return found;
//   }
// }

module.exports = LinkedList;
