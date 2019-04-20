// Compare two arrays and return a new array with any 
// items only found in one of the two given arrays, 
// but not both. In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  let combinedArr = arr1.concat(arr2);
  let uniqueArr = [];
  combinedArr.forEach(item => {
    if (uniqueArr.indexOf(item) == -1) {
      uniqueArr.push(item);
    }
  });
  return uniqueArr.filter(item => {
    return arr1.indexOf(item) == -1 || arr2.indexOf(item) == -1;
  });
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));