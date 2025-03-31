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

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForInputs() {
  readline.question("Enter a floating point number (x): ", (x) => {
    readline.question("Enter a non-negative integer (n): ", (n) => {
      x = parseFloat(x);
      n = parseInt(n);

      // Validate that n is a non-negative integer
      if (!Number.isInteger(n) || n < 0) {
        console.log("Error: n must be a non-negative whole number (0, 1, 2, etc.)");
        askForInputs();
        return;
      }

      let result = power(x, n);
      console.log(`${x} to the power of ${n} is: ${result}`);

      readline.question("Would you like to calculate another power? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
          askForInputs();
        } else {
          readline.close();
        }
      });
    });
  });
}

// Start the program
askForInputs();
