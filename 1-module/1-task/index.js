/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // ваш код...
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i
  }

  return factorial;
}
