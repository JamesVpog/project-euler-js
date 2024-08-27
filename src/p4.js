// Statement:
//  palindromic number reads the same both ways. The largest palindrome made 
// from the product of two 2-digit numbers is 9009 = 91 x 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// check if number is palindrome 
// max range of product of 2, 3 digit numbers is 100*100 to 999 * 999 
// which is 10,000 to 998,001
function numPalindrome(originalNum) {
    n = originalNum
    reversedNum = 0
    while (n > 0) {
        // extract the last digit
        digit = n % 10
        // move to next tens spot and add it to reversed num
        reversedNum = (reversedNum * 10) + digit
        n = Math.floor(n / 10)
    }
    return reversedNum === originalNum
}

// console.log(numPalindrome(9009))

res = 0
for (let i = 100; i < 1000; i ++) {
    for (let j = 100; j < 1000; j++) {
        if (numPalindrome(i * j)) {
            num = i * j
            res = Math.max(num, res)
        }
    }
}

console.log(res)