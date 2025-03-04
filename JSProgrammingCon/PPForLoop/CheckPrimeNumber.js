// Check if command-line argument is provided
if (process.argv.length < 3) {
    console.log("Usage: node PrimeCheck.js <number>");
    process.exit(1);
}

let num = parseInt(process.argv[2]);

if (isNaN(num) || num < 2) {
    console.log("Please enter a valid integer greater than or equal to 2.");
    process.exit(1);
}

function isPrime(n) {
    if (n === 2) return true; 
    if (n % 2 === 0) return false; 

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Check and print the result
if (isPrime(num)) {
    console.log(`${num} is a Prime Number.`);
} else {
    console.log(`${num} is NOT a Prime Number.`);
}
