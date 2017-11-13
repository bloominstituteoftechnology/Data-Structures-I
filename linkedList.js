class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }
    enqueue(value) {
      const newNode = {
          value, // es6 this means value : value
          next : null,
      }
      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
    }
    dequeue () {
        if (!this.head) return null;
        if (!this.head.next) this.tail = null;

        const firstNode = this.head;
        this.head = this.head.next;
        return firstNode;

    }
    get size() {
        return this.length;
    }
}
const myList = new LinkedList;
myList.enqueue(1);
myList.enqueue(2);
myList.enqueue(3);
myList.enqueue(4);
myList.enqueue(5);

console.log(myList);
console.log(myList.size());
console.log(myList.dequeue());
console.log(myList);