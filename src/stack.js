/*
  1. Add a constructor with a storage structure; there are multiple options you could use for this
  2. Add a size getter that returns the number of items the stack is storing
  3. Add a `push` method that accepts an item as input and adds it to the storage structure
  4. Add a `pop` method that removes the most recently-added item to the stack
*/

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // add item to end of list
  push(item) {
    const newNode = {
      next: null,
      value: item,
    };

    // Check if the list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  // remove item from end of list
  pop() {
    // Checks if the list is empty
    if (this.head === null) return;
    // Check if single item list
    if (this.head.next === null) {
      const node = this.head;
      this.head = null;
      this.tail = null;
      return node.value;
    }
    // remove last item otherwise

    // if the size of the list is 3, this should go to the second it
    let size = this.size - 1;

    let current = this.head;
    let previous = this.head;
    while (size > 0) {
      size--;
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.tail = previous;

    if (this.head.next === null) this.tail = this.head;

    return current.value;
  }

  get size() {
    const counter = () => {
      // Check if the list is empty
      if (this.head === null) return 0;

      let count = 0;

      // keeps track of the current item, starting at the head
      let current = this.head;

      // while loop to increase count as long as current item exists
      while (current !== null) {
        count++;

        // updates current to be the next node
        current = current.next;
      }
      return count;
    };
    return counter();
  }
}

module.exports = Stack;

/* Implementation with Arrays
class Stack {
  constructor() {
    this.storage = [];
  }

  push(item) {
    return this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }

  get size() {
    return this.storage.length;
  }
}
*/
