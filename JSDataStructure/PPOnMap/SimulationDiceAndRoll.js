function rollDie() {
    return Math.floor(Math.random() * 6) + 1;  // Random number from 1 to 6
}

function simulateDiceRolls() {
    let diceMap = new Map();
    
    // Initialize counts for numbers 1-6
    for (let i = 1; i <= 6; i++) {
        diceMap.set(i, 0);
    }

    let maxCount = 10;
    let reached = false;

    while (!reached) {
        let roll = rollDie();
        diceMap.set(roll, diceMap.get(roll) + 1);

        // Stop when any number reaches 10 times
        if (diceMap.get(roll) === maxCount) {
            reached = true;
        }
    }

    // Convert Map to an array for analysis
    let diceArray = Array.from(diceMap.entries());

    // Find the max and min rolled numbers
    let maxRolled = diceArray.reduce((a, b) => (a[1] > b[1] ? a : b));
    let minRolled = diceArray.reduce((a, b) => (a[1] < b[1] ? a : b));

    console.log("Final Dice Rolls Count:", Object.fromEntries(diceMap));
    console.log(`Number rolled the most (${maxRolled[1]} times):`, maxRolled[0]);
    console.log(`Number rolled the least (${minRolled[1]} times):`, minRolled[0]);
}

// Run the simulation
simulateDiceRolls();
