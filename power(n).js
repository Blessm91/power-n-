function power(x, n) {
  // Base case: anything raised to 0 is 1
  if (n === 0) {
    return 1;
  }

  // Recursive case
  // For even numbers, we can optimize by using x^n = (x^(n/2))^2
  if (n % 2 === 0) {
    let half = power(x, n / 2);
    return half * half;
  } else {
    // For odd numbers, x^n = x * x^(n-1)
    return x * power(x, n - 1);
  }
}

// Get user input
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a floating point number (x): ", (x) => {
  readline.question("Enter a non-negative integer (n): ", (n) => {
    // Convert inputs to appropriate types
    x = parseFloat(x);
    n = parseInt(n);

    // Calculate and display result
    let result = power(x, n);
    console.log(`${x} to the power of ${n} is: ${result}`);

    readline.close();
  });
});
