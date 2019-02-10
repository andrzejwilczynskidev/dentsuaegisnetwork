Array.prototype.duplicate = function() {
	return this.concat(this);
}

console.log([1, 2, 3, 4].duplicate());