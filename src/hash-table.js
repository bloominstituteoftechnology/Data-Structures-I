class HashTable {
	constructor() {
		this.limit = 8;
		this.storage = new LimitedArray(this.limit);
	}
}

module.exports = HashTable;