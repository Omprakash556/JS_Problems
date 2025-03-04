function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1; // Generates a month between 1-12
}

function generateBirthdays() {
    let birthMonthMap = new Map();

    // Initialize map with empty arrays for each month
    for (let i = 1; i <= 12; i++) {
        birthMonthMap.set(i, []);
    }

    // Generate birth months for 50 individuals
    for (let i = 1; i <= 50; i++) {
        let month = getRandomMonth();
        birthMonthMap.get(month).push(i); // Store individual number in corresponding month
    }

    return birthMonthMap;
}

function printBirthdays(birthMonthMap) {
    console.log("Birth Month Distribution:");
    for (let [month, individuals] of birthMonthMap.entries()) {
        console.log(`Month ${month}:`, individuals.length > 0 ? individuals : "No Birthdays");
    }
}

// Run the program
let birthMonthMap = generateBirthdays();
printBirthdays(birthMonthMap);
