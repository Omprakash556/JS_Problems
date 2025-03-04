// Check if command-line arguments are provided
if (process.argv.length < 4) {
    console.log("Usage: node PrimeRange.js <start> <end>");
    process.exit(1);
}

let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);

// Validate the input
if (isNaN(start) || isNaN(end) || start < 2 || end < 2 || start > end) {
    console.log("Please enter valid integers (≥ 2) where start ≤ end.");
    process.exit(1);
}

// Function to check if a number is prime
function isPrime(n) {
    if (n === 2) return true; // 2 is the only even prime number
    if (n % 2 === 0) return false; // Eliminate even numbers

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Find and print prime numbers in the range
console.log(`Prime numbers between ${start} and ${end}:`);
for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
        process.stdout.write(num + " "); // Print on the same line
    }
}
console.log(); // New line for better output formatting
