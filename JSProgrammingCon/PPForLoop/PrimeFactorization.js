// Check if command-line argument is provided
if (process.argv.length < 3) {
    console.log("Usage: node PrimeFactors.js <number>");
    process.exit(1);
}

let N = parseInt(process.argv[2]);

// Validate the input
if (isNaN(N) || N <= 1) {
    console.log("Please enter a valid integer greater than 1.");
    process.exit(1);
}

// Function to compute prime factors
function primeFactors(n) {
    let factors = [];

    // Divide by 2 until odd
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    // Check odd numbers from 3 to sqrt(N)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    // If N is still prime and > 2, add it to factors
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Compute and print prime factors
console.log(`Prime factors of ${N}:`, primeFactors(N).join(" × "));
