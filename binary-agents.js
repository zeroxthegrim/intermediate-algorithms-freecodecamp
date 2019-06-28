/*
Return an English translated sentence of the passed binary string.
The binary string will be space separated.
*/

function binaryAgent(str) {
    const binaries = {
       7: 1,
       6: 2,
       5: 4,
       4: 8,
       3: 16,
       2: 32,
       1: 64,
       0: 128
    }
    
    let binaryArr = str.split(" ");
    let numArr = [];
 
    binaryArr.forEach(item => {
       let nonBinary = 0;
       for (let i = 0; i < item.length; i++) {
          if (item[i] == "1") {
             nonBinary += binaries[i];
          }
       }
       numArr.push(nonBinary);
    });
    
    return numArr
       .map(item => {
          return String.fromCharCode(item);
       })
       .join("");
}
  
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));