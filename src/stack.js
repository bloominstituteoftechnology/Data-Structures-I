class Stack {
	constructor() {
		this.contents = [];
	}

	add(item) {
		this.contents.push(item);
	}

	remove(item) {
		return this.contents.pop();
	}

	get size() {
		return this.contents.length;
	}
}

module.exports = Stack;