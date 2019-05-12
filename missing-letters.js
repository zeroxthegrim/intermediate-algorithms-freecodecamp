/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  let missingNum;
  let numArray = [];
  for (let i = 0; i < str.length; i++) {
  	numArray.push(str.charCodeAt(i));
  }
  for (let i = 1; i < numArray.length; i++) {
  	if (numArray[i] != numArray[i-1] + 1) {
  		missingNum = numArray[i] - 1;
  	}
  }
  if (missingNum) {
  	return String.fromCharCode(missingNum);
  } else {
  	return undefined;
  }
}

fearNotLetter("abce");