function numberToWord(num) {
    if (num === 0) return "Zero";
    else if (num === 1) return "One";
    else if (num === 2) return "Two";
    else if (num === 3) return "Three";
    else if (num === 4) return "Four";
    else if (num === 5) return "Five";
    else if (num === 6) return "Six";
    else if (num === 7) return "Seven";
    else if (num === 8) return "Eight";
    else if (num === 9) return "Nine";
    else return " Please enter a single-digit number.";
}

// Get input from command-line arguments
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

// Validate and print the result
if (isNaN(num) || num < 0 || num > 9) {
    console.log("Invalid input. Please enter a single-digit number.");
} else {
    console.log(numberToWord(num));
}
