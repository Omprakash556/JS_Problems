function getPlaceValue(num) {
    if (num === 1) return "Unit";
    else if (num === 10) return "Ten";
    else if (num === 100) return "Hundred";
    else if (num === 1000) return "Thousand";
    else if (num === 10000) return "Ten Thousand";
    else if (num === 100000) return "Lakh";
    else return "Invalid input. Please enter a valid place value (1, 10, 100, 1000, etc.).";
}

// Get input from command-line arguments
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

// Validate and print the result
if (isNaN(num) || num < 1) {
    console.log("Invalid input. Please enter a valid place value (1, 10, 100, 1000, etc.).");
} else {
    console.log(getPlaceValue(num));
}
