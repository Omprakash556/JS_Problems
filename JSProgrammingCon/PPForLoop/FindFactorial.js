// Check if command-line argument is provided
if (process.argv.length < 3) {
    console.log("Usage: node Factorial.js <number>");
    process.exit(1);
}

let n = parseInt(process.argv[2]);

// Validate the input
if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
    process.exit(1);
}

// Function to compute factorial
function factorial(num) {
    let fact = 1;
    for (let i = 2; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

// Compute and print factorial
console.log(`Factorial of ${n} is: ${factorial(n)}`);
