const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Think of a number between 1 and 100, and I'll guess it!");

let low = 1, high = 100;

function findMagicNumber() {
    if (low > high) {
        console.log("Something went wrong. Please restart.");
        rl.close();
        return;
    }

    let mid = Math.floor((low + high) / 2);

    rl.question(`Is your number ${mid}? (yes/higher/lower): `, (answer) => {
        answer = answer.toLowerCase();

        if (answer === "yes") {
            console.log(`Yay! The magic number is ${mid}.`);
            rl.close();
        } else if (answer === "higher") {
            low = mid + 1;
            findMagicNumber();
        } else if (answer === "lower") {
            high = mid - 1;
            findMagicNumber();
        } else {
            console.log("Invalid response. Please reply with 'yes', 'higher', or 'lower'.");
            findMagicNumber();
        }
    });
}

// Start the guessing process
findMagicNumber();
