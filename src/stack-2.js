// This stack is implemented using an ES6 WeakMap for storage:

let Stack = (() => {
  const sKey = {};
  const items = new WeakMap();
  
  class Stack {
    constructor() {
      items.set(sKey, []);
    }

    push(element) {
      let stack = items.get(sKey);
      stack.push(element);
    }

    pop() {
      let stack = items.get(sKey);
      return stack.pop();
    }

    peek() {
      let stack = items.get(sKey);
      return stack[stack.length - 1];
    }

    clear() {
      items.set(sKey, []);
    }

    size() {
      return items.get(sKey).length;
    }
  
  }

  return Stack;
})();

let stack = new Stack()
stack.push('value')

module.exports = Stack
