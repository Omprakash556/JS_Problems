// Check if command-line argument is provided
if (process.argv.length < 3) {
    console.log("Usage: node HarmonicNumber.js <n>");
    process.exit(1);
}

let n = parseInt(process.argv[2]);

// Validate the input
if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer for n.");
    process.exit(1);
}

let harmonic = 0;

// Calculate the nth harmonic number
for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}

console.log(`The ${n}th Harmonic Number is: ${harmonic.toFixed(6)}`);
