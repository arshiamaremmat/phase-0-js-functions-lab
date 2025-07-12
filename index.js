// Function 1: calculateTax
function calculateTax(amount) {
    return amount * .1;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) {
    return text.toUpperCase();
}

// Function 3: findMaxium
function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

// Function 4: isPalindrome
function isPalindrome(word) {
  const cleaned = word.toLowerCase();
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discount = originalPrice * (discountPercentage / 100);
  return originalPrice - discount;
}

console.log(calculateTax(200)); // 20
console.log(convertToUpperCase("hello")); // "HELLO"
console.log(findMaximum(10, 25)); // 25
console.log(isPalindrome("Racecar")); // true
console.log(calculateDiscountedPrice(100, 20)); // 80
// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };