/*
Convert a string to spinal case. Spinal case is 
all-lowercase-words-joined-by-dashes.
*/


function spinalCase(str) {
	let regex = /-|_| |(?=[A-Z])/;
	return str.split(regex).join("-").toLowerCase();
}

console.log(spinalCase("AllThe-small Things"));