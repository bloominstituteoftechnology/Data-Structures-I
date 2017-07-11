class Node {
  constructor (element) {
    this.value= element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  addToTail(element){
    //take previous tail, add pointer to new tail
	//is there a head? No----> make this the head, Yes -----> extend the tail?
    const thingToAdd = new Node(element);
    let checkNode = this.head;
    if(!checkNode) {
      this.head = thingToAdd;
      this.tail = this.head;
      return thingToAdd;
    } 
    while(checkNode.next) {
      checkNode = checkNode.next;
    }  
    checkNode.next = thingToAdd;
    this.tail = checkNode.next;
    console.log(this.tail);
    return this.tail;
  }
//	else if (this.tail === null) {
//      this.head.next = thingToAdd;
//      this.tail = thingToAdd;
//    } else {
//      this.tail.next = thingToAdd;
//      this.tail = thingToAdd;
//    }
//  }
  removeHead(){
    //take head, remove it, make its pointer the next head, return the removed head
    const nodeBeingRemoved = this.head;
    this.head = this.head.next;
    return nodeBeingRemoved;
  } 
  contains(item){
    //takes item as argument, traverses list to find item, return true if it exists, false otherwise
    let currentNode = this.head;
    while (currentNode.next !== null) {
      if (currentNode.value === item) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = LinkedList;
