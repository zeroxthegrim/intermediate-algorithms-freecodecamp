/*
Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.
*/


function sumPrimes(num) {
   let finalArr = [];
   for (let i = 2; i <= num; i++) {
      for (let j = 2; j <= i; j++) {
         if (i % j == 0) {
            if (i == j) {
               finalArr.push(i);
            } else break;
         }
      }
   }
   return finalArr.reduce((a, b) => a + b, 0);
}
 
console.log(sumPrimes(10));