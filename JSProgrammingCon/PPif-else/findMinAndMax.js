function findMinMax(a, b, c) {
    let result1 = a + b * c;
    let result2 = a % b + c;
    let result3 = c + a / b;
    let result4 = a * b + c;

    let max = Math.max(result1, result2, result3, result4);
    let min = Math.min(result1, result2, result3, result4);

    console.log("Results:");
    console.log("1. a + b * c =", result1);
    console.log("2. a % b + c =", result2);
    console.log("3. c + a / b =", result3);
    console.log("4. a * b + c =", result4);
    console.log("Maximum value:", max);
    console.log("Minimum value:", min);
}

// Get input from command-line arguments
const args = process.argv.slice(2);
const a = parseInt(args[0], 10);
const b = parseInt(args[1], 10);
const c = parseInt(args[2], 10);

// Validate input
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Invalid input. Please enter three numbers.");
} else {
    findMinMax(a, b, c);
}
