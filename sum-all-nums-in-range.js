/*We'll pass you an array of two numbers.
Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/



function sumAll(arr) {
  let allNums = []
  let sortedArr = arr.sort((a, b) => a - b);
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    allNums.push(i);
  }
  return allNums.reduce((a, b) => a + b, 0);
}

console.log(sumAll([1, 4]));