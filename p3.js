// Statement:
// The prime factors of 13195 are 5, 7, 13 and 29
// What is the largest prime factor of the number 600851475143?

let n = 600851475143;
let largestPrime = -1;

// 2 won't be the largest prime factor since n is odd

// we can start checking from 3
for (let i = 3; i <= Math.sqrt(n); i += 2) { 
    while (n % i === 0) {
        largestPrime = i;
        n = n / i; //reduce n by i to make checks faster by reducing problem size
    }
}

// If n is still greater than 2,
//  then n itself is a prime factor
// because any composite number would have been reduced by previous divisions
if (n > 2) {
    largestPrime = n;
}

console.log(largestPrime);
