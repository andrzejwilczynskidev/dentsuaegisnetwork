Array.prototype.oddOnly = function() {
	let temp = [];
	this.forEach(function(item, index) {
		if(item % 2) 
			temp.push(item);		
	});
	return temp;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9].oddOnly());