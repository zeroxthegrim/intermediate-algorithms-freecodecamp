// You will be provided with an initial array 
//(the first argument in the destroyer function), 
// followed by one or more arguments. 
// Remove all elements from the initial array that are 
// of the same value as these arguments.




function destroyer(arr) {
	let argArr = [];
	for (let i = 1; i < arguments.length; i++) {
		argArr.push(arguments[i]);
	}
	return arr.filter(item => {
		return argArr.indexOf(item) == -1;
	});
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));