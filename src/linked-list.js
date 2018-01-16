class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  addToTail(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;

      return newNode;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
    this.tail = current.next;
    this.length++;
    return newNode;
  }

  get(input) {
    let current = this.head;
    while (current !== null) {
      if (current.value === input) {
        return current;
      }
      current = current.next;
    }
    return current;
  }

  contains(input) {
    if (this.get(input) === null) {
      return false;
    }
    return true;
  }

  removeNodeByPosition(position) {
    let currentNode = this.head;
    const length = this.length;
    let count = 0;
    const message = { failure: 'Non-Existent Node' };
    let beforeNodeToDelete = null;
    let nodeToDelete = null;
    let deletedNode = null;


    if (position < 0 || position > length) {
      throw new Error(message.failure);
    }

    if (position === 1) {
      this.head = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      this.length--;

      return deletedNode;
    }

    while (count < position) {
      beforeNodeToDelete = currentNode;
      nodeToDelete = currentNode.next;
      count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    this.length = this.length - 1;

    return deletedNode;
  }

  removeHead() {
    return this.removeNodeByPosition(1).value;
  }
}

module.exports = LinkedList;
