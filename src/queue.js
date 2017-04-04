class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(item) {
		this.items.unshift(item);
	}

	dequeue(item) {
		return this.items.pop();
	}
	
	get size() {
		return this.items.length;
	}
}

module.exports = Queue;