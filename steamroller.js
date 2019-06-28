/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    let finalArr = [];
    function recursiveOne(item) {
       for (let i = 0; i < item.length; i++) {
          if (!Array.isArray(item[i])) {
             finalArr.push(item[i]);
          } else {
             recursiveOne(item[i]);
          }
       }
    }
    recursiveOne(arr);
    return finalArr;
 }
 
 steamrollArray([1, [2], [3, [[4]]]]);