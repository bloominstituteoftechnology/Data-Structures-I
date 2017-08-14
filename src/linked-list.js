class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  addToTail(data) {
    const newNode = {
      value: data,
      next: null,
    };
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head.next === null) {
      this.tail = newNode;
      this.head.next = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  removeHead(data) {
    const head = this.head.value;
    this.head = this.head.next;
    return head;
  }
  contains(thing) {
    if (this.head === null) {
      return false;
    }
    const searchLinkList = (listOfStuff) => {
      if (listOfStuff.value === thing) return true;
      if (listOfStuff.next === null) return false;
      return searchLinkList(listOfStuff.next);
    };
    return searchLinkList(this.head);
  }
}

module.exports = LinkedList;
