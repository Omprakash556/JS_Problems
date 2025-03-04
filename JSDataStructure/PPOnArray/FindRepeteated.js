function findRepeatedDigits() {
    let repeatedDigits = [];

    for (let i = 10; i <= 100; i++) {
        let tens = Math.floor(i / 10);
        let ones = i % 10;

        if (tens === ones) {
            repeatedDigits.push(i);
        }
    }

    return repeatedDigits;
}

// Main Execution
let result = findRepeatedDigits();
console.log("Numbers with repeated digits:", result);
