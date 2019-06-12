/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly
divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  let sortedArr = arr.sort((a, b) => a > b ? 1 : -1);
  let numsInRange = [];
  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    numsInRange.push(i);
  }
  let finalNum = numsInRange[numsInRange.length - 1];
  function isDivisible(num) {
   return finalNum % num == 0;
  }
  while (true) {
     if (numsInRange.every(isDivisible)) {
        return finalNum;
     } else finalNum += numsInRange[numsInRange.length - 1];
  }
}
 
 
console.log(smallestCommons([5,1]));