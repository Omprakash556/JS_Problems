// Check if command-line argument is provided
if (process.argv.length < 3) {
    console.log("Usage: node PowersOfTwo.js <n>");
    process.exit(1);
}

let n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer for n.");
    process.exit(1);
}

console.log(`Table of powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
