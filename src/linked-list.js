class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(val) {
    const obj = {
      next: null,
      value: val,
    };
    if (this.head === null) {
      this.head = obj;
      this.tail = obj;
      return;
    }
    if (this.head.next === null) {
      this.head.next = obj;
      this.tail = obj;
      return;
    }
    this.tail.next = obj;
    this.tail = obj;
  }
  removeHead() {
    const oldObj = this.head.value;
    this.head = this.head.next;
    return oldObj;
  }
  contains(val) {
    const searchList = (element) => {
      if (this.head === null) {
        return false;
      }
      if (element.value === val) {
        return true;
      }
      if (element.next === null) {
        return false;
      }
      return searchList(element.next);
    };
    return searchList(this.head);
  }
}
module.exports = LinkedList;
