const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find prime factors and store them in an array
function findPrimeFactors(n) {
    let factors = [];

    // Divide n by 2 until it becomes odd
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }

    // Check for odd factors from 3 to √n
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }

    // If n is still greater than 2, it's a prime factor
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Taking user input
rl.question("Enter a number: ", (input) => {
    let num = parseInt(input);
    
    if (isNaN(num) || num < 1) {
        console.log("Please enter a valid positive number.");
    } else {
        let primeFactors = findPrimeFactors(num);
        console.log(`Prime factors of ${num}:`, primeFactors);
    }

    rl.close();
});
